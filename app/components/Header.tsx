'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

// ── Types ─────────────────────────────────────────────────────────────────────

type Tab = {
  label: string
  desc: string
  cta?: { label: string; href: string }
  items: { label: string; desc: string }[]
}

// ── Data ──────────────────────────────────────────────────────────────────────

const expertisesTabs: Tab[] = [
  {
    label: 'SEO',
    desc: 'Référencement naturel',
    cta: { label: 'Découvrir notre agence SEO', href: '/expertises/seo' },
    items: [
      { label: 'Audit SEO', desc: 'Identifiez vos forces et axes de progression' },
      { label: 'Stratégie de contenu', desc: 'Structurez vos cocons sémantiques' },
      { label: 'GEO', desc: 'Generative Engine Optimization' },
      { label: 'Netlinking', desc: 'Renforcez votre autorité de domaine' },
      { label: 'SEO Technique', desc: 'Corrigez les blocages qui freinent vos rankings' },
      { label: 'SEO E-commerce', desc: 'Optimisez vos fiches produits et catégories' },
    ],
  },
  {
    label: 'SEA',
    desc: 'Google & Bing Ads',
    cta: { label: 'Découvrir notre agence SEA', href: '/expertises/sea' },
    items: [
      { label: 'Google Ads', desc: 'Captez l\'intention au bon moment' },
      { label: 'Bing Ads', desc: 'Touchez des audiences complémentaires' },
      { label: 'Shopping', desc: 'Maximisez vos ventes produits' },
      { label: 'Performance Max', desc: 'Automatisez et scalez vos campagnes' },
      { label: 'Remarketing', desc: 'Reconvertissez vos visiteurs' },
      { label: 'YouTube Ads', desc: 'Créez de l\'impact avec la vidéo' },
    ],
  },
  {
    label: 'SMA',
    desc: 'Social Media Ads',
    cta: { label: 'Découvrir notre agence SMA', href: '/expertises/sma' },
    items: [
      { label: 'Meta Ads', desc: 'Facebook & Instagram à la performance' },
      { label: 'LinkedIn Ads', desc: 'Ciblez les décideurs B2B' },
      { label: 'TikTok Ads', desc: 'Engagez les nouvelles audiences' },
      { label: 'Pinterest Ads', desc: 'Inspirez et convertissez' },
      { label: 'Snap & X Ads', desc: 'Diversifiez vos points de contact' },
      { label: 'Social Strategy', desc: 'Construisez votre présence sociale' },
    ],
  },
  {
    label: 'MEDIA',
    desc: 'Display & Programmatique',
    cta: { label: 'Découvrir notre agence Média', href: '/expertises/media' },
    items: [
      { label: 'Programmatique', desc: 'Achetez de l\'audience en temps réel' },
      { label: 'Display', desc: 'Visibilité maximale sur le web' },
      { label: 'Vidéo en ligne', desc: 'Storytelling à grande échelle' },
      { label: 'Native Ads', desc: 'Publicité intégrée et non intrusive' },
      { label: 'Retargeting', desc: 'Restez dans l\'esprit de vos prospects' },
      { label: 'Media planning', desc: 'Arbitrage budgétaire multi-leviers' },
    ],
  },
  {
    label: 'ANALYTICS',
    desc: 'Data & Tracking',
    cta: { label: 'Découvrir notre agence Analytics', href: '/expertises/analytics' },
    items: [
      { label: 'GA4', desc: 'Mise en place et configuration avancée' },
      { label: 'Google Tag Manager', desc: 'Tracking précis de chaque interaction' },
      { label: 'Tableaux de bord', desc: 'Looker Studio et reporting sur mesure' },
      { label: 'Attribution', desc: 'Mesurez le vrai impact de chaque levier' },
      { label: 'CRO', desc: 'Optimisez les taux de conversion' },
      { label: 'A/B Testing', desc: 'Décisions data-driven, pas d\'intuition' },
    ],
  },
  {
    label: 'FORMATIONS',
    desc: 'Montée en compétences',
    cta: { label: 'Toutes nos formations', href: '/expertises/formation' },
    items: [
      { label: 'Formation SEO', desc: 'Maîtrisez le référencement en interne' },
      { label: 'Formation SEA', desc: 'Gérez vos campagnes Google Ads' },
      { label: 'Formation Analytics', desc: 'Lisez et exploitez vos données' },
      { label: 'Formation SMA', desc: 'Performez sur les réseaux sociaux' },
      { label: 'Coaching équipe', desc: 'Accompagnement personnalisé sur mesure' },
      { label: 'Audit compétences', desc: 'Évaluez le niveau de votre équipe' },
    ],
  },
  {
    label: 'STUDIO CRÉATIF',
    desc: 'Création & production visuelle',
    cta: { label: 'En savoir plus sur le Studio Hey Charly!', href: '/expertises/studio' },
    items: [
      { label: 'Direction artistique', desc: 'Identité visuelle et ligne graphique' },
      { label: 'Production vidéo', desc: 'Spots, motion design et formats sociaux' },
      { label: 'Design publicitaire', desc: 'Créas display, social et print' },
      { label: 'UI / Landing pages', desc: 'Pages de conversion à fort impact' },
      { label: 'Contenus social media', desc: 'Formats natifs pour chaque réseau' },
      { label: 'Branding & charte', desc: 'Identité de marque cohérente et mémorable' },
    ],
  },
]

