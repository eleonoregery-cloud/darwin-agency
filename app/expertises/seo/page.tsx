import Image from 'next/image'
import Link from 'next/link'

/* ─── DATA ─────────────────────────────────────────── */

const stats = [
  { num: '23 ans', label: "d'expertise SEO" },
  { num: '400+', label: 'clients accompagnés' },
  { num: '7 ans', label: 'de fidélité moyenne' },
]

const pillars = [
  {
    id: '01',
    title: 'SEO Technique',
    desc: "On commence par ce que personne ne voit, mais que Google voit avant tout : vitesse, indexation, architecture, Core Web Vitals. Un site techniquement sain est la condition sine qua non de toute progression en positionnement.",
    items: ['Audit de crawl & indexation', 'Core Web Vitals & vitesse', 'Architecture & maillage interne', 'Gestion des erreurs & redirections'],
  },
  {
    id: '02',
    title: 'Stratégie de contenu',
    desc: "Nous identifions les mots-clés à fort potentiel, construisons des cocons thématiques et rédigeons des contenus qui répondent à l'intention de recherche de vos prospects. On parle à Google. Et à vos clients.",
    items: ['Recherche de mots-clés', 'Cocons thématiques', 'Rédaction SEO experte', 'Optimisation on-page'],
  },
  {
    id: '03',
    title: 'Netlinking',
    desc: "L'autorité d'un site se construit avec des liens de qualité, pas du volume. Nous mettons en place une stratégie de backlinks ciblée, mesurons l'impact de chaque lien et nettoyons ce qui pénalise.",
    items: ['Analyse du profil de liens', 'Acquisition de backlinks qualitatifs', 'Nettoyage des liens toxiques', 'Stratégie autorité de domaine'],
  },
  {
    id: '04',
    title: 'Suivi & pilotage',
    desc: "Dashboard personnalisé, Search Console, GA4, alertes de positionnement. Pas de reporting trimestriel vague : vous savez ce qui se passe, en temps réel, avec des chiffres commentés par votre consultant senior.",
    items: ['Dashboard KPI temps réel', 'Suivi de positionnement', 'Analyse concurrentielle continue', 'Reporting mensuel actionnable'],
  },
]

const steps = [
  { num: '1', title: 'Audit SEO complet', desc: "Analyse technique, sémantique et concurrentielle : on sait exactement où vous en êtes avant d'agir." },
  { num: '2', title: 'Stratégie sur-mesure', desc: "Plan d'action priorisé selon vos KPIs business et le potentiel réel de votre secteur." },
  { num: '3', title: 'Quick wins', desc: "Gains rapides sur les leviers existants pour des résultats visibles dès les premières semaines." },
  { num: '4', title: 'Déploiement méthodique', desc: "Exécution progressive et rigoureuse, avec suivi continu des performances." },
  { num: '5', title: 'Reporting en temps réel', desc: "Tableaux de bord personnalisés, KPIs définis ensemble, itérations basées sur la data — pas sur des intuitions." },
]

const caseStudies = [
  {
    client: 'Ponant',
    category: 'SEO + Contenu',
    result: '+68%',
    resultLabel: 'de trafic organique',
    period: 'en 12 mois',
    img: '/images/seo/cas-ponant.jpg',
  },
  {
    client: 'Arthur Bonnet',
    category: 'SEO Technique + Netlinking',
    result: 'Top 3',
    resultLabel: 'sur 85% des requêtes cibles',
    period: 'en 9 mois',
    img: '/images/seo/cas-arthur-bonnet.jpg',
  },
  {
    client: 'Logic Immo',
    category: 'Cocon thématique + SEO',
    result: '+156%',
    resultLabel: 'de trafic organique',
    period: 'en 18 mois',
    img: '/images/seo/cas-logic-immo.jpg',
  },
]

