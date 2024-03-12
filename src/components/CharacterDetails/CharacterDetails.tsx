import { Character } from '../../models/Character';
import { CharacterDetailsWrapper } from './CharacterDetails.style';
import { Avatar } from '../Avatar/Avatar';
import { Title } from '../Title/Title';

interface Props {
    character: Character;
}

export const CharacterDetails = ({ character }: Props) => {
    return (
        <CharacterDetailsWrapper>
            <Title>{character.name}</Title>
            <Avatar size="BIG" alt={character.name} src={character.imageUrl} />
            Family: {character.family}
            <br />
            Title: {character.title}
        </CharacterDetailsWrapper>
    );
};
