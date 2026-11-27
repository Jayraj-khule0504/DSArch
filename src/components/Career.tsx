import { useState, type FormEvent } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ENQUIRY_ENDPOINT, careerOpenings } from '../data/content'

type AppForm = {
  name: string
  phone: string
  experience: string
  portfolio: string
  note: string
}

const emptyForm: AppForm = {
  name: '',
  phone: '',
  experience: '',
  portfolio: '',
  note: '',
}

export default function Career() {
  const [selectedRole, setSelectedRole] = useState<string | null>(null)
  const [form, setForm] = useState<AppForm>(emptyForm)
  const [error, setError] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'summary'>('idle')
  const [copied, setCopied] = useState(false)

  const openModal = (role: string) => {
    setSelectedRole(role)
    setForm(emptyForm)
    setError('')
    setStatus('idle')
    setCopied(false)
  }

  const closeModal = () => setSelectedRole(null)

  const summary = [
    `Position: ${selectedRole}`,
    `Name: ${form.name}`,
    `Phone: ${form.phone}`,
    form.experience && `Experience: ${form.experience}`,
    form.portfolio && `Portfolio / CV Link: ${form.portfolio}`,
    form.note && `Note: ${form.note}`,
  ]
    .filter(Boolean)
    .join('\n')

  async function submitApplication(e: FormEvent) {
    e.preventDefault()
    if (!form.name.trim()) return setError('Please enter your full name.')
    if (!/^[+\d][\d\s-]{8,}$/.test(form.phone.trim()))
      return setError('Please enter a valid phone number.')
    setError('')

    if (!ENQUIRY_ENDPOINT) return setStatus('summary')
    setStatus('sending')
    try {
      const r = await fetch(ENQUIRY_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ role: selectedRole, ...form }),
      })
      setStatus(r.ok ? 'sent' : 'summary')
    } catch {
      setStatus('summary')
    }
  }

  async function copySummary() {
    try {
      await navigator.clipboard.writeText(summary)
      setCopied(true)
    } catch {
      setCopied(false)
    }
  }

  return (
    <section className="band career" id="career">
      <div className="wrap">
        <div className="career__head">
          <div>
            <span className="eyebrow">— Join Our Studio</span>
            <h2>Current Openings</h2>
          </div>
          <p>
            Work alongside senior architects, interior designers and liaisoning specialists in
            Pimpri-Chinchwad, Pune — from first sketch to on-site execution.
          </p>
        </div>

        <div className="openings" role="region" aria-label="Current job openings">
          <div className="openings__header" aria-hidden>
            <span>Positions</span>
            <span>Vacancy</span>
            <span>Location</span>
            <span />
          </div>

          {careerOpenings.map((job) => (
            <article key={job.id} className="opening-row">
              <div className="opening-row__role">
                <h3>{job.position}</h3>
                <p>{job.summary}</p>
                <span className="opening-row__type">{job.type}</span>
              </div>
              <div className="opening-row__stat">
                <small>Vacancy</small>
                <strong>{job.vacancy}</strong>
              </div>
              <div className="opening-row__loc">
                <small>Location</small>
                <span>{job.location}</span>
              </div>
              <div className="opening-row__cta">
                <button
                  type="button"
                  className="btn btn--light"
                  onClick={() => openModal(job.position)}
                >
                  Apply Now
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedRole && (
          <motion.div
            className="apply-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="apply-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="apply-title"
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="apply-modal__head">
                <div>
                  <span className="eyebrow">Apply for Position</span>
                  <h3 id="apply-title">{selectedRole}</h3>
                </div>
                <button
                  type="button"
                  className="apply-modal__close"
                  onClick={closeModal}
                  aria-label="Close application form"
                >
                  ✕
                </button>
              </div>

              {status === 'sent' ? (
                <div className="done">
                  <p>Thank you, {form.name.split(' ')[0]}. Your application for {selectedRole} has been submitted.</p>
                  <button type="button" className="btn btn--dark" onClick={closeModal}>
                    Done
                  </button>
                </div>
              ) : status === 'summary' ? (
                <div className="done">
                  <p>Copy your application details below and share them with our Pimpri-Chinchwad studio:</p>
                  <pre>{summary}</pre>
                  <div className="row">
                    <button type="button" className="btn btn--sun" onClick={copySummary}>
                      {copied ? 'Copied' : 'Copy application'}
                    </button>
                    <button type="button" className="btn btn--line" onClick={() => setStatus('idle')}>
                      Edit
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={submitApplication} noValidate>
                  <div className="field">
                    <label htmlFor="c-name">Full name</label>
                    <input
                      id="c-name"
                      value={form.name}
                      onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="c-phone">Phone number</label>
                    <input
                      id="c-phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                      placeholder="+91 98..."
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="c-exp">Years of experience</label>
                    <input
                      id="c-exp"
                      value={form.experience}
                      onChange={(e) => setForm((f) => ({ ...f, experience: e.target.value }))}
                      placeholder="e.g. 2 years in residential & AutoCAD / SketchUp"
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="c-port">Portfolio / Resume link (optional)</label>
                    <input
                      id="c-port"
                      type="url"
                      value={form.portfolio}
                      onChange={(e) => setForm((f) => ({ ...f, portfolio: e.target.value }))}
                      placeholder="https://..."
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="c-note">Brief note (optional)</label>
                    <textarea
                      id="c-note"
                      rows={3}
                      value={form.note}
                      onChange={(e) => setForm((f) => ({ ...f, note: e.target.value }))}
                    />
                  </div>
                  {error && <p className="err" role="alert">{error}</p>}
                  <button type="submit" className="btn btn--dark btn--full" disabled={status === 'sending'}>
                    {status === 'sending' ? 'Submitting…' : `Submit Application for ${selectedRole}`}
                  </button>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
