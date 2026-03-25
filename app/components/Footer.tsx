'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) { setSent(true); setEmail('') }
  }

  return (
    <footer style={{ background: '#0a0a0a', color: '#fff' }}>

      {/* ── CTA BAND ── */}
      <div style={{ background: '#29C5F5', padding: '40px 48px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24 }}>
        <div>
          <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.45)', marginBottom: 10 }}>
            PRÊT À PASSER À L'ACTION ?
          </p>
          <h2 className="font-anton" style={{ fontSize: 'clamp(1.4rem, 3vw, 2.6rem)', textTransform: 'uppercase', color: '#0a0a0a', margin: 0, lineHeight: 1 }}>
            BOOSTONS VOTRE PERFORMANCE DIGITALE
          </h2>
        </div>
        <Link
          href="/contact"
          style={{
            background: '#0a0a0a',
            color: '#FFF127',
            padding: '16px 36px',
            borderRadius: 4,
            fontWeight: 700,
            fontSize: '0.82rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            textDecoration: 'none',
            whiteSpace: 'nowrap',
            display: 'inline-block',
            transition: 'background 0.2s, color 0.2s',
          }}
          onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = '#FFF127'; el.style.color = '#0a0a0a' }}
          onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = '#0a0a0a'; el.style.color = '#FFF127' }}
        >
          DÉMARRER UN PROJET →
        </Link>
      </div>

      {/* ── MAIN FOOTER ── */}
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '64px 48px 48px', display: 'grid', gridTemplateColumns: '1.8fr 1fr 1fr 1fr 1fr', gap: 48 }}>

        {/* Col 1 — Logo + infos + newsletter */}
        <div>
          <div style={{ marginBottom: 28 }}>
            <Image src="/images/logo-darwin.png" alt="Darwin Agency" width={140} height={40} style={{ objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
          </div>
          <p style={{ fontSize: '0.82rem', color: '#888', lineHeight: 1.7, marginBottom: 28, maxWidth: 280 }}>
            Agence digitale indépendante fondée en 2003. Experts en acquisition, SEO, SEA, SMA, Media et Data au service de vos performances.
          </p>

          {/* Adresse */}
          <address style={{ fontStyle: 'normal', fontSize: '0.8rem', color: '#888', lineHeight: 1.7, marginBottom: 16 }}>
            805 Rue Jean René Guillibert Gauthier<br />
            de la Lauzière<br />
            13 290 Aix-en-Provence
          </address>

          {/* Téléphone */}
          <a
            href="tel:+33413570900"
            style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#fff', textDecoration: 'none', fontSize: '0.88rem', fontWeight: 700, marginBottom: 20 }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-1.84a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.73 15l.27 1.92z"/>
            </svg>
            +33 (0)4 13 57 09 00
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/company/darwin-agency"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#888', textDecoration: 'none', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.06em', border: '1px solid #333', padding: '8px 16px', borderRadius: 4, transition: 'border-color 0.2s, color 0.2s' }}
            onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = '#0077b5'; el.style.color = '#fff' }}
            onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = '#333'; el.style.color = '#888' }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LINKEDIN
          </a>
        </div>

        {/* Col 2 — L'Agence */}
        <div>
          <h3 style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#555', marginBottom: 24 }}>
            L'AGENCE
          </h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              { label: 'Notre histoire', href: '/agence' },
              { label: 'Notre équipe', href: '/agence#equipe' },
              { label: 'Notre méthode', href: '/agence#methode' },
              { label: 'Rejoindre Darwin', href: '/recrutement' },
              { label: 'Contact', href: '/contact' },
            ].map(link => (
              <li key={link.href}>
                <Link href={link.href} style={{ color: '#888', textDecoration: 'none', fontSize: '0.84rem', transition: 'color 0.15s' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#fff' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#888' }}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 — Expertises */}
        <div>
          <h3 style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#555', marginBottom: 24 }}>
            EXPERTISES
          </h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              { label: 'Agence SEO', href: '/expertises/seo' },
              { label: 'Agence SEA', href: '/expertises/sea' },
              { label: 'Social Media Ads', href: '/expertises/sma' },
              { label: 'Media & Display', href: '/expertises/media' },
              { label: 'Analytics & Data', href: '/expertises/analytics' },
              { label: 'Formations', href: '/expertises/formation' },
              { label: 'Studio Créatif', href: '/expertises/studio' },
            ].map(link => (
              <li key={link.href}>
                <Link href={link.href} style={{ color: '#888', textDecoration: 'none', fontSize: '0.84rem', transition: 'color 0.15s' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#fff' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#888' }}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4 — Ressources */}
        <div>
          <h3 style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#555', marginBottom: 24 }}>
            RESSOURCES
          </h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              { label: 'Blog', href: '/blog' },
              { label: 'Cas clients', href: '/cas-clients' },
              { label: 'Guides & Livres blancs', href: '/ressources' },
              { label: 'Webinaires', href: '/webinaires' },
              { label: 'Glossaire SEO', href: '/glossaire' },
              { label: 'Audit gratuit', href: '/contact' },
            ].map(link => (
              <li key={link.href}>
                <Link href={link.href} style={{ color: '#888', textDecoration: 'none', fontSize: '0.84rem', transition: 'color 0.15s' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#fff' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#888' }}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 5 — Newsletter + Légal */}
        <div>
          <h3 style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#555', marginBottom: 24 }}>
            NEWSLETTER
          </h3>
          <p style={{ fontSize: '0.8rem', color: '#888', lineHeight: 1.6, marginBottom: 20 }}>
            Décryptages, tendances et stratégies digitales. Directement dans votre boîte mail.
          </p>
          {sent ? (
            <p style={{ fontSize: '0.82rem', color: '#FFF127', fontWeight: 700 }}>✓ Merci, vous êtes inscrit·e !</p>
          ) : (
            <form onSubmit={handleNewsletter}>
              <input
                type="email"
                placeholder="votre@email.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                style={{
                  width: '100%',
                  background: '#161616',
                  border: '1px solid #333',
                  borderRadius: 4,
                  padding: '11px 14px',
                  fontSize: '0.82rem',
                  color: '#fff',
                  outline: 'none',
                  marginBottom: 10,
                  boxSizing: 'border-box',
                  transition: 'border-color 0.2s',
                }}
                onFocus={e => { e.currentTarget.style.borderColor = '#FFF127' }}
                onBlur={e => { e.currentTarget.style.borderColor = '#333' }}
              />
              <button
                type="submit"
                style={{
                  width: '100%',
                  background: '#FFF127',
                  color: '#0a0a0a',
                  border: 'none',
                  borderRadius: 4,
                  padding: '11px 0',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#e8d800' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#FFF127' }}
              >
                S'ABONNER
              </button>
            </form>
          )}

        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div style={{ borderTop: '1px solid #1a1a1a', padding: '18px 48px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
        <span style={{ fontSize: '0.75rem', color: '#444' }}>
          DARWIN — Agence Marketing Digital &copy; 2026 — Tous droits réservés
        </span>
        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          <Link href="/mentions-legales" style={{ fontSize: '0.75rem', color: '#444', textDecoration: 'none', transition: 'color 0.15s' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#888' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#444' }}>
            Mentions légales
          </Link>
          <span style={{ color: '#333' }}>|</span>
          <Link href="/rgpd" style={{ fontSize: '0.75rem', color: '#444', textDecoration: 'none', transition: 'color 0.15s' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#888' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#444' }}>
            RGPD &amp; Confidentialité
          </Link>
        </div>
      </div>

      {/* Scroll to top */}
      <button
        onClick={scrollToTop}
        style={{
          position: 'fixed', bottom: 24, right: 24,
          background: '#0a0a0a', color: '#fff',
          border: '1px solid #333', width: 48, height: 48,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: 'pointer', zIndex: 50, borderRadius: 4,
          transition: 'background 0.2s, border-color 0.2s',
        }}
        onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = '#FFF127'; el.style.color = '#0a0a0a' }}
        onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = '#0a0a0a'; el.style.color = '#fff' }}
        aria-label="Retour en haut"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M12 19V5M5 12l7-7 7 7"/>
        </svg>
      </button>
    </footer>
  )
}
