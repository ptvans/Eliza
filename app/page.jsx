import Link from 'next/link'
import elizaPortrait from '../src/photos/eliza-images/Eliza-portrait.webp'
import elizaOnBench from '../src/photos/eliza-images/Eliza-on-bench.webp'
import HomeFaqPreview from './components/HomeFaqPreview'
import './page.css'

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-layout">
            <div className="hero-content">
              <div className="hero-badges">
                <span className="hero-badge">Licensed Marriage &amp; Family Therapist</span>
                <span className="hero-badge hero-badge-accent">&#10003; Accepting New Clients</span>
              </div>
              <h1>
                Take a breath.<br />
                You&#39;ve found a<br />
                safe place to<br />
                begin healing.
              </h1>
              <p className="hero-description">
                A warm, holistic space for highly sensitive women, deep feelers,
                intuitive souls, and overthinkers to take up space, be seen, and
                reconnect with the wisdom that already lives within you.
              </p>
              <div className="hero-ctas">
                <Link
                  href="/new-client"
                  className="btn-primary"
                >
                  Schedule an Alignment Call
                </Link>
                <Link href="/about" className="btn-outline">
                  Learn More About Me
                </Link>
              </div>
            </div>
            <div className="hero-image-wrapper">
              <div className="hero-image-frame">
                <img src={elizaOnBench.src} alt="Eliza Pedder, Licensed Marriage and Family Therapist" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fact Banner */}
      <section className="fact-banner">
        <div className="container">
          <div className="fact-banner-items">
            <div className="fact-banner-item">
              <svg className="fact-check-icon" width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                <circle cx="11" cy="11" r="10" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M7 11l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Licensed in California</span>
            </div>
            <div className="fact-banner-item">
              <svg className="fact-check-icon" width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                <circle cx="11" cy="11" r="10" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M7 11l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Telehealth Throughout California</span>
            </div>
            <div className="fact-banner-item">
              <svg className="fact-check-icon" width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                <circle cx="11" cy="11" r="10" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M7 11l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>LGBTQIA+ Affirming Care</span>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas Section */}
      <section className="focus-areas-section">
        <div className="container">
          <div className="focus-areas-header">
            <p className="section-label">How I Can Help</p>
            <h2>Gentle, evidence-based support for what you&#39;re carrying</h2>
            <p className="focus-areas-intro">
              I offer holistic, mindful therapy tailored to your unique experience.
              You don&#39;t have to navigate this alone.
            </p>
          </div>
          <div className="focus-areas-grid">
            <div className="focus-area-card">
              <div className="focus-area-icon" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M8 12h8M12 8v8"/>
                </svg>
              </div>
              <h3>OCD &amp; Anxiety</h3>
              <p>
                Intrusive thoughts, endless &quot;what ifs,&quot; and exhausting mental loops
                don&#39;t have to run your life. Specialized ERP treatment to help
                you break free.
              </p>
              <Link href="/ocd-therapy" className="link-subtle">Learn more &#8594;</Link>
            </div>

            <div className="focus-area-card">
              <div className="focus-area-icon" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 8v4l2 2"/>
                </svg>
              </div>
              <h3>PMDD Support</h3>
              <p>
                If your cycle brings overwhelming emotions, depression, or
                intrusive thoughts, you&#39;re not alone. A gentle, non-pathologizing
                space to heal.
              </p>
              <Link href="/pmdd-therapy" className="link-subtle">Learn more &#8594;</Link>
            </div>

            <div className="focus-area-card">
              <div className="focus-area-icon" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
              </div>
              <h3>Codependency &amp; People Pleasing</h3>
              <p>
                Constantly putting others first, terrified of disappointing people,
                struggling with boundaries? It&#39;s time to come home to yourself.
              </p>
              <Link href="/codependency-therapy" className="link-subtle">Learn more &#8594;</Link>
            </div>

            <div className="focus-area-card">
              <div className="focus-area-icon" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a7 7 0 0 1 7 7c0 3-2 5.5-4 7.5L12 22l-3-5.5C7 14.5 5 12 5 9a7 7 0 0 1 7-7z"/>
                  <circle cx="12" cy="9" r="2.5"/>
                </svg>
              </div>
              <h3>Trauma &amp; EMDR</h3>
              <p>
                Past hurts can linger long after the events. Together, we create
                a safe space to process, regulate your nervous system, and feel
                at home in your body again.
              </p>
              <Link href="/trauma-therapy" className="link-subtle">Learn more &#8594;</Link>
            </div>

            <div className="focus-area-card">
              <div className="focus-area-icon" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22c-4.97 0-9-2.69-9-6v-4c0-3.31 4.03-6 9-6s9 2.69 9 6v4c0 3.31-4.03 6-9 6z"/>
                  <path d="M12 14c2.76 0 5-1.12 5-2.5S14.76 9 12 9 7 10.12 7 11.5 9.24 14 12 14z"/>
                </svg>
              </div>
              <h3>Grief &amp; Loss</h3>
              <p>
                There is no right way to grieve. I offer a compassionate space
                to honor your loss, express what needs to be expressed, and
                learn to carry your loved one forward.
              </p>
              <Link href="/grief-therapy" className="link-subtle">Learn more &#8594;</Link>
            </div>

            <div className="focus-area-card">
              <div className="focus-area-icon" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <h3>Couples Therapy</h3>
              <p>
                Reconnect with your partner on a deeper level. I help couples
                reduce conflict, release resentment, and foster intimacy rooted
                in love and mutual respect.
              </p>
              <Link href="/couples-therapy" className="link-subtle">Learn more &#8594;</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Vimeo Section */}
      <section className="vimeo-section">
        <div className="container">
          <iframe title="vimeo-player" src="https://player.vimeo.com/video/1140216553?h=ec1d95b9da" width="100%" height="360" frameborder="0" referrerpolicy="strict-origin-when-cross-origin" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"   allowfullscreen></iframe>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section section-alt">
        <div className="container">
          <div className="process-header">
            <p className="section-label">Your Path Forward</p>
            <h2>What to expect when we work together</h2>
            <p className="process-intro">
              Taking the first step can feel vulnerable. Here&#39;s how
              the journey begins.
            </p>
          </div>
          <div className="process-steps">
            <div className="process-step">
              <div className="process-step-icon" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <h3>Schedule an Alignment Call</h3>
              <p>
                A complimentary 20-minute call to connect, explore what
                you&#39;re looking for, and see if we&#39;re aligned.
              </p>
            </div>
            <div className="process-step">
              <div className="process-step-icon" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                </svg>
              </div>
              <h3>First Session Together</h3>
              <p>
                A gentle space to share what brings you here, what you&#39;re
                carrying, and what you&#39;re hoping to find.
              </p>
            </div>
            <div className="process-step">
              <div className="process-step-icon" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                  <line x1="8" y1="12" x2="16" y2="12"/>
                  <line x1="12" y1="8" x2="12" y2="16"/>
                </svg>
              </div>
              <h3>A Personalized Path</h3>
              <p>
                Together, we&#39;ll create a healing plan using EMDR, ERP,
                somatic work, and mindfulness&#8212;tailored to you.
              </p>
            </div>
            <div className="process-step">
              <div className="process-step-icon" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                </svg>
              </div>
              <h3>Healing &amp; Growth</h3>
              <p>
                Regular sessions where you&#39;ll reconnect with your inner
                strength and begin to feel steady, grounded, and whole.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="about-preview-section">
        <div className="container">
          <div className="about-preview-layout">
            <div className="about-preview-content">
              <p className="section-label">About</p>
              <h2>Meet Eliza Pedder</h2>
              <p>
                I&#39;m a licensed marriage and family therapist with a warm,
                holistic approach rooted in attachment-focused EMDR, somatic
                therapy, and mindfulness. I specialize in helping highly sensitive
                women, deep feelers, and overthinkers heal from within.
              </p>
              <p>
                I believe healing is innate within everyone. My intention is to
                gently guide you toward uncovering the wisdom that already lives
                inside you&#8212;that light within you, that source of strength,
                that is always present even during the darkest times.
              </p>
              <Link href="/about" className="link-arrow">
                Learn more about my background &#8594;
              </Link>
            </div>
            <div className="about-preview-image">
              <div className="about-preview-image-frame">
                <img src={elizaPortrait.src} alt="Eliza Pedder sitting on a garden bench" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview Section */}
      <section className="faq-preview-section section-alt">
        <div className="container">
          <div className="faq-preview-header">
            <p className="section-label">Common Questions</p>
            <h2>You might be wondering...</h2>
          </div>
          <div className="faq-preview-list">
            <HomeFaqPreview />
          </div>
          <div className="faq-preview-footer">
            <Link href="/faq" className="link-arrow">View All FAQs &#8594;</Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="final-cta-section">
        <div className="container">
          <div className="final-cta">
            <h2>Ready to take a breath and begin?</h2>
            <p>
              You don&#39;t have to carry everything alone. Schedule a
              complimentary 20-minute alignment call to see if we&#39;re
              a good fit.
            </p>
            <Link
              href="/new-client"
              className="btn-primary"
            >
              Schedule Your Alignment Call
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
