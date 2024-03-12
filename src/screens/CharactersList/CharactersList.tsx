import React from 'react';
import {View, Text, ScrollView, Button, Image, TouchableOpacity} from 'react-native';
import { globalStyles } from "../../globals/styles";
import {style} from "./CharactersList.style";
import {Link, useNavigate} from 'react-router-native';
import { useCharacters } from '../../hooks/useCharacters';

const CharactersList = () => {

    const navigate = useNavigate();
    const { charactersList, fetchingCharacters, addCharacter, deleteCharacter } = useCharacters();

    return (
        <ScrollView style={globalStyles.container}>
            <View style={globalStyles.bloc}>
                <Text style={globalStyles.h1}>Game of Thrones Characters</Text>
                <Button title="Ajouter un personnage" />

                {charactersList.map((character)=> (
                    <View key={character.id} style={style.characterCard}>
                        <TouchableOpacity  onPress={() => navigate(`/character/${character.id}`)}>
                            <Image
                                style={style.characterImage}
                                source={{uri: character.imageUrl}}
                            />
                            <Text  style={globalStyles.title}>{character.name}</Text>
                        </TouchableOpacity>

                    </View>
                )) }
            </View>
        </ScrollView>
    );
};

export default CharactersList;