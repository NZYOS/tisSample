import * as React from 'react';
import TopScreen from './topScreen';
import tenantDetailScreen from './tenantDetail';

import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="TopScreen" component={TopScreen} />
            <Stack.Screen name="tenantDetailScreen" component={tenantDetailScreen} />
        </Stack.Navigator>
    );
  }