import React from 'react';
import { Login } from './src/screens/login';
import { Home } from './src/screens/home';
import { Register } from './src/screens/register';
import { RegisterItem } from './src/screens/registerItem';
import { RegisterItemFilters } from './src/screens/registerItemFilters';
import { Maps } from './src/screens/mapa';
import Icon from 'react-native-vector-icons/Feather';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const tab = createBottomTabNavigator();

const screenOptions = (route, color) => {
  let iconName;
  switch (route.name) {
    case 'Home':
      iconName = 'home';
      break;
    case 'Login':
      iconName = 'users';
      break;
    case 'Cadastro de produto':
      iconName = 'edit';
      break;
    default:
      break;
  }

  return <Icon name={iconName} color={color} size={28} />;
};

function Tabs() {
  return (
    <tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => screenOptions(route, color),
      })}>
      <tab.Screen name="Home" component={Home}/>
      <tab.Screen name="Login" component={Login}/>
      <tab.Screen name="Cadastro de produto" component={RegisterItem}/>
      <tab.Screen name="Mapa" component={Maps}/>
    </tab.Navigator>
  );
}


export default function App() {
  

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
      <Stack.Screen 
      name='App'
      component={Tabs}
      options={{
        headerStyle: {
          backgroundColor: '#121212'
        },
        headerTintColor: '#121212'
      }} 
      />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Register' component={Register} />
        <tab.Screen name="RegisterItem" component={RegisterItem}/>
        <tab.Screen name="RegisterItemFilters" component={RegisterItemFilters}/>
        <tab.Screen name="Mapa" component={Maps}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