const besoinsTabs: Tab[] = [
  {
    label: 'Développer ma visibilité',
    desc: 'SEO, SEA, Media',
    items: [
      { label: 'Référencement naturel', desc: 'Ranker durablement sur Google' },
      { label: 'Google Ads', desc: 'Capter l\'intention de recherche' },
      { label: 'Media Buying', desc: 'Gagner en notoriété à grande échelle' },
      { label: 'SEO Local', desc: 'Dominer les recherches de proximité' },
      { label: 'Social Ads', desc: 'Toucher de nouvelles audiences' },
      { label: 'YouTube & Vidéo', desc: 'Créer de l\'impact avec la vidéo' },
    ],
  },
  {
    label: 'Augmenter mon ROI',
    desc: 'Performance & optimisation',
    items: [
      { label: 'Optimisation des campagnes', desc: 'Baisser le CPA, augmenter le ROAS' },
      { label: 'CRO', desc: 'Convertir plus sans dépenser plus' },
      { label: 'Attribution multi-touch', desc: 'Allouer le budget là où ça rapporte' },
      { label: 'A/B Testing', desc: 'Décisions basées sur la data' },
      { label: 'Audit performance', desc: 'Identifier les pertes de valeur' },
      { label: 'Stratégie omnicanal', desc: 'Synchroniser vos leviers d\'acquisition' },
    ],
  },
  {
    label: 'Engager mes audiences',
    desc: 'SMA & contenu',
    items: [
      { label: 'Meta Ads', desc: 'Engager sur Facebook & Instagram' },
      { label: 'Stratégie éditoriale', desc: 'Contenu qui parle à votre cible' },
      { label: 'Social Media', desc: 'Animer vos communautés' },
      { label: 'Emailing & CRM', desc: 'Fidéliser et relancer vos contacts' },
      { label: 'Influence', desc: 'Amplifier via des créateurs de contenu' },
      { label: 'Native Ads', desc: 'Toucher sans interrompre' },
    ],
  },
  {
    label: 'Analyser mes données',
    desc: 'Analytics & reporting',
    items: [
      { label: 'Audit Analytics', desc: 'Vérifier la fiabilité de vos données' },
      { label: 'GA4 & GTM', desc: 'Tracking conforme et exhaustif' },
      { label: 'Dashboards', desc: 'Visualiser la performance en temps réel' },
      { label: 'Modèles d\'attribution', desc: 'Comprendre le vrai parcours client' },
      { label: 'Data Studio', desc: 'Rapports automatisés pour vos équipes' },
      { label: 'CDP & Data activation', desc: 'Exploiter votre first-party data' },
    ],
  },
  {
    label: 'Former mes équipes',
    desc: 'Programmes sur mesure',
    items: [
      { label: 'Formations SEO / SEA', desc: 'Autonomie sur vos leviers clés' },
      { label: 'Ateliers Analytics', desc: 'Lire et activer vos données' },
      { label: 'Coaching opérationnel', desc: 'Accompagnement terrain' },
      { label: 'Audit compétences', desc: 'Évaluer votre niveau actuel' },
      { label: 'Certifications Google', desc: 'Préparation aux certifications' },
      { label: 'Programme sur mesure', desc: 'Adapté à vos enjeux métier' },
    ],
  },
  {
    label: 'Lancer ma marque',
    desc: 'Stratégie & branding',
    items: [
      { label: 'Stratégie digitale', desc: 'Feuille de route d\'acquisition' },
      { label: 'Branding & positionnement', desc: 'Marquer les esprits durablement' },
      { label: 'Lancement SEO', desc: 'Démarrer avec les bonnes bases' },
      { label: 'Campagnes de lancement', desc: 'Notoriété rapide et ciblée' },
      { label: 'Création de contenu', desc: 'Raconter votre histoire' },
      { label: 'Audit concurrentiel', desc: 'Identifier les espaces à conquérir' },
    ],
  },
]

