import { useState } from 'react'

const FORM_ENDPOINT = 'https://formspree.io/f/meaoqbyz'

function ContactModal({ open, onClose }) {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(e.target),
      })
      if (res.ok) {
        setStatus('sent')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (!open) return null

  return (
    <div className="modal-overlay open" onClick={(e) => { if (e.target === e.currentTarget) onClose() }}>
      <div className="modal-card" role="dialog" aria-modal="true">
        <button className="modal-close" type="button" aria-label="Close" onClick={onClose}>&times;</button>
        <div className="modal-kicker">// SHARE A ROLE</div>
        <h3 className="modal-title">Send Vamsi a JD</h3>

        {status === 'sent' ? (
          <p style={{ color: 'var(--pipe)', fontFamily: 'var(--font-mono)', fontSize: '14px', marginTop: '16px' }}>
            Thanks — that's on its way to Vamsi's inbox.
          </p>
        ) : (
          <>
            <p className="modal-desc">Fill this in and it goes straight to Vamsi's inbox.</p>
            <form onSubmit={handleSubmit}>
              <label className="field">
                <span>Your name</span>
                <input type="text" name="name" required placeholder="Jane Recruiter" value={form.name} onChange={handleChange} />
              </label>
              <label className="field">
                <span>Your email</span>
                <input type="email" name="email" required placeholder="jane@company.com" value={form.email} onChange={handleChange} />
              </label>
              <label className="field">
                <span>Company / role title</span>
                <input type="text" name="company" placeholder="Acme Corp — SAP BTP Developer" value={form.company} onChange={handleChange} />
              </label>
              <label className="field">
                <span>Job description / message</span>
                <textarea name="message" rows="5" required placeholder="Paste the JD or a short summary of the role..." value={form.message} onChange={handleChange} />
              </label>
              <button className="btn-primary modal-submit" type="submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending...' : 'Submit'}
              </button>
              {status === 'error' && (
                <p style={{ color: '#e07a5f', fontSize: '13px', marginTop: '10px' }}>
                  Something went wrong — please try again or email vamsigundlapalle@gmail.com directly.
                </p>
              )}
            </form>
          </>
        )}
      </div>
    </div>
  )
}

export default ContactModal