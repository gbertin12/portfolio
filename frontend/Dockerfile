FROM node:20-alpine

# 1. Définir le répertoire de travail
WORKDIR /app

# 2. Copier les fichiers de dépendances en premier (pour tirer profit du cache Docker)
COPY package*.json ./

# 3. Installer les dépendances
RUN npm install

# 4. Copier le reste du code
COPY . .

# 5. Exposer le port (3000 pour un dev server React ou Vite)
EXPOSE 5173

# 6. Démarrer en mode dev
CMD ["npm", "run", "dev"]