const navItems = [
  { label: "L'AGENCE", href: '/agence' },
  { label: 'EXPERTISES', href: '#', tabs: expertisesTabs },
  { label: 'CAS CLIENTS', href: '#' },
  { label: 'VOS BESOINS', href: '#', tabs: besoinsTabs },
  { label: 'BLOG', href: '#' },
]

// ── Component ─────────────────────────────────────────────────────────────────

export default function Header() {
  const [visible, setVisible] = useState(true)
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<number>(0)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const [mobileSubTab, setMobileSubTab] = useState<number>(0)
  const lastScrollY = useRef(0)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      if (currentY < 80) {
        setVisible(true)
      } else if (currentY > lastScrollY.current + 4) {
        setVisible(false)
        setOpenMenu(null)
      } else if (currentY < lastScrollY.current - 4) {
        setVisible(true)
      }
      lastScrollY.current = currentY
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const openMega = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setOpenMenu(label)
    setActiveTab(0)
  }

  const closeMega = () => {
    closeTimer.current = setTimeout(() => setOpenMenu(null), 140)
  }

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
  }

  const currentMenu = navItems.find(n => n.label === openMenu)
  const tabs = currentMenu?.tabs ?? []
  const currentItems = tabs[activeTab]?.items ?? []

  return (
    <>
      <header
        style={{
          background: '#fff',
          borderBottom: openMenu ? 'none' : '1px solid #e8e8e8',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 200,
          transform: visible ? 'translateY(0)' : 'translateY(-100%)',
          transition: 'transform 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        }}
      >
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 68 }}>

          {/* Logo */}
          <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', padding: '6px 0', zIndex: 1 }}>
            <Image
              src="/images/logo-darwin.png"
              alt="Darwin Agency"
              width={780}
              height={439}
              style={{ filter: 'brightness(0)', height: 38, width: 'auto', objectFit: 'contain' }}
              priority
            />
          </a>

          {/* Nav desktop */}
          <nav className="nav-desktop" style={{ gap: 0, alignItems: 'stretch', height: 68 }}>
            {navItems.map((item) => {
              const isOpen = openMenu === item.label
              return (
                <div
                  key={item.label}
                  style={{ position: 'relative', display: 'flex', alignItems: 'center' }}
                  onMouseEnter={() => item.tabs ? openMega(item.label) : closeMega()}
                  onMouseLeave={closeMega}
                >
                  <a
                    href={item.href}
                    className="nav-link"
                    style={{
                      color: '#0a0a0a',
                      textDecoration: 'none',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      letterSpacing: '0.1em',
                      padding: '0 16px',
                      height: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 5,
                      position: 'relative',
                      opacity: isOpen ? 1 : 0.7,
                      borderBottom: isOpen ? '2px solid #29C5F5' : '2px solid transparent',
                      transition: 'opacity 0.2s, border-color 0.2s',
                    }}
                  >
                    {item.label}
                    {item.tabs && (
                      <span style={{
                        display: 'inline-block',
                        fontSize: '0.5rem',
                        marginTop: 1,
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.25s',
                        opacity: 0.5,
                      }}>▼</span>
                    )}
                  </a>
                </div>
              )
            })}
          </nav>

          {/* CTA desktop */}
          <a href="/contact" className="btn-yellow contact-btn-desktop" style={{ padding: '10px 22px', borderRadius: 4, fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textDecoration: 'none' }}>
            CONTACT
          </a>

          {/* Burger mobile */}
          <button
            className="burger-btn"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            style={{ zIndex: 300 }}
          >
            {mobileOpen ? (
              /* Croix */
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0a0a0a" strokeWidth="2.5">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            ) : (
              /* Hamburger */
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0a0a0a" strokeWidth="2.5">
                <path d="M3 6h18M3 12h18M3 18h18"/>
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* ── Menu mobile overlay ── */}
      {mobileOpen && (
        <div style={{
          position: 'fixed', top: 68, left: 0, right: 0, bottom: 0,
          background: '#fff', zIndex: 198, overflowY: 'auto',
          borderTop: '1px solid #eee',
        }}>
          <div style={{ padding: '8px 0 40px' }}>
            {navItems.map((item) => {
              const isExpanded = mobileExpanded === item.label
              const expandedTabs = item.tabs ?? []
              return (
                <div key={item.label} style={{ borderBottom: '1px solid #f0f0f0' }}>
                  {/* Row principal */}
                  {item.tabs ? (
                    <button
                      onClick={() => {
                        setMobileExpanded(isExpanded ? null : item.label)
                        setMobileSubTab(0)
                      }}
                      style={{
                        width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                        padding: '18px 24px', border: 'none', background: isExpanded ? '#fafafa' : 'transparent',
                        color: '#0a0a0a', fontSize: '0.9rem', fontWeight: 700, letterSpacing: '0.08em',
                        cursor: 'pointer', textAlign: 'left',
                      }}
                    >
                      {item.label}
                      <span style={{
                        fontSize: '0.8rem', color: '#999',
                        transform: isExpanded ? 'rotate(90deg)' : 'rotate(0deg)',
                        transition: 'transform 0.2s', display: 'inline-block',
                      }}>›</span>
                    </button>
                  ) : (
                    <a
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                        padding: '18px 24px', textDecoration: 'none', color: '#0a0a0a',
                        fontSize: '0.9rem', fontWeight: 700, letterSpacing: '0.08em',
                      }}
                    >
                      {item.label}
                      <span style={{ color: '#ccc', fontSize: '1rem' }}>›</span>
                    </a>
                  )}

                  {/* Sous-menu accordéon */}
                  {item.tabs && isExpanded && (
                    <div style={{ background: '#fafafa', borderTop: '1px solid #f0f0f0' }}>
                      {/* Tabs selector */}
                      <div style={{ overflowX: 'auto', display: 'flex', gap: 0, borderBottom: '1px solid #ebebeb' }}>
                        {expandedTabs.map((tab, i) => (
                          <button
                            key={tab.label}
                            onClick={() => setMobileSubTab(i)}
                            style={{
                              flexShrink: 0, padding: '10px 16px',
                              border: 'none', borderBottom: mobileSubTab === i ? '2px solid #29C5F5' : '2px solid transparent',
                              background: 'transparent', color: mobileSubTab === i ? '#0a0a0a' : '#888',
                              fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.06em',
                              cursor: 'pointer', transition: 'color 0.15s',
                            }}
                          >
                            {tab.label}
                          </button>
                        ))}
                      </div>
                      {/* Items */}
                      <div style={{ padding: '8px 0' }}>
                        {expandedTabs[mobileSubTab]?.items.map((subItem) => (
                          <a
                            key={subItem.label}
                            href="#"
                            onClick={() => setMobileOpen(false)}
                            style={{
                              display: 'flex', flexDirection: 'column', padding: '12px 24px',
                              textDecoration: 'none', borderBottom: '1px solid #f5f5f5',
                            }}
                          >
                            <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#0a0a0a' }}>{subItem.label}</span>
                            <span style={{ fontSize: '0.72rem', color: '#888', marginTop: 2 }}>{subItem.desc}</span>
                          </a>
                        ))}
                        {expandedTabs[mobileSubTab]?.cta && (
                          <a
                            href={expandedTabs[mobileSubTab].cta!.href}
                            onClick={() => setMobileOpen(false)}
                            style={{
                              display: 'block', margin: '12px 24px',
                              background: '#0a0a0a', color: '#FFF127',
                              padding: '12px 16px', borderRadius: 4,
                              fontWeight: 700, fontSize: '0.75rem',
                              letterSpacing: '0.08em', textDecoration: 'none', textAlign: 'center',
                            }}
                          >
                            {expandedTabs[mobileSubTab].cta!.label} →
                          </a>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
            <div style={{ padding: '24px 24px 0' }}>
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                style={{
                  display: 'block', textAlign: 'center',
                  background: '#FFF127', color: '#0a0a0a', padding: '16px 24px',
                  borderRadius: 4, fontWeight: 700, fontSize: '0.82rem',
                  letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none',
                }}
              >
                CONTACT →
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ── Mega Menu ── */}
      {tabs.length > 0 && (
        <div
          onMouseEnter={cancelClose}
          onMouseLeave={closeMega}
          style={{
            position: 'fixed',
            top: 68,
            left: 0,
            right: 0,
            zIndex: 199,
            background: '#fff',
            borderBottom: '1px solid #e8e8e8',
            boxShadow: '0 20px 60px rgba(0,0,0,0.12)',
            pointerEvents: openMenu ? 'auto' : 'none',
            opacity: openMenu ? 1 : 0,
            transform: openMenu ? 'translateY(0)' : 'translateY(-10px)',
            transition: 'opacity 0.22s ease, transform 0.22s ease',
          }}
        >
          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px', display: 'flex', minHeight: 380 }}>

            {/* Left panel — tabs */}
            <div style={{
              width: 260,
              flexShrink: 0,
              borderRight: '1px solid #ebebeb',
              padding: '32px 0',
              display: 'flex',
              flexDirection: 'column',
            }}>
              <div>
                {tabs.map((tab, i) => (
                  <button
                    key={tab.label}
                    onMouseEnter={() => setActiveTab(i)}
                    onClick={() => setActiveTab(i)}
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '13px 20px',
                      border: 'none',
                      borderRadius: 6,
                      background: activeTab === i ? '#0a0a0a' : 'transparent',
                      cursor: 'pointer',
                      textAlign: 'left',
                      transition: 'background 0.15s',
                      marginBottom: 2,
                    }}
                  >
                    <div>
                      <div style={{ fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.06em', color: activeTab === i ? '#fff' : '#0a0a0a', transition: 'color 0.15s' }}>
                        {tab.label}
                      </div>
                      <div style={{ fontSize: '0.68rem', color: activeTab === i ? 'rgba(255,255,255,0.55)' : '#999', marginTop: 2, transition: 'color 0.15s' }}>
                        {tab.desc}
                      </div>
                    </div>
                    <span style={{
                      width: 26, height: 26,
                      borderRadius: 4,
                      background: activeTab === i ? '#FFF127' : '#f0f0f0',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '0.75rem',
                      flexShrink: 0,
                      transition: 'background 0.15s',
                    }}>→</span>
                  </button>
                ))}
              </div>

            </div>

            {/* Right panel — grid */}
            <div style={{ flex: 1, padding: '32px 40px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#aaa', marginBottom: 24 }}>
                {tabs[activeTab]?.label} — {openMenu}
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '4px 32px', flex: 1 }}>
                {currentItems.map((item) => (
                  <a
                    key={item.label}
                    href="#"
                    style={{
                      display: 'block',
                      padding: '14px 0',
                      borderBottom: '1px solid #f0f0f0',
                      textDecoration: 'none',
                      transition: 'border-color 0.15s',
                    }}
                    onMouseEnter={e => {
                      const el = e.currentTarget
                      el.style.borderBottomColor = '#29C5F5'
                      const title = el.querySelector('.mega-title') as HTMLElement | null
                      if (title) title.style.color = '#0a0a0a'
                    }}
                    onMouseLeave={e => {
                      const el = e.currentTarget
                      el.style.borderBottomColor = '#f0f0f0'
                    }}
                  >
                    <div className="mega-title" style={{ fontSize: '0.82rem', fontWeight: 700, color: '#0a0a0a', marginBottom: 3, transition: 'color 0.15s' }}>
                      {item.label}
                    </div>
                    <div style={{ fontSize: '0.72rem', color: '#888', lineHeight: 1.5 }}>
                      {item.desc}
                    </div>
                  </a>
                ))}
              </div>

              {/* CTA bas droite */}
              {tabs[activeTab]?.cta && (
                <div style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: 24, borderTop: '1px solid #f0f0f0', marginTop: 20 }}>
                  <a
                    href={tabs[activeTab].cta!.href}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 8,
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: '#0a0a0a',
                      textDecoration: 'none',
                      padding: '10px 20px',
                      background: '#FFF127',
                      borderRadius: 4,
                      transition: 'background 0.15s',
                    }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#f5e800' }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#FFF127' }}
                  >
                    {tabs[activeTab].cta!.label} →
                  </a>
                </div>
              )}
            </div>

          </div>
        </div>
      )}
    </>
  )
}
