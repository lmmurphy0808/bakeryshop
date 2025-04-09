import React from 'react';
import Navigation from '../components/Navigation';
import './css/Contact.css';

function Contact() {
  return (
    <main>
      <div className="main-header">
        <Navigation />
      </div>

      <div className="contact-form-wrapper">
        <div className="form-card">
          <div className="text-center">
            <h1 className="my-3 text-3xl font-semibold">Contact Us</h1>
            <p>Fill up the form below to send us a message.</p>
          </div>
          <div className="m-7">
            <form action="https://api.web3forms.com/submit" method="POST" id="form">
              <input type="hidden" name="access_key" value="2a3fb102-e3df-4b0a-9d36-3db0edcb9ffa" />
              <input type="hidden" name="subject" value="New Submission from Web3Forms" />
              <input type="checkbox" name="botcheck" style={{ display: 'none' }} />

              <div className="mb-6">
                <label htmlFor="name" className="block mb-2 text-sm">Full Name</label>
                <input type="text" name="name" id="name" placeholder="John Doe" required className="form-input" />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-sm">Email Address</label>
                <input type="email" name="email" id="email" placeholder="you@company.com" required className="form-input" />
              </div>

              <div className="mb-6">
                <label htmlFor="phone" className="text-sm">Phone Number</label>
                <input type="text" name="phone" id="phone" placeholder="+1 (555) 1234-567" required className="form-input" />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 text-sm">Your Message</label>
                <textarea rows="5" name="message" id="message" placeholder="Your Message" required className="form-input"></textarea>
              </div>

              <div className="mb-6">
                <button type="submit" className="submit-button">
                  Send Message
                </button>
              </div>

              <p className="text-base text-center" id="result"></p>
            </form>
          </div>
        </div>
      </div>

      <footer>
        <p>The Baking Haven</p>
      </footer>
    </main>
  );
}

export default Contact;
