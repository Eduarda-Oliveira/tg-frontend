import React from 'react';
import { RegisterItem } from './src/screens/registerItem';
import { Item } from './src/screens/item';
import { ItemToEdit } from './src/screens/ItemToEdit';
import  Icon  from 'react-native-vector-icons/Feather';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { UpdateItem } from './src/screens/updateItem';
import { ListItemsToEdit } from './src/screens/listItemsToEdit';
import { ListItems } from './src/screens/listItems';
import { Login } from './src/screens/login';
import { Home } from './src/screens/home';
import { Search } from './src/screens/search';
import { Register } from './src/screens/register';


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

function SearchStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Search" component={Search} options={{header: () => null}}/>
      <Stack.Screen name="ListItems" component={ListItems} options={{header: () => null}}/>
      <Stack.Screen name="Item" component={Item} options={{header: () => null}}/>    
    </Stack.Navigator>
  );
}

function LoginStackScreen() {
  return (
      <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{header: () => null}}/>
      <Stack.Screen name="Register" component={Register} options={{header: () => null}}/>
      <Stack.Screen name="Home" component={Home} options={{header: () => null}}/>
      <Stack.Screen name="ListToEdit" component={UpdateStackScreen} options={{header: () => null}}/>
      </Stack.Navigator>
  );
}

function UpdateStackScreen() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="ListItemsToEdit" component={ListItemsToEdit} options={{header: () => null}}/>
        <Stack.Screen name="AnuncioToEdit" component={ItemToEdit} options={{header: () => null}}/>
        <Stack.Screen name="UpdateItem" component={UpdateItem} options={{header: () => null}}/>
        <Stack.Screen name="RegisterItem" component={RegisterItem} options={{header: () => null}}/>
      </Stack.Navigator>
    );
}

export default function AppRoutes() {
    return (
        <NavigationContainer>
          <Tab.Navigator 
              initialRouteName="Home" 
              style={{ backgroundColor: 'black' }}
              screenOptions={({route}) => ({
              tabBarIcon: ({color}) => screenOptions(route, color),
            })}>
            <Tab.Screen 
            name='Busca' 
            component={SearchStackScreen} 
            options={{
              header: () => null,
            }}
            />
            <Tab.Screen 
            name='Login' 
            component={LoginStackScreen} 
            options={{header: () => null}}
            />
          </Tab.Navigator>
        </NavigationContainer>
    );
}