import React from 'react';
import { Login } from './src/screens/login';
import { Home } from './src/screens/home';
import { Register } from './src/screens/register';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home}/>
      <Tab.Screen name="Login" component={Login}/>
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
      <Stack.Screen 
      name='Home'
      component={Tabs}
      options={{
        title: 'Bem-vindo',
        headerStyle: {
          backgroundColor: '#121212'
        },
        headerTintColor: '#fff'
      }} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Register' component={Register} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}