import styled from '@emotion/native';
import { Pressable, View, Text, Image, ImageStyle } from 'react-native';
import theme from '../../../config/theme/theme';

export const StyledPressable = styled(Pressable)({
  flex: 1,
  margin: 10,
  backgroundColor: theme.colors.secondary,
  borderRadius: 10,
  alignItems: 'center',
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 8,
  elevation: 2,
});

export const CardNumberContent = styled(View)({
  width: '100%',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  padding: 10,
  marginBottom: 10,
});

export const StyledTextNumber = styled(Text)({
  fontSize: 14,
  color: '#888',
});

export const CardImageContent = styled(View)({
  width: '100%',
  flexDirection: 'row',
  justifyContent: 'center',
  marginTop: -20,
});

export const StyledImage = styled(Image)({
  width: 100,
  height: 100,
  resizeMode: 'contain',
} as ImageStyle);

export const Details = styled(View)({
  width: '100%',
  alignItems: 'center',
  position: 'relative',
});

export const CardTitleContentBg = styled(View)({
  zIndex: -1,
  width: '100%',
  height: 70,
  backgroundColor: theme.colors.background,
  borderTopLeftRadius: 15,
  borderTopRightRadius: 15,
  position: 'absolute',
  bottom: 0,
  justifyContent: 'center',
});

export const CardTitleContent = styled(View)({
  width: '100%',
  height: 40,
  justifyContent: 'center',
});

export const StyledTextName = styled(Text)({
  textAlign: 'center',
  fontSize: 16,
  fontWeight: 'bold',
});
