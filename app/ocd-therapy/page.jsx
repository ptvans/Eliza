import Link from 'next/link'
import LandingFaqSection from '../components/LandingFaqSection'
import '../components/landing-page.css'

export const metadata = {
  title: 'OCD & Anxiety Therapy | ERP Treatment',
  description: 'Specialized OCD therapy using Exposure and Response Prevention (ERP). Treatment for intrusive thoughts, Pure OCD, Harm OCD, Relationship OCD, and anxiety. Telehealth throughout California.',
  openGraph: {
    title: 'OCD & Anxiety Therapy | Eliza Pedder, LMFT',
    description: 'Specialized OCD therapy using Exposure and Response Prevention (ERP). Treatment for intrusive thoughts, rumination, and compulsive patterns.',
  },
}

const faqs = [
  {
    question: 'How long does it take to get an OCD diagnosis?',
    answer: 'On average, it can take up to 14 years to receive a proper OCD diagnosis, even if you\u2019ve been in therapy that whole time. OCD is widely misunderstood and often missed. If you suspect you may have OCD, working with a therapist who specializes in it can make all the difference.',
  },
  {
    question: 'What is ERP and how does it work?',
    answer: 'Exposure and Response Prevention (ERP) is the gold standard evidence-based treatment for OCD. It involves gently exposing yourself to feared scenarios to teach your brain that 99.999% of the time, the scary thing won\u2019t happen \u2014 and even if it did, you would cope far better than you think. We move at a pace that feels safe and supportive.',
  },
  {
    question: 'My intrusive thoughts are really disturbing. Does that mean something about me?',
    answer: 'No. Intrusive thoughts are just thoughts \u2014 they don\u2019t reflect your character, desires, or values. In fact, the more disturbing a thought feels, the more it usually means you\u2019re a thoughtful, caring person. OCD latches onto the things you care about most. This is one of the most important things we\u2019ll work on together.',
  },
  {
    question: 'What types of OCD do you work with?',
    answer: 'I work with many subtypes of OCD, including Pure OCD (primarily obsessions and intrusive thoughts), Checking OCD, Suicidal OCD, Harm OCD, Relationship OCD, and Contamination OCD. Each presentation is unique, and I tailor the approach to your specific experience.',
  },
]

function OcdTherapy() {
  return (
    <div className="landing-page">
      {/* Hero */}
      <section className="lp-hero">
        <div className="container">
          <h1>OCD &amp; Anxiety Support</h1>
          <p className="lp-hero-intro">
            You are not your thoughts. Intrusive images, endless &quot;what
            ifs,&quot; and exhausting mental loops can feel really scary&#8212;especially
            for sensitive, intuitive women who feel everything deeply. You are
            not crazy, and there is real help.
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
            <li>You have unwanted, disturbing thoughts that you can&#39;t stop no matter how hard you try</li>
            <li>You get stuck in mental loops&#8212;replaying events, analyzing conversations, or seeking certainty</li>
            <li>You perform rituals or mental checks to manage anxiety (counting, re-reading, reassurance-seeking)</li>
            <li>You avoid certain situations, people, or topics because they trigger obsessive thoughts</li>
            <li>You know your fears are irrational, but you can&#39;t stop acting on them</li>
            <li>You spend hours each day on compulsions or mental rituals that others don&#39;t even notice</li>
            <li>You feel ashamed of your thoughts and worry about what they mean about you</li>
          </ul>
        </div>
      </section>

      {/* How I Can Help */}
      <section className="lp-help">
        <div className="container-narrow">
          <h2>How I Can Help</h2>
          <p>
            Obsessive Compulsive Disorder is a crippling experience and requires
            proper treatment to actually start feeling better. I use Exposure and
            Response Prevention (ERP)&#8212;the gold standard, evidence-based
            treatment for OCD&#8212;to help break the OCD cycle.
          </p>
          <p>
            ERP involves gently exposing yourself to feared scenarios to teach
            your brain that the scary thing most likely won&#39;t happen&#8212;and
            even if it did, you would be able to cope far better than you think.
            We move at the pace of safety, building your confidence over time.
          </p>
          <p>
            I work with different subtypes of OCD, including Pure OCD (primarily
            obsessions and intrusive thoughts), Checking OCD, Suicidal OCD, Harm
            OCD, Relationship OCD, and Contamination OCD.
          </p>
        </div>
      </section>

      {/* What to Expect */}
      <section className="lp-expect section-alt">
        <div className="container-narrow">
          <h2>What to Expect</h2>
          <p>
            We&#39;ll begin with a detailed assessment of your symptoms&#8212;the
            obsessions, compulsions, and avoidance patterns that make up your OCD.
            From there, I&#39;ll create a treatment approach tailored to your
            specific presentation, always moving at a pace that feels safe.
          </p>
          <p>
            Sessions are 50 minutes via secure telehealth. OCD treatment is
            typically focused and structured, and many clients begin to feel
            meaningful relief as we work together.
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
            I offer telehealth OCD therapy for clients located anywhere in
            California&#8212;from the San Francisco Bay Area to Southern
            California and everywhere in between.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="lp-final-cta">
        <div className="container">
          <h2>Ready to take your life back from OCD?</h2>
          <p>
            You don&#39;t have to keep living at the mercy of intrusive thoughts.
            Schedule a complimentary alignment call to talk about what you&#39;re
            experiencing and how specialized treatment can help.
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

export default OcdTherapy
