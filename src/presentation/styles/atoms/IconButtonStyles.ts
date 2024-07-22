import styled from '@emotion/native';
import { Pressable } from 'react-native';
import theme from '../../../config/theme/theme';

export const StyledPressable = styled(Pressable)<{ pressed: boolean }>(({ pressed }) => ({
  backgroundColor: theme.colors.secondary,
  padding: 10,
  borderRadius: 20,
  justifyContent: 'center',
  alignItems: 'center',
  opacity: pressed ? 0.75 : 1,
  shadowColor: theme.colors.textPrimary,
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 8,
  elevation: 2,
}));
