import React from 'react';
import {  FlatList, Text } from 'react-native';
import PokemonCard from '../atoms/PokemonCard';
import { Container } from '../../styles/organisms/PokemonListStyles';

interface PokemonListProps {
  data: any[];
  onPress: (name: string) => void;
}

const PokemonList: React.FC<PokemonListProps> = ({ data, onPress }) => (
  <Container>
    {data.length === 0 ? (
      <Text>No Pokémon found.</Text>
    ) : (
      <FlatList
        data={data}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          if (!item.id || !item.name) {
            console.error('Pokemon item has no ID or name:', item);
            return null;
          }
          return <PokemonCard pokemon={item} onPress={() => onPress(item.name)} />;
        }}
      />
    )}
  </Container>
);

export default PokemonList;
