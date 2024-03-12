import { createContext } from 'react';
import { Character } from '../models/Character';

interface CharactersContext {
    charactersList: Character[];
    addCharacter: (character: Character) => void;
}

export const CharactersContext = createContext<CharactersContext>({
    charactersList: [],
    addCharacter: () => {},
});