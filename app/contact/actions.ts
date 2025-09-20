"use server";

import { redirect } from "next/navigation";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitContactForm(formData: FormData) {
  try {
    // Check if Resend API key is available
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not set");
      throw new Error("Email service not configured - API key missing");
    }

    // Extract form data
    const fullName = formData.get("fullName") as string;
    const email = formData.get("email") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    // Validate required fields
    if (!fullName || !email || !subject || !message) {
      throw new Error("All fields are required");
    }

    // Create HTML email template
    const htmlEmail = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff;">
        <h1 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px; margin-bottom: 20px;">
          New Contact Form Submission
        </h1>
        
        <div style="margin-top: 20px;">
          <h2 style="color: #555; margin-bottom: 15px; font-size: 18px;">Contact Details:</h2>
          
          <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin-bottom: 20px; border: 1px solid #e9ecef;">
            <p style="margin: 8px 0; font-size: 14px;"><strong>Name:</strong> ${fullName}</p>
            <p style="margin: 8px 0; font-size: 14px;"><strong>Email:</strong> ${email}</p>
            <p style="margin: 8px 0; font-size: 14px;"><strong>Subject:</strong> ${subject}</p>
          </div>
          
          <h3 style="color: #555; margin-bottom: 10px; font-size: 16px;">Message:</h3>
          <div style="background-color: #ffffff; border: 1px solid #dee2e6; padding: 15px; border-radius: 5px; white-space: pre-wrap; font-size: 14px; line-height: 1.5;">
            ${message.replace(/\n/g, "<br>")}
          </div>
          
          <div style="margin-top: 20px; padding: 10px; background-color: #e9ecef; border-radius: 5px; font-size: 12px; color: #6c757d;">
            <p style="margin: 5px 0;">This email was sent from your portfolio contact form.</p>
            <p style="margin: 5px 0;">You can reply directly to this email to respond to ${fullName}.</p>
          </div>
        </div>
      </div>
    `;

    // Send email using Resend
    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["mohamedermili.dev@gmail.com"],
      subject: `Portfolio Contact: ${subject}`,
      html: htmlEmail,
      replyTo: email,
    });

    if (error) {
      throw new Error(
        `Failed to send email: ${error.message || "Unknown error"}`
      );
    }
    // Redirect to success page on successful submission
    redirect("/contact/success");
  } catch (error) {
    // Re-throw the original error if it's already a meaningful error message
    if (
      error instanceof Error &&
      error.message.includes("Email service not configured")
    ) {
      throw error;
    }
    if (
      error instanceof Error &&
      error.message.includes("All fields are required")
    ) {
      throw error;
    }
    if (
      error instanceof Error &&
      error.message.includes("Failed to send email")
    ) {
      throw error;
    }

    // For redirect errors, don't treat them as failures
    if (error instanceof Error && error.message.includes("NEXT_REDIRECT")) {
      throw error; // Re-throw redirect errors
    }

    // For any other errors, provide a generic message
    throw new Error("Failed to send message. Please try again.");
  }
}
