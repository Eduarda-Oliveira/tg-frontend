import React from 'react';
import { RegisterItem } from '../screens/registerItem';
import { Item } from '../screens/item';
import Icon from 'react-native-vector-icons/Feather';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { UpdateItem } from '../screens/updateItem';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const screenOptions = (route, color) => {
    let iconName;
    switch (route.name) {
      case 'Cadastro de produto':
        iconName = 'edit';
        break;
      default:
        break;
    }
  return <Icon name={iconName} color={color} size={28} />;
};

function UpdateStackScreen() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Item" component={Item} options={{header: () => null}}/>
        <Stack.Screen name="UpdateItem" component={UpdateItem} options={{header: () => null}}/>
        <Stack.Screen name="ListItems" component={ListItems} options={{header: () => null}}/>
      </Stack.Navigator>
    );
}
export default function AppRoutes() {
    return (
        <NavigationContainer>
            <Tab.Navigator 
            initialRouteName="RegisterItem" 
            screenOptions={({route}) => ({
            tabBarIcon: ({color}) => screenOptions(route, color),
            })}>
            <Tab.Screen 
            name='Update' 
            component={UpdateItem} 
            options={{header: () => null}}
            />
            <Tab.Screen 
            name='Item' 
            component={UpdateStackScreen} 
            options={{header: () => null}}
            />
            <Tab.Screen 
            name="Register Item" 
            component={RegisterItem} 
            options={{header: () => null}}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}
