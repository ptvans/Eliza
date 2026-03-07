import Link from 'next/link'
import LandingFaqSection from '../components/LandingFaqSection'
import '../components/landing-page.css'

export const metadata = {
  title: 'Couples Therapy & Relationship Counseling',
  description: 'Couples therapy to deepen intimacy, improve communication, reduce conflict, and reconnect on a soul level. Telehealth throughout California.',
  openGraph: {
    title: 'Couples Therapy & Relationship Counseling | Eliza Pedder, LMFT',
    description: 'Couples therapy to deepen intimacy, improve communication, reduce conflict, and reconnect on a soul level.',
  },
}

const faqs = [
  {
    question: 'Do both partners need to want therapy for it to work?',
    answer: 'Ideally, yes \u2014 but it\u2019s common for one partner to be more enthusiastic than the other. What matters is that both of you are willing to show up and participate honestly. Many reluctant partners find the process more meaningful than they expected once they experience the first session.',
  },
  {
    question: 'What if we\u2019re not sure we want to stay together?',
    answer: 'That\u2019s okay. Couples therapy isn\u2019t about forcing a relationship to work \u2014 it\u2019s about helping you get clarity and deeper understanding. Sometimes that means rebuilding and strengthening the connection. Sometimes it means realizing you\u2019re on different paths. Either way, therapy can help you navigate with honesty and compassion.',
  },
  {
    question: 'How is couples therapy different from individual therapy?',
    answer: 'In couples therapy, the relationship is the client. We focus on the patterns between you \u2014 communication styles, conflict cycles, attachment dynamics \u2014 rather than individual issues alone. That said, I may recommend individual sessions alongside couples work if deeper personal healing would support the relationship.',
  },
  {
    question: 'Do you work with all types of relationships?',
    answer: 'Absolutely. I warmly welcome couples of all backgrounds, identities, and relationship structures. My approach is inclusive, affirming, and focused on what serves your specific relationship.',
  },
]

function CouplesTherapy() {
  return (
    <div className="landing-page">
      {/* Hero */}
      <section className="lp-hero">
        <div className="container">
          <h1>Couples Therapy &amp; Relationship Counseling</h1>
          <p className="lp-hero-intro">
            Relationships are among our greatest teachers, and often the places
            where our deepest wounds are revealed. Within the sacred space of
            connection, we are invited to heal and grow together.
          </p>
          <Link
            href="/new-client"
            className="btn-primary"
          >
            Schedule an Alignment Call
          </Link>
        </div>
      </section>

      {/* Do You Recognize Yourselves? */}
      <section className="lp-recognize section-alt">
        <div className="container-narrow">
          <h2>Do You Recognize Yourselves?</h2>
          <ul className="lp-recognize-list">
            <li>You care deeply about each other, but your connection has been diminished by the routines of everyday life</li>
            <li>The same arguments keep coming up, and nothing ever gets truly resolved</li>
            <li>You feel more like roommates than partners</li>
            <li>Intimacy&#8212;emotional or physical&#8212;has faded and you don&#39;t know how to get it back</li>
            <li>Resentment has built up over time and feels hard to release</li>
            <li>You avoid difficult conversations because they always escalate</li>
            <li>You&#39;re navigating a major transition&#8212;new baby, career change, or life shift</li>
          </ul>
        </div>
      </section>

      {/* How I Can Help */}
      <section className="lp-help">
        <div className="container-narrow">
          <h2>How I Can Help</h2>
          <p>
            I often work with couples who care deeply for one another, but whose
            connection has been diminished by the routines of everyday life over
            the years. Within the safety of the therapeutic space, I help
            partners connect more deeply, explore how they&#39;ve changed over
            time, and learn new ways of relating with honesty, empathy, and depth.
          </p>
          <p>
            My work supports couples in reducing conflict, releasing resentment,
            and fostering greater intimacy&#8212;both emotional and spiritual.
            Together, we explore how to nurture a connection rooted in love,
            mutual respect, and shared growth, allowing both partners to feel
            seen, heard, and deeply connected.
          </p>
        </div>
      </section>

      {/* What to Expect */}
      <section className="lp-expect section-alt">
        <div className="container-narrow">
          <h2>What to Expect</h2>
          <p>
            We&#39;ll begin with an initial session where both partners share
            their perspective and hopes for the work. From there, I&#39;ll
            develop a path forward focused on your specific needs&#8212;whether
            that&#39;s improving communication, rebuilding trust, or deepening
            intimacy.
          </p>
          <p>
            Sessions are 50 minutes via secure telehealth. Many couples start
            with weekly sessions and transition to biweekly as they build new
            patterns of connection.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="lp-faq">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <LandingFaqSection faqs={faqs} />
        </div>
      </section>

      {/* Availability */}
      <section className="lp-availability section-alt">
        <div className="container-narrow">
          <h2>Where I See Couples</h2>
          <p>
            I offer telehealth couples therapy for partners located anywhere in
            California&#8212;from the San Francisco Bay Area to Southern
            California and everywhere in between.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="lp-final-cta">
        <div className="container">
          <h2>Ready to reconnect?</h2>
          <p>
            Your relationship is worth tending to. Schedule a complimentary
            alignment call to explore how couples therapy can support you
            both.
          </p>
          <Link
            href="/new-client"
            className="btn-primary"
          >
            Schedule Your Alignment Call
          </Link>
          <div className="lp-links">
            <p>
              <Link href="/services">All Therapy Services</Link> &#183;{' '}
              <Link href="/about">About Eliza</Link> &#183;{' '}
              <Link href="/codependency-therapy">Codependency &amp; People Pleasing</Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CouplesTherapy
