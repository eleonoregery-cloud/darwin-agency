import Image from 'next/image'
import Link from 'next/link'

/* ─── DATA ─────────────────────────────────────────── */

const stats = [
  { num: '2003', label: "Année de création" },
  { num: '400+', label: 'Clients accompagnés' },
  { num: '30+', label: 'Experts seniors' },
  { num: '7 ans', label: 'Fidélité client moyenne' },
]

const objectives = [
  {
    id: '01',
    title: 'Gagner en visibilité',
    desc: "Capter l'attention et installer votre marque dans l'esprit de vos audiences cibles. Nous construisons la présence organique et payante qui vous rend incontournable dans votre secteur.",
    items: ['Branding & notoriété', 'SEO & référencement', 'Display & vidéo', 'Médias sociaux'],
  },
  {
    id: '02',
    title: 'Augmenter le trafic',
    desc: "Générer du flux là où vous en avez besoin — en ligne comme en point de vente physique. Chaque levier est activé de façon cohérente pour maximiser les volumes qualifiés.",
    items: ['SEA & Google Ads', 'Social Media Ads', 'Programmatique', 'SEO local & e-commerce'],
  },
  {
    id: '03',
    title: 'Convertir en leads',
    desc: "Attirer les bonnes audiences et les transformer en opportunités concrètes. Nous optimisons chaque point de contact pour réduire le coût d'acquisition et augmenter le taux de conversion.",
    items: ['Landing pages optimisées', 'Retargeting', 'Emails & automation', 'A/B testing'],
  },
  {
    id: '04',
    title: 'Stimuler les ventes',
    desc: "Maximiser les résultats grâce à des stratégies digitales efficaces et adaptées à vos objectifs business. ROI mesurable, reportings actionnables, pilotage en temps réel.",
    items: ['Performance tracking', 'Analytics & data', 'Attribution multi-touch', 'Optimisation continue'],
  },
]

const reasons = [
  {
    icon: '⚡',
    title: 'Union des talents',
    desc: "Des experts seniors certifiés dans leurs domaines créent une synergie unique. Chaque profil apporte une expertise pointue — ensemble, ils couvrent l'intégralité des leviers digitaux.",
  },
  {
    icon: '📊',
    title: 'La puissance de la data',
    desc: "Notre approche analytique transforme la complexité des données en opportunités concrètes. Chaque décision est fondée sur des chiffres réels, pas sur des intuitions.",
  },
  {
    icon: '🤖',
    title: 'Innovation continue',
    desc: "Nous anticipons les évolutions du marché grâce à une veille permanente et l'intégration de l'IA dans nos processus. Vos stratégies sont toujours un temps d'avance.",
  },
  {
    icon: '🔭',
    title: 'Vision transversale',
    desc: "Une expertise 360° qui couvre tous les leviers digitaux crée une valeur long terme. SEO, SEA, Social, Media, Data : tout est pensé ensemble, pas en silo.",
  },
  {
    icon: '🏆',
    title: 'Expérience certifiée',
    desc: "Google Partner Premier, Meta Business Partner, Microsoft Advertising. Ces certifications ne sont pas des badges — elles garantissent un accès prioritaire aux nouvelles fonctionnalités et aux équipes des plateformes.",
  },
]

const team = [
  { name: 'Olivier Trubert', role: 'Président' },
  { name: 'Gaëlle Aubert', role: 'Directrice Administrative & Financière' },
  { name: 'Miriame Yvard', role: 'Directrice Stratégie' },
  { name: 'Jérome Renard', role: 'Directeur Associé' },
  { name: 'Carole Kabanda', role: 'Directrice Media' },
  { name: 'Thomas Courjeault', role: 'Directeur SEO / SEA / SMA' },
  { name: 'Amaury Micha de Faletans', role: 'Directeur Stratégie & Innovation' },
]

const certifications = [
  { src: '/logos/certifications/google-partner.jpg', alt: 'Google Partner Premier', w: 130, h: 52 },
  { src: '/logos/certifications/meta-partner.jpg', alt: 'Meta Business Partner', w: 130, h: 52 },
  { src: '/logos/certifications/bing-ads.jpg', alt: 'Microsoft Advertising', w: 130, h: 52 },
  { src: '/logos/certifications/google-analytics.png', alt: 'Google Analytics', w: 130, h: 52 },
]

