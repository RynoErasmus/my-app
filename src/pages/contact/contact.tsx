import React from "react";
import "./contact.scss";

// Make Responsive
// Add email send functionality

function Contact() {
  // Contact Fields
  return (
    <div className="contactPage">
      <h1>Contact</h1>

      <div className="contactForm">
        <label>Full Name:</label>
        <input
          type="text"
          placeholder="Enter Your First name and Last name"
          required
        />
        <label>Email:</label>
        <input type="text" placeholder="Enter a valid email address" required />
        <label htmlFor="">Message:</label>
        <textarea
          name="Message"
          id="messageBox"
          placeholder="Enter Your Message"
          required
        ></textarea>

        <button>Submit</button>
      </div>
    </div>
  );
}

export default Contact;
