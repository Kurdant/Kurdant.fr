# 📧 Configuration EmailJS - Guide Complet

## 🚀 Étapes de Configuration

### 1. Créer un compte EmailJS

1. Va sur [https://www.emailjs.com/](https://www.emailjs.com/)
2. Clique sur "Sign Up" et crée un compte gratuit
3. Confirme ton email

### 2. Créer un Service Email

1. Dans le dashboard EmailJS, va dans **Email Services**
2. Clique sur **Add New Service**
3. Choisis ton fournisseur d'email (Gmail, Outlook, etc.)
4. Pour Gmail :
   - Connecte ton compte Gmail
   - Autorise EmailJS à envoyer des emails
5. Note ton **Service ID** (exemple: `service_abc1234`)

### 3. Créer un Email Template

1. Va dans **Email Templates**
2. Clique sur **Create New Template**
3. Utilise ce template HTML :

```html
Nouveau message de {{name}}

De: {{name}}
Email: {{email}}
Sujet: {{subject}}

Message:
{{message}}

---
Envoyé depuis kurdant.fr
```

4. Paramètres du template :
   - **Template Name** : Contact Form
   - **Subject** : Nouveau message de {{name}} - {{subject}}
   - **From Name** : {{name}}
   - **Reply To** : {{email}}

5. **Variables utilisées** (doivent correspondre aux noms des inputs du formulaire) :
   - `{{name}}` → Nom de l'expéditeur
   - `{{email}}` → Email de l'expéditeur
   - `{{subject}}` → Sujet du message
   - `{{message}}` → Contenu du message

6. Note ton **Template ID** (exemple: `template_xyz5678`)

### 4. Obtenir ta Public Key

1. Va dans **Account** → **General**
2. Trouve ta **Public Key** (exemple: `abcD123XYZ456`)
3. Note-la précieusement

### 5. Configurer le Code

Ouvre le fichier `ContactPage.jsx` et remplace les valeurs dans la fonction `handleSubmit` :

```jsx
const result = await emailjs.sendForm(
  'service_abc1234',      // ← Remplace par ton SERVICE ID
  'template_xyz5678',     // ← Remplace par ton TEMPLATE ID
  form.current,
  'abcD123XYZ456'        // ← Remplace par ta PUBLIC KEY
);
```

**Exemple avec de vraies valeurs :**

```jsx
const result = await emailjs.sendForm(
  'service_abcd123',
  'template_contact_form',
  form.current,
  'user_xyz789abc'
);
```

### 6. Tester le Formulaire

1. Lance ton serveur de dev : `npm run dev`
2. Va sur la page Contact : `http://localhost:5173/contact`
3. Remplis le formulaire et envoie un message de test
4. Vérifie que tu reçois bien l'email

## 📋 Checklist de Configuration

- [ ] Compte EmailJS créé
- [ ] Service Email configuré (Gmail, Outlook, etc.)
- [ ] Template créé avec les bonnes variables
- [ ] Service ID récupéré
- [ ] Template ID récupéré
- [ ] Public Key récupérée
- [ ] Les 3 IDs remplacés dans ContactPage.jsx
- [ ] Formulaire testé et fonctionnel

## 🔧 Troubleshooting

### Le message ne s'envoie pas

1. **Vérifie la console du navigateur** (F12) pour voir les erreurs
2. **Vérifie que les 3 IDs sont corrects** (Service, Template, Public Key)
3. **Vérifie que les noms des champs correspondent** :
   - Input `name="name"` → Template `{{name}}`
   - Input `name="email"` → Template `{{email}}`
   - Input `name="subject"` → Template `{{subject}}`
   - Input `name="message"` → Template `{{message}}`

### Erreur "Template not found"

- Vérifie que ton Template ID est correct
- Assure-toi que le template est bien publié (status: Active)

### Erreur "Service not found"

- Vérifie ton Service ID
- Assure-toi que le service est bien connecté à ton email

### Les emails arrivent en spam

1. Dans EmailJS, configure le **From Email** dans ton service
2. Utilise un domaine email vérifié
3. Demande à tes destinataires d'ajouter ton email en contact

## 💡 Tips

- **Limite gratuite** : 200 emails/mois avec le plan gratuit
- **Notifications** : Tu peux configurer des notifications dans EmailJS
- **Auto-reply** : Tu peux créer un second template pour envoyer un email de confirmation automatique
- **Variables** : Tu peux ajouter d'autres variables comme `{{to_email}}` pour l'email de destination

## 🔐 Sécurité

⚠️ **IMPORTANT** : 
- La Public Key peut être exposée dans le code front-end (c'est normal)
- NE JAMAIS exposer ta Private Key
- Les Service ID et Template ID peuvent aussi être publics
- Pour plus de sécurité, tu peux utiliser les EmailJS Access Rules pour limiter l'origine des requêtes

## 📧 Email de Destination

Par défaut, les emails seront envoyés à l'adresse email que tu as configurée dans le service EmailJS. Tu peux :

1. Aller dans **Email Services** → Ton service
2. Modifier le **To Email** pour changer l'adresse de destination
3. Ou créer plusieurs templates avec des destinations différentes

## 🎨 Personnalisation du Template

Tu peux personnaliser le template HTML avec :

```html
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #ff0040;">Nouveau message de {{name}}</h2>
  
  <div style="background: #f5f5f5; padding: 20px; border-radius: 8px;">
    <p><strong>De:</strong> {{name}}</p>
    <p><strong>Email:</strong> {{email}}</p>
    <p><strong>Sujet:</strong> {{subject}}</p>
  </div>
  
  <div style="margin-top: 20px;">
    <h3>Message:</h3>
    <p style="line-height: 1.6;">{{message}}</p>
  </div>
  
  <hr style="margin: 30px 0;">
  <p style="color: #888; font-size: 12px;">Envoyé depuis kurdant.fr</p>
</div>
```

## ✅ C'est Prêt !

Une fois configuré, ton formulaire de contact est 100% fonctionnel et les messages arriveront directement dans ta boîte mail ! 🎉
