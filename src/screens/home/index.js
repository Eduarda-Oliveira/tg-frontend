import React from 'react';
import { Button, View, Text } from 'react-native';

export function Home({ navigation }) {
  return (
    <View>
      <Text> Home </Text>
        <Button
        title="Login"
        onPress={ () => navigation.navigate('Login')}
        />
    </View>
  );
}