/**
 * BesoinsAccordion.tsx
 * Accordéon animé "Nous répondons à vos besoins pour" — section NOUS SOMMES DARWIN
 * Dépendances : React (useState, useRef)
 */

'use client'

import { useState, useRef } from 'react'

// ── Données — définies hors composant ──
const BESOINS: { label: string; desc: string }[] = [
  {
    label: 'DÉVELOPPER VOTRE BRANDING',
    desc: "Nous déployons des campagnes de visibilité pour installer votre marque dans l'esprit de vos audiences.\n\nDisplay, vidéo et formats impactants sont activés pour maximiser la mémorisation et la répétition. La performance est pilotée via des indicateurs concrets : impressions, taux de complétion, durée de vue et taux de clic.",
  },
  {
    label: 'GÉNÉRER DU TRAFIC QUALIFIÉ',
    desc: "Nous ne cherchons pas du volume, mais les bonnes audiences.\n\nSEO, médias payants et contenus travaillent ensemble pour attirer des utilisateurs réellement intéressés par vos produits, services ou offres.",
  },
  {
    label: 'ACQUÉRIR DES LEADS',
    desc: "Nous transformons l'attention en opportunités commerciales.\n\nStratégie d'acquisition, messages, landing pages et tracking sont alignés pour générer des leads utiles, exploitables et mesurables.",
  },
  {
    label: 'BOOSTER LES VISITES EN POINTS DE VENTE',
    desc: "Nous connectons le digital au physique.\n\nCampagnes locales, géociblage, SEO local et dispositifs média sont activés pour générer du trafic réel en magasin.",
  },
  {
    label: "ACCROÎTRE LE CHIFFRE D'AFFAIRE DE VOTRE SITE",
    desc: "Nous optimisons ce qui rapporte vraiment.\n\nTunnel de conversion, stratégie, analytics et arbitrage des leviers pour transformer le trafic en chiffre d'affaires.",
  },
]

// ── Sous-composant : un item accordéon ──
function AccordionItem({
  label,
  desc,
  isOpen,
  onToggle,
}: {
  label: string
  desc: string
  isOpen: boolean
  onToggle: () => void
}) {
  const contentRef = useRef<HTMLDivElement>(null)

  return (
    <div style={{ borderBottom: '1px solid #e0e0e0' }}>

      {/* ── Trigger ── */}
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          padding: '18px 0',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
        }}
      >
        <span
          className="font-anton"
          style={{
            fontSize: 'clamp(0.75rem, 1.3vw, 0.95rem)',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            color: '#0a0a0a',
          }}
        >
          {label}
        </span>

        {/* ── Icône ── */}
        <span
          style={{
            border: '1px solid #0a0a0a',
            width: 36,
            height: 36,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            marginLeft: 16,
            fontSize: '1rem',
            transition: 'background 0.25s, color 0.25s',
            background: isOpen ? '#0a0a0a' : 'transparent',
            color: isOpen ? '#fff' : '#0a0a0a',
          }}
        >
          ↗
        </span>
      </button>

      {/* ── Contenu animé ── */}
      <div
        ref={contentRef}
        style={{
          display: 'grid',
          gridTemplateRows: isOpen ? '1fr' : '0fr',
          transition: 'grid-template-rows 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <div style={{ overflow: 'hidden' }}>
          <p
            style={{
              padding: '0 0 18px',
              fontSize: '0.9rem',
              lineHeight: 1.7,
              color: '#555',
              margin: 0,
              whiteSpace: 'pre-line',
              opacity: isOpen ? 1 : 0,
              transform: isOpen ? 'translateY(0)' : 'translateY(-6px)',
              transition: 'opacity 0.3s ease 0.05s, transform 0.3s ease 0.05s',
            }}
          >
            {desc}
          </p>
        </div>
      </div>

    </div>
  )
}

// ── Composant principal ──
export default function BesoinsAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  function handleToggle(index: number) {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  return (
    <div style={{ borderTop: '1px solid #e0e0e0' }}>

      {/* ── Liste accordéon ── */}
      {BESOINS.map((item, i) => (
        <AccordionItem
          key={item.label}
          label={item.label}
          desc={item.desc}
          isOpen={openIndex === i}
          onToggle={() => handleToggle(i)}
        />
      ))}

    </div>
  )
}
