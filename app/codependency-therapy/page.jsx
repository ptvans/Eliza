import Link from 'next/link'
import LandingFaqSection from '../components/LandingFaqSection'
import '../components/landing-page.css'

export const metadata = {
  title: 'Codependency & People Pleasing Therapy',
  description: 'Therapy for codependency, people pleasing, boundary difficulties, and self-abandonment. Reclaim your sense of self with compassionate, holistic support. Telehealth throughout California.',
  openGraph: {
    title: 'Codependency & People Pleasing Therapy | Eliza Pedder, LMFT',
    description: 'Therapy for codependency, people pleasing, boundary difficulties, and self-abandonment. Reclaim your sense of self with compassionate support.',
  },
}

const faqs = [
  {
    question: 'How do I know if I\u2019m codependent?',
    answer: 'If you consistently put other people\u2019s needs above your own, feel terrified of disappointing others, struggle to set boundaries, or chronically self-abandon, you may be navigating codependency. It often develops in childhood as a survival strategy \u2014 being the "good girl" or the caretaker \u2014 but over time it becomes exhausting and disconnecting.',
  },
  {
    question: 'Is people pleasing really that serious?',
    answer: 'Yes. Chronic people pleasing is often a sign of deeper patterns rooted in attachment wounds, childhood experiences, or relational trauma. When you consistently abandon your own needs to keep others comfortable, it takes a real toll on your sense of self, your relationships, and your wellbeing.',
  },
  {
    question: 'Can I learn to set boundaries without pushing people away?',
    answer: 'Absolutely. Boundaries are loving \u2014 for you and for your relationships. In our work together, you\u2019ll learn that setting boundaries actually creates space for deeper, more authentic connection. It\u2019s not about building walls \u2014 it\u2019s about honoring your needs so relationships can feel balanced and fulfilling.',
  },
  {
    question: 'Will therapy help if I\u2019ve always been this way?',
    answer: 'Yes. These patterns often feel like "just who you are," but they\u2019re actually learned strategies that once helped you survive. Therapy helps you understand where they came from, gently untangle them, and discover who you are underneath the caretaking and people pleasing.',
  },
]

function CodependencyTherapy() {
  return (
    <div className="landing-page">
      {/* Hero */}
      <section className="lp-hero">
        <div className="container">
          <h1>Codependency &amp; People Pleasing Support</h1>
          <p className="lp-hero-intro">
            If you&#39;re constantly putting other people&#39;s needs above your
            own, feel terrified of disappointing others, or struggle to set
            boundaries&#8212;this space is for you. It&#39;s time to come home
            to yourself.
          </p>
          <Link
            href="/new-client"
            className="btn-primary"
          >
            Schedule an Alignment Call
          </Link>
        </div>
      </section>

      {/* Do You Recognize Yourself? */}
      <section className="lp-recognize section-alt">
        <div className="container-narrow">
          <h2>Do You Recognize Yourself?</h2>
          <ul className="lp-recognize-list">
            <li>You put everyone else&#39;s needs before your own and feel guilty when you don&#39;t</li>
            <li>You&#39;re terrified of conflict, disappointing people, or being seen as &quot;selfish&quot;</li>
            <li>You grew up being rewarded for being the &quot;good girl&quot; but started to resent it</li>
            <li>The moment you have needs, you notice people becoming upset with you</li>
            <li>You chronically self-abandon because having needs feels unsafe</li>
            <li>You struggle to know what you actually want or who you really are</li>
            <li>Your relationships feel one-sided&#8212;you give everything and receive little in return</li>
          </ul>
        </div>
      </section>

      {/* How I Can Help */}
      <section className="lp-help">
        <div className="container-narrow">
          <h2>How I Can Help</h2>
          <p>
            These patterns may have worked at one point in your life&#8212;but
            if you&#39;re reading this right now, my guess is that they&#39;re no
            longer working, and your inner self is screaming for you.
          </p>
          <p>
            I help you understand these patterns, learn that boundaries are
            loving, reclaim your sense of self and authenticity, and nurture
            yourself while still being compassionate toward others&#8212;so
            relationships can feel balanced, fulfilling, and authentic.
          </p>
          <p>
            Using attachment re-parenting, inner child work, somatic therapy,
            and mindfulness, we gently untangle the patterns that keep you
            stuck in the caretaking role. I really want my clients to walk
            away from therapy with the deep belief that <em>you are your
            number one priority</em>&#8212;and that &quot;you need you.&quot;
          </p>
        </div>
      </section>

      {/* What to Expect */}
      <section className="lp-expect section-alt">
        <div className="container-narrow">
          <h2>What to Expect</h2>
          <p>
            We&#39;ll start by gently exploring your relationship patterns,
            your history, and the beliefs that drive your people-pleasing.
            From there, we&#39;ll work on building your relationship with
            yourself&#8212;learning to listen to your own needs, set loving
            boundaries, and show up authentically.
          </p>
          <p>
            Sessions are 50 minutes via secure telehealth. This work is
            often deeply transformative&#8212;clients describe feeling like
            they&#39;re finally meeting themselves for the first time.
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
          <h2>Where I See Clients</h2>
          <p>
            I offer telehealth therapy for codependency and people pleasing
            for clients located anywhere in California&#8212;from the San
            Francisco Bay Area to Southern California and everywhere in between.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="lp-final-cta">
        <div className="container">
          <h2>Ready to come home to yourself?</h2>
          <p>
            You deserve relationships that nourish you&#8212;starting with
            the one you have with yourself. Schedule a complimentary alignment
            call to begin.
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
              <Link href="/trauma-therapy">Trauma &amp; EMDR</Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CodependencyTherapy
