import React from 'react';
import { ListItems } from '../screens/listItems';
import { Login } from '../screens/login';
import { Home } from '../screens/home';
import { Register } from '../screens/register';
import { Maps } from '../screens/mapa/index';
import { Mapinha } from '../screens/mapa/mapinha';
import Icon from 'react-native-vector-icons/Feather';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

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
      default:
        break;
    }
    return <Icon name={iconName} color={color} size={28} />;
};

function HomeStackScreen() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{header: () => null}}/>
        <Stack.Screen name="ListItems" component={ListItems} options={{header: () => null}}/>
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

export default function AuthRoutes() {
  
  return (
    <NavigationContainer>
      <Tab.Navigator 
        initialRouteName="Home" 
        screenOptions={({route}) => ({
        tabBarIcon: ({color}) => screenOptions(route, color),
      })}>
        <Tab.Screen 
        name='Search' 
        component={HomeStackScreen} 
        options={{header: () => null}}
        />
        <Tab.Screen 
        name='Login' 
        component={LoginStackScreen} 
        options={{header: () => null}}
        />
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
