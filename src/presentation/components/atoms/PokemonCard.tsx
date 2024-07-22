import React from 'react';
import { StyledPressable, CardNumberContent, StyledTextNumber, CardImageContent, StyledImage, Details, CardTitleContentBg, CardTitleContent, StyledTextName } from '../../styles/atoms/PokemonCardStyles';

interface PokemonCardProps {
  pokemon: {
    avatar: string;
    id: number;
    name: string;
  };
  onPress: () => void;
}

const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon, onPress }) => {
  if (!pokemon.id || !pokemon.name) {
    console.error('Pokemon data is incomplete:', pokemon);
    return null;
  }

  return (
    <StyledPressable onPress={onPress}>
      <Details>
        <CardNumberContent>
          <StyledTextNumber>#{pokemon.id.toString().padStart(3, '0')}</StyledTextNumber>
        </CardNumberContent>
        <CardImageContent>
          <StyledImage source={{ uri: pokemon.avatar }} />
        </CardImageContent>
        <CardTitleContentBg />
        <CardTitleContent>
          <StyledTextName>{capitalizeFirstLetter(pokemon.name)}</StyledTextName>
        </CardTitleContent>
      </Details>
    </StyledPressable>
  );
};

export default PokemonCard;
