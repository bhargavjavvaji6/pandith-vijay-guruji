import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./styles.css";

const PHONE = "+917760484888";
const WHATSAPP = "https://wa.me/917760484888";
const LOGO = "/assets/logo.jpeg";
const ASTRO_IMG = "/assets/buddha-guidance.png";
const services = [
  {
    icon: "🧿",
    title: "Black Magic & Negative Energy Guidance",
    description:
      "Spiritual consultation for people who are concerned about negative energy, spiritual disturbances or related personal experiences."
  },
  {
    icon: "🔮",
    title: "Horoscope Reading",
    description:
      "Understand your birth chart, planetary influences and important life patterns through personalized horoscope analysis."
  },
  {
    icon: "❤️",
    title: "Love & Relationship Guidance",
    description:
      "Get thoughtful astrology-based guidance for relationship concerns, compatibility and important decisions in your love life."
  },
  {
    icon: "💍",
    title: "Marriage Astrology",
    description:
      "Explore marriage compatibility, relationship patterns and suitable timing through horoscope analysis."
  },
  {
    icon: "💼",
    title: "Career & Job Astrology",
    description:
      "Gain clarity about career direction, professional opportunities, job changes and important career decisions."
  },
  {
    icon: "💰",
    title: "Business Astrology",
    description:
      "Astrology guidance for entrepreneurs and business owners seeking clarity around business decisions and future planning."
  },
  {
    icon: "✋",
    title: "Palm Reading",
    description:
      "Traditional palm reading to explore personality traits, life patterns and possibilities indicated through the lines of the palm."
  },
  {
    icon: "🧘",
    title: "Spiritual Healing & Chakra",
    description:
      "Traditional spiritual practices intended to support inner balance, awareness and positive energy."
  }
];

const testimonials = [
  [
    "“I was going through a confusing phase in my life, and this session gave me a sense of clarity and peace. The guidance felt personal, honest, and truly comforting.”"
  ],
  [
    "“I really appreciated the patience and personal attention throughout the session. I felt comfortable sharing my concerns, and I left feeling lighter and more positive about the future.”"
  ],
  [
    "“The experience was much more meaningful than I expected. I felt heard without judgment, and the guidance helped me look at my situation with a calmer and clearer mind.”"
  ]
];


