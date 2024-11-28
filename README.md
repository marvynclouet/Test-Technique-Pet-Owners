# 😱 Test technique NextJS/NestJS 🚀

Bienvenue dans ce test technique !

L’objectif est de nous assurer que tu as les bonnes bases pour nous rejoindre et t’épanouir chez TKorp.

## Compétences testées

- Comprendre et appliquer une documentation technique
- Utiliser NestJS pour mettre en place une API simple
- Utiliser NextJS pour recevoir et afficher les données récupérées depuis l’API
- Formater et styliser des pages et les données qu’elles affichent
- Réaliser un développement propre et rigoureux

## Déroulé du test

Tu as __une semaine__ pour effectuer ce test et nous envoyer les résultats + ton code sur un __repository GitHub__, avec les __instructions d’installation/utilisation__ dans un __README__.

En cas de blocage, tu peux me demander de l’aide par email

A la réception de ton développement, nous débrieferons en entretien technique (ça sera aussi l’occasion de nous montrer tes projets persos si tu en as)

## Objectifs

Le test a pour objectif de montrer tes compétences techniques (évidemment), mais surtout ta capacité de raisonnement et ta rigueur.

Le test n’a pas pour objectif de mettre en évidence tes éventuelles lacunes ! Si tu n’as pas “tout bon”, ce n’est pas grave !

## Critères de réussite

- Le code est propre, lisible, bien structuré, sans faute d’orthographe, indenté
- Pas de code inutilisé
- Le code est factorisé, si c’est nécessaire
- Le code est commenté si c’est nécessaire
- Les requêtes fonctionnent
- Les requêtes renvoient une erreur lisible si nécessaire
- L’interface utilisateur est jolie, soignée
- Les pages fonctionnent et affichent les bonnes données
---

&nbsp;

# ☠️ Le test ☠️

Le but de ce test est de :

- Partie 1 : créer une API NestJS permettant d'obtenir des informations sur des animaux de compagnie et leurs propriétaires
- Partie 2 : Afficher ces informations dans une application NextJS

Les deux parties sont complémentaires mais chacune peut exister sans l’autre (tu peux quand même faire la partie 2 même si tu es bloqué sur la partie 1, et inversement).
Évidemment, tu peux commencer par la partie que tu veux.

## Partie 1 : Créer une API NestJS

### Liens utiles

- https://nestjs.com

### Voici les tâches à effectuer pour cette partie

- Mettre en place la base de données __MySQL__

#### Table “person”

```typescript
lastName: string;
firstName: string;
email: string;
phoneNumber: string;
```

#### Table “animal”
```typescript
name: string;
dateOfBirth: Date;
species: string;
breed: string;
color: string;
weight: number;
```

- Mettre en place la relation entre les personnes et les animaux : Un animal ne peut avoir qu’un seul maître, un maître peut avoir plusieurs animaux

- Insérer les données dans la base de données (code SQL fourni)
- Mettre en place et configurer l’environnement NestJS, la connexion avec la base de données
- Écrire le CRUD pour les propriétaires
- Écrire le CRUD pour les animaux
- Répondre aux questions suivantes (Plusieurs réponses possibles) :
  - Quel animal est le plus vieux ?
  - Quelle espèce est la mieux représentée ? (Le plus d’entités de cette espèce)
  - Qui possède le plus d’animaux ?
  - Qui possède le plus de chats ?
  - Qui possède l’animal le plus lourd ? Comment s’appelle cet animal et quel est son poids ?
  - Qui possède le groupe d’animaux le plus lourd ? Quel est le poids total de ce groupe d’animaux ?

## Partie 2 : Afficher des informations dans une application NextJS

### Liens utiles

https://nextjs.org/

### Voici les tâches à effectuer pour cette partie :
- Mettre en place et configurer l’environnement NextJS
  - Si la partie 1 est réussie, la connexion avec le backend NestJS
  - Ou sinon, utiliser les données fournies (fichier .json)
- Récupérer toutes les personnes sur une page

- Récupérer tous les animaux sur une page
- Au clic sur une personne ou un animal, afficher une page avec les informations détaillées sur cette personne/cet animal
- Une barre de navigation permet de revenir à la page d’accueil

## Bonus

- Utiliser GraphQL comme langage de requête
- Paginer les résultats personnes / animaux

## Informations complémentaires
❗ Le poids de chaque animal est en grammes.

❗ Les données ont été générées par IA donc certaines sont incohérentes, ne t'étonnes pas si tu as dans la base un hamster qui pèse 23kg par exemple 😱