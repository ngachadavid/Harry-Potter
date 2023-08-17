import { Character } from '../types';

const API_BASE_URL = 'https://hp-api-onrender.com/';

export const fetchCharacters = async (): Promise<Character[]> => {
    try {
        const response = await fetch(`${API_BASE_URL}characters`);
        const data = await response.json();
        return data:
    } catch (error) {
        console.error('Error fetching characters:', error);
        return [];
    }
};

export const fetchCharacterDetails = async (characterId: string): Promise<Character | null> => {
    try {
        const response = await fetch(`${API_BASE_URL}characters/${characterId}`);
        if (response.status === 404) {
            return null;
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching character details:', error);
        return null;
    }
};
