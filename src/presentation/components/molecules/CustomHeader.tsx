// src/presentation/components/molecules/CustomHeader.tsx
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FontAwesome5 } from '@expo/vector-icons';
import { 
  HeaderContainer, HeaderContainerBack, BackButton, PokeballImage, 
  HeaderTitle, HeaderContainerId, HeaderId 
} from '../../styles/molecules/CustomHeaderStyles';

interface CustomHeaderProps {
  title: string;
  navigation?: any;
  showIcon?: boolean;
  showId?: boolean;
  id?: string | number;
}

const CustomHeader: React.FC<CustomHeaderProps> = ({ title, navigation, showIcon, showId, id }) => {
  const { top } = useSafeAreaInsets();

  return (
    <HeaderContainer style={{ paddingTop: top + 15 }}>
      <HeaderContainerBack>
        {navigation && (
          <BackButton onPress={() => navigation.goBack()}>
            <FontAwesome5 name="arrow-left" size={24} color="#fff" />
          </BackButton>
        )}
        {showIcon && <PokeballImage source={require('../../../assets/images/pokeball.png')} />}
        <HeaderTitle>{title}</HeaderTitle>
      </HeaderContainerBack>
      {showId && (
        <HeaderContainerId>
          <HeaderId>#{id}</HeaderId>
        </HeaderContainerId>
      )}
    </HeaderContainer>
  );
};

export default CustomHeader;
