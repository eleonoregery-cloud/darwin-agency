'use client'

import { useState } from 'react'

const besoinsOptions = [
  { id: 'seo', label: 'SEO', desc: 'Référencement naturel' },
  { id: 'sea', label: 'SEA', desc: 'Google & Bing Ads' },
  { id: 'sma', label: 'SMA', desc: 'Social Media Ads' },
  { id: 'media', label: 'MEDIA', desc: 'Display & Programmatique' },
  { id: 'analytics', label: 'ANALYTICS', desc: 'Data & Tracking' },
  { id: 'formation', label: 'FORMATION', desc: 'Montée en compétences' },
  { id: 'studio', label: 'STUDIO CRÉATIF', desc: 'Direction artistique & contenu' },
  { id: 'fullfunnel', label: 'FULL FUNNEL', desc: 'Stratégie 360° acquisition' },
]

const budgetOptions = [
  '1 500 – 3 000 €/mois',
  '3 000 – 5 000 €/mois',
  'Plus de 5 000 €/mois',
  'À définir',
]

const inputStyle = {
  width: '100%',
  background: '#f7f7f7',
  border: '1.5px solid #e0e0e0',
  borderRadius: 4,
  padding: '13px 16px',
  fontSize: '0.9rem',
  color: '#0a0a0a',
  outline: 'none',
  transition: 'border-color 0.2s, background 0.2s',
  boxSizing: 'border-box',
  fontFamily: 'inherit',
}

const labelStyle = {
  display: 'block',
  fontSize: '0.68rem',
  fontWeight: 700,
  letterSpacing: '0.14em',
  textTransform: 'uppercase',
  color: '#555',
  marginBottom: 8,
}

const errorStyle = {
  fontSize: '0.72rem',
  color: '#e53e3e',
  marginTop: 4,
}

