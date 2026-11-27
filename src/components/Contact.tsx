import { useState, type FormEvent } from 'react'
import { ENQUIRY_ENDPOINT, firm, projectKinds, socials } from '../data/content'

type Form = { name: string; phone: string; type: string; location: string; message: string }
type Status = 'idle' | 'sending' | 'sent' | 'summary' | 'error'

const empty: Form = { name: '', phone: '', type: '', location: '', message: '' }

function validate(f: Form) {
  const e: Partial<Record<keyof Form, string>> = {}
  if (!f.name.trim()) e.name = 'Enter your name.'
  if (!/^[+\d][\d\s-]{8,}$/.test(f.phone.trim())) e.phone = 'Enter a phone number with at least 9 digits.'
  if (!f.type) e.type = 'Choose a project type.'
  return e
}

export default function Contact() {
  const [form, setForm] = useState<Form>(empty)
  const [errors, setErrors] = useState<Partial<Record<keyof Form, string>>>({})
  const [status, setStatus] = useState<Status>('idle')
  const [copied, setCopied] = useState(false)

  const set = (k: keyof Form) => (v: string) => {
    setForm((f) => ({ ...f, [k]: v }))
    if (errors[k]) setErrors((e) => ({ ...e, [k]: undefined }))
  }

  const summary = [
    `Name: ${form.name}`,
    `Phone: ${form.phone}`,
    `Project: ${form.type}`,
    form.location && `Location: ${form.location}`,
    form.message && `Details: ${form.message}`,
  ].filter(Boolean).join('\n')

  async function submit(e: FormEvent) {
    e.preventDefault()
    const errs = validate(form)
    setErrors(errs)
    if (Object.keys(errs).length) {
      document.getElementById(`f-${Object.keys(errs)[0]}`)?.focus()
      return
    }
    if (!ENQUIRY_ENDPOINT) return setStatus('summary')
    setStatus('sending')
    try {
      const r = await fetch(ENQUIRY_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      setStatus(r.ok ? 'sent' : 'error')
    } catch {
      setStatus('error')
    }
  }

  async function copy() {
    try {
      await navigator.clipboard.writeText(summary)
      setCopied(true)
    } catch {
      setCopied(false)
    }
  }

  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${firm.map.lat},${firm.map.lng}`

  return (
    <section className="band contact" id="contact">
      <div className="wrap contact__grid">
        <div className="contact__info">
          <h2>Tell us about your plot</h2>
          <p>Get a free first consultation. Share a few details and the team will get back to you to set up a meeting or a site visit.</p>
          <dl>
            {firm.phone && (<><dt>Phone</dt><dd><a href={`tel:${firm.phone}`}>{firm.phone}</a></dd></>)}
            {firm.email && (<><dt>Email</dt><dd><a href={`mailto:${firm.email}`}>{firm.email}</a></dd></>)}
            <dt>Studio</dt>
            <dd>{firm.address}<br /><a href={mapUrl} target="_blank" rel="noreferrer" className="link">Open in Google Maps</a></dd>
            <dt>Follow</dt>
            <dd className="socials">
              {socials.map((s) => <a key={s.label} href={s.href} target="_blank" rel="noreferrer">{s.label}</a>)}
            </dd>
          </dl>
        </div>

        <div className="card">
          {status === 'sent' ? (
            <div className="done" role="status">
              <h3>Enquiry sent</h3>
              <p>Thanks, {form.name.split(' ')[0]}. The team has your details and will be in touch.</p>
              <button className="btn btn--line" onClick={() => { setForm(empty); setStatus('idle') }}>Send another enquiry</button>
            </div>
          ) : status === 'summary' ? (
            <div className="done" role="status">
              <h3>Your enquiry is ready</h3>
              <p>Copy these details and share them with the studio on any of the channels listed.</p>
              <pre>{summary}</pre>
              <div className="row">
                <button className="btn btn--sun" onClick={copy}>{copied ? 'Copied' : 'Copy details'}</button>
                <button className="btn btn--line" onClick={() => setStatus('idle')}>Edit</button>
              </div>
            </div>
          ) : (
            <form onSubmit={submit} noValidate>
              <Field id="name" label="Your name" value={form.name} onChange={set('name')} error={errors.name} autoComplete="name" />
              <Field id="phone" label="Phone" type="tel" value={form.phone} onChange={set('phone')} error={errors.phone} autoComplete="tel" />
              <div className="field">
                <label htmlFor="f-type">Project type</label>
                <select id="f-type" value={form.type} onChange={(e) => set('type')(e.target.value)} aria-invalid={!!errors.type} aria-describedby={errors.type ? 'e-type' : undefined}>
                  <option value="">Choose one</option>
                  {projectKinds.map((k) => <option key={k.key}>{k.label}</option>)}
                  <option>Approvals only</option>
                </select>
                {errors.type && <span className="err" id="e-type">{errors.type}</span>}
              </div>
              <Field id="location" label="Plot location (optional)" value={form.location} onChange={set('location')} />
              <div className="field">
                <label htmlFor="f-message">What are you planning? (optional)</label>
                <textarea id="f-message" rows={4} value={form.message} onChange={(e) => set('message')(e.target.value)} />
              </div>
              {status === 'error' && <p className="err" role="alert">The enquiry didn’t go through. Check your connection and send it again.</p>}
              <button type="submit" className="btn btn--sun btn--full" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending…' : 'Request free consultation'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

function Field(p: { id: keyof Form; label: string; value: string; onChange: (v: string) => void; error?: string; type?: string; autoComplete?: string }) {
  return (
    <div className="field">
      <label htmlFor={`f-${p.id}`}>{p.label}</label>
      <input
        id={`f-${p.id}`}
        type={p.type ?? 'text'}
        value={p.value}
        autoComplete={p.autoComplete}
        onChange={(e) => p.onChange(e.target.value)}
        aria-invalid={!!p.error}
        aria-describedby={p.error ? `e-${p.id}` : undefined}
      />
      {p.error && <span className="err" id={`e-${p.id}`}>{p.error}</span>}
    </div>
  )
}
