import Image from 'next/image'
import PerformanceSlider from './components/PerformanceSlider'
import ContactForm from './components/ContactForm'
import HeroSection from './components/HeroSection'

const caseStudies = [
  { name: 'Verisure', category: 'SEA & Analytics', img: '/images/cas-verisure.jpg' },
  { name: 'Préfon', category: 'SEO & SEA', img: '/images/cas-prefon.jpg' },
  { name: 'EBRA Médias', category: 'SEA & Media', img: '/images/cas-ebra.jpg' },
  { name: 'JustFab', category: 'SMA & SEA', img: '/images/cas-justfab.jpg' },
  { name: 'Acadomia', category: 'SEO & SEA', img: '/images/cas-acadomia.jpg' },
  { name: 'Ponant', category: 'Media & Analytics', img: '/images/cas-ponant.jpg' },
]

export default function Home() {
  return (
    <div style={{ background: '#fff', color: '#0a0a0a' }}>

      {/* ─── HERO ─── */}
      <HeroSection />

      {/* ─── TAGLINE ─── */}
      <section style={{ background: '#fff', padding: '80px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <p style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#999', marginBottom: 24 }}>
            CONNECTER LES ESPRITS CRÉATIFS :
          </p>
          <h2 className="font-anton" style={{ fontSize: 'clamp(1.8rem, 4vw, 3.6rem)', lineHeight: 1.1, textTransform: 'uppercase', maxWidth: 900, color: '#0a0a0a', margin: 0 }}>
            POUR ENGAGER LES MARQUES DANS UNE DYNAMIQUE À LONG TERME.
          </h2>
        </div>
      </section>

      {/* ─── NOUS SOMMES DARWIN ─── */}
      <section style={{ background: '#fff', padding: '60px 24px 80px', borderTop: '1px solid #eee' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80 }}>
          <div>
            <h2 className="font-anton" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.6rem)', textTransform: 'uppercase', marginBottom: 24, lineHeight: 1.1 }}>
              NOUS SOMMES DARWIN
            </h2>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.8, color: '#444', marginBottom: 16 }}>
              Agence digitale indépendante fondée en 2003, Darwin réunit des experts en acquisition,
              performance et création de contenu. Notre conviction : le digital doit être au service
              de la stratégie de marque, pas l&apos;inverse.
            </p>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.8, color: '#444', marginBottom: 32 }}>
              Nous accompagnons des marques ambitieuses dans leur transformation digitale avec une
              approche hybride alliant stratégie, créativité et data.
            </p>
            <a href="#" className="arrow-link btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '12px 24px', borderRadius: 4, textDecoration: 'none', fontSize: '0.8rem', letterSpacing: '0.1em' }}>
              DÉCOUVRIR DARWIN <span className="arrow">→</span>
            </a>
          </div>

          <div>
            {[
              { title: 'DÉVELOPPER VOTRE BRANDING', desc: "Nous déployons des campagnes de visibilité pour installer votre marque dans l'esprit de vos audiences.\nDisplay, vidéo et formats impactants sont activés pour maximiser la mémorisation et la répétition. La performance est pilotée via des indicateurs concrets : impressions, taux de complétion, durée de vue et taux de clic.", open: true },
              { title: 'CONSTRUIRE UNE STRATÉGIE DE QUALITÉ', desc: "Définir les leviers d'acquisition les plus pertinents pour maximiser votre ROI à chaque étape du funnel." },
              { title: 'DÉFINIR VOS OBJECTIFS LEAN', desc: "Travailler avec agilité et itérations courtes pour tester, apprendre et optimiser en continu." },
              { title: 'ACTIVER LE DIGITAL DANS VOTRE STRATÉGIE', desc: "Placer le digital au cœur de votre stratégie globale pour des résultats mesurables et durables." },
            ].map((item, i) => (
              <details key={i} open={item.open} style={{ borderBottom: '1px solid #e0e0e0' }}>
                <summary style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '18px 0', cursor: 'pointer' }}>
                  <span style={{ fontWeight: 700, fontSize: '0.82rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                    {item.title}
                  </span>
                  <span style={{ fontSize: '1.4rem', fontWeight: 300, lineHeight: 1, flexShrink: 0, marginLeft: 12 }}>+</span>
                </summary>
                <p style={{ padding: '0 0 18px', fontSize: '0.9rem', lineHeight: 1.7, color: '#555', margin: 0, whiteSpace: 'pre-line' }}>
                  {item.desc}
                </p>
              </details>
            ))}

            <div style={{ marginTop: 32 }}>
              <a href="#contact" className="btn-yellow arrow-link" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '14px 28px', borderRadius: 4, textDecoration: 'none', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.1em' }}>
                EN PARLER AVEC NOUS <span className="arrow">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PERFORMANCE SLIDER ─── */}
      <PerformanceSlider />

      {/* ─── NOTRE AGENCE / STATS ─── */}
      <section style={{ background: '#fff', overflow: 'hidden' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: 560 }}>

          {/* Colonne gauche — texte + stats */}
          <div style={{ padding: '80px 64px 80px 24px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h2 className="font-anton" style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.8rem)', textTransform: 'uppercase', color: '#0a0a0a', marginBottom: 28, lineHeight: 1.1 }}>
              NOTRE AGENCE DÉDIÉE À<br />LA PERFORMANCE DEPUIS<br />22 ANS
            </h2>
            <div style={{ width: 80, height: 3, background: '#0a0a0a', marginBottom: 40 }} />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {[
                { num: '2003', label: 'Année de création\nde Darwin Interactive' },
                { num: '+400', label: 'Clients\naccompagnés' },
                { num: '+30', label: 'Experts seniors\ndans nos équipes' },
                { num: '+6 ANS', label: 'De collaboration moyenne\navec nos clients' },
              ].map((stat) => (
                <div key={stat.num} style={{ background: '#f5f5f5', border: '1px solid #e8e8e8', borderRadius: 4, padding: '24px 20px' }}>
                  <div className="font-anton" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', color: '#0a0a0a', lineHeight: 1, marginBottom: 10 }}>
                    {stat.num}
                  </div>
                  <div style={{ fontSize: '0.7rem', color: '#555', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', lineHeight: 1.5, whiteSpace: 'pre-line' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Colonne droite — photo gymnaste */}
          <div style={{
            backgroundImage: 'url(/images/gymnaste.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center top',
            minHeight: 560,
          }} />

        </div>
      </section>

      {/* ─── RÉCOMPENSÉ PAR ─── */}
      <section style={{ background: '#fff', padding: '72px 24px 80px', borderBottom: '1px solid #ebebeb' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <p className="font-anton" style={{ fontSize: 'clamp(1.4rem, 3vw, 2.4rem)', textTransform: 'uppercase', textAlign: 'center', color: '#0a0a0a', letterSpacing: '0.06em', marginBottom: 56 }}>
            RÉCOMPENSÉ PAR
          </p>
          <div style={{ display: 'flex', gap: 0, alignItems: 'center', justifyContent: 'space-between', width: '100%', maxWidth: 1000, margin: '0 auto' }}>
            <Image src="/logos/recompenses/Les-cas-dor-mod.webp" alt="Les Cas d'Or du Digital" width={90} height={72} style={{ objectFit: 'contain', width: 'auto', maxHeight: 72, flexShrink: 0 }} />
            <Image src="/logos/recompenses/Deloitte_Logo-1.png" alt="Deloitte" width={120} height={48} style={{ objectFit: 'contain', width: 'auto', maxHeight: 48, flexShrink: 0 }} />
            <Image src="/logos/recompenses/Selligent-by-Marigold-evergreen-1.png" alt="Selligent by Marigold" width={150} height={48} style={{ objectFit: 'contain', width: 'auto', maxHeight: 48, flexShrink: 0 }} />
            <Image src="/logos/recompenses/logo_businessasitshouldbe_NOIR-1.png" alt="lesBigBoss" width={140} height={52} style={{ objectFit: 'contain', width: 'auto', maxHeight: 52, flexShrink: 0 }} />
            <Image src="/logos/recompenses/nuit-des-rois-darwin.jpg" alt="La Nuit des Rois" width={160} height={68} style={{ objectFit: 'contain', width: 'auto', maxHeight: 68, flexShrink: 0 }} />
          </div>
        </div>
      </section>

      {/* ─── NOS MÉTIERS ─── */}
      <section style={{ background: '#fff', padding: '80px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <h2 className="font-anton" style={{ fontSize: 'clamp(2rem, 5vw, 4.5rem)', textTransform: 'uppercase', marginBottom: 60, lineHeight: 1 }}>
            NOS MÉTIERS
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 0 }}>
            {[
              { title: 'SEO', desc: 'Optimisation organique pour gagner en visibilité et attirer un trafic qualifié sur le long terme.', items: ['Audit technique', 'Stratégie de contenu', 'Netlinking', 'SEO local'] },
              { title: 'SEA', desc: "Campagnes payantes Google & Bing pour capter l'intention d'achat au bon moment.", items: ['Google Ads', 'Bing Ads', 'Shopping', 'Performance Max'] },
              { title: 'SMA', desc: 'Social Media Advertising pour engager vos audiences sur les réseaux sociaux.', items: ['Meta Ads', 'LinkedIn Ads', 'TikTok Ads', 'Pinterest Ads'] },
              { title: 'MEDIA', desc: 'Stratégie media digitale complète : display, vidéo, programmatique et native.', items: ['Programmatique', 'Display', 'Vidéo', 'Native'] },
              { title: 'ANALYTICS', desc: 'Data, tracking et analytics pour piloter la performance avec précision.', items: ['GA4', 'Data Studio', 'Tag Manager', 'Attribution'] },
            ].map((service, i) => (
              <div
                key={service.title}
                className="service-col"
                style={{
                  borderLeft: i === 0 ? '1px solid #ddd' : 'none',
                  borderRight: '1px solid #ddd',
                  borderTop: '1px solid #ddd',
                  borderBottom: '1px solid #ddd',
                  padding: '28px 20px',
                }}
              >
                <h3 className="font-anton" style={{ fontSize: '1.6rem', textTransform: 'uppercase', marginBottom: 14, letterSpacing: '0.03em' }}>
                  {service.title}
                </h3>
                <p style={{ fontSize: '0.82rem', lineHeight: 1.7, color: '#555', marginBottom: 20 }}>
                  {service.desc}
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {service.items.map((item) => (
                    <li key={item} style={{ fontSize: '0.78rem', fontWeight: 600, color: '#0a0a0a', padding: '7px 0', borderTop: '1px solid #eee', letterSpacing: '0.04em' }}>
                      {item} →
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Client logos — double marquee */}
          <div style={{ marginTop: 56 }}>
            <p style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#bbb', marginBottom: 32 }}>
              ILS NOUS FONT CONFIANCE
            </p>
            {/* Ligne 1 — défile vers la gauche */}
            <div style={{ overflow: 'hidden', position: 'relative', marginBottom: 20 }}>
              <div className="marquee-track" style={{ display: 'inline-flex', flexDirection: 'row', flexWrap: 'nowrap', gap: 0, alignItems: 'center' }}>
                {[
                  { src: '/logos/clients/nordnet.png', alt: 'Nordnet' },
                  { src: '/logos/clients/engie.png', alt: 'Engie' },
                  { src: '/logos/clients/vinci.png', alt: 'Vinci' },
                  { src: '/logos/clients/edf.png', alt: 'EDF' },
                  { src: '/logos/clients/orano.png', alt: 'Orano' },
                  { src: '/logos/clients/horse-pilot.png', alt: 'Horse Pilot' },
                  { src: '/logos/clients/ponant.png', alt: 'Ponant' },
                  { src: '/logos/clients/arthur-bonnet.png', alt: 'Arthur Bonnet' },
                  { src: '/logos/clients/maty.png', alt: 'Maty' },
                  { src: '/logos/clients/smatis.png', alt: 'Smatis' },
                  /* duplicate */
                  { src: '/logos/clients/nordnet.png', alt: 'Nordnet' },
                  { src: '/logos/clients/engie.png', alt: 'Engie' },
                  { src: '/logos/clients/vinci.png', alt: 'Vinci' },
                  { src: '/logos/clients/edf.png', alt: 'EDF' },
                  { src: '/logos/clients/orano.png', alt: 'Orano' },
                  { src: '/logos/clients/horse-pilot.png', alt: 'Horse Pilot' },
                  { src: '/logos/clients/ponant.png', alt: 'Ponant' },
                  { src: '/logos/clients/arthur-bonnet.png', alt: 'Arthur Bonnet' },
                  { src: '/logos/clients/maty.png', alt: 'Maty' },
                  { src: '/logos/clients/smatis.png', alt: 'Smatis' },
                ].map((logo, i) => (
                  <div key={i} style={{ flexShrink: 0, height: 56, display: 'flex', alignItems: 'center', paddingRight: 64 }}>
                    <Image src={logo.src} alt={logo.alt} width={150} height={56} style={{ objectFit: 'contain', filter: 'grayscale(100%)', opacity: 0.6, maxHeight: 56, width: 'auto' }} />
                  </div>
                ))}
              </div>
            </div>
            {/* Ligne 2 — défile vers la droite */}
            <div style={{ overflow: 'hidden', position: 'relative' }}>
              <div className="marquee-track-reverse" style={{ display: 'inline-flex', flexDirection: 'row', flexWrap: 'nowrap', gap: 0, alignItems: 'center' }}>
                {[
                  { src: '/logos/clients/aladom.png', alt: 'Aladom' },
                  { src: '/logos/clients/passion-beaute.png', alt: 'Passion Beauté' },
                  { src: '/logos/clients/maison-captain.png', alt: 'Maison Captain' },
                  { src: '/logos/clients/harper-collins.png', alt: 'Harper Collins' },
                  { src: '/logos/clients/flower.png', alt: 'Flower' },
                  { src: '/logos/clients/happe.png', alt: 'Happe' },
                  { src: '/logos/clients/cookson.png', alt: 'Cookson' },
                  { src: '/logos/clients/comera.png', alt: 'Coméra Cuisines' },
                  { src: '/logos/clients/ofc.png', alt: 'OFC' },
                  { src: '/logos/clients/intermedes.png', alt: 'Intermèdes' },
                  /* duplicate */
                  { src: '/logos/clients/aladom.png', alt: 'Aladom' },
                  { src: '/logos/clients/passion-beaute.png', alt: 'Passion Beauté' },
                  { src: '/logos/clients/maison-captain.png', alt: 'Maison Captain' },
                  { src: '/logos/clients/harper-collins.png', alt: 'Harper Collins' },
                  { src: '/logos/clients/flower.png', alt: 'Flower' },
                  { src: '/logos/clients/happe.png', alt: 'Happe' },
                  { src: '/logos/clients/cookson.png', alt: 'Cookson' },
                  { src: '/logos/clients/comera.png', alt: 'Coméra Cuisines' },
                  { src: '/logos/clients/ofc.png', alt: 'OFC' },
                  { src: '/logos/clients/intermedes.png', alt: 'Intermèdes' },
                ].map((logo, i) => (
                  <div key={i} style={{ flexShrink: 0, height: 56, display: 'flex', alignItems: 'center', paddingRight: 64 }}>
                    <Image src={logo.src} alt={logo.alt} width={150} height={56} style={{ objectFit: 'contain', filter: 'grayscale(100%)', opacity: 0.6, maxHeight: 56, width: 'auto' }} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div style={{ marginTop: 48 }}>
            <a href="#" className="btn-yellow arrow-link" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '14px 28px', borderRadius: 4, textDecoration: 'none', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.1em' }}>
              DÉCOUVRIR NOS MÉTIERS <span className="arrow">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* ─── NOS CAS CLIENTS ─── */}
      <section style={{ background: '#f4f4f4', padding: '80px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <h2 className="font-anton" style={{ fontSize: 'clamp(2rem, 5vw, 4.5rem)', textTransform: 'uppercase', marginBottom: 48, lineHeight: 1 }}>
            NOS CAS CLIENTS
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {caseStudies.map((project) => (
              <a key={project.name} href="#" className="case-card" style={{ display: 'block', textDecoration: 'none', overflow: 'hidden', borderRadius: 6, position: 'relative' }}>
                <div style={{ overflow: 'hidden', position: 'relative', height: 240 }}>
                  <Image
                    src={project.img}
                    alt={project.name}
                    fill
                    className="img-placeholder"
                    style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }}
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)' }} />
                  <div style={{ position: 'absolute', bottom: 20, left: 20 }}>
                    <div style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#FFF127', marginBottom: 4 }}>
                      {project.category}
                    </div>
                    <div className="font-anton" style={{ fontSize: '1.4rem', textTransform: 'uppercase', color: '#fff' }}>
                      {project.name}
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div style={{ marginTop: 48, textAlign: 'center' }}>
            <a href="#" className="btn-outline arrow-link" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '14px 28px', borderRadius: 4, textDecoration: 'none', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.1em' }}>
              VOIR TOUS NOS CAS <span className="arrow">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section style={{ background: '#0a0a0a', padding: '96px 24px', color: '#fff', overflow: 'hidden' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#555', marginBottom: 56 }}>
            Ce que disent nos clients
          </p>
          {/* Carousel CSS-only — 3 items animés */}
          <div style={{ position: 'relative', minHeight: 320 }}>

            {[
              {
                initials: 'PB', name: 'Pascal Bouet', role: 'Directeur Marketing', company: 'Ponant',
                quote: "Darwin Agency nous accompagne depuis plusieurs années avec une approche véritablement stratégique. Leur équipe comprend nos enjeux business et traduit cela en actions digitales concrètes qui génèrent de vrais résultats.",
                delay: '0s',
              },
              {
                initials: 'SL', name: 'Sophie Lacour', role: 'Responsable Digital', company: 'Arthur Bonnet',
                quote: "En 9 mois, Darwin a propulsé nos pages produits en Top 3 sur 85 % de nos requêtes cibles. Ce qui nous a convaincus, c'est leur transparence totale sur la méthode et les résultats. Pas de promesses vagues — que des chiffres.",
                delay: '4s',
              },
              {
                initials: 'TM', name: 'Thomas Mercier', role: 'CMO', company: 'Nordnet',
                quote: "Nous cherchions une agence capable de tenir la distance. 7 ans plus tard, Darwin reste notre partenaire de référence. Leur combinaison SEO + SEA + Analytics nous a permis de multiplier notre trafic organique par 2,5 sur la période.",
                delay: '8s',
              },
            ].map((t) => (
              <div
                key={t.initials}
                style={{
                  position: 'absolute', inset: 0,
                  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                  opacity: 0,
                  animation: 'testimonial-in 12s ease-in-out infinite',
                  animationDelay: t.delay,
                }}
              >
                <span style={{ fontSize: '3.5rem', color: '#FFF127', lineHeight: 1, display: 'block', marginBottom: 20, fontFamily: 'Georgia, serif' }}>&ldquo;</span>
                <blockquote style={{ fontSize: 'clamp(0.95rem, 2vw, 1.2rem)', lineHeight: 1.9, color: '#ccc', margin: '0 0 36px', fontStyle: 'italic', maxWidth: 780 }}>
                  {t.quote}
                </blockquote>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
                  <div style={{ width: 46, height: 46, background: '#1a1a1a', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', fontWeight: 700, color: '#FFF127', border: '2px solid #333', flexShrink: 0 }}>
                    {t.initials}
                  </div>
                  <div style={{ textAlign: 'left' }}>
                    <div style={{ fontWeight: 700, fontSize: '0.82rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#fff' }}>{t.name}</div>
                    <div style={{ fontSize: '0.72rem', color: '#666', marginTop: 3 }}>{t.role} · <span style={{ color: '#FFF127' }}>{t.company}</span></div>
                  </div>
                </div>
              </div>
            ))}

          </div>

          {/* Dots indicateurs */}
          <div style={{ display: 'flex', gap: 8, justifyContent: 'center', marginTop: 16 }}>
            {[0, 1, 2].map((i) => (
              <div key={i} style={{ width: 8, height: 8, borderRadius: '50%', background: '#2a2a2a' }} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── NOS CERTIFICATIONS ─── */}
      <section style={{ background: '#fff', padding: '64px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#aaa', marginBottom: 48, textAlign: 'center' }}>
            NOS CERTIFICATIONS
          </p>
          <div style={{ display: 'flex', gap: 56, alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
            {[
              { src: '/logos/certifications/google-partner.jpg', alt: 'Google Partner Premier', h: 70 },
              { src: '/logos/certifications/meta-partner.jpg', alt: 'Meta Business Partner', h: 70 },
              { src: '/logos/certifications/bing-ads.jpg', alt: 'Bing Ads', h: 70 },
              { src: '/logos/certifications/google-analytics.png', alt: 'Google Analytics', h: 70 },
              { src: '/logos/certifications/vi.jpg', alt: 'VI', h: 70 },
              { src: '/logos/certifications/doubleclick.png', alt: 'DoubleClick Bid Manager', h: 36 },
              { src: '/logos/certifications/apple-search-ads.png', alt: 'Apple Search Ads', h: 70 },
              { src: '/logos/certifications/trackad.svg', alt: 'Trackad', h: 70 },
            ].map((cert) => (
              <div key={cert.alt} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 70 }}>
                <Image
                  src={cert.src}
                  alt={cert.alt}
                  width={140}
                  height={cert.h}
                  style={{ objectFit: 'contain', maxHeight: cert.h, width: 'auto' }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── NOTRE BLOG ─── */}
      <section style={{ background: '#fff', padding: '80px 24px', borderTop: '1px solid #eee' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48 }}>
            <h2 className="font-anton" style={{ fontSize: 'clamp(2rem, 5vw, 4.5rem)', textTransform: 'uppercase', lineHeight: 1, margin: 0 }}>
              NOTRE BLOG
            </h2>
            <a href="#" className="arrow-link" style={{ fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#0a0a0a', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8, paddingBottom: 4 }}>
              VOIR TOUS LES ARTICLES <span className="arrow">→</span>
            </a>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
            {[
              { title: 'Comment optimiser votre stratégie SEO en 2025', category: 'SEO', bg: '#E8F4FD', date: '15 Mars 2025' },
              { title: "L'IA au service de la performance marketing", category: 'IA & DATA', bg: '#FFF8E7', date: '8 Mars 2025' },
              { title: 'SMA : les meilleures pratiques Meta Ads', category: 'SMA', bg: '#F0FFF4', date: '1 Mars 2025' },
            ].map((article) => (
              <a key={article.title} href="#" className="blog-card" style={{ display: 'block', textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>
                <div style={{ overflow: 'hidden', borderRadius: 6, marginBottom: 16 }}>
                  <div
                    className="img-placeholder"
                    style={{ height: 190, background: article.bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                  >
                    <span style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#999' }}>
                      {article.category}
                    </span>
                  </div>
                </div>
                <p style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#aaa', marginBottom: 8 }}>
                  {article.category} — {article.date}
                </p>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, lineHeight: 1.45, margin: 0, color: '#0a0a0a' }}>
                  {article.title}
                </h3>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MARQUEE CTA ─── */}
      <section style={{ background: '#0a0a0a', padding: '36px 0', overflow: 'hidden' }}>
        <div className="marquee-track" aria-hidden="true">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="font-anton" style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)', textTransform: 'uppercase', paddingRight: 56, whiteSpace: 'nowrap' }}>
              <span style={{ color: '#FFF127' }}>LET&apos;S START!</span>
              <span style={{ color: '#fff' }}> CONTACTEZ-NOUS </span>
            </span>
          ))}
        </div>
      </section>

      {/* ─── CONTACT ─── */}
      <section id="contact" style={{ background: '#fff', padding: '96px 24px', borderTop: '1px solid #eee' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 80, alignItems: 'start' }}>

          {/* Colonne gauche — accroche */}
          <div>
            <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#FFF127', background: '#0a0a0a', display: 'inline-block', padding: '4px 10px', marginBottom: 24 }}>
              Contact
            </p>
            <h2 className="font-anton" style={{ fontSize: 'clamp(1.8rem, 4vw, 3.4rem)', textTransform: 'uppercase', lineHeight: 1.05, margin: '0 0 24px', color: '#0a0a0a' }}>
              PARLONS DE VOTRE PROJET
            </h2>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.8, color: '#555', marginBottom: 40, maxWidth: 340 }}>
              Décrivez-nous votre situation et vos objectifs. Nous vous répondons sous 24h ouvrées avec un audit ou une première proposition.
            </p>

            {/* Preuves rapides */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                { icon: '⚡', text: 'Réponse sous 24h ouvrées garantie' },
                { icon: '🎯', text: 'Audit SEO offert au premier échange' },
                { icon: '🤝', text: 'Sans engagement, sans frais cachés' },
              ].map(item => (
                <div key={item.text} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span style={{ fontSize: '1.1rem' }}>{item.icon}</span>
                  <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#333' }}>{item.text}</span>
                </div>
              ))}
            </div>

            {/* Contact direct */}
            <div style={{ marginTop: 40, paddingTop: 32, borderTop: '1px solid #eee' }}>
              <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#aaa', marginBottom: 12 }}>
                Contact direct
              </p>
              <a href="tel:+33413570900" style={{ display: 'block', fontWeight: 700, fontSize: '1rem', color: '#0a0a0a', textDecoration: 'none', marginBottom: 6 }}>
                +33 (0)4 13 57 09 00
              </a>
              <a href="mailto:contact@darwin-agency.com" style={{ fontSize: '0.85rem', color: '#555', textDecoration: 'none' }}>
                contact@darwin-agency.com
              </a>
            </div>
          </div>

          {/* Colonne droite — formulaire */}
          <div style={{ background: '#fafafa', border: '1px solid #ebebeb', borderRadius: 8, padding: '40px 36px' }}>
            <ContactForm />
          </div>

        </div>
      </section>

    </div>
  )
}
