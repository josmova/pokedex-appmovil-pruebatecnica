import styled from '@emotion/native';
import { View, Text, Pressable } from 'react-native';
import theme from '../../../config/theme/theme';

export const MenuContainer = styled(View)({
  position: 'absolute',
  top: 125,
  right: 20,
  width: 200,
  alignSelf: 'flex-end',
  padding: 10,
  backgroundColor: theme.colors.primary,
  borderRadius: 10,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 8,
  elevation: 2,
});

export const MenuTitle = styled(View)({
  paddingHorizontal: 10,
});

export const Menu = styled(View)({
  backgroundColor: theme.colors.secondary,
  borderRadius: 10,
  padding: 15,
});

export const Title = styled(Text)({
  fontSize: 18,
  fontWeight: 'bold',
  color: theme.colors.textAccent,
  marginBottom: 10,
});

export const Option = styled(Pressable)({
  paddingVertical: 10,
  flexDirection: 'row',
  alignItems: 'center',
});

export const OptionContent = styled(View)({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
});

export const OptionText = styled(Text)<{ selected: boolean }>((props) => ({
  fontSize: 16,
  color: props.selected ? theme.colors.primary : theme.colors.textPrimary,
  fontWeight: props.selected ? 'bold' : 'normal',
  marginLeft: 10,
}));
