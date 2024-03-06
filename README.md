# React + Vite

Contact Form React Component

This repository contains a React component for a contact form that allows users to submit their information through a web form.

Features:

Dark Mode: Users can toggle between light and dark themes.
Form Validation: Basic form validation ensures that required fields are filled.
Error Handling: Displays error messages for failed form submissions.
Google Apps Script Integration: Uses Google Apps Script as a backend to submit data to Google Sheets.
Installation:

Clone this repository:

Bash
git clone https://github.com/your-username/your-repo-name.git
Use code with caution.
Install dependencies:

Bash
cd your-repo-name
npm install
Use code with caution.
Deployment:

Deploy the React application to your preferred hosting platform (e.g., Netlify, Vercel).

Update the action attribute in the form element within the ContactForm component with the URL of your deployed Google Apps Script that handles form submission (replace the placeholder with the actual URL):

  <form method="post" action="**https://script.google.com/macros/s/AKfycbx_n7v-omFKeNzOvPxWpiqeWlCueDTX4rfPYnNMdJzi84dVo2vwWbwqTAvaLUzifA8O/exec**" className="contact-form">


  
![Alt text](./src/Screenshot.png)