export default function ContactForm() {
  const [form, setForm] = useState({
    prenom: '',
    nom: '',
    entreprise: '',
    email: '',
    telephone: '',
    budget: '',
    message: '',
  })
  const [besoins, setBesoins] = useState([])
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')

  const validate = () => {
    const e = {}
    if (!form.prenom.trim()) e.prenom = 'Prénom requis'
    if (!form.nom.trim()) e.nom = 'Nom requis'
    if (!form.email.trim()) e.email = 'Email requis'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Email invalide'
    if (besoins.length === 0) e.besoins = 'Sélectionnez au moins un besoin'
    if (!form.message.trim()) e.message = 'Message requis'
    else if (form.message.trim().length < 20) e.message = 'Message trop court (20 car. min.)'
    return e
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
    if (errors[name]) setErrors(er => ({ ...er, [name]: undefined }))
  }

  const toggleBesoin = (id) => {
    setBesoins(prev =>
      prev.includes(id) ? prev.filter(b => b !== id) : [...prev, id]
    )
    if (errors.besoins) setErrors(er => ({ ...er, besoins: undefined }))
  }

  const handleFocus = (e) => {
    e.target.style.borderColor = '#0a0a0a'
    e.target.style.background = '#fff'
  }
  const handleBlur = (e) => {
    e.target.style.borderColor = errors[e.target.name] ? '#e53e3e' : '#e0e0e0'
    e.target.style.background = '#f7f7f7'
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const e2 = validate()
    if (Object.keys(e2).length > 0) {
      setErrors(e2)
      return
    }
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, besoins }),
      })
      if (res.ok) {
        setStatus('success')
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'form_submit', { event_category: 'contact', event_label: 'darwin_contact' })
        }
      } else {
        const data = await res.json()
        setStatus('error')
        setErrors({ server: data.error || 'Une erreur est survenue.' })
      }
    } catch {
      setStatus('error')
      setErrors({ server: 'Impossible de contacter le serveur. Réessayez.' })
    }
  }

  if (status === 'success') {
    return (
      <div style={{ textAlign: 'center', padding: '48px 24px' }}>
        <div style={{
          width: 64, height: 64, borderRadius: '50%', background: '#FFF127',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto 24px', fontSize: '1.8rem',
        }}>✓</div>
        <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: 12, color: '#0a0a0a' }}>
          Message envoyé !
        </h3>
        <p style={{ color: '#555', fontSize: '0.95rem', lineHeight: 1.7, maxWidth: 400, margin: '0 auto 32px' }}>
          Merci {form.prenom}. Notre équipe vous répondra sous <strong>24h ouvrées</strong> avec un audit ou une proposition adaptée à votre projet.
        </p>
        <button
          style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#0a0a0a', color: '#fff', padding: '12px 24px', borderRadius: 4, border: 'none', cursor: 'pointer', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.08em' }}
          onClick={() => { setStatus('idle'); setForm({ prenom: '', nom: '', entreprise: '', email: '', telephone: '', budget: '', message: '' }); setBesoins([]) }}
        >
          Envoyer un autre message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate>

      {/* Prénom + Nom */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 20 }}>
        <div>
          <label style={labelStyle}>Prénom <span style={{ color: '#e53e3e' }}>*</span></label>
          <input type="text" name="prenom" value={form.prenom} onChange={handleChange}
            onFocus={handleFocus} onBlur={handleBlur} placeholder="Jean"
            style={{ ...inputStyle, borderColor: errors.prenom ? '#e53e3e' : '#e0e0e0' }} />
          {errors.prenom && <p style={errorStyle}>{errors.prenom}</p>}
        </div>
        <div>
          <label style={labelStyle}>Nom <span style={{ color: '#e53e3e' }}>*</span></label>
          <input type="text" name="nom" value={form.nom} onChange={handleChange}
            onFocus={handleFocus} onBlur={handleBlur} placeholder="Martin"
            style={{ ...inputStyle, borderColor: errors.nom ? '#e53e3e' : '#e0e0e0' }} />
          {errors.nom && <p style={errorStyle}>{errors.nom}</p>}
        </div>
      </div>

      {/* Entreprise */}
      <div style={{ marginBottom: 20 }}>
        <label style={labelStyle}>Entreprise</label>
        <input type="text" name="entreprise" value={form.entreprise} onChange={handleChange}
          onFocus={handleFocus} onBlur={handleBlur} placeholder="Darwin Agency"
          style={inputStyle} />
      </div>

      {/* Email + Téléphone */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 24 }}>
        <div>
          <label style={labelStyle}>Email professionnel <span style={{ color: '#e53e3e' }}>*</span></label>
          <input type="email" name="email" value={form.email} onChange={handleChange}
            onFocus={handleFocus} onBlur={handleBlur} placeholder="jean@entreprise.fr"
            style={{ ...inputStyle, borderColor: errors.email ? '#e53e3e' : '#e0e0e0' }} />
          {errors.email && <p style={errorStyle}>{errors.email}</p>}
        </div>
        <div>
          <label style={labelStyle}>Téléphone</label>
          <input type="tel" name="telephone" value={form.telephone} onChange={handleChange}
            onFocus={handleFocus} onBlur={handleBlur} placeholder="+33 6 00 00 00 00"
            style={inputStyle} />
        </div>
      </div>

      {/* Vos besoins — choix multiples */}
      <div style={{ marginBottom: 24 }}>
        <label style={labelStyle}>
          Vos besoins <span style={{ color: '#e53e3e' }}>*</span>
          <span style={{ fontWeight: 400, textTransform: 'none', letterSpacing: 0, color: '#aaa', marginLeft: 6, fontSize: '0.65rem' }}>(plusieurs choix possibles)</span>
        </label>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8 }}>
          {besoinsOptions.map(opt => {
            const selected = besoins.includes(opt.id)
            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => toggleBesoin(opt.id)}
                style={{
                  padding: '10px 12px',
                  border: selected ? '2px solid #0a0a0a' : '1.5px solid #e0e0e0',
                  borderRadius: 4,
                  background: selected ? '#0a0a0a' : '#f7f7f7',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 0.15s',
                }}
              >
                <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.08em', color: selected ? '#FFF127' : '#0a0a0a', marginBottom: 2 }}>
                  {opt.label}
                </div>
                <div style={{ fontSize: '0.62rem', color: selected ? 'rgba(255,255,255,0.55)' : '#999' }}>
                  {opt.desc}
                </div>
              </button>
            )
          })}
        </div>
        {errors.besoins && <p style={errorStyle}>{errors.besoins}</p>}
      </div>

      {/* Budget */}
      <div style={{ marginBottom: 24 }}>
        <label style={labelStyle}>Budget mensuel estimé</label>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {budgetOptions.map(opt => {
            const selected = form.budget === opt
            return (
              <button
                key={opt}
                type="button"
                onClick={() => setForm(f => ({ ...f, budget: selected ? '' : opt }))}
                style={{
                  padding: '9px 16px',
                  border: selected ? '2px solid #29C5F5' : '1.5px solid #e0e0e0',
                  borderRadius: 999,
                  background: selected ? '#e8f9fd' : '#f7f7f7',
                  cursor: 'pointer',
                  fontSize: '0.78rem',
                  fontWeight: selected ? 700 : 500,
                  color: selected ? '#0a0a0a' : '#555',
                  transition: 'all 0.15s',
                  whiteSpace: 'nowrap',
                }}
              >
                {opt}
              </button>
            )
          })}
        </div>
      </div>

      {/* Message */}
      <div style={{ marginBottom: 28 }}>
        <label style={labelStyle}>Votre projet en quelques mots <span style={{ color: '#e53e3e' }}>*</span></label>
        <textarea
          name="message" value={form.message} onChange={handleChange}
          onFocus={handleFocus} onBlur={handleBlur}
          placeholder="Décrivez votre situation actuelle, vos objectifs, et ce que vous attendez de Darwin Agency…"
          rows={4}
          style={{ ...inputStyle, resize: 'vertical', minHeight: 100, borderColor: errors.message ? '#e53e3e' : '#e0e0e0' }}
        />
        {errors.message && <p style={errorStyle}>{errors.message}</p>}
      </div>

      {errors.server && (
        <div style={{ background: '#fff5f5', border: '1px solid #fed7d7', borderRadius: 4, padding: '12px 16px', marginBottom: 20, fontSize: '0.85rem', color: '#c53030' }}>
          {errors.server}
        </div>
      )}

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
        <p style={{ fontSize: '0.68rem', color: '#aaa', margin: 0 }}>
          * Champs obligatoires — Données traitées conformément au RGPD
        </p>
        <button
          type="submit"
          disabled={status === 'loading'}
          style={{
            background: status === 'loading' ? '#555' : '#FFF127',
            color: '#0a0a0a',
            border: 'none',
            borderRadius: 4,
            padding: '14px 32px',
            fontSize: '0.82rem',
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            cursor: status === 'loading' ? 'not-allowed' : 'pointer',
            transition: 'background 0.2s, color 0.2s',
            display: 'flex',
            alignItems: 'center',
            gap: 8,
          }}
          onMouseEnter={e => { if (status !== 'loading') { e.currentTarget.style.background = '#0a0a0a'; e.currentTarget.style.color = '#FFF127' } }}
          onMouseLeave={e => { if (status !== 'loading') { e.currentTarget.style.background = '#FFF127'; e.currentTarget.style.color = '#0a0a0a' } }}
        >
          {status === 'loading' ? (
            <>
              <span style={{ display: 'inline-block', width: 14, height: 14, border: '2px solid #999', borderTopColor: '#fff', borderRadius: '50%', animation: 'spin 0.7s linear infinite' }} />
              Envoi en cours…
            </>
          ) : 'Envoyer ma demande →'}
        </button>
      </div>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </form>
  )
}
