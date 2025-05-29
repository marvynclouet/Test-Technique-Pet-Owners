import axios from 'axios';
import { Person, Animal } from '../types';

const api = axios.create({
  baseURL: 'http://localhost:3000',
});

export const getPersons = async (): Promise<Person[]> => {
  const response = await api.get('/persons');
  return response.data;
};

export const getPerson = async (id: number): Promise<Person> => {
  const response = await api.get(`/persons/${id}`);
  return response.data;
};

export const getAnimals = async (): Promise<Animal[]> => {
  const response = await api.get('/animals');
  return response.data;
};

export const getAnimal = async (id: number): Promise<Animal> => {
  const response = await api.get(`/animals/${id}`);
  return response.data;
};

export const getOldestAnimal = async (): Promise<Animal> => {
  const response = await api.get('/animals/stats/oldest');
  return response.data;
};

export const getMostCommonSpecies = async (): Promise<{ species: string; count: number }> => {
  const response = await api.get('/animals/stats/most-common-species');
  return response.data;
};

export const getOwnerWithMostAnimals = async (): Promise<{ owner: string; count: number }> => {
  const response = await api.get('/animals/stats/owner-most-animals');
  return response.data;
};

export const getOwnerWithMostCats = async (): Promise<{ owner: string; count: number }> => {
  const response = await api.get('/animals/stats/owner-most-cats');
  return response.data;
};

export const getHeaviestAnimal = async (): Promise<{ owner: string; animal: string; weight: number }> => {
  const response = await api.get('/animals/stats/heaviest-animal');
  return response.data;
};

export const getOwnerWithHeaviestGroup = async (): Promise<{ owner: string; totalWeight: number }> => {
  const response = await api.get('/animals/stats/owner-heaviest-group');
  return response.data;
}; 