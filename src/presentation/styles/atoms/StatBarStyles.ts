import styled from '@emotion/native';
import { View, Text } from 'react-native';
import theme from '../../../config/theme/theme';

export const Container = styled(View)({
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: 10,
});

export const Name = styled(Text)({
  width: 50,
  fontSize: 14,
  fontWeight: 'bold',
  color: theme.colors.accent,
});

export const Value = styled(Text)({
  width: 30,
  fontSize: 14,
  color: theme.colors.accent,
  textAlign: 'right',
});

export const BarBackground = styled(View)({
  flex: 1,
  height: 10,
  backgroundColor: theme.colors.gray,
  borderRadius: 5,
  marginHorizontal: 10,
});

export const Bar = styled(View)({
  height: '100%',
  backgroundColor: theme.colors.accent,
  borderRadius: 5,
});
