import Link from 'next/link'
import pondWithLilyPads from '../../src/photos/eliza-images/pond-with-lily-pads.webp'
import './page.css'

export const metadata = {
  title: 'Rates & Policies',
  description: 'Therapy session rates, EMDR intensives, payment methods, insurance information, and cancellation policy for Eliza Pedder, LMFT.',
  openGraph: {
    title: 'Rates & Policies | Eliza Pedder, LMFT',
    description: 'Therapy session rates, EMDR intensives, payment methods, insurance information, and cancellation policy.',
  },
}

function Rates() {
  return (
    <div className="rates-page">
      {/* Hero */}
      <section className="rates-hero">
        <div className="container">
          <h1>Rates &amp; Policies</h1>
          <p className="rates-intro">
            Transparent pricing so you can focus on what matters most&#8212;your healing.
          </p>
        </div>
      </section>

      {/* Rates */}
      <section className="rates-main section-alt">
        <div className="container-narrow">
          <div className="rates-grid">
            <div className="rate-item">
              <h3>Session Fees</h3>
              <p>
                50-minute individual session: <strong>$245</strong><br />
                50-minute couples session: <strong>$265</strong><br />
                Full-day EMDR Intensive: <strong>$2,500</strong>
              </p>
            </div>
            <div className="rate-item">
              <h3>Payment</h3>
              <p>
                Payment is required in full at the time of service. All payments
                are processed electronically. I accept all major credit cards,
                including Visa, Mastercard, American Express, and Discover. A
                valid credit card must be kept on file.
              </p>
            </div>
            <div className="rate-item">
              <h3>Insurance</h3>
              <p>
                I do not bill insurance directly. However, I provide monthly
                superbills for you to submit to your insurance provider for
                potential reimbursement. I cannot guarantee that your insurance
                will reimburse.
              </p>
            </div>
            <div className="rate-item">
              <h3>Sliding Scale</h3>
              <p>
                I offer a limited number of sliding scale appointments. If you
                need a reduced fee, I encourage you to let me know and I will do
                my best to meet you where you are financially. If I&#39;m unable to
                accommodate, I will help you find appropriate referrals.
              </p>
            </div>
            <div className="rate-item">
              <h3>Cancellations</h3>
              <p>
                I have a 48-hour cancellation policy. Except in a true medical
                emergency or natural disaster, clients are responsible for the
                full session fee if the appointment is canceled with less than
                48 hours notice or if the client does not show.
              </p>
            </div>
            <div className="rate-item">
              <h3>Telehealth Policy</h3>
              <p>
                Because I am licensed in California, it is a legal requirement
                that you are located in California during your session. I also
                request that you are in a secure and quiet location to ensure
                the necessary focus and privacy.
              </p>
            </div>
            <div className="rate-item">
              <h3>EMDR Intensives</h3>
              <p>
                An EMDR Intensive is a full-day experience where we do a deep
                dive together&#8212;usually lasting around 7.5 hours. I come to
                you so you can heal from the comfort of your own home. This may
                be for you if you&#39;re ready for a transformative experience but
                don&#39;t have time for weekly therapy.
              </p>
            </div>
            <div className="rate-item">
              <h3>Benefits of Paying Out of Pocket</h3>
              <p>
                You don&#39;t need to reveal or justify your reasons for seeking
                services to a third party. Your records remain private. And you
                get to choose the provider who feels most aligned, rather than
                selecting from an insurance list.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Good Faith Estimate */}
      <section className="rates-gfe-section">
        <div className="container-narrow">
          <h3>Good Faith Estimate</h3>
          <p>
            Under the No Surprises Act, you have the right to receive a Good
            Faith Estimate for the cost of your mental health care. This estimate
            shows the expected charges for services before you start treatment.
            If your actual charges are $400 or more above the estimate, you have
            the right to dispute the bill.
          </p>
        </div>
      </section>

      {/* Decorative Image */}
      <div className="decorative-accent">
        <img src={pondWithLilyPads.src} alt="" role="presentation" className="decorative-accent-img" />
      </div>

      {/* CTA */}
      <section className="rates-cta-section">
        <div className="container">
          <div className="rates-cta">
            <p>Have questions about rates or payment?</p>
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

export default Rates
