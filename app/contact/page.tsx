import Image from 'next/image'
import Link from 'next/link'
import ContactForm from '../components/ContactForm'

export const metadata = {
  title: "Contactez Darwin Agency — Parlons de votre projet digital",
  description: "Vous avez un projet digital ? Discutons-en. Darwin Agency, agence marketing performance à Aix-en-Provence. +33 (0)4 13 57 09 00",
}

export default function ContactPage() {
  return (
    <main>

      {/* ── HERO BLANC ────────────────────────────────────────────── */}
      <section style={{ background: '#fff', paddingTop: 140, paddingBottom: 64, borderBottom: '1px solid #ebebeb' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 48px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 40, flexWrap: 'wrap' }}>
          <div>
            <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#29C5F5', marginBottom: 20 }}>
              Contactez-nous
            </p>
            <h1 className="font-anton" style={{ fontSize: 'clamp(3.5rem, 9vw, 9rem)', lineHeight: 0.9, color: '#0a0a0a', textTransform: 'uppercase', marginBottom: 28 }}>
              LET&apos;S<br />
              <span style={{ color: 'transparent', WebkitTextStroke: '2px #0a0a0a' }}>TALK!</span>
            </h1>
            <p style={{ fontSize: '1rem', color: '#666', maxWidth: 480, lineHeight: 1.75, margin: 0 }}>
              Ensemble, donnons vie à vos ambitions digitales. Les meilleures collaborations commencent par une conversation simple.
            </p>
          </div>

          {/* CTA Rejoignez-nous */}
          <Link
            href="/recrutement"
            style={{
              display: 'inline-flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: 6,
              background: '#f5f5f5',
              border: '1px solid #e8e8e8',
              borderRadius: 6,
              padding: '20px 28px',
              textDecoration: 'none',
              minWidth: 240,
              transition: 'border-color 0.2s, background 0.2s',
            }}
          >
            <span style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#FFF127', background: '#0a0a0a', padding: '3px 8px', borderRadius: 2 }}>
              On recrute
            </span>
            <span className="font-anton" style={{ fontSize: '1.3rem', textTransform: 'uppercase', color: '#0a0a0a', lineHeight: 1.1 }}>
              Rejoignez Darwin
            </span>
            <span style={{ fontSize: '0.8rem', color: '#888', lineHeight: 1.5 }}>
              Découvrez nos offres d&apos;emploi →
            </span>
          </Link>
        </div>
      </section>

      {/* ── MAIN CONTENT : FORM + INFOS ─────────────────────────── */}
      <section style={{ background: '#fff' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 460px', gap: 0, alignItems: 'stretch' }} className="rsp-contact-grid">

          {/* Colonne gauche — Formulaire */}
          <div style={{ padding: '72px 64px 72px 48px', borderRight: '1px solid #ebebeb' }} className="rsp-contact-form">
            <h2 className="font-anton" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', textTransform: 'uppercase', marginBottom: 8, lineHeight: 1.05 }}>
              Vous avez une idée, un projet,<br />ou juste une question ?
            </h2>
            <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: 1.75, marginBottom: 40, maxWidth: 520 }}>
              Chez Darwin on adore discuter, brainstormer et performer. Pas de jargon compliqué — on traduit la complexité du digital en solutions concrètes.
            </p>
            <ContactForm />
          </div>

          {/* Colonne droite — Infos + plan */}
          <div style={{ background: '#f7f7f7', display: 'flex', flexDirection: 'column' }}>

            {/* Photo équipe */}
            <div style={{ position: 'relative', width: '100%', height: 260, overflow: 'hidden' }}>
              <Image
                src="/images/contact/team-1.png"
                alt="Équipe Darwin Agency"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center top' }}
              />
            </div>

            {/* Infos de contact */}
            <div style={{ padding: '36px 36px 28px', flex: 1 }}>

              {/* Adresse */}
              <div style={{ marginBottom: 28 }}>
                <p style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#aaa', marginBottom: 10 }}>
                  Nous trouver
                </p>
                <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="#FFF127" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, background: '#0a0a0a', borderRadius: '50%', padding: 4, width: 26, height: 26 }}>
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                  <p style={{ fontSize: '0.86rem', lineHeight: 1.65, color: '#333', margin: 0 }}>
                    805 Rue Jean René Guillibert<br />
                    Bâtiment <strong>LE TOMA</strong><br />
                    13 290 Aix-en-Provence
                  </p>
                </div>
              </div>

              {/* Téléphone */}
              <div style={{ marginBottom: 28 }}>
                <p style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#aaa', marginBottom: 10 }}>
                  Nous appeler
                </p>
                <a href="tel:+33413570900" style={{ display: 'flex', gap: 12, alignItems: 'center', textDecoration: 'none' }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="#FFF127" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, background: '#0a0a0a', borderRadius: '50%', padding: 4, width: 26, height: 26 }}>
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.63 3.39 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.85a16 16 0 0 0 6.08 6.08l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  <span style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0a0a0a' }}>+33 (0)4 13 57 09 00</span>
                </a>
              </div>

              {/* LinkedIn + Horaires côte à côte */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 0 }}>
                <a
                  href="https://www.linkedin.com/company/darwin-agency/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'flex', flexDirection: 'column', gap: 8, background: '#0a0a0a', color: '#fff', padding: '16px', borderRadius: 4, textDecoration: 'none' }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
                  </svg>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.06em', lineHeight: 1.3 }}>LinkedIn<br />Darwin Agency</span>
                </a>
                <div style={{ background: '#fff', border: '1px solid #e8e8e8', borderRadius: 4, padding: '16px' }}>
                  <p style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#aaa', marginBottom: 6 }}>Horaires</p>
                  <p style={{ fontSize: '0.82rem', color: '#0a0a0a', lineHeight: 1.6, margin: 0 }}>
                    Lun – Ven<br /><strong>9h – 18h</strong>
                  </p>
                </div>
              </div>
            </div>

            {/* Plan / image localisation */}
            <div style={{ position: 'relative', width: '100%', height: 200, overflow: 'hidden' }}>
              <Image
                src="/images/contact/plan.jpg"
                alt="Plan d'accès Darwin Agency — Bâtiment Le Toma, Aix-en-Provence"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BAND ─────────────────────────────────────────────── */}
      <section style={{ background: '#FFF127', padding: '56px 48px', textAlign: 'center' }}>
        <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#0a0a0a', marginBottom: 16, opacity: 0.55 }}>
          Réponse garantie sous 24h ouvrées
        </p>
        <h2 className="font-anton" style={{ fontSize: 'clamp(1.8rem, 4vw, 3.2rem)', textTransform: 'uppercase', color: '#0a0a0a', lineHeight: 1, margin: 0 }}>
          LES MEILLEURES COLLABORATIONS<br />COMMENCENT PAR UNE CONVERSATION
        </h2>
      </section>

    </main>
  )
}