function App() {
  const [chatOpen, setChatOpen] = useState(false);

  const [messages, setMessages] = useState([
    {
      from: "ai",
      text: "Namaste ✨ I’m the K.B.Vijay Guruji AI Guide. How can I help you today?"
    }
  ]);

  const [input, setInput] = useState("");
  const [formSent, setFormSent] = useState(false);

  const sendChat = (text = input) => {
    const clean = text.trim();

  
if (!clean) {
  return;
}

setMessages((currentMessages) => [
  ...currentMessages,
  {
    from: "user",
    text: clean
  },
  {
    from: "ai",
    text:
      "Thank you for sharing. For personalized guidance, please connect with K.B.Vijay Guruji by phone or WhatsApp. This chat is only a demo assistant."
  }
]);

 setInput("");
 };


  const handleForm = (event) => {
    event.preventDefault();
    setFormSent(true);
  };


  const navigationItems = [
    "Home",
    "About",
    "Services",
    "Why Us",
    "Reviews",
    "FAQ",
    "Contact"
  ];

  return (<div className="site">

    {/* Background stars */}
    <div className="stars" aria-hidden="true"></div>


    <nav className="navbar navbar-expand-lg fixed-top site-nav">
      <div className="container">

        <a className="navbar-brand brand" href="#home">

          <img
            src={LOGO}
            alt="Astrologer logo"
            className="brand-logo"
            onError={(event) => {
              event.currentTarget.style.display = "none";
            }}
          />

          <span>
            <strong>Pandith K.B.Vijay Guruji</strong>
            <small>World Famous Astrologer</small>
          </span>

        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="bi bi-list"></i>
        </button>

        <div
          className="collapse navbar-collapse"
          id="mainNav"
        >
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-2">

            {navigationItems.map((item) => (
              <li className="nav-item" key={item}>
                <a
                  className="nav-link"
                  href={
                    "#" +
                    item
                      .toLowerCase()
                      .replace(/\s+/g, "-")
                  }
                >
                  {item}
                </a>
              </li>
            ))}

            <li>
              <a
                className="nav-call"
                href={`tel:${PHONE}`}
              >
                <i className="bi bi-telephone-fill"></i>
                Call Now
              </a>
            </li>

          </ul>
        </div>

      </div>
    </nav>

    <main>
<section id="home" className="hero section-pad">
  <div className="container">
    <div className="row align-items-center g-4">

      {/* =========================
          LEFT SIDE - CONTENT
      ========================== */}
      <div className="col-lg-6 hero-content">

        <div className="eyebrow">
          ✦ CLARITY · HEALING · POSITIVE ENERGY
        </div>

        <h1>
          Best Astrologer in Mumbai
        </h1>
  <h3>Vedic Astrology, Kundali & Horoscope Guidance </h3>
        <p className="hero-text">
Experienced Vedic astrologer serving Mumbai, Thane, Navi Mumbai & surrounding areas — with 35+ years of experience offering personalized horoscope, kundali, birth chart and astrology consultations to help you understand your situation and move forward with greater clarity.
        </p>

        <div className="hero-buttons">

          <a
            className="gold-btn"
            href={`tel:${PHONE}`}
          >
            <i className="bi bi-stars"></i>
            Speak with K.B.Vijay Guruji
          </a>

          <a
            className="outline-btn"
            href="#services"
          >
            Explore Services
            <i className="bi bi-arrow-right"></i>
          </a>

        </div>

        <div className="trust-row">
          <span>30+ Years Experience</span>
          <span>Confidential Guidance</span>
          <span>Phone & WhatsApp</span>
        </div>

      </div>


      {/* =========================
          RIGHT SIDE - ANIMATED
          ASTROLOGY CHART
      ========================== */}
{/* RIGHT SIDE - ANIMATED ASTROLOGY CHART */}
<div className="hero-chart-side">
  <div className="astrology-chart">

    {/* Glow */}
    <div className="chart-glow"></div>

    {/* Circular rings */}
    <div className="chart-ring ring-1"></div>
    <div className="chart-ring ring-2"></div>
    <div className="chart-ring ring-3"></div>

    {/* Astrology axis lines */}
    <div className="chart-line line-horizontal"></div>
    <div className="chart-line line-vertical"></div>

    <div className="chart-line line-diagonal-1"></div>
    <div className="chart-line line-diagonal-2"></div>
    <div className="chart-line line-diagonal-3"></div>
    <div className="chart-line line-diagonal-4"></div>

    {/* Center */}
    <div className="chart-center">
      <span></span>
    </div>

    {/* Planet / energy points */}
    <div className="planet planet-gold planet-1"></div>
    <div className="planet planet-purple planet-2"></div>
    <div className="planet planet-pink planet-3"></div>

    {/* Zodiac signs */}
    <div className="zodiac zodiac-1">♈</div>
    <div className="zodiac zodiac-2">♉</div>
    <div className="zodiac zodiac-3">♊</div>
    <div className="zodiac zodiac-4">♋</div>
    <div className="zodiac zodiac-5">♌</div>
    <div className="zodiac zodiac-6">♍</div>
    <div className="zodiac zodiac-7">♎</div>
    <div className="zodiac zodiac-8">♏</div>
    <div className="zodiac zodiac-9">♐</div>
    <div className="zodiac zodiac-10">♑</div>
    <div className="zodiac zodiac-11">♒</div>
    <div className="zodiac zodiac-12">♓</div>

  </div>
</div>

    </div>
  </div>
</section>

      <section
        id="contact"
        className="section-pad contact-section"
      >
        <div className="container">

          <div className="contact-box">

            <div className="row g-5 align-items-center">

              <div className="col-lg-5">

                <div className="eyebrow">
                  BOOK A CONSULTATION
                </div>
                <p>Spiritual insight in mumbai</p>
                <h4>
                  2026 Spiritual Clarity Guide - What Your Birth Chart Reveals About Love, Career, Finances & Your Life Path Find your next step.
                </h4>

                <p>
                  Tell us what you would like guidance on
                  and we'll help you start the conversation.
                </p>

                <a
                  href={WHATSAPP}
                  className="whatsapp-btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-whatsapp"></i>
                  WhatsApp K.B. Vijay Guruji
                </a>

              </div>

              <div className="col-lg-7">

                {formSent ? (

                  <div className="success-box">

                    <i className="bi bi-check-circle-fill"></i>

                    <h3>
                      Thank you.
                    </h3>

                    <p>
                      Your request has been recorded as a
                      demo submission. Please use Call or
                      WhatsApp for a real appointment.
                    </p>

                  </div>

                ) : (

                  <form
                    onSubmit={handleForm}
                    className="consult-form"
                  >

                    <div className="row g-3">

                      <div className="col-md-6">

                        <label>
                          Full name
                        </label>

                        <input
                          required
                          className="form-control"
                          placeholder="Your name"
                        />

                      </div>

                      <div className="col-md-6">

                        <label>
                          Phone / WhatsApp
                        </label>

                        <input
                          required
                          className="form-control"
                          placeholder="+91 91234 56789"
                        />

                      </div>

                      <div className="col-12">

                        <label>
                          What would you like guidance on?
                        </label>

                        <select className="form-select">

                          <option>
                            Love & Relationships
                          </option>

                          <option>
                            Career & Business
                          </option>

                          <option>
                            Birth Chart
                          </option>

                          <option>
                            Spiritual Guidance
                          </option>

                          <option>
                            Other
                          </option>

                        </select>

                      </div>

                      <div className="col-12">

                        <button
                          type="submit"
                          className="gold-btn w-100"
                        >
                          Request a Consultation
                          <i className="bi bi-arrow-right"></i>
                        </button>

                      </div>

                    </div>

                  </form>

                )}

              </div>

            </div>

          </div>

        </div>
      </section>

      <section
        id="about"
        className="section-pad about-section"
      >
        <div className="container">

          <div className="row align-items-center g-5">

            <div className="col-lg-5">

              <div className="portrait-card">

                <img
                  src={ASTRO_IMG}
                  alt="Spiritual guidance"
                />

                <div className="portrait-caption">
                </div>

              </div>

            </div>

            <div className="col-lg-7">

              <div className="eyebrow">
                About Pandith K.B.Vijay Guruji
              </div>
              <h4>35+ Years of Vedic Astrology Experience</h4>
              <h4>
               Trusted Vedic Astrologer & <em> Spiritual Guide </em> in Mumbai
              </h4>

              <p>
                With over 35 years of experience in Vedic astrology, Pandith K.B.Vijay Guruji has guided individuals and families seeking clarity and direction in important areas of life. Serving clients across Mumbai, Andheri, Bandra, Borivali, Thane, Navi Mumbai, Powai, and surrounding areas, Guruji provides personalized consultations based on traditional Vedic astrology principles.    </p>
<p> Whether you are searching for an astrologer in Mumbai, best astrologer in Mumbai, Vedic astrologer near you, or trusted guidance for marriage, relationships, career, business, finance, or personal matters, each consultation is approached with care, confidentiality, and individual attention.</p>
<p> With a traditional approach combined with years of practical experience, Pandith K.B.Vijay Guruji provides thoughtful astrological guidance to help you understand your situation, gain clarity, and move forward with greater confidence.</p>

              <div className="stats row g-3 mt-3">

                <div className="col-4">
                  <strong>30+</strong>
                  <span>Years Experience</span>
                </div>

                <div className="col-4">
                  <strong>10K+</strong>
                  <span>Clients Guided</span>
                </div>

                <div className="col-4">
                  <strong>50+</strong>
                  <span>US Cities</span>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ===================================================
        SERVICES
    =================================================== */}

      <section
        id="services"
        className="section-pad"
      >
        <div className="container">

          <div className="section-heading text-center">

            <div className="eyebrow">
              WHAT WE OFFER
            </div>

            <h4>
              Our Astrology & Spiritual Services
            </h4>

            <p>
              Personalized guidance for different areas of
              life through traditional astrology and
              spiritual practices.
            </p>

          </div>

          <div className="row g-4 mt-2">

            {services.map((service) => (

              <div
                className="col-md-6 col-lg-3"
                key={service.title}
              >

                <div className="service-card">

                  <div className="service-icon">
                    <span aria-hidden="true">
                      {service.icon}
                    </span>
                  </div>

                  <h3>
                    {service.title}
                  </h3>

                  <p>
                    {service.description}
                  </p>

                  <a href="#contact">
                    Learn more
                    <i className="bi bi-arrow-up-right"></i>
                  </a>

                </div>

              </div>

            ))}

          </div>

        </div>
      </section>

      {/* ===================================================
        WHY US
    =================================================== */}

      <section
        id="why-us"
        className="section-pad why-section"
      >
        <div className="container">

          <div className="row g-5 align-items-center">

            <div className="col-lg-5">

              <div className="eyebrow">
                WHY CHOOSE K.B.Vijay Guruji
              </div>

              <h3>
                Guidance that feels{" "}
                <em>personal.</em>
              </h3>

              <p>
                Every session is approached as a private
                conversation. The goal is to help you reflect,
                understand possibilities and move forward
                with greater calm.
              </p>

            </div>

            <div className="col-lg-7">

              <div className="reason-grid">

                {[
                  [
                    "bi-lock",
                    "Private & Confidential",
                    "Your questions and conversation are treated with care."
                  ],
                  [
                    "bi-person-heart",
                    "Personal Attention",
                    "Sessions are centered around your individual concerns."
                  ],
                  [
                    "bi-globe2",
                    "Remote Sessions",
                    "Connect by phone or WhatsApp from wherever you are."
                  ],
                  [
                    "bi-clock",
                    "Flexible Guidance",
                    "Same-day availability may be possible depending on schedule."
                  ]
                ].map(([icon, title, description]) => (

                  <div
                    className="reason"
                    key={title}
                  >

                    <i className={`bi ${icon}`}></i>

                    <div>
                      <h4>{title}</h4>
                      <p>{description}</p>
                    </div>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ===================================================
        REVIEWS
    =================================================== */}

      <section
        id="reviews"
        className="section-pad"
      >
        <div className="container">

          <div className="section-heading text-center">

            <div className="eyebrow">
              CLIENT REFLECTIONS
            </div>

            <h3>
              Words from people we've{" "}
              <em>guided.</em>
            </h3>

          </div>

          <div className="row g-4 mt-2">

            {testimonials.map(([quote, name]) => (

              <div
                className="col-lg-4"
                key={name}
              >

                <div className="quote-card">

                  <div className="quote-mark">
                    “
                  </div>

                  <p>{quote}</p>

                  <span>{name}</span>

                </div>

              </div>

            ))}

          </div>

        </div>
      </section>

      <section
        id="faq"
        className="section-pad faq-section"
      >
        <div className="container">

          <div className="section-heading text-center">  
            <h3>FAQ</h3>  
            <h4>
              Questions, answered with{" "}
              <em>clarity.</em>
            </h4>

          </div>

          <div
            className="accordion faq mt-4"
            id="faqAccordion"
          >

            {[
              [
                "How can an astrologer or psychic help me with my life and future?",
                "An astrologer or psychic can provide guidance about important areas of life such as career, marriage, relationships, finances, family, and future possibilities. A consultation can help you explore your concerns and gain a clearer perspective."
              ],
              [
                "What information do I need for an astrology or psychic consultation?",
                "For an astrology consultation, you may need your date of birth, exact time of birth, and place of birth. For a psychic consultation, you can simply explain the questions or concerns you would like to discuss."
              ],
              [
                " Can astrology or a psychic help with marriage and relationship questions?",
                "Yes. Astrology can help explore relationship compatibility, marriage prospects, and important periods in personal life. A psychic consultation can also provide personal guidance and perspective on relationship-related questions."
              ],
              [
                "Can an astrologer or psychic provide guidance about career and finances?",
                "Yes. Astrology can provide guidance about career opportunities, professional changes, business prospects, and financial periods based on your birth chart. A psychic consultation can also provide another perspective on career-related questions."
              ],
              [
                "Can I consult an astrologer or psychic online by phone or WhatsApp?",
                "Yes. Astrology and psychic consultations can be conducted online through phone or WhatsApp. You can discuss your questions remotely and provide your birth details for an astrology consultation."
              ]
              
            ].map(([question, answer], index) => (

              <div
                className="accordion-item"
                key={question}
              >

                <h2 className="accordion-header">

                  <button
                    className={`accordion-button ${index ? "collapsed" : ""
                      }`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#faq${index}`}
                  >
                    {question}
                  </button>

                </h2>

                <div
                  id={`faq${index}`}
                  className={`accordion-collapse collapse ${!index ? "show" : ""
                    }`}
                  data-bs-parent="#faqAccordion"
                >

                  <div className="accordion-body">
                    {answer}
                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>
      </section>

      <section
        id="contact"
        className="section-pad contact-section"
      >
        <div className="container">

          <div className="contact-box">

            <div className="row g-5 align-items-center">

              <div className="col-lg-5">

                <div className="eyebrow">
                  BOOK A CONSULTATION
                </div>
                <p>Spiritual insight in mumbai</p>
                <h4>
                  2026 Spiritual Clarity Guide - What Your Birth Chart Reveals About Love, Career, Finances & Your Life Path
            
                  <em>Find your next step.</em>
                </h4>

                <p>
                  Tell us what you would like guidance on
                  and we'll help you start the conversation.
                </p>

                <a
                  href={WHATSAPP}
                  className="whatsapp-btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-whatsapp"></i>
                  WhatsApp K.B. Vijay Guruji
                </a>

              </div>

              <div className="col-lg-7">

                {formSent ? (

                  <div className="success-box">

                    <i className="bi bi-check-circle-fill"></i>

                    <h3>
                      Thank you.
                    </h3>

                    <p>
                      Your request has been recorded as a
                      demo submission. Please use Call or
                      WhatsApp for a real appointment.
                    </p>

                  </div>

                ) : (

                  <form
                    onSubmit={handleForm}
                    className="consult-form"
                  >

                    <div className="row g-3">

                      <div className="col-md-6">

                        <label>
                          Full name
                        </label>

                        <input
                          required
                          className="form-control"
                          placeholder="Your name"
                        />

                      </div>

                      <div className="col-md-6">

                        <label>
                          Phone / WhatsApp
                        </label>

                        <input
                          required
                          className="form-control"
                          placeholder="+91 91234 56789"
                        />

                      </div>

                      <div className="col-12">

                        <label>
                          What would you like guidance on?
                        </label>

                        <select className="form-select">

                          <option>
                            Love & Relationships
                          </option>

                          <option>
                            Career & Business
                          </option>

                          <option>
                            Birth Chart
                          </option>

                          <option>
                            Spiritual Guidance
                          </option>

                          <option>
                            Other
                          </option>

                        </select>

                      </div>

                      <div className="col-12">

                        <button
                          type="submit"
                          className="gold-btn w-100"
                        >
                          Request a Consultation
                          <i className="bi bi-arrow-right"></i>
                        </button>

                      </div>

                    </div>

                  </form>

                )}

              </div>

            </div>

          </div>

        </div>
      </section>

    </main>

    {/* =====================================================
      FLOATING CALL
  ===================================================== */}

    <a
      className="floating-call"
      href={`tel:${PHONE}`}
      aria-label="Call K.B. Vijay Guruji"
    >
      <i className="bi bi-telephone-fill"></i>
      <span>Call</span>
    </a>

    {/* =====================================================
      FLOATING RIGHT BUTTONS
  ===================================================== */}

    <div className="floating-right">

      <a
        className="floating-whatsapp"
        href={WHATSAPP}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
      >
        <i className="bi bi-whatsapp"></i>
      </a>

      <button
        className="floating-ai"
        onClick={() => setChatOpen(true)}
        aria-label="AI Agent Chat"
      >
        <i className="bi bi-stars"></i>
      </button>

    </div>

    {/* =====================================================
      AI CHAT
  ===================================================== */}

    {chatOpen && (

      <div
        className="chat-overlay"
        onClick={() => setChatOpen(false)}
      >

        <div
          className="chat-panel"
          onClick={(event) => event.stopPropagation()}
        >

          <div className="chat-head">

            <div>

              <strong>
                ✦ AI Spiritual Guide
              </strong>

              <small>
                Demo assistant · Available now
              </small>

            </div>

            <button
              onClick={() => setChatOpen(false)}
              aria-label="Close chat"
            >
              <i className="bi bi-x-lg"></i>
            </button>

          </div>

          <div className="chat-messages">

            {messages.map((message, index) => (

              <div
                key={index}
                className={`msg ${message.from}`}
              >
                {message.text}
              </div>

            ))}

          </div>

          <div className="quick-actions">

            {[
              "Love & Relationships",
              "Career",
              "Spiritual Guidance",
              "Birth Chart"
            ].map((item) => (

              <button
                key={item}
                onClick={() => sendChat(item)}
              >
                {item}
              </button>

            ))}

          </div>

          <div className="chat-input">

            <input
              value={input}
              onChange={(event) =>
                setInput(event.target.value)
              }
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  sendChat();
                }
              }}
              placeholder="Ask a question..."
            />

            <button
              onClick={() => sendChat()}
              aria-label="Send message"
            >
              <i className="bi bi-send-fill"></i>
            </button>

          </div>

        </div>

      </div>

    )}

  </div>

  );
}

/* =========================================================
RENDER
========================================================= */

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error(
    'Root element "#root" was not found in index.html'
  );
}

createRoot(rootElement).render(
  <React.StrictMode> <App />
  </React.StrictMode>
);
