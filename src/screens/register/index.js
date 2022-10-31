import React from 'react';
import { Image, StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, Alert} from 'react-native';
import { useEffect } from "react";
import { useForm, Controller } from 'react-hook-form'
import api from '../../services/api';


export function Register({ navigation }) {
  const { control, formState: { errors }, register, setValue, handleSubmit } = useForm()

  useEffect(() => {
    register('name')
    register('cpf')
    register('email')
    register('password')
  }, [register])

  const onSubmit = (data) => {
     data ={
          CLI_NAME:data.name,
          CLI_CPF:data.cpf,
          CLI_EMAIL:data.email,
          CLI_PASSWORD:data.password
          }
    api.post('/client/create', data)
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
        <Controller
        control={control}
        rules={{
         required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
          style={styles.input}
          placeholder="Nome completo"
          placeholderTextColor={'#FFF7C0'}
          autoCorrect={false}
          onChangeText={text => setValue('name', text)}
          />
        )}
        name="Nome"
      />
      {errors.Nome && <Text> Nome é obrigatório </Text>}

       
        <Controller
        control={control}
        rules={{
         required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
          style={styles.input}
          placeholder="CPF"
          placeholderTextColor={'#FFF7C0'}
          autoCorrect={false}
          onChangeText={text => setValue('cpf', text)}
          />
        )}
        name="CPF"
      />
      {errors.CPF && <Text> CPF é obrigatório </Text>}

      <Controller
        control={control}
        rules={{
         required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor={'#FFF7C0'}
          autoCorrect={false}
          onChangeText={text => setValue('email', text)}
        />
        )}
        name="Email"
      />
      {errors.Email && <Text> Email é obrigatório </Text>}
        
      <Controller
        control={control}
        rules={{
         required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
          secureTextEntry
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor={'#FFF7C0'}
          autoCorrect={false}
          onChangeText={text => setValue('password', text)}
          />
        )}
        name="Senha"
      />
      {errors.Senha && <Text> Senha é obrigatória </Text>}
        
         
        <TouchableOpacity
          style={styles.btnSubmit}
          onPress={handleSubmit(onSubmit)}>
          <Text style={styles.submitText}>Cadastrar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnRegister}
          onPress={ () => navigation.navigate('Login')}>
          <Text style={styles.registerText}>Já possui cadastro?</Text>
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
    //width: '50%',
    //height:45,
    //backgroundColor: 'rgba(106, 61, 116, 1)',
  },
  registerText:{
    fontWeight: 'bold',
    fontSize:20,
    color: 'rgba(106, 61, 116, 1)',
    },
});