const faqs = [
  {
    q: 'Combien de temps faut-il pour voir des résultats avec le SEO ?',
    a: "Les premiers gains techniques (vitesse, indexation) sont visibles en quelques semaines. Sur les positions Google, comptez 3 à 6 mois pour les premiers mouvements significatifs, 6 à 12 mois pour une progression solide. Le SEO est un investissement dans la durée — c'est précisément pour ça que nos clients restent en moyenne 7 ans.",
  },
  {
    q: 'Quelle est la différence entre le SEO et le SEA ?',
    a: "Le SEA génère du trafic payant immédiat — qui s'arrête dès que vous coupez le budget. Le SEO construit une visibilité organique durable, sans coût par clic. Les deux leviers se complètent : Darwin les gère ensemble pour maximiser votre ROI global.",
  },
  {
    q: 'Quels secteurs Darwin accompagne-t-il en SEO ?',
    a: "Retail & franchise, e-commerce, tourisme & hôtellerie, services BtoC, formation. Ce sont les 5 secteurs où nous avons l'historique de données le plus dense — et des résultats que nous pouvons montrer.",
  },
  {
    q: 'Comment Darwin mesure-t-il la performance SEO ?',
    a: "KPIs définis ensemble dès le départ : trafic organique, positions sur les mots-clés cibles, leads générés, taux de conversion. Dashboard personnalisé, accessible en permanence. Pas de rapport trimestriel vague — des chiffres en temps réel, commentés par votre consultant senior.",
  },
  {
    q: 'Quel budget prévoir pour une stratégie SEO ?',
    a: "Nos accompagnements SEO démarrent à 1 500 €/mois. Le niveau d'investissement dépend de la maturité de votre site, du potentiel de votre secteur et de vos objectifs. Nous définissons ensemble un budget cohérent avec votre ROI attendu — et nous le défendons chaque mois avec des chiffres.",
  },
]

const otherExpertises = [
  { title: 'SEA', desc: 'Google & Bing Ads', href: '/expertises/sea' },
  { title: 'SMA', desc: 'Social Media Ads', href: '/expertises/sma' },
  { title: 'MEDIA', desc: 'Display & Programmatique', href: '/expertises/media' },
  { title: 'ANALYTICS', desc: 'Data & Tracking', href: '/expertises/analytics' },
  { title: 'FORMATION', desc: 'Montée en compétences', href: '/expertises/formation' },
  { title: 'STUDIO CRÉATIF', desc: 'Direction artistique & Contenu', href: '/expertises/studio' },
]

/* ─── PAGE ──────────────────────────────────────────── */

