import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Container } from "react-bootstrap";
import Particle from "./Particle";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .send(
        "service_4quklx8",
        "template_n6jzeiw",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "K0JGZ18xPPyhnbwbC"
      )
      .then(
        () => {
          setStatus("Got it! 👍I’ll reply as soon as I can. Thanks!❤️");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          setStatus("❌ Failed to send. Please try again.");
          console.error(error.text);
        }
      );
  };

  return (
    <Container fluid className="home-about-section" id="contact">
      <Particle />
      <Container className="home-about-description">
        <h1 className="project-heading" style={{ textAlign: "center" }}>
          <span className="purple">Get in Touch</span>
        </h1>
        <p style={{ textAlign: "center", color: "#aaa", marginBottom: "30px" }}>
          Have a question or want to work together? Fill out the form below!
        </p>

        <form
          onSubmit={handleSubmit}
          style={{ maxWidth: "600px", margin: "0 auto", position: "relative", zIndex: 2 }}
        >
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your full name"
            value={formData.name}
            onChange={handleChange}
            required
            className="contact-input"
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email address"
            value={formData.email}
            onChange={handleChange}
            required
            className="contact-input"
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="6"
            placeholder="Write your message here"
            value={formData.message}
            onChange={handleChange}
            required
            className="contact-textarea"
          />

          <button type="submit" className="contact-button">
            Send Message
          </button>
        </form>

        {status && <p className="status-message">{status}</p>}
      </Container>

      <style>{`
        /* Fix inputs to be interactive */
        input, textarea, button {
          pointer-events: auto !important;
        }

        /* Particle background canvas fix */
        canvas {
          position: absolute !important;
          z-index: 0 !important;
          pointer-events: none !important;
        }

        .home-about-description label {
          display: block;
          margin-top: 20px;
          margin-bottom: 5px;
          font-weight: 600;
          font-size: 1rem;
          color: white;
        }

        .contact-input,
        .contact-textarea {
          width: 100%;
          padding: 12px 18px;
          background-color: #1f1f1f;
          color: #fff;
          font-size: 16px;
          border: 1px solid #444;
          border-radius: 10px;
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
          margin-bottom: 22px;
          transition: all 0.3s ease;
        }

        .contact-input::placeholder,
        .contact-textarea::placeholder {
          color: #888;
          font-style: italic;
        }

        .contact-input:focus,
        .contact-textarea:focus {
          outline: none;
          background-color: #292929;
          border-color: #9b59b6;
          box-shadow: 0 0 8px 2px rgba(155, 89, 182, 0.7);
          transition: box-shadow 0.3s ease, border-color 0.3s ease;
        }

        .contact-button {
          width: 100%;
          padding: 16px;
          background: linear-gradient(to right, #9b59b6, #8e44ad);
          color: white;
          font-size: 18px;
          font-weight: bold;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          letter-spacing: 1px;
          text-transform: uppercase;
          transition: 0.4s ease;
        }

        .contact-button:hover {
          background: linear-gradient(to right, #8e44ad, #9b59b6);
          transform: scale(1.03);
          box-shadow: 0 0 12px #9b59b6;
        }

        .status-message {
          text-align: center;
          margin-top: 20px;
          font-weight: bold;
          color: #1abc9c;
          font-size: 1.1rem;
        }

        @media (max-width: 576px) {
          .home-about-description {
            padding: 0 20px;
          }

          .contact-button {
            font-size: 16px;
          }
        }
      `}</style>
    </Container>
  );
}

export default Contact;
