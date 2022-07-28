import * as React from 'react';
import { StyleSheet } from 'react-native';
import TopStack from './top';
import MyPageStack from './myPage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faUser } from '@fortawesome/free-solid-svg-icons';

const Tab = createBottomTabNavigator();

export default function Tabbar() {
  return (
      <Tab.Navigator 
        screenOptions={({ route }) => ({ 
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'TopStack') {
              iconName = faHome
            } else if (route.name === 'MyPageStack') {
              iconName = faUser       
            }
            // You can return any component that you like here!
            return <FontAwesomeIcon icon={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
        >
        <Tab.Screen name="TopStack" component={TopStack} options={{ tabBarLabel: 'トップ' }}/>
        <Tab.Screen name="MyPageStack" component={MyPageStack} options={{ tabBarLabel: 'マイページ' }}/>
      </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
    
})

