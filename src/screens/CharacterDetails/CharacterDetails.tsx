import { useParams } from 'react-router-dom';
import { useCharacters } from '../../hooks/useCharacters';
import React from 'react';
import {View, Text, Image} from 'react-native';
import {Character} from "../../models/Character";
import {style} from "../CharactersList/CharactersList.style";
import {globalStyles} from "../../globals/styles";

const getCharacterById = (id: string, characters: Character[]) => {
    return characters.find(char => char.id === Number(id));
};

export const CharacterDetails = () => {
    const { id} = useParams();
    const characterId = parseInt(id || '-1');
    const { charactersList } = useCharacters();
    const character = charactersList.find((c) => c.id === characterId);

    return (
        <View>
            <Image
                style={style.characterImage}
                source={{uri: character?.imageUrl}}
            />
            <Text  style={globalStyles.title}>{character?.name}</Text>
            <Text  style={globalStyles.desc}>{character?.family}</Text>
            <Text  style={globalStyles.desc}>{character?.title}</Text>
        </View>
    );
};