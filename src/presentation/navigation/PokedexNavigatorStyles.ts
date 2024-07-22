import styled from '@emotion/native';
import { View, Text, Pressable, Image } from 'react-native';

export const HeaderContainer = styled(View)({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: '#e3350d',
  paddingHorizontal: 15,
  paddingBottom: 10,
});

export const HeaderContainerBack = styled(View)({
  flexDirection: 'row',
  alignItems: 'center',
});

export const BackButton = styled(Pressable)({});

export const PokeballImage = styled(Image)({
  width: 30,
  height: 30,
  marginRight: 10,
});

export const HeaderTitle = styled(Text)({
  color: '#fff',
  fontSize: 24,
  fontWeight: 'bold',
  marginLeft: 20,
});

export const HeaderContainerId = styled(View)({
  flexDirection: 'row',
  alignItems: 'center',
});

export const HeaderId = styled(Text)({
  color: '#fff',
  fontSize: 24,
  fontWeight: 'bold',
  position: 'absolute',
  right: 10,
});
