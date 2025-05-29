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
- Images par défaut si non renseigné (gérées côté frontend)

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
- Multilingue (FR/EN, bouton dans la navbar, via contexte React)
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

---

## 6. Points importants & choix techniques

- **TypeORM** pour la gestion des entités et des relations
- **React Query** pour la gestion du cache et des requêtes côté frontend
- **Tailwind CSS** pour un design rapide et responsive
- **Contexte React** pour la gestion de la langue (multilingue)
- **Endpoints REST** simples et clairs, facilement testables avec Postman ou le frontend
- **Code commenté** dans les entités, services, contrôleurs, et composants clés

---

## 7. Pour aller plus loin

- Ajout d'un vrai système d'upload d'images (Cloudinary, S3...)
- Authentification JWT
- Pagination, recherche, filtres avancés
- Tests unitaires et e2e (NestJS, Jest)

---

## 8. Contact

Pour toute question, voir les commentaires dans le code ou contacter l'auteur du projet. 