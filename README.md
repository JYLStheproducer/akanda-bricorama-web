# Akanda Bricorama Web

Site web pour Akanda Bricorama - Catalogue de produits et services de construction.

## 🚀 Déploiement sur GitHub Pages

Ce projet est configuré pour se déployer automatiquement sur GitHub Pages.

### Étapes pour déployer :

1. **Créer un repository GitHub**
   - Allez sur [GitHub](https://github.com)
   - Créez un nouveau repository nommé `akanda-bricorama-web`

2. **Pousser le code vers GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/VOTRE_USERNAME/akanda-bricorama-web.git
   git push -u origin main
   ```

3. **Activer GitHub Pages**
   - Allez dans les paramètres du repository (Settings)
   - Scroll jusqu'à la section "Pages"
   - Dans "Source", sélectionnez "GitHub Actions"

4. **Le déploiement se fera automatiquement**
   - À chaque push sur la branche `main`, le site sera automatiquement déployé
   - L'URL sera : `https://VOTRE_USERNAME.github.io/akanda-bricorama-web`

## 🛠️ Développement local

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Build pour la production
npm run build
```

## 📦 Technologies utilisées

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Shadcn/ui
- React Router DOM

## 📁 Structure du projet

- `src/components/` - Composants React
- `src/pages/` - Pages de l'application
- `src/hooks/` - Hooks personnalisés
- `src/lib/` - Utilitaires et configurations

# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/605a1c4e-f20c-40d4-bc98-bc1f9ff4c225

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/605a1c4e-f20c-40d4-bc98-bc1f9ff4c225) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/605a1c4e-f20c-40d4-bc98-bc1f9ff4c225) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
