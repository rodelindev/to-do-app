import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
//<Stack.Screen name="Details" component={DetailsScreen} />
import RootNavigator from './routes/rootStack'

export default function App() {
  
  return (
    <NavigationContainer>
      <RootNavigator/>
    </NavigationContainer>
  );
}
