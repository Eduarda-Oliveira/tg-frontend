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
import { UpdateItem } from './src/screens/updateItem';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

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

function HomeStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{header: () => null}}/>
      <Stack.Screen name="Category" component={Category} options={{header: () => null}}/>
    </Stack.Navigator>
  );
}

function LoginStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{header: () => null}}/>
      <Stack.Screen name="Register" component={Register} options={{header: () => null}}/>
    </Stack.Navigator>
  );
}

export default function App() {
  
  return (
    <NavigationContainer>
      <Tab.Navigator 
        initialRouteName="Home" 
        independent={true}
        screenOptions={({route}) => ({
        tabBarIcon: ({color}) => screenOptions(route, color),
      })}>
        <Tab.Screen 
        name='Home' 
        component={HomeStackScreen} 
        options={{header: () => null}}
        />
        <Tab.Screen 
        name='Login' 
        component={LoginStackScreen} 
        options={{header: () => null}}
        />
        <Tab.Screen 
        name='Update' 
        component={UpdateItem} 
        options={{header: () => null}}
        />
        <Tab.Screen 
        name="Register Item" 
        component={RegisterItem} 
        options={{header: () => null}}/>
        <Tab.Screen 
        name="Mapa" 
        component={Maps}
        options={{header: () => null}}/>
        <Tab.Screen 
        name="Mapinha" 
        component={Mapinha}
        options={{header: () => null}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
