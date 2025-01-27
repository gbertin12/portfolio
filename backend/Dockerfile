# -- Étape 1 : Choisir une image de base
FROM node:20-alpine

# -- Étape 2 : Créer un répertoire de travail
WORKDIR /app

# -- Étape 3 : Copier les fichiers de dépendances et installer
COPY package*.json ./
RUN npm install

# -- Étape 4 : Copier le reste du code
COPY . .

# -- Étape 5 : Exposer le port
EXPOSE 5001

# -- Étape 6 : Commande de lancement
CMD ["npm", "run", "dev"]