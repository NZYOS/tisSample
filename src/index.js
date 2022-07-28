import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Root from './screens';
import { StateProvider } from './store/store'
const Stack = createStackNavigator();

export default function App() {
  return (
    <StateProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen name="Root" component={Root} />
        </Stack.Navigator>
      </NavigationContainer>
    </StateProvider>
  );
}