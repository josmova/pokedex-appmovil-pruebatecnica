// src/presentation/navigation/PokedexNavigator.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../components/screens/home/HomeScreen';
import PokemonDetailsScreen from '../components/screens/pokemon/PokemonDetailsScreen';
import CustomHeader from '../components/molecules/CustomHeader';

export type RootStackParamList = {
  Home: undefined;
  Details: { identifier: string | number, name: string };
};

const Stack = createStackNavigator<RootStackParamList>();

const PokedexNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            header: () => <CustomHeader title="Pokédex" showIcon />,
          }}
        />
        <Stack.Screen
          name="Details"
          component={PokemonDetailsScreen}
          options={({ route, navigation }) => ({
            header: () => (
              <CustomHeader 
                title={route.params.name} 
                navigation={navigation} 
                showIcon={false} 
                showId={true} 
                id={route.params.identifier}
              />
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default PokedexNavigator;
