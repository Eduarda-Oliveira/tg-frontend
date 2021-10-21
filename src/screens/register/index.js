import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, Button} from 'react-native';
import { useEffect, useState } from "react";
import api from '../../services/api';


export function Register({ navigation }) {
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(){
    const data ={
      CLI_NAME:name,
      CLI_CPF:cpf,
      CLI_EMAIL:email,
      CLI_PASSWORD:password
      }
      const response = await api.post('/client/create', data);

      if(response.status==400){
        alert("deu errado");
      }
    }

  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.container}>
        <TextInput
        style={styles.input}
        placeholder="Nome completo"
        autoCorrect={false}
        value={name}
        onChange={e => setName(e.target.value)}
        />

        <TextInput
        style={styles.input}
        placeholder="CPF"
        autoCorrect={false}
        value={cpf}
        onChange={e => setName(e.target.value)}
        />

        <TextInput
        style={styles.input}
        placeholder="Telefone"
        autoCorrect={false}
        value={phone}
        onChange={e => setName(e.target.value)}
        />

        <TextInput
        style={styles.input}
        placeholder="E-mail"
        autoCorrect={false}
        value={email}
        onChange={e => setName(e.target.value)}
        />

         <TextInput
        style={styles.input}
        placeholder="Senha"
        autoCorrect={false}
        value={password}
        onChange={e => setName(e.target.value)}
        />

        <Button
        style={styles.btnRegister}
        title="Cadastrar"
        onPress={handleSubmit}
        />

        <Button
        style={styles.btnRegister}
        title="Já possui cadastro?"
        onPress={ () => navigation.navigate('Login')}
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
