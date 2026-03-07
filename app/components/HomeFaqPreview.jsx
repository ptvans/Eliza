'use client'

import { useState } from 'react'

const previewFaqs = [
  {
    question: 'Do you offer online therapy?',
    answer: 'Yes! I offer secure telehealth sessions for clients located anywhere in California. Many of my clients find that meeting from the comfort of their own space actually helps them feel more at ease and open during our work together.',
  },
  {
    question: 'How long does therapy typically last?',
    answer: 'It depends on what you\u2019re working through and your unique healing journey. Some people find meaningful shifts in just a few sessions, while others benefit from longer-term support. We\u2019ll check in together regularly to make sure therapy feels right for you.',
  },
  {
    question: 'Do you take insurance?',
    answer: 'I do not bill insurance directly. However, I provide monthly superbills that you can submit to your insurance company for potential reimbursement. Many PPO plans offer out-of-network benefits. I also offer a limited number of sliding scale spots.',
  },
  {
    question: 'What should I expect in my first session?',
    answer: 'Our first session is about connection. We\u2019ll gently explore what brings you to therapy, what you\u2019re carrying, and what you\u2019re hoping to find. There\u2019s no pressure \u2014 this is your space to feel seen and to see if working together feels right.',
  },
]

function HomeFaqPreview() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <div className="faq-preview-accordion">
      {previewFaqs.map((faq, index) => (
        <div key={index} className={`faq-preview-item ${openIndex === index ? 'open' : ''}`}>
          <button
            className="faq-preview-question"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            aria-expanded={openIndex === index}
          >
            <span>{faq.question}</span>
            <svg
              className="faq-preview-chevron"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              aria-hidden="true"
            >
              <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <div className="faq-preview-answer">
            <p>{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default HomeFaqPreview
