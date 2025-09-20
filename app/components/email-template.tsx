import * as React from 'react';

interface EmailTemplateProps {
 fullName: string;
 email: string;
 subject: string;
 message: string;
}

export function EmailTemplate({ fullName, email, subject, message }: EmailTemplateProps) {
 return React.createElement('div', {
  style: {
   fontFamily: 'Arial, sans-serif',
   maxWidth: '600px',
   margin: '0 auto',
   padding: '20px',
   backgroundColor: '#ffffff'
  }
 }, [
  React.createElement('h1', {
   key: 'title',
   style: {
    color: '#333',
    borderBottom: '2px solid #007bff',
    paddingBottom: '10px',
    marginBottom: '20px'
   }
  }, 'New Contact Form Submission'),

  React.createElement('div', {
   key: 'content',
   style: { marginTop: '20px' }
  }, [
   React.createElement('h2', {
    key: 'subtitle',
    style: {
     color: '#555',
     marginBottom: '15px',
     fontSize: '18px'
    }
   }, 'Contact Details:'),

   React.createElement('div', {
    key: 'details',
    style: {
     backgroundColor: '#f8f9fa',
     padding: '15px',
     borderRadius: '5px',
     marginBottom: '20px',
     border: '1px solid #e9ecef'
    }
   }, [
    React.createElement('p', {
     key: 'name',
     style: { margin: '8px 0', fontSize: '14px' }
    }, React.createElement('strong', null, 'Name: '), fullName),

    React.createElement('p', {
     key: 'email',
     style: { margin: '8px 0', fontSize: '14px' }
    }, React.createElement('strong', null, 'Email: '), email),

    React.createElement('p', {
     key: 'subject',
     style: { margin: '8px 0', fontSize: '14px' }
    }, React.createElement('strong', null, 'Subject: '), subject)
   ]),

   React.createElement('h3', {
    key: 'message-title',
    style: {
     color: '#555',
     marginBottom: '10px',
     fontSize: '16px'
    }
   }, 'Message:'),

   React.createElement('div', {
    key: 'message-content',
    style: {
     backgroundColor: '#ffffff',
     border: '1px solid #dee2e6',
     padding: '15px',
     borderRadius: '5px',
     whiteSpace: 'pre-wrap',
     fontSize: '14px',
     lineHeight: '1.5'
    }
   }, message),

   React.createElement('div', {
    key: 'footer',
    style: {
     marginTop: '20px',
     padding: '10px',
     backgroundColor: '#e9ecef',
     borderRadius: '5px',
     fontSize: '12px',
     color: '#6c757d'
    }
   }, [
    React.createElement('p', {
     key: 'footer1',
     style: { margin: '5px 0' }
    }, 'This email was sent from your portfolio contact form.'),

    React.createElement('p', {
     key: 'footer2',
     style: { margin: '5px 0' }
    }, `You can reply directly to this email to respond to ${fullName}.`)
   ])
  ])
 ]);
}