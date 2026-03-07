import Link from 'next/link'
import lgbtqFlag from '../../src/photos/eliza-images/LGBTQ-ally-flag-for-footer.webp'
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        {/* Top: 4-column links */}
        <div className="footer-top">
          <div className="footer-col footer-col-brand">
            <h3>Eliza Pedder Therapy</h3>
            <p className="footer-brand-desc">
              A warm, holistic space for highly sensitive women, deep feelers,
              and overthinkers to heal, grow, and reconnect with their inner wisdom.
            </p>
            <p className="footer-credential">Licensed Marriage &amp; Family Therapist</p>
            <div className="footer-ally-flag">
              <img src={lgbtqFlag.src} alt="LGBTQIA+ Affirming Care" width="48" height="29" />
              <span>LGBTQIA+ Affirming</span>
            </div>
          </div>

          <div className="footer-col">
            <h4>Navigation</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/services">Therapy</Link></li>
              <li><Link href="/individual-therapy">Individual Therapy</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Resources</h4>
            <ul>
              <li><Link href="/faq">FAQ</Link></li>
              <li><Link href="/rates">Rates</Link></li>
              <li>
                <a
                  href="https://elizapedder.com/blog"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Specialties</h4>
            <ul>
              <li><Link href="/ocd-therapy">OCD &amp; Anxiety</Link></li>
              <li><Link href="/trauma-therapy">Trauma &amp; EMDR</Link></li>
              <li><Link href="/pmdd-therapy">PMDD Support</Link></li>
              <li><Link href="/couples-therapy">Couples Therapy</Link></li>
            </ul>
          </div>
        </div>

        {/* Middle: contact info row */}
        <div className="footer-info">
          <div className="footer-info-item">
            <h4>Contact</h4>
            <p><a href="tel:+19252555081">(925) 255-5081</a></p>
            <p><a href="mailto:Eliza.pedder@gmail.com">Eliza.pedder@gmail.com</a></p>
          </div>

          <div className="footer-info-item">
            <h4>Location</h4>
            <p>Telehealth throughout California</p>
            <p>San Francisco Bay Area</p>
          </div>

          <div className="footer-info-item">
            <h4>Connect</h4>
            <p>
              <Link href="/new-client">
                Schedule an Alignment Call
              </Link>
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p>&copy; {currentYear} Eliza Pedder Therapy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
