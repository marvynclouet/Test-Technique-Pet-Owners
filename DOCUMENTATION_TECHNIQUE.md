# Documentation Technique — Test Technique Pet Owners

## 1. Architecture Générale

- **Backend** : NestJS (TypeScript, REST, TypeORM, MySQL)
- **Frontend** : Next.js (React, React Query, Tailwind CSS)
- **Base de données** : MySQL (structure dans `schema.sql`)

---

## 2. Structure du Projet

```
Test-technique/
├── backend/         # API NestJS
├── frontend/        # Frontend Next.js
├── schema.sql       # Structure BDD
├── DOCUMENTATION_TECHNIQUE.md  # Ce document
```

---

## 3. Backend (NestJS)

### a) Entités principales
- **Person** :
  - id, lastName, firstName, email, phoneNumber, photoUrl
  - Relation : OneToMany avec Animal
- **Animal** :
  - id, name, dateOfBirth, species, breed, color, weight, ownerId, photoUrl
  - Relation : ManyToOne avec Person

### b) Endpoints principaux
- `/persons` : CRUD personnes
- `/animals` : CRUD animaux
- `/animals/stats/oldest` : Animal le plus vieux
- `/animals/stats/most-common-species` : Espèce la plus courante
- `/animals/stats/owner-most-animals` : Propriétaire avec le plus d'animaux
- `/animals/stats/owner-most-cats` : Propriétaire avec le plus de chats
- `/animals/stats/heaviest-animal` : Animal le plus lourd
- `/animals/stats/owner-heaviest-group` : Propriétaire avec le groupe le plus lourd

### c) Gestion des images
- Champ `photoUrl` (string) pour chaque personne et animal
- APIs utilisées pour les images :
  - **Personnes** : `https://randomuser.me/api/portraits/` (photos de profil réalistes)
  - **Animaux** : `https://source.unsplash.com/` (photos d'animaux de haute qualité)
- Images par défaut si non renseigné :
  - Personnes : `https://randomuser.me/api/portraits/lego/1.jpg`
  - Animaux : `https://source.unsplash.com/300x300/?animal`

### d) Sécurité & CORS
- CORS activé pour le frontend (localhost:3001)
- Pas d'authentification (test technique)

### e) Démarrage
- `npm install && npm run start` dans `backend/`
- Configuration MySQL dans `app.module.ts` (localhost, user root, pas de mot de passe par défaut)

---

## 4. Frontend (Next.js)

### a) Pages principales
- `/` : Accueil + statistiques
- `/persons` : Liste des personnes
- `/persons/[id]` : Détail d'une personne
- `/animals` : Liste des animaux
- `/animals/[id]` : Détail d'un animal

### b) Fonctionnalités
- Récupération des données via React Query
- Affichage des photos (URL ou image par défaut)
- Multilingue (FR/EN) :
  - Bouton de langue dans la navbar
  - Traductions gérées via contexte React
  - Interface complète en français et anglais
- UI responsive (Tailwind CSS)
- Gestion des erreurs et du chargement

### c) Structure du code
- `src/app/` : pages Next.js
- `src/components/` : Navbar, Providers, etc.
- `src/contexts/LanguageContext.tsx` : gestion de la langue
- `src/services/api.ts` : appels API
- `src/types/` : types TypeScript partagés

---

## 5. Base de données

- Structure dans `schema.sql`
- Données de test injectées via SQL (voir README)
- Les images sont des URLs publiques (randomuser.me, unsplash)
