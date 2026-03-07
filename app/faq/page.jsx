'use client'

import { useState } from 'react'
import Link from 'next/link'
import './page.css'

const faqs = [
  {
    question: 'What should I expect in the first session?',
    answer: 'Our first session is about connection and understanding. We\u2019ll gently explore what brings you to therapy, what you\u2019re carrying, and your hopes for our work together. It\u2019s also a chance for you to feel the space and see if working together feels right. There\u2019s no pressure \u2014 this is your time to be seen and heard.',
  },
  {
    question: 'How long are sessions?',
    answer: 'Individual and couples sessions are 50 minutes. I also offer full-day EMDR intensives (approximately 7.5 hours) for clients who are ready for a deeper, immersive healing experience.',
  },
  {
    question: 'How long does therapy take?',
    answer: 'Every healing journey is unique. Some people experience meaningful shifts in just a few sessions, while others benefit from longer-term support. We\u2019ll check in together regularly to make sure therapy is moving at the right pace for you.',
  },
  {
    question: 'What is EMDR and how does it work?',
    answer: 'EMDR (Eye Movement Desensitization and Reprocessing) is an evidence-based therapy that helps your brain reprocess traumatic or distressing memories. During sessions, I guide you through bilateral stimulation while you focus on a specific memory. Over time, the memory loses its emotional charge so it no longer controls your reactions. I use an attachment-focused approach to EMDR, which means we pay special attention to relational wounds and attachment patterns.',
  },
  {
    question: 'What is ERP for OCD?',
    answer: 'Exposure and Response Prevention (ERP) is the gold standard evidence-based treatment for OCD. It involves gently exposing yourself to feared scenarios to teach your brain that the scary thing most likely won\u2019t happen \u2014 and even if it did, you would cope far better than you think. We work together at a pace that feels safe and manageable.',
  },
  {
    question: 'Do you offer online therapy?',
    answer: 'Yes! All of my sessions are conducted via secure telehealth for clients located anywhere in California. Many clients find that meeting from home actually helps them feel more comfortable and open during our work together.',
  },
  {
    question: 'Do you accept insurance?',
    answer: 'I do not bill insurance directly. I provide monthly superbills (detailed receipts) that you can submit to your insurance company for potential reimbursement. Many PPO plans offer out-of-network benefits. I also offer a limited number of sliding scale spots.',
  },
  {
    question: 'What is your cancellation policy?',
    answer: 'I have a 48-hour cancellation policy. Except in a true medical emergency or natural disaster, clients are responsible for the full session fee if canceled with less than 48 hours notice or if they do not show.',
  },
  {
    question: 'What is an EMDR Intensive?',
    answer: 'An EMDR Intensive is a full-day healing experience lasting approximately 7.5 hours. I come to you so you can heal from the comfort of your own home. This is ideal if you\u2019re ready for a transformative experience but don\u2019t have time for weekly therapy, or if you want to do serious inner work in a focused way.',
  },
  {
    question: 'Is therapy confidential?',
    answer: 'Yes. Everything discussed in therapy is confidential, with limited exceptions required by law (such as imminent danger to yourself or others, or suspected abuse of a child or elder). I\u2019ll review these exceptions with you at the start of treatment.',
  },
]

function FaqItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`}>
      <button
        className="faq-question"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span>{question}</span>
        <span className="faq-icon" aria-hidden="true">{isOpen ? '\u2212' : '+'}</span>
      </button>
      <div className="faq-answer">
        <p>{answer}</p>
      </div>
    </div>
  )
}

function FAQ() {
  return (
    <div className="faq-page">
      {/* Hero */}
      <section className="faq-hero">
        <div className="container">
          <h1>Frequently Asked Questions</h1>
          <p className="faq-intro">
            Answers to common questions about therapy, EMDR, ERP, and working together.
          </p>
        </div>
      </section>

      {/* FAQ List */}
      <section className="faq-main section-alt">
        <div className="container-narrow">
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <FaqItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="faq-cta-section">
        <div className="container">
          <div className="faq-cta">
            <p>Still have questions?</p>
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

export default FAQ
