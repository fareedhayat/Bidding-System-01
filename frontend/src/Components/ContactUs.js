
import React from 'react';
import Header from '../Components/Header';
import background from '../Images/items.jpg';

const ContactUs = () => {
  return (
    <>
      <div 
        className="contact-page" 
        style={{ 
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '100vh',
          padding: '20px',
        }}
      >
        <div className="container mb-5">
          <h2 className="text-center  mb-4 contact-heading">Contact Us</h2>
          <div className="row">
            <div className="col-md-12 mt-5 mb-4">
              <div className="contact-notes">
                <h4>Notes:</h4>
                <p>Please feel free to reach out to us with any questions, concerns, or feedback you may have. We strive to provide the best service possible and appreciate your input!</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="contact-info">
                <h4>Contact Information:</h4>
                <p><strong>Email:</strong> info@example.com</p>
                <p><strong>Phone:</strong> +1 (123) 456-7890</p>
                <p><strong>Address:</strong> 123 Main Street, City, Country</p>
                <p><strong>Office Hours:</strong> Monday - Friday, 9:00 AM - 5:00 PM</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="contact-form">
                <h4>Send us a message:</h4>
                <form>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Your Name</label>
                    <input type="text" className="form-control" id="name" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea className="form-control" id="message" rows="4"></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
