import Link from 'next/link'
import './page.css'

export const metadata = {
  title: 'Therapy Services | Holistic Healing for Sensitive Souls',
  description: 'Individual therapy, couples therapy, EMDR, and ERP for OCD. Holistic, mindful therapy for highly sensitive women throughout California via telehealth.',
  openGraph: {
    title: 'Therapy Services | Holistic Healing for Sensitive Souls',
    description: 'Individual therapy, couples therapy, EMDR, and ERP for OCD. Holistic, mindful therapy for highly sensitive women throughout California via telehealth.',
  },
}

function Services() {
  return (
    <div className="services-page">
      {/* Hero */}
      <section className="services-hero">
        <div className="container">
          <h1>Therapy</h1>
          <p className="services-intro">
            Holistic, evidence-based healing for sensitive souls&#8212;helping you
            reconnect with the wisdom and strength that already live within you.
          </p>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="services-main section-alt">
        <div className="container">
          <h2 className="focus-areas-heading">Focus Areas</h2>
          <div className="focus-cards-grid">
            <Link href="/ocd-therapy" className="focus-card">
              <h3>OCD &amp; Anxiety Support</h3>
              <p>
                Specialized ERP treatment for intrusive thoughts, mental loops,
                and compulsive patterns. You are not your thoughts.
              </p>
              <span className="link-subtle">Learn more &#8594;</span>
            </Link>

            <Link href="/pmdd-therapy" className="focus-card">
              <h3>PMDD Support</h3>
              <p>
                A gentle, non-pathologizing space for navigating the
                overwhelming emotional and physical symptoms of PMDD.
              </p>
              <span className="link-subtle">Learn more &#8594;</span>
            </Link>

            <Link href="/codependency-therapy" className="focus-card">
              <h3>Codependency &amp; People Pleasing</h3>
              <p>
                Reclaim your sense of self, set loving boundaries, and learn
                that you are your number one priority.
              </p>
              <span className="link-subtle">Learn more &#8594;</span>
            </Link>

            <Link href="/trauma-therapy" className="focus-card">
              <h3>Trauma &amp; EMDR</h3>
              <p>
                Process past hurts with attachment-focused EMDR and somatic
                therapy. Full-day EMDR intensives also available.
              </p>
              <span className="link-subtle">Learn more &#8594;</span>
            </Link>

            <Link href="/grief-therapy" className="focus-card">
              <h3>Grief &amp; Loss</h3>
              <p>
                Honor your grief in all its forms&#8212;loss of a loved one,
                life transitions, or the life you longed for.
              </p>
              <span className="link-subtle">Learn more &#8594;</span>
            </Link>

            <Link href="/couples-therapy" className="focus-card">
              <h3>Couples Therapy</h3>
              <p>
                Deepen intimacy, improve communication, and reconnect with
                your partner on a soul level.
              </p>
              <span className="link-subtle">Learn more &#8594;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* EMDR Highlight */}
      <section className="emdr-highlight-section">
        <div className="container-narrow">
          <h2>Specialized in EMDR</h2>
          <p>
            EMDR (Eye Movement Desensitization and Reprocessing) is the most
            researched evidence-based treatment for healing trauma. When we
            experience trauma, our brains don&#39;t properly store the memories,
            which can cause us to live our day-to-day lives as if the event is
            still happening. EMDR helps reprocess these memories so they become
            stored properly and lose their emotional charge.
          </p>
          <p>
            I also offer <strong>full-day EMDR intensives</strong>&#8212;a
            transformative deep-dive experience where I come to you and we work
            together for approximately 7.5 hours. This may be right for you if
            you&#39;re ready for profound healing but don&#39;t have time for weekly therapy.
          </p>
          <p>EMDR is particularly effective for:</p>
          <ul className="emdr-list">
            <li>PTSD and trauma symptoms</li>
            <li>Anxiety and panic attacks</li>
            <li>Childhood trauma and relational wounds</li>
            <li>Grief and loss</li>
            <li>Negative self-beliefs</li>
          </ul>
        </div>
      </section>

      {/* Getting Started */}
      <section className="getting-started-section section-alt">
        <div className="container">
          <h2>How to Get Started</h2>
          <div className="steps-grid">
            <div className="step-item">
              <span className="step-num">1</span>
              <h3>Alignment Call</h3>
              <p>A complimentary 20-minute call to connect, explore what you&#39;re looking for, and see if we&#39;re aligned.</p>
            </div>
            <div className="step-item">
              <span className="step-num">2</span>
              <h3>Book Your First Session</h3>
              <p>Choose a time that works for you&#8212;all sessions are via secure telehealth.</p>
            </div>
            <div className="step-item">
              <span className="step-num">3</span>
              <h3>Begin Your Journey</h3>
              <p>Start reconnecting with your inner wisdom and the healing that already lives within you.</p>
            </div>
          </div>
          <div className="getting-started-cta">
            <Link
              href="/new-client"
              className="btn-primary"
            >
              Schedule an Alignment Call
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Services
