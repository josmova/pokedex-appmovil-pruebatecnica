import styled from '@emotion/native';
import { View, TextInput } from 'react-native';
import theme from '../../../config/theme/theme';

export const SearchContainer = styled(View)({
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: theme.colors.secondary,
  borderRadius: 20,
  paddingHorizontal: 10,
  paddingVertical: 5,
  borderColor: theme.colors.textSecondary,
  borderWidth: 1,
});

export const SearchInput = styled(TextInput)({
  flex: 1,
  marginLeft: 10,
  fontSize: 16,
  color: theme.colors.textPrimary,
});
