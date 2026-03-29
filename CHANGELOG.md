# CHANGELOG — Site DARWIN
> Historique des grandes mises à jour du projet Next.js darwin-agency

---

## Conventions à respecter impérativement

| Règle | Valeur |
|---|---|
| Nom de la marque | **DARWIN** (toujours en majuscules, jamais "Darwin Agency") |
| LinkedIn | `https://www.linkedin.com/company/darwin-interactive` |
| Déploiement | Ne **jamais** pousser sur `main` sans demande explicite |
| Domaine (à confirmer) | `darwin-agency.fr` — à mettre à jour partout au lancement |

---

## [Session 1] — Fondation du projet

### Homepage (`app/page.tsx`)
- Reproduction de la homepage darwin-agency.com avec animations et assets réels
- **Hero parallax** : `HeroSection.tsx` (client component) avec scroll-driven `translateY`
  - Fond à `y * 0.9`, texte à `y * 0.55` via `requestAnimationFrame`
  - "THINKING" en outline : `color: transparent`, `WebkitTextStroke: '1.5px #0a0a0a'`, italic
  - `lineHeight: 0.95` sur le `<h1>`
- **Section Notre Agence** : 2 colonnes — gauche stats 2×2 (2003, +400, +30, +6 ANS) sur fond blanc, droite photo gymnaste full-height via `background-image`
- **Section Récompenses** : 5 logos réels entre Notre Agence et NOS MÉTIERS (`space-between`)
  - Les Cas d'Or, Deloitte, Selligent, lesBigBoss, Nuit des Rois
- **Accordéon "Nous sommes DARWIN"** : premier item ouvert par défaut (`open={true}`)
  - Texte branding/display avec `whiteSpace: 'pre-line'`
- **Certifications** : logo DoubleClick réduit à `h: 36` (autres à `h: 70`)
- Suppression des doublons de la section récompenses

---

## [Session 2] — Header & Footer

### Header (`app/components/Header.tsx`)
- Sous-menus Expertises (SEO, SEA, SMA, MEDIA, Analytics, Formation, Studio Créatif) et Vos Besoins
- **GEO** remplace "SEO Local" dans le sous-menu SEO (`label: 'GEO'`, `desc: 'Generative Engine Optimization'`)
- Bouton CONTACT pointe vers `/contact` (pas `#contact`)
- Type `Tab` avec `cta?` optionnel pour éviter l'erreur TypeScript au build
- Effet hover sur les items du menu principal

### Footer (`app/components/Footer.tsx`)
- Redesign complet orienté SEO
- Bande CTA cyan `#29C5F5` en haut
- Corps noir `#0a0a0a` avec grille 5 colonnes
- Colonnes : Logo+Infos+Adresse+Tel+LinkedIn | L'Agence | Expertises | Ressources | Newsletter
- Newsletter avec état `sent` (confirmation ✓ en jaune)
- Barre légale en bas : copyright + Mentions légales + RGPD (CGU retirée)

---

## [Session 3] — Layout global & Responsive

### Layout (`app/layout.tsx`)
- Header et Footer déplacés dans `layout.tsx` (partagés sur toutes les pages)
- Police Anton (titres) + Source Sans 3 (corps)
- `paddingTop: 68` sur `<main>` pour compenser le header fixe

### Responsive (`app/globals.css`)
- Classes utilitaires `rsp-*` pour adapter les grilles en mobile
- Hamburger menu sur mobile dans le Header
- Sous-menus adaptatifs en version mobile

---

## [Session 4] — Pages créées

