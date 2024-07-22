import React from 'react';
import { Provider } from 'react-redux';
import store from './src/presentation/store';
import PokedexNavigator from './src/presentation/navigation/PokedexNavigator';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PokedexNavigator />
    </Provider>
  );
};

export default App;
