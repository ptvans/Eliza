import Link from 'next/link'
import LandingFaqSection from '../components/LandingFaqSection'
import '../components/landing-page.css'

export const metadata = {
  title: 'Grief Therapy & Loss Support',
  description: 'Compassionate grief therapy for life-altering loss. Honoring all forms of grief with somatic support, creative expression, and meaningful rituals. Telehealth throughout California.',
  openGraph: {
    title: 'Grief Therapy & Loss Support | Eliza Pedder, LMFT',
    description: 'Compassionate grief therapy for life-altering loss. Honoring all forms of grief with somatic support, creative expression, and meaningful rituals.',
  },
}

const faqs = [
  {
    question: 'How long should I wait after a loss before starting therapy?',
    answer: 'There\u2019s no right timeline. Some people seek support immediately, while others come months or years later. Grief doesn\u2019t follow a schedule, and neither does healing. Whenever you\u2019re ready, I\u2019m here.',
  },
  {
    question: 'Is grief therapy only for people who\u2019ve lost someone to death?',
    answer: 'Not at all. Grief shows up in many forms \u2014 fertility challenges, divorce, life transitions, loss of identity, a life you longed for but never had, a childhood you wish was different, an emotionally unavailable parent or partner, and so much more. I welcome all of it.',
  },
  {
    question: 'Will therapy try to make me "get over" my grief?',
    answer: 'Never. I believe grief is not something to fix or get rid of, but rather something to be honored, expressed, and walked alongside. It is a reflection of the deep love you\u2019ve shared, and that love and connection can endure beyond physical form.',
  },
  {
    question: 'What makes your approach to grief therapy different?',
    answer: 'I bring a holistic, somatic, and spiritually-open approach to grief work. I support clients in creating meaningful rituals to honor their loved ones, offer creative outlets to release stuck emotions, and use somatic techniques to regulate the nervous system. Together, we explore how to find meaning in what can feel like a meaningless reality.',
  },
]

function GriefTherapy() {
  return (
    <div className="landing-page">
      {/* Hero */}
      <section className="lp-hero">
        <div className="container">
          <h1>Grief &amp; Loss Support</h1>
          <p className="lp-hero-intro">
            Losing someone you love can turn your world upside down. Grief often
            shows up in ways no one expects&#8212;intense sadness, guilt, anger,
            or feeling completely stuck. There is no right way to grieve, and you
            don&#39;t have to do it alone.
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
            <li>You&#39;ve experienced a devastating, life-shattering loss and feel overwhelmed by grief</li>
            <li>You feel stuck, numb, or like you&#39;re going through the motions</li>
            <li>Intense sadness, guilt, anger, or confusion come in waves that feel unmanageable</li>
            <li>People around you don&#39;t seem to understand the depth of what you&#39;re carrying</li>
            <li>You&#39;re grieving something other than a death&#8212;a relationship, a life you imagined, or a childhood you deserved</li>
            <li>You don&#39;t know how to carry this person&#39;s memory while also learning to live again</li>
            <li>You feel pressure to &quot;move on&quot; but don&#39;t know how&#8212;or if you even want to</li>
          </ul>
        </div>
      </section>

      {/* How I Can Help */}
      <section className="lp-help">
        <div className="container-narrow">
          <h2>How I Can Help</h2>
          <p>
            I know this personally. Three years ago, I unexpectedly lost my
            brother, and I understand how raw, gut-wrenching, life-shattering,
            confusing, and disorienting grief can feel. I provide a safe,
            compassionate space to process loss, honor your feelings, and find
            ways to carry your loved one while learning to live with a broken
            heart.
          </p>
          <p>
            My approach is rooted in the belief that there is no right way to
            grieve and no timeline for when you should &quot;move on.&quot; Grief
            is not something to fix or get rid of, but rather something to be
            honored, expressed, and walked alongside. It is a reflection of the
            deep love we&#39;ve shared, and I guide clients in recognizing that
            this love and connection can endure beyond physical form.
          </p>
          <p>
            I support clients in creating meaningful rituals to honor their loved
            ones, offer creative outlets to help release stuck emotions, and use
            somatic techniques to regulate the nervous system. Together, we
            explore how to find meaning in what can feel like a meaningless
            reality.
          </p>
        </div>
      </section>

      {/* What to Expect */}
      <section className="lp-expect section-alt">
        <div className="container-narrow">
          <h2>What to Expect</h2>
          <p>
            We&#39;ll start by simply being together with your grief&#8212;no
            rush, no agenda, just a safe space to feel whatever needs to be
            felt. From there, we&#39;ll gently explore what you&#39;re carrying
            and what support would be most meaningful for you.
          </p>
          <p>
            Sessions are 50 minutes via secure telehealth. Grief work moves at
            its own pace&#8212;sometimes quietly, sometimes intensely. I&#39;ll
            be right there with you through all of it.
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
            I offer telehealth grief therapy for clients located anywhere in
            California&#8212;from the San Francisco Bay Area to Southern
            California and everywhere in between.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="lp-final-cta">
        <div className="container">
          <h2>You don&#39;t have to carry this alone</h2>
          <p>
            Your grief deserves to be honored. Schedule a complimentary
            alignment call to connect and explore how therapy can support you
            through this.
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

export default GriefTherapy
