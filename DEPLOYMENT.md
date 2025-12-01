# Guide de déploiement: Netlify + Render

## Architecture
- **Frontend**: Netlify (React + Vite)
- **Backend**: Render (Express.js)
- **Email**: Resend

## Étape 1: Préparer le Backend pour Render

### 1.1 Créer un compte Render
- Accéder à https://render.com
- S'inscrire avec GitHub

### 1.2 Créer un service Web sur Render
1. Cliquer sur "New +" → "Web Service"
2. Sélectionner votre dépôt GitHub
3. Configurer:
   - **Name**: `portfolio-backend`
   - **Runtime**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Plan**: Free (ou Premium si nécessaire)

### 1.3 Ajouter les variables d'environnement sur Render
Dans le tableau de bord Render, aller à "Environment":
```
RESEND_API_KEY = votre_clé_api_resend
NODE_ENV = production
```

### 1.4 Déployer
- Cliquer sur "Deploy"
- Attendre que le déploiement soit terminé
- Copier l'URL du service (ex: `https://portfolio-backend.onrender.com`)

## Étape 2: Configurer le Frontend pour Netlify

### 2.1 Créer un compte Netlify
- Accéder à https://netlify.com
- S'inscrire avec GitHub

### 2.2 Créer un site sur Netlify
1. Cliquer sur "Add new site" → "Import an existing project"
2. Sélectionner votre dépôt GitHub
3. Configurer:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist/public`

### 2.3 Ajouter les variables d'environnement
Dans "Site settings" → "Build & deploy" → "Environment":
```
VITE_API_URL = https://votre-backend-render.onrender.com
```

### 2.4 Déployer
- Netlify déploiera automatiquement à chaque push sur la branche principale

## Étape 3: Tester

1. Accéder à votre site Netlify (ex: `https://votresite.netlify.app`)
2. Tester le formulaire de contact
3. Vérifier que les emails sont reçus

## Mise à jour de l'API URL

Si vous changez l'URL du backend Render:

**Sur Netlify**:
1. Accéder à "Site settings"
2. "Build & deploy" → "Environment variables"
3. Mettre à jour `VITE_API_URL`
4. Redéployer le site

## Troubleshooting

### Les emails ne fonctionnent pas
- Vérifier que `RESEND_API_KEY` est configurée sur Render
- Vérifier que l'email "from" dans Resend est configuré

### Le frontend ne peut pas accéder au backend
- Vérifier que `VITE_API_URL` est correctement configurée sur Netlify
- Vérifier que le backend est en ligne sur Render

### Le build échoue sur Netlify
- Consulter les logs de build dans "Deploys" → détails du déploiement
- Vérifier que `npm run build` fonctionne localement

## Domaines personnalisés

### Netlify
1. "Site settings" → "Domain management"
2. "Add custom domain"
3. Suivre les instructions pour configurer DNS

### Render
1. Tableau de bord du service
2. "Custom domain"
3. Suivre les instructions

## Notes de sécurité

- ✅ Clés API: Utilisez les variables d'environnement
- ✅ HTTPS: Activé automatiquement sur Netlify et Render
- ✅ CORS: Configuré dans le backend Express
- ✅ Variables sensibles: Ne jamais les commiter dans Git

## Fichiers de configuration

- `netlify.toml`: Configuration Netlify
- `render.yaml`: Configuration Render
- `package.json`: Scripts de build et start
- `.env.example`: Template des variables d'environnement
