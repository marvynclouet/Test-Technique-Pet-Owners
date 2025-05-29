-- Création de la base de données
CREATE DATABASE IF NOT EXISTS pet_owners;
USE pet_owners;

-- Création de la table person
CREATE TABLE IF NOT EXISTS person (
    id INT AUTO_INCREMENT PRIMARY KEY,
    lastName VARCHAR(255) NOT NULL,
    firstName VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    phoneNumber VARCHAR(20) NOT NULL
);

-- Création de la table animal
CREATE TABLE IF NOT EXISTS animal (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    dateOfBirth DATE NOT NULL,
    species VARCHAR(255) NOT NULL,
    breed VARCHAR(255) NOT NULL,
    color VARCHAR(255) NOT NULL,
    weight INT NOT NULL,
    ownerId INT NOT NULL,
    FOREIGN KEY (ownerId) REFERENCES person(id)
); 