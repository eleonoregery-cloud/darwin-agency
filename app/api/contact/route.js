// API Route — Formulaire de contact Darwin Agency
// Pour activer l'envoi d'emails : npm install resend
// puis ajouter RESEND_API_KEY dans .env.local

export async function POST(request) {
  try {
    const body = await request.json()
    const { prenom, nom, email, telephone, typeEntreprise, budget, message } = body

    // Validation serveur
    if (!prenom || !nom || !email || !message) {
      return Response.json({ error: 'Champs obligatoires manquants.' }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return Response.json({ error: 'Email invalide.' }, { status: 400 })
    }

    // ─── RESEND (décommenter après npm install resend + .env.local) ───
    // import { Resend } from 'resend'
    // const resend = new Resend(process.env.RESEND_API_KEY)
    //
    // // Email à l'équipe Darwin
    // await resend.emails.send({
    //   from: 'contact@darwin-agency.com',
    //   to: ['eleonore@darwin-agency.com'],
    //   subject: `Nouveau lead — ${prenom} ${nom} (${typeEntreprise || 'N/A'})`,
    //   html: `
    //     <h2>Nouveau contact via darwin-agency.com</h2>
    //     <p><strong>Nom :</strong> ${prenom} ${nom}</p>
    //     <p><strong>Email :</strong> ${email}</p>
    //     <p><strong>Téléphone :</strong> ${telephone || 'Non renseigné'}</p>
    //     <p><strong>Type d'entreprise :</strong> ${typeEntreprise || 'Non renseigné'}</p>
    //     <p><strong>Budget mensuel :</strong> ${budget || 'Non renseigné'}</p>
    //     <p><strong>Message :</strong><br/>${message}</p>
    //   `,
    // })
    //
    // // Confirmation automatique au prospect
    // await resend.emails.send({
    //   from: 'Darwin Agency <contact@darwin-agency.com>',
    //   to: [email],
    //   subject: 'Nous avons bien reçu votre message — Darwin Agency',
    //   html: `
    //     <p>Bonjour ${prenom},</p>
    //     <p>Merci pour votre message. Notre équipe vous répondra sous 24h avec un audit ou une proposition adaptée.</p>
    //     <p>À très vite,<br/>L'équipe Darwin Agency</p>
    //   `,
    // })
    // ─────────────────────────────────────────────────────────────────

    // Log en console (mode développement)
    console.log('📩 Nouveau contact reçu :', { prenom, nom, email, typeEntreprise, budget })

    return Response.json({ success: true }, { status: 200 })
  } catch (err) {
    console.error('Erreur API contact :', err)
    return Response.json({ error: 'Erreur serveur. Réessayez.' }, { status: 500 })
  }
}
