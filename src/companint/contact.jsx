import { useForm } from "@formspree/react";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

const Contact = () => {
  const [state, handleSubmit] = useForm("mvkowlgp");

  if (state.succeeded) {
    return (
      <section className="contact" id="contact">
        <div className="contact-success" role="status">
          <span aria-hidden="true">✓</span>

          <p>MESSAGE SENT</p>

          <h2>
            Thank you.
            <span> I'll get back to you soon.</span>
          </h2>
        </div>
      </section>
    );
  }

  return (
    <section className="contact" id="contact">
      {/* HEADER */}
      <div className="contact-header">
        <span aria-hidden="true">05</span>
        <p>GET IN TOUCH</p>
      </div>

      {/* INTRO */}
      <div className="contact-intro">
        <p className="contact-label">CONTACT ME</p>

        <h2>
          Let's build
          <span> something together.</span>
        </h2>

        <p className="contact-description">
          Have a project in mind or want to work together? Feel free to send me
          a message.
        </p>
      </div>

      {/* CONTACT GRID */}
      <div className="contact-grid">
        {/* INFORMATION */}
        <div className="contact-info">
          <p className="info-title">CONTACT INFORMATION</p>

          <div className="info-item">
            <FaEnvelope className="info-icon" aria-hidden="true" />
            <div>
              <span>EMAIL</span>
              <a href="mailto:ywagdy59@gmail.com">ywagdy59@gmail.com</a>
            </div>
          </div>

          <div className="info-item">
            <FaGithub className="info-icon" aria-hidden="true" />
            <div>
              <span>GITHUB</span>
              <a
                href="https://github.com/ywagdy59-blip"
                target="_blank"
                rel="noreferrer"
              >
                github.com/ywagdy59-blip
              </a>
            </div>
          </div>

          <div className="info-item">
            <FaLinkedin className="info-icon" aria-hidden="true" />
            <div>
              <span>LINKEDIN</span>
              <a
                href="https://www.linkedin.com/in/yousef-wagdy-161351219/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>

          <div className="info-item">
            <FaWhatsapp className="info-icon" aria-hidden="true" />
            <div>
              <span>WHATSAPP</span>
              {/* placeholder number — replace 20XXXXXXXXXX with your real number, country code first, no + or spaces */}
              <a
                href="https://wa.me/2001557122676"
                target="_blank"
                rel="noreferrer"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

          <div className="info-item">
            <FaInstagram className="info-icon" aria-hidden="true" />
            <div>
              <span>INSTAGRAM</span>
              {/* placeholder handle — replace with your real Instagram username */}
              <a
                href="https://www.instagram.com/youssef_wagdy__/"
                target="_blank"
                rel="noreferrer"
              >
                @youssefwagdy
              </a>
            </div>
          </div>

          <div className="info-item">
            <FaFacebook className="info-icon" aria-hidden="true" />
            <div>
              <span>FACEBOOK</span>
              {/* placeholder handle — replace with your real Facebook page/profile */}
              <a
                href="https://web.facebook.com/yousef.wagdy.50?locale=ar_AR"
                target="_blank"
                rel="noreferrer"
              >
                facebook.com/youssefwagdy
              </a>
            </div>
          </div>
        </div>

        {/* FORM */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <p className="info-title">SEND A MESSAGE</p>

          <div className="form-group">
            <label htmlFor="name">NAME</label>

            <input
              id="name"
              type="text"
              name="name"
              placeholder="Your name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">EMAIL</label>

            <input
              id="email"
              type="email"
              name="email"
              placeholder="ywagdy59@email.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">MESSAGE</label>

            <textarea
              id="message"
              name="message"
              placeholder="Tell me about your project..."
              rows="6"
              required
            />
          </div>

          <button
            type="submit"
            disabled={state.submitting}
            className="contact-submit"
          >
            {state.submitting ? "SENDING..." : "SEND MESSAGE ↗"}
          </button>

          {state.errors && (
            <p className="contact-error" role="alert">
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>

      {/* FOOTER */}
      <div className="contact-footer">
        <span>© 2026 YOUSSEF WAGDY</span>

        <span>FRONT-END DEVELOPER</span>
      </div>
    </section>
  );
};

export default Contact;
