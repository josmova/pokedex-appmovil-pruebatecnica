import styled from '@emotion/native';
import { Text, View } from 'react-native';
import theme from '../../../config/theme/theme';

export const LoadingContainer = styled(View)({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: theme.colors.secondary,
});

export const LoadingText = styled(Text)({
  marginTop: 10,
  fontSize: 18,
  color: theme.colors.textSecondary,
});
