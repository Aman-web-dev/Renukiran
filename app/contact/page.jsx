"use client";

import React, { useEffect, useState } from "react";
import "./contact.css";
import Link from "next/link";
import { copyText } from "../utils/copyFunction";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Copy,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
} from "lucide-react";

const SUBJECTS = [
  { value: "", label: "Choose a topic…" },
  { value: "general", label: "General Enquiry" },
  { value: "donation", label: "Donation Query" },
  { value: "volunteer", label: "Volunteering" },
  { value: "partnership", label: "Corporate Partnership" },
  { value: "media", label: "Media & Press" },
  { value: "feedback", label: "Feedback / Suggestion" },
];

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [date] = useState(() => new Date().toISOString());
  const [buttonText, setButtonText] = useState("Send Message");
  const [buttonState, setButtonState] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null

  useEffect(() => {
    document.title = "Contact · Renukiran Welfare Foundation";
  }, []);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setButtonState(true);
    setButtonText("Sending…");
    setStatus(null);

    const contactDetails = { name, email, subject, message, date };

    try {
      const response = await fetch(
        "https://renukiran-server.onrender.com/api/contact",
        {
          method: "POST",
          body: JSON.stringify(contactDetails),
          headers: { "Content-Type": "application/json" },
        }
      );

      if (!response.ok) throw new Error("Server error");

      const result = await response.json();
      console.log("Contact made Successfully", result);
      setStatus("success");
      setDate(new Date().toISOString());
      setEmail("");
      setMessage("");
      setName("");
      setSubject("");
      setButtonText("Sent ✓");
      setTimeout(() => {
        setButtonText("Send Message");
        setStatus(null);
      }, 3500);
    } catch (err) {
      console.error(err);
      setStatus("error");
      setButtonText("Try Again");
      setTimeout(() => setButtonText("Send Message"), 3000);
    } finally {
      setButtonState(false);
    }
  };

  return (
    <main className="contact-page">
      {/* ===================== HERO ===================== */}
      <section className="contact-hero" aria-label="Contact Renukiran">
        <div className="contact-hero__bg" aria-hidden="true" />
        <div className="contact-hero__content">
          <span className="contact-hero__eyebrow">We'd Love to Hear From You</span>
          <h1 className="contact-hero__title">
            Let's start a <em>conversation</em>.
          </h1>
          <p className="contact-hero__sub">
            Questions, ideas, partnership opportunities or feedback — every
            message helps Renukiran Welfare Foundation serve communities better.
          </p>
        </div>
      </section>

      {/* ===================== MAIN ===================== */}
      <section className="contact-main">
        {/* ----- Sidebar: contact info ----- */}
        <aside className="contact-info" aria-label="Direct contact options">
          <div
            className="contact-info-card contact-info-card--blue"
            onClick={() => (window.location.href = "tel:+919625881835")}
            role="button"
            tabIndex={0}
          >
            <div className="contact-info-card__icon" aria-hidden="true">
              <Phone />
            </div>
            <div className="contact-info-card__body">
              <p className="contact-info-card__title">Phone</p>
              <p className="contact-info-card__main" id="phone">
                +91 96258 81835
              </p>
              <p className="contact-info-card__sub">
                Mon — Sat · 10 AM to 7 PM IST
              </p>
            </div>
            <button
              className="contact-info-card__copy"
              type="button"
              aria-label="Copy phone number"
              onClick={(e) => copyText("phone", e)}
            >
              <Copy aria-hidden="true" />
            </button>
          </div>

          <a
            className="contact-info-card contact-info-card--green"
            href="mailto:info@renukiran.org"
          >
            <div className="contact-info-card__icon" aria-hidden="true">
              <Mail />
            </div>
            <div className="contact-info-card__body">
              <p className="contact-info-card__title">Email</p>
              <p className="contact-info-card__main" id="email">
                info@renukiran.org
              </p>
              <p className="contact-info-card__sub">
                We reply within one working day
              </p>
            </div>
            <button
              className="contact-info-card__copy"
              type="button"
              aria-label="Copy email"
              onClick={(e) => copyText("email", e)}
            >
              <Copy aria-hidden="true" />
            </button>
          </a>

          <div className="contact-info-card contact-info-card--purple">
            <div className="contact-info-card__icon" aria-hidden="true">
              <Clock />
            </div>
            <div className="contact-info-card__body">
              <p className="contact-info-card__title">Office Hours</p>
              <p className="contact-info-card__main">Mon — Sat</p>
              <p className="contact-info-card__sub">
                10:00 AM — 6:00 PM (drop-off of in-kind donations welcome)
              </p>
            </div>
          </div>
        </aside>

        {/* ----- Form card ----- */}
        <article className="contact-form-card">
          <header className="contact-form-card__header">
            <span className="contact-form-card__tag">Send a Message</span>
            <h2 className="contact-form-card__title">
              Tell us what you have in mind
            </h2>
            <p className="contact-form-card__sub">
              Fill the form below and we'll get back to you as soon as possible.
            </p>
          </header>

          <form
            className="contact-form"
            onSubmit={handleFormSubmit}
            noValidate
          >
            <div className="contact-form__row">
              <div className="contact-form__field">
                <label htmlFor="contact-name" className="contact-form__label">
                  Your name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  placeholder="Jane Doe"
                  className="contact-form__input"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              </div>
              <div className="contact-form__field">
                <label htmlFor="contact-email" className="contact-form__label">
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="contact-form__input"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
            </div>

            <div className="contact-form__field">
              <label htmlFor="contact-subject" className="contact-form__label">
                Subject
              </label>
              <select
                id="contact-subject"
                required
                className="contact-form__select"
                onChange={(e) => setSubject(e.target.value)}
                value={subject}
              >
                {SUBJECTS.map((s) => (
                  <option key={s.value} value={s.value} disabled={!s.value}>
                    {s.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="contact-form__field">
              <label htmlFor="contact-message" className="contact-form__label">
                Your message
              </label>
              <textarea
                id="contact-message"
                rows={6}
                required
                placeholder="Share your thoughts, idea, or question…"
                className="contact-form__textarea"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
              />
            </div>

            {status && (
              <div
                className={`contact-form__status contact-form__status--${status}`}
                role="status"
              >
                {status === "success" ? (
                  <>
                    <CheckCircle2 size={16} aria-hidden="true" />
                    Thanks! Your message has been sent successfully.
                  </>
                ) : (
                  <>
                    <AlertCircle size={16} aria-hidden="true" />
                    Something went wrong. Please try again.
                  </>
                )}
              </div>
            )}

            <button
              type="submit"
              disabled={buttonState}
              className="contact-form__submit"
            >
              {buttonText}
              <Send aria-hidden="true" />
            </button>
          </form>
        </article>
      </section>

      {/* ===================== MAP / VISIT ===================== */}
      <section className="contact-map" aria-label="Visit us">
        <div className="contact-map__card">
          <div className="contact-map__info">
            <span className="contact-map__tag">Visit Us</span>
            <h2 className="contact-map__title">Renukiran Head Office</h2>
            <p className="contact-map__addr" id="address">
              B-122, Upper Ground Floor, Gali Number 13, Amritpuri, Garhi,
              <br />
              New Delhi — 110065, India
            </p>
            <Link
              href="https://maps.app.goo.gl/X9uNp1FJREzWwsxF8"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-map__btn"
            >
              Open in Google Maps
              <ExternalLink aria-hidden="true" />
            </Link>
          </div>
          <div className="contact-map__frame">
            <iframe
              title="Renukiran Welfare Foundation Location"
              src="https://www.google.com/maps?q=B-122,+Upper+Ground+Floor,+Gali+Number+13,+Amritpuri,+Garhi,+New+Delhi,+110065&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactUs;