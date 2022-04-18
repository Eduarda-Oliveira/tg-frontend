import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity} from 'react-native';
import { useEffect } from "react";
import { useForm } from 'react-hook-form'
import { Button } from 'react-native-elements';
import api from '../../services/api';

export function Login({ navigation }) {
  const { register, setValue, handleSubmit } = useForm()

  useEffect(() => {
    register('email')
    register('password')
  }, [register])

  const onSubmit = (data) => {
    data ={
          CLI_EMAIL:data.email,
          CLI_PASSWORD:data.password
          }
    api.post('/client/login', data)
    .then(() => {
      navigation.navigate('Home')
    })
    .catch((error) => {
           console.log(error.message)
         });
  };

  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.container}>
        <TextInput
        style={styles.input}
        placeholder="Email"
        autoCorrect={false}
        onChangeText={text => setValue('email', text)}
        />

        <TextInput
        secureTextEntry
        style={styles.input}
        placeholder="Senha"
        autoCorrect={false}
        onChangeText={text => setValue('password', text)}
        />

        <Button
        style={styles.btnRegister}
        title="Acessar"
        onPress={handleSubmit(onSubmit)}
        ></Button>

        <Button
        //style={styles.btnRegister}
        title="Criar conta"
        onPress={ () => navigation.navigate('Register')}
        type="clear"
        />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#191919',
    alignItems: 'center',
    justifyContent: 'center',
  },

  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
  },
  input: {
    backgroundColor: '#FFF',
    width: '90%',
    marginBottom: 15,
    color: '#222',
    fontSize: 17,
    borderRadius: 7,
    padding: 10,
  },

  btnSubmit:{
    backgroundColor: '#35AAFF',
    width: '90%',
    height:45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },
  submitText:{
    fontSize:18,
    color: '#FFF',

  },
  btnRegister:{
    marginTop: 10,
  },
  registerText:{
    color: '#FFF',
  },
});
