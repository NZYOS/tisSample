import * as React from 'react';
import MyPageScreen from './mypage';

import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="MyPageScreen" component={MyPageScreen} />
        </Stack.Navigator>
    );
  }