import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import './css/Contact.css';

function Contact() {
  // State to handle form input
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  // State to handle submission status (success or error)
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the form data to be sent to Web3Forms
    const formPayload = new FormData();
    formPayload.append('access_key', '2a3fb102-e3df-4b0a-9d36-3db0edcb9ffa');
    formPayload.append('subject', 'New Submission from Web3Forms');
    formPayload.append('name', formData.name);
    formPayload.append('email', formData.email);
    formPayload.append('phone', formData.phone);
    formPayload.append('message', formData.message);

    try {
      console.log('Submitting form data...', formData); // Debugging: Check data

      // Make the POST request to Web3Forms API
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formPayload,
      });

      if (response.ok) {
        setIsSubmitted(true); // Show thank you message
        setError(''); // Reset error message if submission was successful
        setFormData({ name: '', email: '', phone: '', message: '' }); // Reset form
      } else {
        throw new Error('Form submission failed');
      }
    } catch (err) {
      console.error(err); // Log error for debugging
      setError('There was an error submitting your form. Please try again.');
      setIsSubmitted(false);
    }
  };

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
            {isSubmitted ? (
              <p className="text-center text-green-500">Thank you for your message! We'll get back to you soon.</p>
            ) : (
              <form onSubmit={handleSubmit}>
                {/* Hidden fields for Web3Forms API */}
                <input type="hidden" name="access_key" value="2a3fb102-e3df-4b0a-9d36-3db0edcb9ffa" />
                <input type="hidden" name="subject" value="New Submission from Web3Forms" />
                <input type="checkbox" name="botcheck" style={{ display: 'none' }} />

                <div className="mb-6">
                  <label htmlFor="name" className="block mb-2 text-sm">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="John Doe"
                    required
                    className="form-input"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="email" className="block mb-2 text-sm">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="you@company.com"
                    required
                    className="form-input"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="phone" className="text-sm">Phone Number</label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="+1 (555) 1234-567"
                    required
                    className="form-input"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block mb-2 text-sm">Your Message</label>
                  <textarea
                    rows="5"
                    name="message"
                    id="message"
                    placeholder="Your Message"
                    required
                    className="form-input"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                {error && <p className="text-red-500 text-center">{error}</p>}

                <div className="mb-6">
                  <button type="submit" className="submit-button">
                    Send Message
                  </button>
                </div>
              </form>
            )}
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
