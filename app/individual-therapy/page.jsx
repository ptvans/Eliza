import Link from 'next/link'
import './page.css'

export const metadata = {
  title: 'Individual Therapy | EMDR, ERP, Somatic Healing & Mindfulness',
  description: 'Holistic individual therapy for OCD, anxiety, trauma, PMDD, codependency, and grief. EMDR, ERP, somatic therapy, and mindfulness for highly sensitive women throughout California.',
  openGraph: {
    title: 'Individual Therapy | EMDR, ERP, Somatic Healing & Mindfulness',
    description: 'Holistic individual therapy for OCD, anxiety, trauma, PMDD, codependency, and grief. EMDR, ERP, somatic therapy, and mindfulness for highly sensitive women.',
  },
}

function IndividualTherapy() {
  return (
    <div className="individual-therapy-page">
      {/* Hero */}
      <section className="it-hero">
        <div className="container">
          <h1>Individual Therapy</h1>
          <p className="it-intro">
            A warm, holistic space to heal, grow, and reconnect with the wisdom
            and strength that already live within you&#8212;at your own pace,
            with gentle, compassionate support.
          </p>
        </div>
      </section>

      {/* What to Expect */}
      <section className="it-expect section-alt">
        <div className="container-narrow">
          <h2>What to Expect</h2>
          <p>
            Individual therapy with me is a collaborative, heart-centered process.
            Together, we create a safe space to explore what you&#39;re carrying,
            process difficult experiences, regulate your nervous system, and
            reconnect with your inner strength.
          </p>
          <p>
            I draw from EMDR, ERP, somatic therapy, mindfulness, IFS parts work,
            and inner child work&#8212;tailoring my approach to what feels right
            for you. Healing isn&#39;t one-size-fits-all, and I honor your unique
            journey.
          </p>
        </div>
      </section>

      {/* Specialties - Links to 6 pages */}
      <section className="it-specialties">
        <div className="container">
          <h2>Areas of Focus</h2>
          <div className="specialties-cards">
            <Link href="/ocd-therapy" className="specialty-link-card">
              <h3>OCD &amp; Anxiety</h3>
              <p>Specialized ERP for intrusive thoughts, mental loops, and compulsive patterns.</p>
              <span className="link-subtle">Learn more &#8594;</span>
            </Link>
            <Link href="/pmdd-therapy" className="specialty-link-card">
              <h3>PMDD Support</h3>
              <p>Gentle support for cyclical emotional shifts, nervous system regulation, and self-compassion.</p>
              <span className="link-subtle">Learn more &#8594;</span>
            </Link>
            <Link href="/codependency-therapy" className="specialty-link-card">
              <h3>Codependency &amp; People Pleasing</h3>
              <p>Boundary work, reclaiming your sense of self, and learning that your needs matter.</p>
              <span className="link-subtle">Learn more &#8594;</span>
            </Link>
            <Link href="/trauma-therapy" className="specialty-link-card">
              <h3>Trauma &amp; EMDR</h3>
              <p>Attachment-focused EMDR and somatic therapy for trauma, PTSD, and relational wounds.</p>
              <span className="link-subtle">Learn more &#8594;</span>
            </Link>
            <Link href="/grief-therapy" className="specialty-link-card">
              <h3>Grief &amp; Loss</h3>
              <p>Honoring all forms of grief with compassion, somatic support, and creative expression.</p>
              <span className="link-subtle">Learn more &#8594;</span>
            </Link>
            <Link href="/couples-therapy" className="specialty-link-card">
              <h3>Couples Therapy</h3>
              <p>Deepening intimacy, reducing conflict, and reconnecting on a soul level.</p>
              <span className="link-subtle">Learn more &#8594;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Modalities */}
      <section className="it-emdr section-alt">
        <div className="container-narrow">
          <h2>Therapeutic Modalities</h2>
          <p>
            I draw from a range of holistic, evidence-based approaches and
            tailor my work to what resonates with you:
          </p>
          <ul className="emdr-benefits-list">
            <li>EMDR (Eye Movement Desensitization and Reprocessing)</li>
            <li>Exposure and Response Prevention (ERP)</li>
            <li>Somatic Healing</li>
            <li>Mindfulness &amp; Meditation</li>
            <li>IFS Parts Work</li>
            <li>Inner Child Work &amp; Attachment Re-parenting</li>
            <li>Breathwork &amp; Guided Visualization</li>
            <li>Expressive Arts &amp; Movement</li>
          </ul>
        </div>
      </section>

      {/* Availability */}
      <section className="it-availability">
        <div className="container">
          <h2>How We Can Work Together</h2>
          <div className="it-availability-grid">
            <div className="it-availability-item">
              <h3>Telehealth</h3>
              <p>Secure video sessions throughout California</p>
            </div>
            <div className="it-availability-item">
              <h3>EMDR Intensives</h3>
              <p>Full-day in-home sessions available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="it-getting-started section-alt">
        <div className="container">
          <h2>How to Get Started</h2>
          <div className="steps-grid">
            <div className="step-item">
              <span className="step-num">1</span>
              <h3>Alignment Call</h3>
              <p>A complimentary 20-minute call to connect and explore what you&#39;re looking for.</p>
            </div>
            <div className="step-item">
              <span className="step-num">2</span>
              <h3>Book Your First Session</h3>
              <p>Choose a time that works for you via secure telehealth.</p>
            </div>
            <div className="step-item">
              <span className="step-num">3</span>
              <h3>Begin Your Journey</h3>
              <p>Start reconnecting with the healing and wholeness that already live within you.</p>
            </div>
          </div>
          <div className="it-cta">
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

export default IndividualTherapy
