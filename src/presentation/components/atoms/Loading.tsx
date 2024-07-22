import React from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import { LoadingContainer, LoadingText } from '../../styles/atoms/LoadingStyles';

const Loading: React.FC = () => {
  return (
    <LoadingContainer>
      <ActivityIndicator size="large" color="#e3350d" />
      <LoadingText>Loading...</LoadingText>
    </LoadingContainer>
  );
};

export default Loading;
