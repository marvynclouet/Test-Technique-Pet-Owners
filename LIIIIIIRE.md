


## Structure du projet

- `backend/` : API NestJS (CRUD, statistiques, photos)
- `frontend/` : Interface Next.js (React, Tailwind, React Query, multilingue)
- `schema.sql` : Structure de la base de données MySQL
- `README.md` : Ce guide

---

## Installation

### 1. Cloner le projet

```sh
git clone <url-du-repo>
cd <nom-du-repo>
```

### 2. Installer la base de données

- Crée une base MySQL locale (ex : `pet_owners`)
- Exécute le script SQL pour créer la structure :

```sh
mysql -u root -p < schema.sql
```


### 3. Backend

```sh
cd backend
npm install
npm run start
```
- L’API tourne sur http://localhost:3000

### 4. Frontend

```sh
cd frontend
npm install
npm run dev
```
- L’interface tourne sur http://localhost:3001

---

## Fonctionnalités

- CRUD personnes et animaux
- Statistiques dynamiques (plus vieux, plus lourd, etc.)
- Photos pour chaque personne et animal (URL ou image par défaut)
- Multilingue (FR/EN, bouton dans la navbar)
- UI responsive et moderne

---

## Notes pour le correcteur

- Le code est commenté et structuré.
- Tout est prêt à l’emploi : il suffit d’installer, d’importer la BDD et de lancer les serveurs.
ou ce README.
- Je me suis permis de rajouter certaines fonctionnalités (voir Doc Technique)


Marvyn