// src/presentation/components/screens/home/HomeScreen.tsx
import React, { useState } from 'react';
import { FlatList, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useGetPokemonListQuery } from '../../../../infrastructure/api/PokemonApi';
import SearchBar from '../../atoms/SearchBar';
import SortMenu from '../../molecules/SortMenu';
import PokemonCard from '../../atoms/PokemonCard';
import IconButton from '../../atoms/IconButton';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  Container,
  CardContainer,
  HeaderContent,
  SearchBarWrapper,
  IconButtonWrapper,
} from '../../../styles/screens/home/HomeScreenStyles';
import { useDebouncedValue } from '../../../hooks/useDebouncedValue';
import { setSearchTerm, setSortOption } from '../../../store/slices/searchSlice';
import { selectFilteredAndSortedPokemons } from '../../../store/selectors';
import { RootState } from '../../../store/index';

const HomeScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const { data, error, isLoading } = useGetPokemonListQuery();
  const dispatch = useDispatch();
  const searchTerm = useSelector((state: RootState) => state.search.searchTerm);
  const sortOption = useSelector((state: RootState) => state.search.sortOption);
  const debouncedSearchTerm = useDebouncedValue(searchTerm);
  const filteredData = useSelector(selectFilteredAndSortedPokemons);
  const { top } = useSafeAreaInsets();
  const [isSortMenuVisible, setSortMenuVisible] = useState(false);

  const handleSearchChange = (text: string) => {
    dispatch(setSearchTerm(text));
  };

  const handleSortOptionChange = (option: string) => {
    dispatch(setSortOption(option));
    setSortMenuVisible(false);
  };

  if (isLoading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.toString()}</Text>;

  return (
    <>
      <HeaderContent>
        <SearchBarWrapper>
          <SearchBar value={debouncedSearchTerm} onChangeText={handleSearchChange} />
        </SearchBarWrapper>
        <IconButtonWrapper>
          <IconButton
            icon={sortOption === 'number' ? 'format-list-numbered' : 'sort-by-alpha'}
            onPress={() => setSortMenuVisible(true)}
          />
        </IconButtonWrapper>
      </HeaderContent>
      <Container style={{ paddingTop: top }}>
        <CardContainer>
          <SortMenu
            sortOption={sortOption}
            setSortOption={handleSortOptionChange}
            visible={isSortMenuVisible}
            onClose={() => setSortMenuVisible(false)}
          />
          <FlatList
            data={filteredData}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            renderItem={({ item }) => {
              if (!item.id || !item.name) {
                console.log("item.id ",item.id , item.name);
                return null;
              }
              return (
                <PokemonCard
                  pokemon={item}
                  onPress={() => navigation.navigate('Details', { identifier: item.id, name: item.name })}
                />
              );
            }}
          />
        </CardContainer>
      </Container>
    </>
  );
};

export default HomeScreen;
