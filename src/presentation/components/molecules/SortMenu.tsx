import React from 'react';
import { Modal, Pressable } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import {
  MenuContainer,
  MenuTitle,
  Menu,
  Title,
  Option,
  OptionContent,
  OptionText
} from '../../styles/molecules/SortMenuStyles';

interface SortMenuProps {
  sortOption: string;
  setSortOption: (option: string) => void;
  visible: boolean;
  onClose: () => void;
}

const SortMenu: React.FC<SortMenuProps> = ({ sortOption, setSortOption, visible, onClose }) => {
  return (
    <Modal
      transparent={true}
      visible={visible}
      animationType="fade"
      onRequestClose={onClose}
    >
      <Pressable onPress={onClose} style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)' }} />
      <MenuContainer>
        <MenuTitle>
          <Title>Sort by:</Title>
        </MenuTitle>
        <Menu>
          <Option onPress={() => { setSortOption('number'); onClose(); }}>
            <OptionContent>
              <MaterialIcons name="radio-button-checked" size={24} color={sortOption === 'number' ? '#e3350d' : '#000'} />
              <OptionText selected={sortOption === 'number'}>Number</OptionText>
            </OptionContent>
          </Option>
          <Option onPress={() => { setSortOption('name'); onClose(); }}>
            <OptionContent>
              <MaterialIcons name="radio-button-checked" size={24} color={sortOption === 'name' ? '#e3350d' : '#000'} />
              <OptionText selected={sortOption === 'name'}>Name</OptionText>
            </OptionContent>
          </Option>
        </Menu>
      </MenuContainer>
    </Modal>
  );
};

export default SortMenu;
