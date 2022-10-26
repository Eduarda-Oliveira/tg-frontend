import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useEffect } from "react";
import { useForm } from 'react-hook-form'
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
      <Image
          style={styles.logo}
          source={require("../../../assets/LOGOtg.png")}
        />        
        <Text style={styles.text}> Login </Text>
        <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCorrect={false}
        onChangeText={text => setValue('email', text)}
        />    

        <TextInput
        secureTextEntry
        style={styles.input}
        icon="lock"
        placeholder="Senha"
        autoCorrect={false}
        onChangeText={text => setValue('password', text)}
        />

        <TouchableOpacity
          style={styles.btnSubmit}
          onPress={handleSubmit(onSubmit)}>
          <Text style={styles.submitText}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={ () => navigation.navigate('Register')}>
          <Text style={styles.registerText}>Criar conta</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#FFF7C0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    resizeMode: "center",
    height: 200,
    width: 200
  },
  text:{
    height: 90,
    fontSize: 50,
    fontWeight: "bold",
    color: 'rgba(106, 61, 116, 1)',
    textShadowColor: "grey",
    textShadowRadius: 1,
  },
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
  },
  input: {
    backgroundColor: 'rgba(103, 64, 119, 0.78)',
    width: '90%',
    marginBottom: 15,
    color: '#222',
    fontSize: 17,
    fontWeight: 'bold',
    //placeholderTextColor: '#FFF7C0',
    borderRadius:20,
    padding: 10,
  },
  btnSubmit:{
    backgroundColor: 'rgba(106, 61, 116, 1)',
    width: '50%',
    height:45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    elevation: 3,
  },
  submitText:{
    fontWeight: 'bold',
    fontSize:20,
    color: '#FFF7C0',

  },
  btnRegister:{
    width: '50%',
    height:45,
    backgroundColor: 'rgba(106, 61, 116, 1)',
  },
  registerText:{
    fontWeight: 'bold',
    fontSize:20,
    color: 'rgba(106, 61, 116, 1)',
    },
    
});