const expertises = [
  { title: 'SEO', desc: 'Référencement naturel', href: '/expertises/seo' },
  { title: 'SEA', desc: 'Google & Bing Ads', href: '/expertises/sea' },
  { title: 'SMA', desc: 'Social Media Ads', href: '/expertises/sma' },
  { title: 'MEDIA', desc: 'Display & Programmatique', href: '/expertises/media' },
  { title: 'ANALYTICS', desc: 'Data & Tracking', href: '/expertises/analytics' },
  { title: 'FORMATION', desc: 'Montée en compétences', href: '/expertises/formation' },
]

/* ─── PAGE ──────────────────────────────────────────── */

export default function AgencePage() {
  return (
    <div style={{ background: '#fff', color: '#0a0a0a' }}>

      {/* ─── HERO ─── */}
      <section style={{ background: '#fff', overflow: 'hidden', minHeight: '88vh', display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', flex: 1, minHeight: '88vh' }}>

          {/* LEFT — texte */}
          <div style={{ padding: '72px 56px 72px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            {/* Breadcrumb */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 36, fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#bbb' }}>
              <Link href="/" style={{ color: '#bbb', textDecoration: 'none' }}>Accueil</Link>
              <span>/</span>
              <span style={{ color: '#0a0a0a' }}>L&apos;Agence</span>
            </div>

            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 28 }}>
              <span style={{ display: 'inline-block', width: 32, height: 3, background: '#FFF127' }} />
              <span style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#0a0a0a' }}>Depuis 2003</span>
            </div>

            <h1 className="font-anton" style={{ fontSize: 'clamp(3rem, 5.5vw, 5.5rem)', lineHeight: 0.9, textTransform: 'uppercase', color: '#0a0a0a', margin: '0 0 28px' }}>
              <span style={{ display: 'block' }}>NOTRE AGENCE</span>
              <span style={{ display: 'block' }}>DÉDIÉE À LA</span>
              <span style={{ display: 'inline-block', background: '#FFF127', padding: '0 8px', marginBottom: 4 }}>PERFORMANCE</span>
              <span style={{ display: 'block' }}>DEPUIS 22 ANS.</span>
            </h1>

            <p style={{ fontSize: '1rem', lineHeight: 1.75, color: '#555', marginBottom: 40, maxWidth: 460 }}>
              Darwin accompagne les marques pour qu&apos;elles s&apos;épanouissent durablement et s&apos;adaptent aux attentes de leurs audiences. Experts en stratégie d&apos;acquisition digitale, nous développons des solutions sur-mesure qui répondent à tous vos défis.
            </p>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 48 }}>
              <Link href="#contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#0a0a0a', color: '#fff', padding: '14px 28px', borderRadius: 4, textDecoration: 'none', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                Nous contacter →
              </Link>
              <Link href="#equipe" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, border: '1.5px solid #ddd', color: '#0a0a0a', padding: '14px 28px', borderRadius: 4, textDecoration: 'none', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                Rencontrer l&apos;équipe
              </Link>
            </div>

            {/* Stats row */}
            <div style={{ display: 'flex', gap: 0, borderTop: '1px solid #eee', paddingTop: 32 }}>
              {stats.map((s, i) => (
                <div key={s.num} style={{ flex: 1, paddingRight: 24, borderRight: i < stats.length - 1 ? '1px solid #eee' : 'none', paddingLeft: i > 0 ? 24 : 0 }}>
                  <div className="font-anton" style={{ fontSize: '1.8rem', lineHeight: 1, marginBottom: 4, color: '#0a0a0a' }}>{s.num}</div>
                  <div style={{ fontSize: '0.65rem', color: '#aaa', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — image gymnaste */}
          <div style={{ position: 'relative', background: '#0a0a0a', overflow: 'hidden' }}>
            <Image
              src="/images/gymnaste.jpg"
              alt="Darwin Agence — Performance & Créativité"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center top', opacity: 0.9 }}
              priority
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(255,255,255,0.1) 0%, transparent 40%)' }} />
            {/* Floating badge */}
            <div style={{ position: 'absolute', top: 40, left: 32, background: '#FFF127', padding: '16px 20px', borderRadius: 4 }}>
              <div className="font-anton" style={{ fontSize: '1.6rem', lineHeight: 1, color: '#0a0a0a' }}>+400</div>
              <div style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#555', marginTop: 4 }}>clients accompagnés</div>
            </div>
            {/* Certif badge */}
            <div style={{ position: 'absolute', bottom: 32, right: 32, background: '#fff', padding: '12px 20px', borderRadius: 6, boxShadow: '0 8px 32px rgba(0,0,0,0.3)' }}>
              <Image src="/logos/certifications/google-partner.jpg" alt="Google Partner Premier" width={130} height={52} style={{ objectFit: 'contain', display: 'block' }} />
            </div>
          </div>
        </div>
      </section>

      {/* ─── MISSION JAUNE ─── */}
      <section style={{ background: '#FFF127', padding: '64px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          <div>
            <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#555', marginBottom: 16 }}>
              Notre mission
            </p>
            <h2 className="font-anton" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', textTransform: 'uppercase', lineHeight: 1.05, margin: 0, color: '#0a0a0a' }}>
              CONNECTER LES ESPRITS CRÉATIFS POUR ENGAGER LES MARQUES SUR LE LONG TERME.
            </h2>
          </div>
          <div>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#333', margin: '0 0 24px' }}>
              Chez Darwin, nous croyons en l&apos;agilité et l&apos;adaptabilité. Notre mission : créer des stratégies solides et innovantes pour que votre marque résiste au temps et évolue avec son époque.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#333', margin: 0 }}>
              En tant qu&apos;experts en stratégie d&apos;acquisition digitale, nous développons des solutions sur-mesure qui répondent à l&apos;ensemble de vos défis — de la visibilité à la conversion, de la data à la créativité.
            </p>
          </div>
        </div>
      </section>

      {/* ─── 4 OBJECTIFS ─── */}
      <section style={{ background: '#fff', padding: '96px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ marginBottom: 64 }}>
            <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#aaa', marginBottom: 16 }}>
              Ce que nous faisons
            </p>
            <h2 className="font-anton" style={{ fontSize: 'clamp(2rem, 4vw, 4rem)', textTransform: 'uppercase', lineHeight: 1, margin: 0, maxWidth: 700 }}>
              4 OBJECTIFS, UNE SEULE AMBITION : VOTRE PERFORMANCE
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 2 }}>
            {objectives.map((obj, i) => (
              <div
                key={obj.id}
                style={{
                  padding: '48px 40px',
                  background: (i === 0 || i === 3) ? '#fafafa' : '#fff',
                  border: '1px solid #ebebeb',
                  position: 'relative',
                }}
              >
                <div className="font-anton" style={{ fontSize: '4rem', color: '#f0f0f0', position: 'absolute', top: 16, right: 24, lineHeight: 1, userSelect: 'none' }}>{obj.id}</div>
                <div style={{ display: 'inline-block', background: '#FFF127', height: 3, width: 32, marginBottom: 20 }} />
                <h3 className="font-anton" style={{ fontSize: '1.8rem', textTransform: 'uppercase', marginBottom: 16, lineHeight: 1.05 }}>{obj.title}</h3>
                <p style={{ fontSize: '0.9rem', lineHeight: 1.8, color: '#444', marginBottom: 24 }}>{obj.desc}</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {obj.items.map((item) => (
                    <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.8rem', fontWeight: 700, color: '#0a0a0a', letterSpacing: '0.04em' }}>
                      <span style={{ width: 6, height: 6, background: '#FFF127', borderRadius: '50%', flexShrink: 0 }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── POURQUOI DARWIN ─── */}
      <section style={{ background: '#0a0a0a', padding: '96px 24px', color: '#fff' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ marginBottom: 64 }}>
            <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#555', marginBottom: 16 }}>
              Notre différence
            </p>
            <h2 className="font-anton" style={{ fontSize: 'clamp(2rem, 4vw, 4rem)', textTransform: 'uppercase', lineHeight: 1, margin: 0, color: '#fff', maxWidth: 700 }}>
              5 RAISONS DE CHOISIR DARWIN
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 2 }}>
            {reasons.map((r, i) => (
              <div
                key={r.title}
                style={{
                  padding: '36px 28px',
                  background: '#fff',
                  borderTop: `4px solid ${i % 2 === 0 ? '#FFF127' : '#29C5F5'}`,
                  color: '#0a0a0a',
                }}
              >
                <div style={{ fontSize: '1.8rem', marginBottom: 20 }}>{r.icon}</div>
                <h3 className="font-anton" style={{ fontSize: '1.2rem', textTransform: 'uppercase', marginBottom: 14, lineHeight: 1.1 }}>{r.title}</h3>
                <p style={{ fontSize: '0.82rem', lineHeight: 1.75, color: '#555', margin: 0 }}>{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ÉQUIPE ─── */}
      <section id="equipe" style={{ background: '#f4f4f4', padding: '96px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 64 }}>
            <div>
              <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#aaa', marginBottom: 16 }}>
                L&apos;équipe dirigeante
              </p>
              <h2 className="font-anton" style={{ fontSize: 'clamp(2rem, 4vw, 4rem)', textTransform: 'uppercase', lineHeight: 1, margin: 0 }}>
                DES EXPERTS QUI S&apos;ENGAGENT
              </h2>
            </div>
            <p style={{ maxWidth: 420, fontSize: '0.9rem', lineHeight: 1.75, color: '#555', margin: 0 }}>
              Une équipe de plus de 30 experts seniors avec une ancienneté moyenne de 6 ans — preuve que Darwin est un endroit où les talents s&apos;épanouissent sur le long terme.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2 }}>
            {team.map((member) => (
              <div
                key={member.name}
                style={{
                  padding: '36px 28px',
                  background: '#fff',
                  border: '1px solid #ebebeb',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div style={{ width: 48, height: 48, borderRadius: '50%', background: '#0a0a0a', marginBottom: 20, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ color: '#FFF127', fontWeight: 700, fontSize: '1rem' }}>
                    {member.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </span>
                </div>
                <h3 style={{ fontWeight: 700, fontSize: '0.95rem', color: '#0a0a0a', marginBottom: 6, lineHeight: 1.3 }}>{member.name}</h3>
                <p style={{ fontSize: '0.75rem', color: '#aaa', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', margin: 0 }}>{member.role}</p>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: '#FFF127' }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CERTIFICATIONS ─── */}
      <section style={{ background: '#fff', padding: '64px 24px', borderTop: '1px solid #eee' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#aaa', marginBottom: 40, textAlign: 'center' }}>
            Certifications & Partenariats officiels
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 64, flexWrap: 'wrap' }}>
            {certifications.map((cert) => (
              <Image key={cert.alt} src={cert.src} alt={cert.alt} width={cert.w} height={cert.h} style={{ objectFit: 'contain', opacity: 0.75, filter: 'grayscale(20%)' }} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── NOS EXPERTISES ─── */}
      <section style={{ background: '#fff', padding: '80px 24px', borderTop: '1px solid #eee' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#aaa', marginBottom: 40 }}>
            Nos expertises
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 2 }}>
            {expertises.map((e) => (
              <Link
                key={e.title}
                href={e.href}
                style={{ display: 'block', padding: '24px 20px', background: '#fafafa', border: '1px solid #ebebeb', textDecoration: 'none' }}
              >
                <div className="font-anton" style={{ fontSize: '1.1rem', textTransform: 'uppercase', color: '#0a0a0a', marginBottom: 6 }}>{e.title}</div>
                <div style={{ fontSize: '0.72rem', color: '#aaa', fontWeight: 500 }}>{e.desc}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA FINAL ─── */}
      <section id="contact" style={{ background: '#FFF127', padding: '96px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#555', marginBottom: 24 }}>
            Travaillons ensemble
          </p>
          <h2 className="font-anton" style={{ fontSize: 'clamp(2.4rem, 5vw, 5rem)', textTransform: 'uppercase', lineHeight: 1, margin: '0 0 24px', color: '#0a0a0a' }}>
            PRÊT À BOOSTER VOTRE PERFORMANCE DIGITALE ?
          </h2>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#333', marginBottom: 40, maxWidth: 560, margin: '0 auto 40px' }}>
            Parlons de votre projet. En 30 minutes, nous identifions les leviers prioritaires pour accélérer votre croissance digitale.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/#contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#0a0a0a', color: '#fff', padding: '16px 36px', borderRadius: 4, textDecoration: 'none', fontSize: '0.88rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              Prendre contact →
            </Link>
            <a href="tel:+33413570900" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, border: '2px solid #0a0a0a', color: '#0a0a0a', padding: '16px 36px', borderRadius: 4, textDecoration: 'none', fontSize: '0.88rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              +33 (0)4 13 57 09 00
            </a>
          </div>
          <p style={{ fontSize: '0.72rem', color: '#888', marginTop: 24, fontWeight: 500 }}>
            Réponse sous 24h ouvrées · Sans engagement · Premier échange offert
          </p>
        </div>
      </section>

    </div>
  )
}
