import Link from 'next/link'
import ContactForm from '../components/ContactForm'
import './page.css'

export const metadata = {
  title: 'Contact | Schedule an Alignment Call',
  description: 'Schedule a complimentary alignment call with Eliza Pedder, LMFT. Telehealth therapy throughout California for sensitive souls.',
  openGraph: {
    title: 'Contact | Schedule an Alignment Call',
    description: 'Schedule a complimentary alignment call with Eliza Pedder, LMFT. Telehealth therapy throughout California.',
  },
}

function NewClient() {
  return (
    <div className="contact-page">
      {/* Hero */}
      <section className="contact-hero">
        <div className="container">
          <h1>Let&#39;s Connect</h1>
          <p className="contact-intro">
            I&#39;m so glad you&#39;re here. Fill out the form below, and
            I&#39;ll be in touch to schedule a complimentary 20-minute alignment
            call. It&#39;s a gentle way for us to connect, explore what you&#39;re
            looking for, and see if we&#39;re aligned.
          </p>
          <p className="contact-welcome">
            I warmly welcome individuals and couples of all backgrounds,
            identities, and experiences.
          </p>
        </div>
      </section>

      {/* Main Contact */}
      <section className="contact-main section-alt">
        <div className="container">
          <div className="contact-grid">
            <div className="booking-card">
              <h2>Send Me a Message</h2>
              <p>
                Share a little about what brings you here, and I&#39;ll reach out
                to schedule your alignment call.
              </p>
              <ContactForm />
            </div>

            <div className="contact-info-card">
              <h2>Other Ways to Reach Me</h2>

              <div className="contact-method">
                <h3>Phone</h3>
                <a href="tel:+19252555081" className="contact-value">(925) 255-5081</a>
                <p>Leave a message and I&#39;ll return your call within 24 hours.</p>
              </div>

              <div className="contact-method">
                <h3>Email</h3>
                <a href="mailto:Eliza.pedder@gmail.com" className="contact-value">Eliza.pedder@gmail.com</a>
              </div>

              <div className="contact-method">
                <h3>Location</h3>
                <p><strong>Telehealth:</strong> Throughout California</p>
                <p><strong>Based in:</strong> San Francisco Bay Area</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="expect-section">
        <div className="container">
          <h2>What to Expect</h2>
          <div className="expect-grid">
            <div className="expect-item">
              <span className="expect-num">1</span>
              <h3>Alignment Call</h3>
              <p>
                A complimentary 20-minute call to connect and explore what
                you&#39;re looking for in therapy.
              </p>
            </div>
            <div className="expect-item">
              <span className="expect-num">2</span>
              <h3>See If We&#39;re a Fit</h3>
              <p>
                I&#39;ll share how I work and we&#39;ll feel into whether
                my approach aligns with your needs.
              </p>
            </div>
            <div className="expect-item">
              <span className="expect-num">3</span>
              <h3>Begin Your Journey</h3>
              <p>
                If it feels right, we&#39;ll schedule your first session and
                begin walking this path together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Crisis Notice */}
      <section className="crisis-section">
        <div className="container-narrow">
          <div className="crisis-notice">
            <p>
              <strong>Crisis Resources:</strong> If you are experiencing a mental health emergency,
              please call 988 (Suicide &amp; Crisis Lifeline) or go to your nearest emergency room.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default NewClient
