import Link from 'next/link'
import LandingFaqSection from '../components/LandingFaqSection'
import '../components/landing-page.css'

export const metadata = {
  title: 'Trauma Therapy & EMDR',
  description: 'Attachment-focused EMDR and somatic trauma therapy in California. Heal from PTSD, childhood trauma, and relational wounds. Full-day EMDR intensives available. Telehealth throughout California.',
  openGraph: {
    title: 'Trauma Therapy & EMDR | Eliza Pedder, LMFT',
    description: 'Attachment-focused EMDR and somatic trauma therapy. Heal from PTSD, childhood trauma, and relational wounds with gentle, holistic support.',
  },
}

const faqs = [
  {
    question: 'What is EMDR and how does it work?',
    answer: 'EMDR (Eye Movement Desensitization and Reprocessing) is the most researched evidence-based treatment for healing trauma. When we experience trauma, our brains don\u2019t properly store the memories, which can cause us to live our day-to-day lives as if the event is still happening. EMDR helps reprocess these memories so they become properly stored and lose their emotional charge.',
  },
  {
    question: 'Do I have to talk about everything that happened to me?',
    answer: 'No. You don\u2019t have to remember everything from your past to receive healing now. It\u2019s okay if things feel foggy \u2014 often, they do. We work from a here-and-now approach, meaning I don\u2019t go digging up the past just to churn things up. Instead, we look at what is currently affecting your life and work backward from there.',
  },
  {
    question: 'What is an EMDR Intensive?',
    answer: 'An EMDR Intensive is a full-day experience lasting approximately 7.5 hours. I come to you so you can heal from the comfort of your own home. This is ideal if you\u2019re ready for a transformative experience but don\u2019t have time for weekly therapy, or if you want to do serious inner work in a concentrated way.',
  },
  {
    question: 'Is online trauma therapy effective?',
    answer: 'Yes. Research shows that online EMDR and trauma therapy are just as effective as in-person sessions for most people. Many of my clients find that the comfort and privacy of working from home actually supports deeper healing.',
  },
]

function TraumaTherapy() {
  return (
    <div className="landing-page">
      {/* Hero */}
      <section className="lp-hero">
        <div className="container">
          <h1>Trauma Therapy &amp; EMDR</h1>
          <p className="lp-hero-intro">
            Past hurts, relational wounds, and life-shaking experiences can
            linger long after the events themselves. You don&#39;t have to keep
            carrying the weight of what happened. Together, we can help you
            feel steady, grounded, and at home in your body again.
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
            <li>You feel on edge, hypervigilant, or easily startled&#8212;even when you&#39;re safe</li>
            <li>Flashbacks, nightmares, or intrusive memories keep pulling you back into the past</li>
            <li>You feel disconnected from yourself, numb, or like you&#39;re going through the motions</li>
            <li>You struggle to trust people or let anyone get too close</li>
            <li>Anxiety or panic attacks seem to come out of nowhere</li>
            <li>You know logically that something wasn&#39;t your fault, but you can&#39;t stop feeling like it was</li>
            <li>You walk away from difficult experiences carrying a negative belief about yourself or the world</li>
          </ul>
        </div>
      </section>

      {/* How I Can Help */}
      <section className="lp-help">
        <div className="container-narrow">
          <h2>How I Can Help</h2>
          <p>
            When we experience trauma, our brains don&#39;t properly store
            memories during those experiences, which can cause us to live our
            day-to-day lives as if the event is still happening. I use
            attachment-focused EMDR to help reprocess trauma so it becomes
            stored properly in the brain and to desensitize the impact it has
            on your life today.
          </p>
          <p>
            We work from a here-and-now approach, meaning I don&#39;t go
            digging up the past just to churn things up. Instead, we look at
            what is currently affecting your life and work backward from there.
            We move at the pace of safety so you can build confidence over time
            and feel supported throughout the process.
          </p>
          <p>
            I also offer <strong>full-day EMDR intensives</strong>&#8212;a
            transformative deep-dive experience for clients ready for profound
            healing in a concentrated format.
          </p>
        </div>
      </section>

      {/* What to Expect */}
      <section className="lp-expect section-alt">
        <div className="container-narrow">
          <h2>What to Expect</h2>
          <p>
            We&#39;ll start by gently exploring your story, your symptoms, and
            what&#39;s currently affecting your life. From there, I&#39;ll create a
            personalized healing plan&#8212;combining EMDR with somatic therapy,
            mindfulness, and other holistic approaches tailored to you.
          </p>
          <p>
            Sessions are 50 minutes via secure telehealth. Many clients begin
            to notice shifts within the first few weeks, though deeper trauma
            work unfolds over time at the pace that feels right for you.
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
            I offer telehealth trauma therapy and EMDR for clients located
            anywhere in California&#8212;from the San Francisco Bay Area to
            Southern California and beyond. Full-day EMDR intensives are
            available in-person in the Bay Area.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="lp-final-cta">
        <div className="container">
          <h2>Ready to begin your healing journey?</h2>
          <p>
            You don&#39;t have to keep carrying this alone. Schedule a
            complimentary alignment call to explore how trauma therapy can
            support you.
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
              <Link href="/ocd-therapy">OCD &amp; Anxiety</Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TraumaTherapy
