// ContactUsPage.js
import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contactus-container">
      <div className="info">
        <h1>Contact Us</h1>
        <p>
          We'd love to hear from you! Please feel free to contact us using the
          information below.
        </p>
      </div>
      <div className="info-image">
        <img src={require("./contactimg.jpg")} alt="Informational Image" />
      </div>
      <div className="bottom-elements">
        <div className="contact-info">
          <h1>Location</h1>
          <div className="info-item1">
            <h3>Address</h3>
            <p>123 Main Street, Cityville, Country</p>
          </div>

          <div className="info-item2">
            <h3>Email</h3>
            <p>info@example.com</p>
          </div>

          <div className="info-item3">
            <h3>Phone</h3>
            <p>+1 (555) 123-4567</p>
          </div>
        </div>

        <div className="brands">
          <h1>Our Brands</h1>
          <p>Brand 1</p>
          <p>Brand 2</p>
          <p>Brand 3</p>
          <p>Brand 4</p>
          <p>Brand 5</p>
          {/* Add more brands as needed */}
        </div>

        <div className="contact-form">
          <h2>Get in Touch</h2>
          <form>
            <label htmlFor="name">Your Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Your Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">Your Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>

        <div className="also-reach-us">
          <h1>Also Reach Us</h1>
          <div className="social-icons">
            {/* Add your social media icons here */}
            {/* For example, using Font Awesome icons */}
            <i className="fa fa-facebook">fa</i>
            <i className="fab fa-twitter">tw</i>
            <i className="fab fa-instagram">in</i>
            <i className="fab fa-linkedin">li</i>
            <i className="fab fa-pinterest">pi</i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
