import Image from 'next/image'
import ContactForm from '../components/ContactForm'

export const metadata = {
  title: "Contactez Darwin Agency — Parlons de votre projet digital",
  description: "Vous avez un projet digital ? Discutons-en. Darwin Agency, agence marketing performance à Aix-en-Provence. +33 (0)4 13 57 09 00",
}

export default function ContactPage() {
  return (
    <main>

      {/* ── HERO ───────────────────────────────────────────────────── */}
      <section style={{ background: '#0a0a0a', paddingTop: 140, paddingBottom: 80 }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 48px' }}>
          <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#FFF127', marginBottom: 20 }}>
            Contactez-nous
          </p>
          <h1 className="font-anton" style={{ fontSize: 'clamp(3.5rem, 9vw, 9rem)', lineHeight: 0.9, color: '#fff', textTransform: 'uppercase', marginBottom: 32 }}>
            LET&apos;S<br />
            <span style={{ color: 'transparent', WebkitTextStroke: '2px #FFF127' }}>TALK!</span>
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.65)', maxWidth: 560, lineHeight: 1.7, margin: 0 }}>
            Ensemble, donnons vie à vos ambitions digitales.
          </p>
        </div>
      </section>

      {/* ── MAIN CONTENT : FORM + INFOS ─────────────────────────── */}
      <section style={{ background: '#fff' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 480px', gap: 0, alignItems: 'stretch' }} className="rsp-contact-grid">

          {/* Colonne gauche — Formulaire */}
          <div style={{ padding: '72px 64px 72px 48px', borderRight: '1px solid #ebebeb' }} className="rsp-contact-form">
            <h2 className="font-anton" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', textTransform: 'uppercase', marginBottom: 8, lineHeight: 1.05 }}>
              Vous avez une idée, un projet,<br />ou juste une question ?
            </h2>
            <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: 1.75, marginBottom: 40, maxWidth: 520 }}>
              Chez Darwin on adore discuter, brainstormer et performer. Les meilleures collaborations commencent par une conversation simple et transparente.
            </p>
            <ContactForm />
          </div>

          {/* Colonne droite — Infos + photos */}
          <div style={{ background: '#f7f7f7', display: 'flex', flexDirection: 'column' }}>

            {/* Photo équipe */}
            <div style={{ position: 'relative', width: '100%', height: 300, overflow: 'hidden' }}>
              <Image
                src="/images/contact/team-1.png"
                alt="Équipe Darwin Agency"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center top' }}
              />
            </div>

            {/* Infos de contact */}
            <div style={{ padding: '40px 40px 32px', flex: 1 }}>

              {/* Adresse */}
              <div style={{ marginBottom: 32 }}>
                <p style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#aaa', marginBottom: 12 }}>
                  Nous trouver
                </p>
                <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFF127" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: 2, flexShrink: 0, background: '#0a0a0a', borderRadius: '50%', padding: 4, width: 26, height: 26 }}>
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                  <p style={{ fontSize: '0.88rem', lineHeight: 1.65, color: '#333', margin: 0 }}>
                    805 Rue Jean René Guillibert Gauthier de la Lauzière<br />
                    Bâtiment LE TOMA<br />
                    <strong>13 290 Aix-en-Provence</strong>
                  </p>
                </div>
              </div>

              {/* Téléphone */}
              <div style={{ marginBottom: 32 }}>
                <p style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#aaa', marginBottom: 12 }}>
                  Nous appeler
                </p>
                <a
                  href="tel:+33413570900"
                  style={{ display: 'flex', gap: 12, alignItems: 'center', textDecoration: 'none' }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFF127" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, background: '#0a0a0a', borderRadius: '50%', padding: 4, width: 26, height: 26 }}>
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.63 3.39 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.85a16 16 0 0 0 6.08 6.08l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  <span style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0a0a0a', letterSpacing: '0.04em' }}>
                    +33 (0)4 13 57 09 00
                  </span>
                </a>
              </div>

              {/* Réseaux sociaux */}
              <div style={{ marginBottom: 32 }}>
                <p style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#aaa', marginBottom: 12 }}>
                  Nous suivre
                </p>
                <a
                  href="https://www.linkedin.com/company/darwin-agency/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: '#0a0a0a', color: '#fff', padding: '10px 18px', borderRadius: 4, textDecoration: 'none', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.06em' }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
                  </svg>
                  LinkedIn Darwin Agency
                </a>
              </div>

              {/* Horaires */}
              <div style={{ padding: '20px 24px', background: '#0a0a0a', borderRadius: 4 }}>
                <p style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#FFF127', marginBottom: 10 }}>
                  Horaires
                </p>
                <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, margin: 0 }}>
                  Lundi – Vendredi<br />
                  <strong style={{ color: '#fff' }}>9h00 – 18h00</strong>
                </p>
              </div>
            </div>

            {/* Photo bâtiment */}
            <div style={{ position: 'relative', width: '100%', height: 220, overflow: 'hidden' }}>
              <Image
                src="/images/contact/le-toma.jpg"
                alt="Bâtiment Le Toma — Darwin Agency Aix-en-Provence"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'rgba(10,10,10,0.35)', display: 'flex', alignItems: 'flex-end', padding: '20px 24px' }}>
                <span style={{ color: '#fff', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                  Bâtiment Le Toma · Aix-en-Provence
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BAND ─────────────────────────────────────────────── */}
      <section style={{ background: '#FFF127', padding: '64px 48px', textAlign: 'center' }}>
        <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#0a0a0a', marginBottom: 16, opacity: 0.6 }}>
          Réponse garantie sous 24h ouvrées
        </p>
        <h2 className="font-anton" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', textTransform: 'uppercase', color: '#0a0a0a', lineHeight: 1, margin: 0 }}>
          LES MEILLEURES COLLABORATIONS COMMENCENT<br />PAR UNE CONVERSATION
        </h2>
      </section>

    </main>
  )
}
