import Link from 'next/link'
import elizaPortrait from '../../src/photos/eliza-images/Eliza-portrait.webp'
import elizaOnBench from '../../src/photos/eliza-images/Eliza-on-bench.webp'
import './page.css'

export const metadata = {
  title: 'About Eliza Pedder, LMFT | Holistic Therapist',
  description: 'Licensed Marriage & Family Therapist specializing in EMDR, ERP, somatic therapy, and mindfulness. Learn about my holistic approach to healing for sensitive souls.',
  openGraph: {
    title: 'About Eliza Pedder, LMFT | Holistic Therapist',
    description: 'Licensed Marriage & Family Therapist specializing in EMDR, ERP, somatic therapy, and mindfulness. Learn about my holistic approach to healing.',
  },
}

function About() {
  return (
    <div className="about">
      {/* Enhanced Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-layout">
            <div className="about-hero-image">
              <div className="about-image-frame">
                <img src={elizaPortrait.src} alt="Eliza Pedder, Licensed Marriage and Family Therapist" />
              </div>
            </div>
            <div className="about-hero-content">
              <div className="about-badges">
                <span className="about-badge">LMFT, Licensed Marriage &amp; Family Therapist</span>
                <span className="about-badge about-badge-accent">&#10003; Accepting New Clients</span>
                <span className="about-badge">&#9745; Telehealth</span>
                <span className="about-badge">&#9745; LGBTQIA+ Affirming</span>
              </div>
              <h1>Eliza Pedder</h1>
              <p className="about-pronouns">she/her</p>
              <p className="about-tagline">
                Gently guiding highly sensitive women, deep feelers, and
                overthinkers back to wholeness&#8212;reconnecting you with
                the wisdom and light that already live within you
              </p>
              <div className="about-specialty-tags">
                <span className="specialty-tag">OCD &amp; Anxiety (ERP)</span>
                <span className="specialty-tag">EMDR</span>
                <span className="specialty-tag">PMDD</span>
                <span className="specialty-tag">Somatic Therapy</span>
                <span className="specialty-tag">Codependency</span>
                <span className="specialty-tag">Grief</span>
              </div>
              <div className="about-stats">
                <div className="about-stat">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                  </svg>
                  <div>
                    <span className="stat-label">Approach</span>
                    <span className="stat-value">Holistic &amp; Mindful</span>
                  </div>
                </div>
                <div className="about-stat">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                  <div>
                    <span className="stat-label">Licensed</span>
                    <span className="stat-value">California (#153724)</span>
                  </div>
                </div>
                <div className="about-stat">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                  <div>
                    <span className="stat-label">Sessions</span>
                    <span className="stat-value">Individual &amp; Couples</span>
                  </div>
                </div>
                <div className="about-stat">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                  </svg>
                  <div>
                    <span className="stat-label">Languages</span>
                    <span className="stat-value">English</span>
                  </div>
                </div>
              </div>
              <div className="about-hero-ctas">
                <Link
                  href="/new-client"
                  className="btn-primary"
                >
                  Schedule an Alignment Call &#8594;
                </Link>
                <a href="tel:925-255-5081" className="btn-outline">
                  &#9743; Call (925) 255-5081
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="info-cards-section">
        <div className="container">
          <div className="info-cards-grid">
            {/* Quick Info Card */}
            <div className="info-card">
              <h3 className="info-card-title">Quick Info</h3>
              <div className="info-card-body">
                <div className="info-card-group">
                  <span className="info-card-label">Session Types</span>
                  <div className="info-card-items">
                    <span className="info-card-check-item">
                      <svg width="16" height="16" viewBox="0 0 22 22" fill="none" aria-hidden="true"><circle cx="11" cy="11" r="10" stroke="currentColor" strokeWidth="1.5"/><path d="M7 11l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      Individual Therapy
                    </span>
                    <span className="info-card-check-item">
                      <svg width="16" height="16" viewBox="0 0 22 22" fill="none" aria-hidden="true"><circle cx="11" cy="11" r="10" stroke="currentColor" strokeWidth="1.5"/><path d="M7 11l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      Couples Therapy
                    </span>
                    <span className="info-card-check-item">
                      <svg width="16" height="16" viewBox="0 0 22 22" fill="none" aria-hidden="true"><circle cx="11" cy="11" r="10" stroke="currentColor" strokeWidth="1.5"/><path d="M7 11l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      EMDR Intensives
                    </span>
                  </div>
                </div>
                <div className="info-card-group">
                  <span className="info-card-label">Ages Seen</span>
                  <p className="info-card-value">Adults (18+)</p>
                </div>
                <div className="info-card-group">
                  <span className="info-card-label">Availability</span>
                  <div className="info-card-items">
                    <span className="info-card-icon-item">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                      Video / Telehealth
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Credentials Card */}
            <div className="info-card">
              <h3 className="info-card-title">Credentials</h3>
              <div className="info-card-body">
                <div className="info-card-group">
                  <span className="info-card-label">License</span>
                  <p className="info-card-value">Licensed Marriage &amp; Family Therapist<br />California #153724</p>
                </div>
                <div className="info-card-group">
                  <span className="info-card-label">Education</span>
                  <p className="info-card-value">MA, Counseling Psychology<br />University of San Francisco</p>
                  <p className="info-card-value">BA, UC Davis</p>
                </div>
                <div className="info-card-group">
                  <span className="info-card-label">Trainings</span>
                  <p className="info-card-value">EMDR Trained (EMDRIA Accredited)</p>
                  <p className="info-card-value">ERP for OCD (NOCD Academy, IOCDF)</p>
                  <p className="info-card-value">IFS Parts Work</p>
                  <p className="info-card-value">300hr Advanced Yoga &amp; Somatic Training</p>
                </div>
              </div>
            </div>

            {/* Fees & Insurance Card */}
            <div className="info-card">
              <h3 className="info-card-title">Fees &amp; Insurance</h3>
              <div className="info-card-body">
                <div className="info-card-group">
                  <span className="info-card-label">Session Fees</span>
                  <p className="info-card-value info-card-value-large">$245 individual</p>
                  <p className="info-card-value">$265 couples &middot; $2,500 EMDR intensive</p>
                </div>
                <div className="info-card-group">
                  <span className="info-card-label">Insurance</span>
                  <p className="info-card-value">Out-of-Network &middot; Superbills provided</p>
                  <p className="info-card-value">Sliding scale available</p>
                </div>
                <Link href="/rates" className="info-card-link">View details &#8594;</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Approach to Therapy */}
      <section className="approach-section">
        <div className="container-narrow">
          <h2>My Approach to Therapy</h2>
          <div className="approach-content">
            <p>
              Healing is innate within everyone. I truly believe&#8212;with every
              bit of me&#8212;that you hold the inner wisdom to know how to heal.
              As you&#39;re reading this, it might feel near impossible to believe
              that. And that is so okay. I will hold this vision for you until
              you discover it to be true.
            </p>
            <p>
              I see myself as a loving companion on your journey back to
              wholeness&#8212;walking alongside you as you reconnect with your
              true self. There is a light within you, a source of strength and
              vitality, that is always present, even during the darkest times.
              My intention is to help you access, nurture, and honor that light.
            </p>
            <p>
              My practice is deeply rooted in attachment-informed EMDR, somatic
              therapy, transpersonal psychology, and mindfulness. As a yoga
              teacher of 8 years, I bring a mindful here-and-now approach to
              our work together. For OCD and anxiety, I use Exposure and Response
              Prevention (ERP)&#8212;the gold standard evidence-based treatment.
            </p>
            <p>
              I work from a holistic, psychodynamic, attachment-based, and
              self-compassion framework. Every person is unique, and I honor
              that by tailoring my approach to what feels right for you.
            </p>
          </div>
          <div className="treatment-tags">
            <span className="treatment-tag">EMDR</span>
            <span className="treatment-tag">Exposure &amp; Response Prevention (ERP)</span>
            <span className="treatment-tag">Somatic Healing</span>
            <span className="treatment-tag">Mindfulness &amp; Meditation</span>
            <span className="treatment-tag">IFS Parts Work</span>
            <span className="treatment-tag">Inner Child Work</span>
            <span className="treatment-tag">Attachment Re-parenting</span>
            <span className="treatment-tag">Guided Visualization</span>
          </div>
        </div>
      </section>

      {/* My Story */}
      <section className="story-section section-alt">
        <div className="container-narrow">
          <p className="section-label">My Story</p>
          <h2>Why I Became a Therapist</h2>
          <div className="story-content">
            <p>
              I bring my whole heart to this work and am deeply committed to
              helping my clients heal and grow. Therapy lights me up, and I
              truly believe in the human potential to transform from the inside
              out.
            </p>
            <p>
              I have gone through my own deep healing journey and continue
              each day to soften into this human experience with love and
              tenderness. That curiosity about the inner world&#8212;and a
              deep passion for guiding others toward their own light&#8212;led
              me from UC Davis to the University of San Francisco for my
              master&#39;s in counseling psychology, and then to advanced EMDR
              and OCD specialty training.
            </p>
            <p>
              Outside of therapy, I love to practice yoga, travel and experience
              different cultures, try out awesome new restaurants around the Bay,
              hike with my puppy, and paint landscapes and flowers.
            </p>
          </div>
          <div className="story-image">
            <img src={elizaOnBench.src} alt="Eliza Pedder sitting on a garden bench" />
          </div>
        </div>
      </section>

      {/* Who I Work With */}
      <section className="who-i-help">
        <div className="container">
          <h2>Who I Work With</h2>
          <div className="client-types">
            <div className="client-type">
              <span className="client-number">01</span>
              <div className="client-content">
                <h3>Highly Sensitive &amp; Deep Feeling Women</h3>
                <p>
                  You feel everything deeply&#8212;the beauty and the pain. You&#39;re
                  intuitive, empathetic, and often overwhelmed by the world. I help
                  you honor your sensitivity as a gift while building tools to feel
                  grounded and steady.
                </p>
              </div>
            </div>
            <div className="client-type">
              <span className="client-number">02</span>
              <div className="client-content">
                <h3>Overthinkers &amp; People Pleasers</h3>
                <p>
                  You&#39;re stuck in mental loops, constantly seeking reassurance,
                  or putting everyone else&#39;s needs before your own. Whether it&#39;s
                  OCD, codependency, or relationship anxiety, I help you break
                  free and come home to yourself.
                </p>
              </div>
            </div>
            <div className="client-type">
              <span className="client-number">03</span>
              <div className="client-content">
                <h3>Women Navigating Hormonal Challenges</h3>
                <p>
                  If PMDD or postpartum struggles are disrupting your life, mood,
                  and relationships, I offer a non-pathologizing space to understand
                  your cycle and build resilience with compassion.
                </p>
              </div>
            </div>
            <div className="client-type">
              <span className="client-number">04</span>
              <div className="client-content">
                <h3>Those Carrying Grief or Trauma</h3>
                <p>
                  Past hurts and devastating losses can linger in the body and mind.
                  Using EMDR and somatic approaches, I help you process what
                  you&#39;re carrying so you can feel at home in your body and life again.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas of Specialization */}
      <section className="specialization-section section-alt">
        <div className="container">
          <p className="section-label">Expertise</p>
          <h2 className="specialization-heading">Areas of Specialization</h2>
          <div className="specialization-grid">
            <div className="specialization-card">
              <svg className="specialization-check" width="18" height="18" viewBox="0 0 22 22" fill="none" aria-hidden="true"><circle cx="11" cy="11" r="10" stroke="currentColor" strokeWidth="1.5"/><path d="M7 11l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              <div>
                <h3>OCD &amp; Anxiety</h3>
                <p>Exposure and Response Prevention (ERP) for intrusive thoughts, Pure OCD, Harm OCD, Relationship OCD, Checking OCD, and Contamination OCD</p>
              </div>
            </div>
            <div className="specialization-card">
              <svg className="specialization-check" width="18" height="18" viewBox="0 0 22 22" fill="none" aria-hidden="true"><circle cx="11" cy="11" r="10" stroke="currentColor" strokeWidth="1.5"/><path d="M7 11l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              <div>
                <h3>PMDD Support</h3>
                <p>Cyclical emotional shifts, nervous system regulation, self-compassion, and strategies for navigating the luteal phase</p>
              </div>
            </div>
            <div className="specialization-card">
              <svg className="specialization-check" width="18" height="18" viewBox="0 0 22 22" fill="none" aria-hidden="true"><circle cx="11" cy="11" r="10" stroke="currentColor" strokeWidth="1.5"/><path d="M7 11l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              <div>
                <h3>Codependency &amp; People Pleasing</h3>
                <p>Boundary work, self-abandonment patterns, reclaiming your sense of self, and learning that your needs matter</p>
              </div>
            </div>
            <div className="specialization-card">
              <svg className="specialization-check" width="18" height="18" viewBox="0 0 22 22" fill="none" aria-hidden="true"><circle cx="11" cy="11" r="10" stroke="currentColor" strokeWidth="1.5"/><path d="M7 11l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              <div>
                <h3>Trauma &amp; EMDR</h3>
                <p>Attachment-focused EMDR, childhood trauma, relational wounds, PTSD, and full-day EMDR intensives</p>
              </div>
            </div>
            <div className="specialization-card">
              <svg className="specialization-check" width="18" height="18" viewBox="0 0 22 22" fill="none" aria-hidden="true"><circle cx="11" cy="11" r="10" stroke="currentColor" strokeWidth="1.5"/><path d="M7 11l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              <div>
                <h3>Grief &amp; Loss</h3>
                <p>Honoring all forms of grief&#8212;loss of a loved one, fertility challenges, life transitions, and the life you longed for</p>
              </div>
            </div>
            <div className="specialization-card">
              <svg className="specialization-check" width="18" height="18" viewBox="0 0 22 22" fill="none" aria-hidden="true"><circle cx="11" cy="11" r="10" stroke="currentColor" strokeWidth="1.5"/><path d="M7 11l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              <div>
                <h3>Couples Therapy</h3>
                <p>Deepening intimacy, positive communication, reducing conflict, and reconnecting on a soul level</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="container">
          <div className="about-cta-content">
            <h2>Ready to begin your healing journey?</h2>
            <p>
              Schedule a complimentary alignment call to connect and see if
              we&#39;re a good fit.
            </p>
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

export default About
