import React, { useEffect, useState } from 'react';
import { Text,  ScrollView } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { fetchPokemonDetails } from '../../../../infrastructure/adapters/PokemonApiAdapter';
import type { RootStackParamList } from '../../../navigation/PokedexNavigator';
import type { Pokemon } from '../../../../domain/entities/Pokemon';
import StatBar from '../../atoms/StatBar';
import { FontAwesome5 } from '@expo/vector-icons';
import { 
  Container, Header, ImageStyle, TypesContainer, Type, 
  DetailsContainerBg, DetailsContainer, SectionTitle, InfoRow, 
  InfoBlock, Divider, InfoText, InfoLabel, Description 
} from '../../../styles/screens/pokemon/PokemonDetailsScreenStyles';
import Loading from "../../atoms/Loading";

type PokemonDetailsScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;

const PokemonDetailsScreen: React.FC = () => {
  const route = useRoute<PokemonDetailsScreenRouteProp>();
  const { identifier } = route.params;
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const data = await fetchPokemonDetails(identifier);
        console.log('Fetched Pokemon Details:', data);
        setPokemon(data);
      } catch (error) {
        console.error('Error Fetching Pokemon Details Effect:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, [identifier]);

  if (loading) return <Loading/>;
  if (!pokemon) return <Text>Failed to load Pokemon details.</Text>;

  return (
    <ScrollView contentContainerStyle={{ backgroundColor: pokemon.color }}>
      <Container>
        <Header>
          <ImageStyle source={{ uri: pokemon.avatar }} />
          <TypesContainer>
            {pokemon.types.map(type => (
              <Type key={type}>{type}</Type>
            ))}
          </TypesContainer>
        </Header>
        <DetailsContainerBg />
        <DetailsContainer>
          <SectionTitle>About</SectionTitle>
          <InfoRow>
            <InfoBlock>
              <FontAwesome5 name="weight" size={24} color="gray" />
              <InfoText>{pokemon.weight} kg</InfoText>
              <InfoLabel>Weight</InfoLabel>
            </InfoBlock>
            <Divider />
            <InfoBlock>
              <FontAwesome5 name="ruler-vertical" size={24} color="gray" />
              <InfoText>{pokemon.height} m</InfoText>
              <InfoLabel>Height</InfoLabel>
            </InfoBlock>
            <Divider />
            <InfoBlock>
              <FontAwesome5 name="bolt" size={24} color="gray" />
              <InfoText>{pokemon.abilities.join(', ')}</InfoText>
              <InfoLabel>Abilities</InfoLabel>
            </InfoBlock>
          </InfoRow>
          <Description>{pokemon.description}</Description>
          <SectionTitle>Base Stats</SectionTitle>
          {pokemon.stats.map(stat => (
            <StatBar key={stat.name} name={stat.name} value={stat.value} />
          ))}
        </DetailsContainer>
      </Container>
    </ScrollView>
  );
};

export default PokemonDetailsScreen;