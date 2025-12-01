# Correction du déploiement Netlify

## Problème identifié
Le site est hébergé à `/Portfolio%20Fullstack/` au lieu de la racine, causant des erreurs MIME pour les assets.

## Solutions

### Solution 1: Redéployer via Netlify UI (RECOMMANDÉ)
1. Aller à https://app.netlify.com
2. Sélectionner ton site
3. Aller à "Builds" → "Trigger deploy" → "Deploy site"
4. Attendre que le build soit terminé

### Solution 2: Vérifier la configuration Netlify
1. Aller à "Site settings" → "Build & deploy"
2. S'assurer que:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist/public`
3. Redéployer

### Solution 3: Changer le nom du site
1. Aller à "Site settings"
2. Changer "Site name" pour quelque chose sans espaces
3. Redéployer

## Fichiers ajoutés pour corriger le problème
- `client/public/_redirects` - Fichier de redirection Netlify
- `netlify.toml` - Configuration optimisée

## Test après déploiement
1. Accéder à `https://votresite.netlify.app`
2. Vérifier que les CSS et JS se chargent correctement
3. Tester le formulaire de contact
