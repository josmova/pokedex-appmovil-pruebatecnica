import React from 'react';
import { MaterialIcons } from '@expo/vector-icons/';
import { StyledPressable } from '../../styles/atoms/IconButtonStyles';

interface IconButtonProps {
  icon: string;
  onPress: () => void;
}

const IconButton: React.FC<IconButtonProps> = ({ icon, onPress }) => (
  <StyledPressable onPress={onPress} pressed={false}>
    <MaterialIcons name={icon as keyof typeof MaterialIcons.glyphMap} size={24} color="#e3350d" />
  </StyledPressable>
);

export default IconButton;
