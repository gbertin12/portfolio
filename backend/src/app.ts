import express, { Request, Response } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// URI de connexion MongoDB
const MONGO_URI = 'mongodb://admin:password@localhost:27017/articlesdb';

// Connexion à MongoDB
mongoose
  .connect(MONGO_URI, {
  })
  .then(() => {
    console.log('MongoDB connecté avec succès');
  })
  .catch((error) => {
    console.error('Erreur lors de la connexion à MongoDB :', error.message);
  });

// Route de test
app.get('/', async (req: Request, res: Response) => {
    res.json({ message: 'Hello from TypeScript Node backend!' });
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
