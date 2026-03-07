import Link from 'next/link'
import LandingFaqSection from '../components/LandingFaqSection'
import '../components/landing-page.css'

export const metadata = {
  title: 'PMDD Therapy & Support',
  description: 'Gentle, non-pathologizing therapy for Premenstrual Dysphoric Disorder (PMDD). Nervous system regulation, self-compassion, and emotional resilience. Telehealth throughout California.',
  openGraph: {
    title: 'PMDD Therapy & Support | Eliza Pedder, LMFT',
    description: 'Gentle, non-pathologizing therapy for PMDD. Nervous system regulation, self-compassion, and emotional resilience throughout California.',
  },
}

const faqs = [
  {
    question: 'What exactly is PMDD?',
    answer: 'PMDD (Premenstrual Dysphoric Disorder) is a severe form of premenstrual syndrome marked by intense emotional and physical symptoms that occur in the 1\u20132 weeks before menstruation, significantly disrupt daily life, and typically improve or resolve shortly after menstruation begins. It\u2019s more than just PMS \u2014 it can profoundly affect your mood, identity, relationships, and self-trust.',
  },
  {
    question: 'How is PMDD therapy different from regular therapy?',
    answer: 'PMDD-informed therapy takes your cycle into account as a fundamental part of treatment. I help you track your cycle, understand the power hidden in each phase, and build strategies to navigate the month with more ease, self-compassion, and confidence. We also address the systemic dimension \u2014 where women\u2019s pain is often dismissed or minimized.',
  },
  {
    question: 'Can therapy really help with PMDD?',
    answer: 'Yes. While PMDD has a biological component, therapy can be deeply supportive in building tools for nervous system regulation, self-compassion, boundary-setting, and emotional resilience. Healing happens through being deeply seen, supported, and understood \u2014 and through finding your voice to name your needs.',
  },
  {
    question: 'I\u2019m not sure if I have PMDD or just bad PMS. Can you help me figure it out?',
    answer: 'Absolutely. Many women aren\u2019t sure where they fall on the spectrum. In our work together, we can explore your symptoms, their timing, and their impact on your life. I can also help you track patterns and connect with additional resources if needed.',
  },
]

function PmddTherapy() {
  return (
    <div className="landing-page">
      {/* Hero */}
      <section className="lp-hero">
        <div className="container">
          <h1>PMDD Support</h1>
          <p className="lp-hero-intro">
            If your menstrual cycle brings intense emotional ups and downs,
            depression, fatigue, irritability, anxiety, or intrusive thoughts
            that feel overwhelming&#8212;you&#39;re not alone, and there is
            absolutely nothing wrong with you.
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
            <li>You experience intense mood shifts, depression, or rage in the weeks before your period</li>
            <li>You feel like a completely different person during the luteal phase</li>
            <li>Anxiety or intrusive thoughts intensify at certain times of the month</li>
            <li>Your relationships suffer from the cyclical emotional storms</li>
            <li>You feel isolated because no one seems to understand what you&#39;re going through</li>
            <li>You&#39;ve been dismissed by doctors or told &quot;it&#39;s just PMS&quot;</li>
            <li>You struggle with self-trust because your inner world feels so unpredictable</li>
          </ul>
        </div>
      </section>

      {/* How I Can Help */}
      <section className="lp-help">
        <div className="container-narrow">
          <h2>How I Can Help</h2>
          <p>
            I understand how isolating, confusing, exhausting, and overwhelming
            the luteal phase can feel, and how deeply PMDD can affect your mood,
            identity, relationships, and self-trust.
          </p>
          <p>
            I provide a gentle, non-pathologizing space to explore your lived
            experience of PMDD, helping you make sense of cyclical emotional
            shifts while building tools for nervous system regulation,
            self-compassion, and emotional resilience.
          </p>
          <p>
            PMDD is not only a personal struggle, but a systemic one&#8212;where
            women&#39;s pain is often dismissed, minimized, or misunderstood.
            Healing happens through being deeply seen, supported, and
            understood, and through finding your voice&#8212;both in session, to
            express what has gone unspoken, and outside of therapy, to clearly
            name your needs and set boundaries that honor your wellbeing.
          </p>
          <p>
            I help you track your cycle, understand and unlock the power hidden
            in each phase, and build strategies to navigate the month with more
            ease, self-compassion, and confidence.
          </p>
        </div>
      </section>

      {/* What to Expect */}
      <section className="lp-expect section-alt">
        <div className="container-narrow">
          <h2>What to Expect</h2>
          <p>
            We&#39;ll start by exploring your cycle, your symptoms, and how
            PMDD is showing up in your life and relationships. I&#39;ll help
            you build awareness of your patterns and create personalized
            strategies using somatic therapy, mindfulness, and self-compassion
            practices.
          </p>
          <p>
            Sessions are 50 minutes via secure telehealth. Our work together
            will honor the cyclical nature of your experience, meeting you
            where you are in each phase of your journey.
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
            I offer telehealth PMDD therapy for clients located anywhere in
            California&#8212;from the San Francisco Bay Area to Southern
            California and everywhere in between.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="lp-final-cta">
        <div className="container">
          <h2>You deserve to feel supported through every phase</h2>
          <p>
            Your experience is valid, and you don&#39;t have to navigate this
            alone. Schedule a complimentary alignment call to explore how
            PMDD-informed therapy can help.
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

export default PmddTherapy
