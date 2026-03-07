import Link from 'next/link'
import './LogoBanner.css'

function LogoBanner() {
  return (
    <div className="logo-banner">
      <div className="logo-banner-container">
        <Link href="/" className="logo-link">
          <span className="logo-banner-text">Eliza Pedder</span>
          <span className="logo-banner-subtitle">Licensed Marriage &amp; Family Therapist</span>
        </Link>
      </div>
    </div>
  )
}

export default LogoBanner
