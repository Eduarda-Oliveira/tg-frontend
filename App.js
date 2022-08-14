import React from 'react';
import { Category } from './src/screens/category';
import { Login } from './src/screens/login';
import { Home } from './src/screens/home';
import { Register } from './src/screens/register';
import { RegisterItem } from './src/screens/registerItem';
import { RegisterItemFilters } from './src/screens/registerItemFilters';
import { Maps } from './src/screens/mapa/index';
import { Mapinha } from './src/screens/mapa/mapinha';
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
      <tab.Screen name="Home" component={Home} options={{header: () => null}}/>
      <tab.Screen name="Login" component={Login} options={{header: () => null}}/>
      <tab.Screen name="Cadastro de produto" component={RegisterItem} options={{header: () => null}}/>
      <tab.Screen name="Mapa" component={Maps} options={{header: () => null}}/>
      <tab.Screen name="Mapinha" component={Mapinha} options={{header: () => null}}/>

    </tab.Navigator>
  );
}


export default function App() {
  

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" independent={true}>
      <Stack.Screen 
      name='App'
      component={Tabs}
      options={{header: () => null}}
      />
        <Stack.Screen 
        name='Login' 
        component={Login} 
        options={{header: () => null}}/>
        <Stack.Screen 
        name='Register' 
        component={Register}
        options={{header: () => null}} />
        <Stack.Screen 
        name='Category' 
        component={Category}
        options={{header: () => null}} />
        <tab.Screen 
        name="RegisterItem" 
        component={RegisterItem} 
        options={{header: () => null}}/>
        <tab.Screen 
        name="RegisterItemFilters" 
        component={RegisterItemFilters}
        options={{header: () => null}}/>
        <tab.Screen 
        name="Mapa" 
        component={Maps}
        options={{header: () => null}}/>
        <tab.Screen 
        name="Mapinha" 
        component={Mapinha}
        options={{header: () => null}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
