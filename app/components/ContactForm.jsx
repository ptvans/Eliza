'use client'

import { useState } from 'react'
import './ContactForm.css'

function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    const form = e.target
    const data = new FormData(form)
    const name = data.get('name')
    const email = data.get('email')
    const phone = data.get('phone')
    const message = data.get('message')

    const subject = encodeURIComponent(`Therapy Inquiry from ${name}`)
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n${message}`
    )
    window.location.href = `mailto:Eliza.pedder@gmail.com?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="contact-form-section">
        <h3>Thank You</h3>
        <p className="contact-intro">
          Your email client should have opened with your message. If it
          didn&apos;t, please email me directly at{' '}
          <a href="mailto:Eliza.pedder@gmail.com">Eliza.pedder@gmail.com</a>.
        </p>
      </div>
    )
  }

  return (
    <form className="contact-form-section" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />
      </div>

      <div className="form-group">
        <label htmlFor="phone">Phone Number</label>
        <input type="tel" id="phone" name="phone" />
      </div>

      <div className="form-group">
        <label htmlFor="message">How can I help?</label>
        <textarea id="message" name="message" rows={4} />
      </div>

      <button type="submit" className="btn btn-primary contact-form-btn">
        Send Message
      </button>
    </form>
  )
}

export default ContactForm
