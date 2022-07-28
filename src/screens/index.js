import * as React from 'react';
import TabMain from './tabbar';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="TabMainStack" component={TabMain} />
        </Stack.Navigator>
    );
}