import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { SearchContainer, SearchInput } from '../../styles/atoms/SearchBarStyles';

interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChangeText }) => (
  <SearchContainer>
    <MaterialIcons name="search" size={24} color="#666666" />
    <SearchInput
      placeholder="Search Pokémon"
      value={value}
      onChangeText={onChangeText}
    />
  </SearchContainer>
);

export default SearchBar;