export default function SeoPage() {
  return (
    <div style={{ background: '#fff', color: '#0a0a0a' }}>
      {/* ─── HERO ─── */}
      <section style={{ background: '#fff', position: 'relative', overflow: 'hidden', minHeight: '88vh', display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', flex: 1, minHeight: '88vh' }}>

          {/* LEFT — texte */}
          <div style={{ padding: '72px 56px 72px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', zIndex: 1 }}>
            {/* Breadcrumb */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 36, fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#bbb' }}>
              <Link href="/" style={{ color: '#bbb', textDecoration: 'none' }}>Accueil</Link>
              <span>/</span>
              <span style={{ color: '#0a0a0a' }}>SEO</span>
            </div>

            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 28 }}>
              <span style={{ display: 'inline-block', width: 32, height: 3, background: '#FFF127' }} />
              <span style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#0a0a0a' }}>Expertise SEO</span>
            </div>

            <h1 className="font-anton" style={{ fontSize: 'clamp(3rem, 5.5vw, 5.5rem)', lineHeight: 0.9, textTransform: 'uppercase', color: '#0a0a0a', margin: '0 0 28px' }}>
              <span style={{ display: 'block' }}>GAGNER LES</span>
              <span style={{ display: 'block' }}>PREMIÈRES</span>
              <span style={{ display: 'inline-block', background: '#FFF127', padding: '0 8px', marginBottom: 4 }}>POSITIONS.</span>
              <span style={{ display: 'block' }}>NE PAS</span>
              <span style={{ display: 'block' }}>LES LÂCHER.</span>
            </h1>

            <p style={{ fontSize: '1rem', lineHeight: 1.75, color: '#555', marginBottom: 40, maxWidth: 460 }}>
              Nous construisons des stratégies SEO fondées sur la data et l&apos;expertise terrain — pas sur des promesses. Depuis 23 ans, nos clients gagnent en visibilité organique et y restent.
            </p>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 48 }}>
              <Link href="#contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#0a0a0a', color: '#fff', padding: '14px 28px', borderRadius: 4, textDecoration: 'none', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                Audit SEO gratuit →
              </Link>
              <Link href="#methode" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, border: '1.5px solid #ddd', color: '#0a0a0a', padding: '14px 28px', borderRadius: 4, textDecoration: 'none', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                Notre méthode
              </Link>
            </div>

            {/* Stats row */}
            <div style={{ display: 'flex', gap: 0, borderTop: '1px solid #eee', paddingTop: 32 }}>
              {stats.map((s, i) => (
                <div key={s.num} style={{ flex: 1, paddingRight: 24, borderRight: i < stats.length - 1 ? '1px solid #eee' : 'none', paddingLeft: i > 0 ? 24 : 0 }}>
                  <div className="font-anton" style={{ fontSize: '2rem', lineHeight: 1, marginBottom: 4, color: '#0a0a0a' }}>{s.num}</div>
                  <div style={{ fontSize: '0.68rem', color: '#aaa', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — image */}
          <div style={{ position: 'relative', background: '#0a0a0a', overflow: 'hidden' }}>
            <Image
              src="/images/seo/seo-hero-bg.png"
              alt="Agence SEO Darwin"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center', opacity: 0.85 }}
              priority
            />
            {/* Overlay gradient left */}
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(255,255,255,0.15) 0%, transparent 40%)' }} />
            {/* Google Partner badge */}
            <div style={{ position: 'absolute', bottom: 32, right: 32, background: '#fff', padding: '12px 20px', borderRadius: 6, boxShadow: '0 8px 32px rgba(0,0,0,0.3)' }}>
              <Image src="/logos/certifications/google-partner.jpg" alt="Google Partner Premier" width={130} height={52} style={{ objectFit: 'contain', display: 'block' }} />
            </div>
            {/* Floating stat */}
            <div style={{ position: 'absolute', top: 40, left: 32, background: '#FFF127', padding: '16px 20px', borderRadius: 4 }}>
              <div className="font-anton" style={{ fontSize: '1.8rem', lineHeight: 1, color: '#0a0a0a' }}>+156%</div>
              <div style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#555', marginTop: 4 }}>de trafic moyen gagné</div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PROBLÈME ─── */}
      <section style={{ background: '#FFF127', padding: '64px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          <div>
            <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#555', marginBottom: 16 }}>
              L&apos;enjeu
            </p>
            <h2 className="font-anton" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', textTransform: 'uppercase', lineHeight: 1.05, margin: 0, color: '#0a0a0a' }}>
              60 % DES CLICS GOOGLE VONT AUX 3 PREMIERS RÉSULTATS.
            </h2>
          </div>
          <div>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#333', margin: 0 }}>
              Si vous n&apos;y êtes pas, ce trafic va à vos concurrents — et il ne reviendra pas seul. Le SEO n&apos;est pas une option : c&apos;est l&apos;investissement digital avec le meilleur retour sur la durée. Encore faut-il le faire correctement, avec une méthodologie rigoureuse, des données réelles et des experts qui connaissent votre secteur.
            </p>
            <div style={{ marginTop: 24, display: 'flex', gap: 24 }}>
              <div style={{ borderLeft: '3px solid #0a0a0a', paddingLeft: 16 }}>
                <div className="font-anton" style={{ fontSize: '1.8rem' }}>+156%</div>
                <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#555' }}>de trafic moyen gagné</div>
              </div>
              <div style={{ borderLeft: '3px solid #0a0a0a', paddingLeft: 16 }}>
                <div className="font-anton" style={{ fontSize: '1.8rem' }}>12 mois</div>
                <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#555' }}>pour des résultats durables</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4 PILIERS ─── */}
      <section style={{ background: '#fff', padding: '96px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ marginBottom: 64 }}>
            <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#aaa', marginBottom: 16 }}>
              Notre approche
            </p>
            <h2 className="font-anton" style={{ fontSize: 'clamp(2rem, 4vw, 4rem)', textTransform: 'uppercase', lineHeight: 1, margin: 0, maxWidth: 700 }}>
              UNE STRATÉGIE SEO COMPLÈTE, PAS UN SIMPLE AUDIT
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 2 }}>
            {pillars.map((p, i) => (
              <div
                key={p.id}
                style={{
                  padding: '48px 40px',
                  background: (i === 0 || i === 3) ? '#fafafa' : '#fff',
                  border: '1px solid #ebebeb',
                  position: 'relative',
                }}
              >
                <div className="font-anton" style={{ fontSize: '4rem', color: '#f0f0f0', position: 'absolute', top: 16, right: 24, lineHeight: 1, userSelect: 'none' }}>{p.id}</div>
                <div style={{ display: 'inline-block', background: '#FFF127', height: 3, width: 32, marginBottom: 20 }} />
                <h3 className="font-anton" style={{ fontSize: '1.8rem', textTransform: 'uppercase', marginBottom: 16, lineHeight: 1.05 }}>{p.title}</h3>
                <p style={{ fontSize: '0.9rem', lineHeight: 1.8, color: '#444', marginBottom: 24 }}>{p.desc}</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {p.items.map((item) => (
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

      {/* ─── PAGES FILLES SEO ─── */}
      <section style={{ background: '#0a0a0a', padding: '80px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ marginBottom: 56 }}>
            <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#555', marginBottom: 16 }}>
              Nos services SEO en détail
            </p>
            <h2 className="font-anton" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3.2rem)', textTransform: 'uppercase', lineHeight: 1.05, margin: 0, color: '#fff' }}>
              CHAQUE LEVIER SEO MÉRITE SON EXPERT
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
            {[
              { href: '/expertises/seo/audit-seo', title: 'Audit SEO', accent: '#FFF127', desc: "Photographie complète de votre présence organique : indexation, architecture, vitesse, mots-clés, backlinks et positionnement. L'audit Darwin est actionnable sous 5 jours." },
              { href: '/expertises/seo/seo-technique', title: 'SEO Technique', accent: '#FFF127', desc: "Core Web Vitals, crawl budget, canonicalisation, données structurées, migration de site. Ce que Google mesure avant vos contenus — et que vos concurrents négligent." },
              { href: '/expertises/seo/redaction-seo', title: 'Rédaction SEO', accent: '#FFF127', desc: "Cocons thématiques, pages piliers, articles de blog, fiches produit. Des contenus écrits par des rédacteurs experts, structurés pour l'intention de recherche." },
              { href: '/expertises/seo/netlinking', title: 'Netlinking', accent: '#FFF127', desc: "Acquisition de backlinks qualitatifs, audit et désaveu de liens toxiques, stratégie d'autorité de domaine. L'influence SEO qui se construit sur le long terme." },
              { href: '/expertises/seo/seo-local', title: 'SEO Local', accent: '#FFF127', desc: "Google Business Profile, citations locales, avis clients, pages localisées. Idéal pour les réseaux de franchises, enseignes multi-sites ou commerçants locaux." },
              { href: '/expertises/seo/seo-ecommerce', title: 'SEO E-commerce', accent: '#29C5F5', desc: "Optimisation des pages catégories, fiches produit, gestion des facettes et des doublons. Nous transformons le catalogue en moteur d'acquisition." },
            ].map((card) => (
              <Link
                key={card.href}
                href={card.href}
                style={{
                  display: 'block',
                  padding: '36px 32px',
                  background: '#fff',
                  borderTop: `4px solid ${card.accent}`,
                  textDecoration: 'none',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                }}
                className="levier-card"
              >
                <h3 className="font-anton" style={{ fontSize: '1.5rem', textTransform: 'uppercase', color: '#0a0a0a', marginBottom: 14, lineHeight: 1.1 }}>{card.title}</h3>
                <p style={{ fontSize: '0.85rem', lineHeight: 1.75, color: '#666', margin: '0 0 24px' }}>{card.desc}</p>
                <span style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: card.accent === '#FFF127' ? '#0a0a0a' : card.accent }}>Découvrir →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── GEO ─── */}
      <section style={{ background: '#fff', padding: '80px 24px', borderTop: '4px solid #29C5F5' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>

          {/* Header section */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 32, marginBottom: 56 }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(41,197,245,0.1)', border: '1px solid rgba(41,197,245,0.4)', borderRadius: 4, padding: '6px 14px', marginBottom: 20 }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#29C5F5', display: 'inline-block' }} />
                <span style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#29C5F5' }}>NOUVEAU LEVIER SEO</span>
              </div>
              <h2 className="font-anton" style={{ fontSize: 'clamp(2rem, 4vw, 3.8rem)', textTransform: 'uppercase', color: '#0a0a0a', lineHeight: 1, margin: 0 }}>
                VOTRE MARQUE EST-ELLE<br /><span style={{ color: '#29C5F5' }}>CITÉE PAR L'IA ?</span>
              </h2>
            </div>
            <a href="/expertises/geo" className="btn-cyan" style={{ flexShrink: 0 }}>
              DÉCOUVRIR NOTRE APPROCHE GEO →
            </a>
          </div>

          {/* Corps — 2 colonnes */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 80, alignItems: 'center' }}>

            {/* Gauche — texte uniquement */}
            <div>
              <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#444', marginBottom: 20 }}>
                ChatGPT, Perplexity, Google Gemini, Claude… des millions d'utilisateurs obtiennent désormais leurs réponses directement via des LLMs — <strong>sans jamais cliquer sur un site web.</strong>
              </p>
              <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#444', marginBottom: 0 }}>
                Si votre marque n'est pas citée par ces modèles, vous êtes invisible dans le moteur de recherche de demain. Le <strong>GEO (Generative Engine Optimization)</strong> est la réponse stratégique à cet enjeu — et Darwin est parmi les premières agences françaises à le maîtriser.
              </p>
            </div>

            {/* Droite — liste LLMs épurée */}
            <div>
              <p style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#aaa', marginBottom: 20 }}>
                LES MODÈLES QUI REDÉFINISSENT LA RECHERCHE
              </p>
              {[
                { name: 'ChatGPT', share: '+60%', desc: 'des recherches IA mondiales' },
                { name: 'Perplexity', share: '10M+', desc: 'requêtes / jour' },
                { name: 'Google Gemini', share: '1 / 2', desc: 'résultats avec IA Overview' },
                { name: 'Claude', share: 'Top 5', desc: 'assistants IA en B2B' },
              ].map((llm, i, arr) => (
                <div key={llm.name} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 0', borderBottom: i < arr.length - 1 ? '1px solid #ebebeb' : 'none' }}>
                  <span style={{ fontWeight: 700, fontSize: '0.88rem', color: '#0a0a0a' }}>{llm.name}</span>
                  <div style={{ textAlign: 'right' }}>
                    <span className="font-anton" style={{ fontSize: '1.2rem', color: '#29C5F5', display: 'block', lineHeight: 1 }}>{llm.share}</span>
                    <span style={{ fontSize: '0.68rem', color: '#aaa' }}>{llm.desc}</span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ─── MÉTHODE ─── */}
      <section id="methode" style={{ background: '#0a0a0a', padding: '96px 24px', color: '#fff' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 80, alignItems: 'start' }}>
            <div>
              <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#555', marginBottom: 16 }}>
                Notre méthode
              </p>
              <h2 className="font-anton" style={{ fontSize: 'clamp(2rem, 4vw, 4rem)', textTransform: 'uppercase', lineHeight: 1, margin: '0 0 32px', color: '#fff' }}>
                5 ÉTAPES POUR UNE PROGRESSION MESURABLE
              </h2>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.8, color: '#666', marginBottom: 40 }}>
                Notre approche est pragmatique et ROIste. Chaque étape s&apos;appuie sur la précédente. On ne saute pas les fondations pour aller vite — on les consolide pour aller loin.
              </p>
              <Link href="#contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#FFF127', color: '#0a0a0a', padding: '14px 28px', borderRadius: 4, textDecoration: 'none', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                Parler à un expert SEO →
              </Link>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {steps.map((step, i) => (
                <div key={step.num} style={{ display: 'flex', gap: 24, padding: '28px 0', borderBottom: i < steps.length - 1 ? '1px solid #1a1a1a' : 'none', alignItems: 'flex-start' }}>
                  <div className="font-anton" style={{ fontSize: '2.8rem', color: '#FFF127', lineHeight: 1, flexShrink: 0, minWidth: 48 }}>{step.num}</div>
                  <div>
                    <h3 style={{ fontWeight: 700, fontSize: '0.95rem', letterSpacing: '0.06em', textTransform: 'uppercase', color: '#fff', marginBottom: 8 }}>{step.title}</h3>
                    <p style={{ fontSize: '0.85rem', lineHeight: 1.7, color: '#666', margin: 0 }}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── RÉSULTATS CLIENTS ─── */}
      <section style={{ background: '#f4f4f4', padding: '96px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 56 }}>
            <div>
              <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#aaa', marginBottom: 16 }}>
                La preuve avant tout
              </p>
              <h2 className="font-anton" style={{ fontSize: 'clamp(2rem, 4vw, 4rem)', textTransform: 'uppercase', lineHeight: 1, margin: 0 }}>
                DES RÉSULTATS QUE NOS CLIENTS PEUVENT NOMMER
              </h2>
            </div>
            <Link href="/cas-clients" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#0a0a0a', textDecoration: 'none', borderBottom: '2px solid #0a0a0a', paddingBottom: 2, whiteSpace: 'nowrap', flexShrink: 0, marginLeft: 32 }}>
              Tous les cas clients →
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
            {caseStudies.map((c) => (
              <div key={c.client} style={{ position: 'relative', overflow: 'hidden', borderRadius: 6, height: 420 }}>
                {/* Photo plein cadre */}
                <Image
                  src={c.img}
                  alt={c.client}
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center top', filter: 'brightness(1.2)' }}
                />
                {/* Gradient overlay bas vers haut */}
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.96) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.05) 100%)' }} />
                {/* Bande jaune top */}
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: '#FFF127' }} />
                {/* Contenu superposé en bas */}
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '28px 28px 32px' }}>
                  <div style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#29C5F5', marginBottom: 8 }}>
                    {c.category}
                  </div>
                  <div className="font-anton" style={{ fontSize: '1.2rem', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginBottom: 16 }}>
                    {c.client}
                  </div>
                  <div className="font-anton" style={{ fontSize: '3rem', lineHeight: 1, color: '#FFF127', marginBottom: 6 }}>
                    {c.result}
                  </div>
                  <div style={{ fontSize: '0.82rem', fontWeight: 600, color: '#ddd', marginBottom: 4 }}>{c.resultLabel}</div>
                  <div style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)' }}>{c.period}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DARWIN DIFFÉRENT ─── */}
      <section style={{ background: '#fff', padding: '96px 24px', borderTop: '1px solid #eee' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          <div>
            <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#aaa', marginBottom: 16 }}>
              Notre différence
            </p>
            <h2 className="font-anton" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3.4rem)', textTransform: 'uppercase', lineHeight: 1.05, margin: '0 0 32px' }}>
              LE SEO QUI CONVERTIT, PAS JUSTE QUI POSITIONNE
            </h2>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.8, color: '#444', marginBottom: 24 }}>
              Darwin fait partie de la <strong>Creative Thinking Community</strong>. Nos équipes SEO ne travaillent pas en silo : elles collaborent directement avec des créatifs, des UX designers et des experts data.
            </p>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.8, color: '#444', marginBottom: 40 }}>
              Résultat : vos pages sont optimisées pour Google <em>et</em> conçues pour convertir. L&apos;autorité organique que vous construisez est amplifiée par une expérience utilisateur qui retient. C&apos;est ce que les autres agences SEO ne peuvent pas faire.
            </p>
            <Link href="#contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#0a0a0a', color: '#fff', padding: '14px 28px', borderRadius: 4, textDecoration: 'none', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              En parler avec un expert →
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {[
              { num: '30+', label: 'Experts seniors', sub: '6+ ans d\'ancienneté moyenne' },
              { num: 'Google', label: 'Partner Premier', sub: 'Certification officielle' },
              { num: '4', label: 'Entités créatives', sub: 'Creative Thinking Community' },
              { num: '7 ans', label: 'Fidélité client', sub: 'Durée moyenne de collaboration' },
            ].map((item) => (
              <div key={item.num} style={{ padding: '28px 24px', background: '#fafafa', border: '1px solid #ebebeb' }}>
                <div className="font-anton" style={{ fontSize: '2.2rem', lineHeight: 1, marginBottom: 6, color: '#0a0a0a' }}>{item.num}</div>
                <div style={{ fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.06em', textTransform: 'uppercase', color: '#0a0a0a', marginBottom: 4 }}>{item.label}</div>
                <div style={{ fontSize: '0.72rem', color: '#aaa', fontWeight: 500 }}>{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section style={{ background: '#fafafa', padding: '96px 24px', borderTop: '1px solid #eee' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#aaa', marginBottom: 16 }}>
            Questions fréquentes
          </p>
          <h2 className="font-anton" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', textTransform: 'uppercase', lineHeight: 1.05, margin: '0 0 56px' }}>
            CE QUE NOS CLIENTS DEMANDENT EN PREMIER
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {faqs.map((faq, i) => (
              <details key={i} style={{ borderTop: i === 0 ? '1px solid #e0e0e0' : 'none', borderBottom: '1px solid #e0e0e0' }}>
                <summary style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px 0', cursor: 'pointer', gap: 16, listStyle: 'none' }}>
                  <span style={{ fontWeight: 700, fontSize: '0.95rem', lineHeight: 1.4 }}>{faq.q}</span>
                  <span style={{ fontSize: '1.6rem', fontWeight: 300, lineHeight: 1, flexShrink: 0, color: '#999' }}>+</span>
                </summary>
                <p style={{ padding: '0 0 24px', fontSize: '0.9rem', lineHeight: 1.8, color: '#555', margin: 0, paddingRight: 40 }}>
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ─── AUTRES EXPERTISES ─── */}
      <section style={{ background: '#fff', padding: '80px 24px', borderTop: '1px solid #eee' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#aaa', marginBottom: 40 }}>
            Nos autres expertises
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 2 }}>
            {otherExpertises.map((e) => (
              <Link
                key={e.title}
                href={e.href}
                style={{ display: 'block', padding: '24px 20px', background: '#fafafa', border: '1px solid #ebebeb', textDecoration: 'none', transition: 'background 0.15s' }}
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
            Audit gratuit
          </p>
          <h2 className="font-anton" style={{ fontSize: 'clamp(2.4rem, 5vw, 5rem)', textTransform: 'uppercase', lineHeight: 1, margin: '0 0 24px', color: '#0a0a0a' }}>
            VOTRE AUDIT SEO GRATUIT COMMENCE ICI
          </h2>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#333', marginBottom: 40, maxWidth: 560, margin: '0 auto 40px' }}>
            Décrivez-nous votre situation. Nous analysons votre site, vos concurrents et vos opportunités — et nous revenons vers vous sous 24h ouvrées avec un diagnostic actionnable.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/#contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#0a0a0a', color: '#fff', padding: '16px 36px', borderRadius: 4, textDecoration: 'none', fontSize: '0.88rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              Demander mon audit SEO →
            </Link>
            <a href="tel:+33413570900" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, border: '2px solid #0a0a0a', color: '#0a0a0a', padding: '16px 36px', borderRadius: 4, textDecoration: 'none', fontSize: '0.88rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              +33 (0)4 13 57 09 00
            </a>
          </div>

          <p style={{ fontSize: '0.72rem', color: '#888', marginTop: 24, fontWeight: 500 }}>
            Réponse sous 24h ouvrées · Sans engagement · Audit offert au premier échange
          </p>
        </div>
      </section>

    </div>
  )
}