### Page L'Agence (`app/agence/page.tsx`)
- Contenu aspiré depuis `darwin-agency.com/a-propos/`
- Sections : Hero, Objectifs (4 accordéons), 5 Raisons (icônes SVG), Équipe, Certifications, Expertises
- **Icônes SVG** minimalistes pour les 5 raisons (pas d'emojis) : personnes, barres, éclair, œil, médaille
- **Photos équipe** téléchargées et stockées localement dans `public/images/team/` :
  - Olivier Trubert, Gaëlle Aubert, Miriame Yvard, Jérome Renard, Carole Kabanda, Thomas Courjeault, Amaury Micha de Faletans, Julia Sanchez

### Page Agence SEO (`app/expertises/seo/page.tsx`)
- Template de base pour toutes les pages expertises
- Sections : Hero, Stats, Leviers (cartes blanches sur fond noir), Audit, Cas clients, GEO, CTA
- **Section GEO** : importance d'être cité dans les LLMs + CTA vers future page GEO
- Leviers SEO en cartes avec bordure accent jaune + hover

### Page Contact (`app/contact/page.tsx`)
- **Hero split 50/50** : gauche texte + CTA recrutement, droite image plan (`public/images/contact/plan.jpg`)
- Image plan aspirée depuis `darwin-agency.com` (SHOWREEL-1.jpg)
- Formulaire : `<ContactForm />` (notre composant, pas celui du site actuel)
- Sidebar droite : photo équipe, adresse, téléphone cliquable, LinkedIn, horaires 9h–18h30, newsletter
- CTA band jaune en bas

### Formulaire de contact (`app/components/ContactForm.jsx`)
- Champs : Prénom, Nom, **Entreprise**, Email pro, Téléphone
- Sélecteur besoins multi-choix (8 options)
- Budget en pills
- Validation + envoi via `/api/contact`
- État success avec message personnalisé

---

## [Session 5] — SEO Technique

> ⚠️ Le site est en production — indexation bloquée jusqu'au lancement

### Indexation bloquée
- `app/robots.ts` : `Disallow: /` pour tous les bots
- `layout.tsx` : `robots: { index: false, follow: false }`
- **À faire au lancement** : retirer ces deux protections + soumettre sitemap dans Google Search Console

### Sitemap (`app/sitemap.ts`)
- Généré automatiquement par Next.js → `/sitemap.xml`
- Pages indexées : `/`, `/agence`, `/contact`, `/expertises/seo`
- Pages commentées à activer au fur et à mesure : `/expertises/sea`, `/expertises/sma`, `/expertises/media`, `/expertises/analytics`, `/expertises/formation`, `/expertises/studio-creatif`, `/expertises/geo`, `/recrutement`
- **À faire au lancement** : remplacer `darwin-agency.fr` par le vrai domaine

### JSON-LD Organisation (`layout.tsx`)
- Schéma `Organization` global : nom, URL, logo, adresse, téléphone, LinkedIn, date de création
- Génère les rich snippets dans Google

### Open Graph
- Défauts globaux dans `layout.tsx` : `og:title`, `og:description`, `og:image`, `og:type`, Twitter card
- Overrides par page sur `/agence`, `/expertises/seo`, `/contact`
- Image OG : `public/images/og-default.jpg` (1200×630px) — **placée par le client**
- **À faire au lancement** : mettre à jour les URLs avec le vrai domaine

### Canonical tags
- `metadataBase: new URL(BASE_URL)` dans `layout.tsx` — Next.js gère les canonicals automatiquement
- `alternates: { canonical: '/ma-page' }` ajouté sur chaque page existante
- **Convention** : ajouter `alternates: { canonical: '/chemin' }` à chaque nouvelle page créée

---

## [Session 7] — Page Audit SEO, illustrations SVG, 404 & corrections éditoriales

### Nouvelle page : Audit SEO (`app/expertises/seo/audit-seo/page.tsx`)
- Page spoke complète (~3 100 mots) : hero split blanc, 4 piliers d'audit, méthodologie 5 étapes, livrable, cas clients, pourquoi DARWIN, FAQ (7 Q&A), maillage vers autres sous-pages
- Hero : colonne gauche texte/CTA, colonne droite illustration SVG avec ombre et fond `#f5f5f5`
- Section méthodologie : fond `#fafafa`, cartes blanches avec `border-left: 4px solid #0a0a0a` (style "L'approche DARWIN")
- Section maillage : dégradé diagonal `#27D9E5 → #B8E000` avec `clip-path: polygon(0 80px, 100% 0, 100% 100%, 0 100%)`
- Contenu expert 2026 : INP remplace FID, AI Overviews >50%, Helpful Content System, GEO, JavaScript SEO
- Textes justifiés (`body-text`) + `<strong>` sur les termes clés via `dangerouslySetInnerHTML`
- Métadonnées SEO complètes : title, description, canonical, OpenGraph

### Illustrations SVG (`public/images/illustrations/`)
- 5 fichiers SVG sur fond transparent, conçus pour fond clair (pas de `<rect fill="#0a0a0a">`)
- Palette DARWIN : `#FFF127` jaune plein, `#29C5F5` cyan, `#0a0a0a` near-black, `#f8f8f8` fonds intérieurs
- `audit-seo.svg` : loupe + graphique en barres + navigateur
- `seo-technique.svg` : éditeur de code + arborescence de site avec nœuds erreur (rouge) et opportunité (jaune)
- `strategie-contenu.svg` : article/document + cluster de mots-clés (jaune primaire, cyan secondaire, gris longue traîne)
- `netlinking.svg` : graphe réseau — nœud central jaune, anneau 1 cyan, anneau 2 gris, nœud toxique rouge
- `geo-visibilite-ia.svg` : interface chat IA + globe avec signaux ondes jaunes et nœuds de présence

### Page 404 (`app/not-found.tsx`)
- Design immersif fond jaune `#FFF127`
- "404" en Anton géant sur toute la hauteur + effet miroir outline avec masque dégradé
- Bandes verticales cyan décoratives
- Contenu bas gauche : badge "ERREUR 404", titre "CETTE PAGE A DISPARU.", 2 CTAs (accueil + expertises)
- Barre noire `4px` en pied de page

### Header (`app/components/Header.tsx`)
- Type `items` enrichi : `href?: string` sur chaque item de sous-menu
- Sous-menu SEO : hrefs branchés sur les sous-pages existantes (Audit SEO, Stratégie de contenu, GEO, Netlinking, SEO Technique)
- Rendu desktop et mobile utilisent `item.href ?? '#'`

### Corrections éditoriales globales
- **Suppression de "gratuit" et "offert"** sur tout le site (7 occurrences dans 4 fichiers) — remplacés par "premier échange", "Demander un audit", "diagnostic SEO", etc.
- **Suppression des tarifs** de DARWIN dans le contenu public (FAQ audit-seo : fourchettes €€€ supprimées)
- **2025 → 2026** partout dans le contenu
- Footer : "Audit gratuit" → "Demander un audit"
- Page SEO : titre CTA "GRATUIT COMMENCE ICI" → "COMMENCE ICI"
- Étiquette "MAILLAGE SEO" → "NOS EXPERTISES" dans la section maillage
- Titres des signaux d'alerte (fond noir) : couleur jaune → blanc

### Règles éditoriales ajoutées (à respecter à vie)
- Ne jamais écrire "gratuit", "offert" ou équivalents — dévalorise le positionnement premium DARWIN
- Ne jamais afficher de tarifs ou fourchettes de prix DARWIN dans le contenu public
- Année de référence : **2026** (pas 2025)

---

## [Session 6] — SEO Technique avancé & Sécurité

### Audit H1/H2/H3 (toutes les pages)
- **Footer** : `<h2>` "BOOSTONS VOTRE PERFORMANCE DIGITALE" → remplacé par `<p>` (ce `<h2>` apparaissait sur TOUTES les pages, polluant la hiérarchie de titres de chaque URL)
- **Page Contact** : H1 "LET'S TALK!" → "CONTACTEZ DARWIN" (H1 sans keywords SEO → H1 avec intention de recherche claire)
- **Toutes les pages** : Remplacement systématique de "Darwin" par **DARWIN** dans tout le contenu texte (règle de marque : toujours majuscules, sans exception)
- Hiérarchie H1 → H2 → H3 validée sur les 4 pages : `/`, `/agence`, `/expertises/seo`, `/contact`
- H1 unique par page ✅ | Pas de saut de niveau ✅

### Rapport de sécurité

> ⚠️ Le site n'est pas encore en ligne — risques limités à ce stade. Les corrections ci-dessous sont à effectuer avant ouverture au public.

**Ce qui est déjà en place :**
- Indexation Google bloquée (robots.ts + noindex dans layout.tsx) — aucun crawler ne peut trouver le site
- Formulaire contact avec validation côté serveur (`/api/contact/route.js`)
- Variables d'environnement via `.env.local` (clé Resend, emails)
- Dépendances auditées via `npm audit` — aucune vulnérabilité critique

**Ce qui reste à sécuriser (avant lancement) :**

| Priorité | Action | Fichier |
|---|---|---|
| 🔴 Urgent | Ajouter les security headers HTTP (CSP, X-Frame-Options, HSTS, Referrer-Policy) | `next.config.ts` |
| 🔴 Urgent | Sanitiser le HTML du message dans l'email (risque XSS si Resend activé) | `app/api/contact/route.js` |
| 🟡 Important | Ajouter rate limiting sur `/api/contact` (protection spam/DDoS) | `app/api/contact/route.js` |
| 🟡 Important | Supprimer les `console.log` qui exposent les données personnelles | `app/api/contact/route.js` |
| 🟢 Lancement | Vérifier que le repo GitHub est bien en **privé** | GitHub |
| 🟢 Lancement | Configurer SPF / DKIM / DMARC sur `darwin-agency.fr` | DNS |

**Convention de confidentialité :**
- Le site n'est pas référencé, pas partagé, pas accessible publiquement
- Aucun lien externe ne pointe vers lui
- Le risque de sécurité actuel est minimal — priorité : sécuriser avant le lancement

---

## Tâches SEO restantes

| # | Tâche | Statut |
|---|---|---|
| 6 | Audit H1/H2/H3 sur toutes les pages | ✅ Fait |
| 7 | Audit attributs `alt` sur toutes les images | ⏳ À faire |
| 8 | Remplacer les `<img>` restants par `<Image>` Next.js | ⏳ À faire |
| 9 | JSON-LD LocalBusiness sur `/contact` | ⏳ À faire |
| 10 | Breadcrumbs sur les pages `/expertises/*` | ⏳ À faire |
| 11 | **Activer l'indexation Google** (lancement) | 🔒 Bloqué jusqu'au lancement |

## Tâches Sécurité restantes

| # | Tâche | Priorité | Statut |
|---|---|---|---|
| S1 | Security headers dans `next.config.ts` | 🔴 Urgent | ⏳ À faire |
| S2 | Sanitisation HTML dans `/api/contact/route.js` | 🔴 Urgent | ⏳ À faire |
| S3 | Rate limiting sur `/api/contact` | 🟡 Important | ⏳ À faire |
| S4 | Supprimer `console.log` avec données personnelles | 🟡 Important | ⏳ À faire |
| S5 | Vérifier visibilité repo GitHub (doit être privé) | 🟢 Lancement | ⏳ À faire |
| S6 | SPF / DKIM / DMARC sur le domaine | 🟢 Lancement | ⏳ À faire |

---

## Pages à créer (futures sessions)

| Page | URL | Statut |
|---|---|---|
| SEA | `/expertises/sea` | À créer |
| SMA | `/expertises/sma` | À créer |
| MEDIA | `/expertises/media` | À créer |
| Analytics | `/expertises/analytics` | À créer |
| Formation | `/expertises/formation` | À créer |
| Studio Créatif | `/expertises/studio-creatif` | À créer |
| GEO | `/expertises/geo` | À créer |
| Recrutement | `/recrutement` | À créer |
| Audit SEO | `/expertises/seo/audit-seo` | ✅ Fait |
| Sous-pages SEO | `/seo/seo-technique`, `/seo/strategie-contenu`, `/seo/netlinking`, `/seo/geo-visibilite-ia` | À créer |

---

## Tâches Blog à venir

> Page `/blog` — apparence de blog, contenu statique, pas de CMS. Estimation : 1 session.

| # | Étape | Détail | Statut |
|---|---|---|---|
| B1 | Fichier de données `app/data/articles.ts` | Structure : slug, titre, date, catégorie, extrait, image, contenu | ⏳ À faire |
| B2 | Composant `ArticleCard.tsx` | Image, catégorie, titre, date, extrait, lien vers l'article | ⏳ À faire |
| B3 | Page `/blog` | Grille d'articles + filtre catégories + pagination (côté client) | ⏳ À faire |
| B4 | Page `/blog/[slug]` | Affichage article complet (contenu, date, catégorie, retour) | ⏳ À faire |
| B5 | Header + Footer | Ajouter le lien `/blog` dans la navigation | ⏳ À faire |
| B6 | Sitemap | Ajouter `/blog` et `/blog/[slug]` dans `sitemap.ts` | ⏳ À faire |
| B7 | SEO dynamique | `metadata` par article : title, description, OG, canonical | ⏳ À faire |

---

## Tâches Cas Clients à venir

> Page `/cas-clients` — contenu aspiré depuis l'ancien site, filtre par levier, chiffres clés réutilisables dans les pages internes. Estimation : 2 sessions (scraping + développement).

**Les 7 leviers de filtre :** SEO · SEA · SMA · Média · Analytics · Formation · Branding

| # | Étape | Détail | Statut |
|---|---|---|---|
| C1 | Scraping ancien site | Aspirer depuis `darwin-agency.com` : titres, descriptions, chiffres clés, images, levier(s) associé(s) | ⏳ À faire |
| C2 | Fichier `app/data/cas-clients.ts` | Structure : slug, client, levier(s), résumé, chiffres clés, images, contenu (contexte / défi / solution / résultats) | ✅ Fait |
| C3 | Fichier `app/data/stats.ts` | Centraliser les chiffres clés par levier — réutilisables dans les pages `/expertises/*` | ⏳ À faire |
| C4 | Composant `CasClientsGrid.tsx` | Logo client, levier badge, titre, chiffre clé mis en avant, extrait, lien | ✅ Fait |
| C5 | Page `/cas-clients` | Grille de cas + filtre par levier (7 filtres) + état "aucun résultat" | ✅ Fait |
| C6 | Page `/cas-clients/[slug]` | Cas complet : contexte, défi, solution DARWIN, résultats chiffrés | ✅ Fait |
| C7 | Injection dans les pages expertises | Chiffres clés issus de `stats.ts` → section résultats dans `/expertises/seo`, `/sea`, etc. | ⏳ À faire |
| C8 | Header + Footer | Ajouter `/cas-clients` dans la navigation | ⏳ À faire |
| C9 | Sitemap | Ajouter `/cas-clients` et `/cas-clients/[slug]` dans `sitemap.ts` | ⏳ À faire |
| C10 | SEO dynamique | `metadata` par cas : title, description, OG, canonical + JSON-LD schema `CaseStudy` | ⏳ À faire |

---

## Architecture des fichiers clés

```
app/
├── layout.tsx              ← Header, Footer, JSON-LD, OG globaux, canonical base
├── page.tsx                ← Homepage
├── robots.ts               ← Bloque l'indexation en production
├── sitemap.ts              ← Génère /sitemap.xml
├── agence/page.tsx         ← Page L'Agence
├── contact/page.tsx        ← Page Contact
├── expertises/
│   └── seo/page.tsx        ← Page Agence SEO (template pour les autres)
└── components/
    ├── Header.tsx          ← Navigation avec sous-menus
    ├── Footer.tsx          ← Footer SEO
    ├── HeroSection.tsx     ← Hero parallax homepage
    └── ContactForm.jsx     ← Formulaire de contact

public/
├── images/
│   ├── gymnaste.jpg        ← Photo hero section Notre Agence
│   ├── og-default.jpg      ← Image Open Graph 1200×630px
│   ├── team/               ← Photos équipe dirigeante
│   ├── contact/            ← Photos page contact (plan, équipe, Le Toma)
│   └── seo/                ← Visuels page Agence SEO
├── logos/
│   ├── certifications/     ← Google Partner, Meta, Microsoft, etc.
│   ├── clients/            ← Logos clients
│   └── recompenses/        ← Logos prix & récompenses
```
