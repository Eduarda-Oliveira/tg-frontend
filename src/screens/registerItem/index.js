import React from 'react';
import { ScrollView, StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity} from 'react-native';
import api from '../../services/api';
import { Button } from 'react-native-elements';

import { useForm } from 'react-hook-form'
import { useEffect, useState } from "react";

export function RegisterItem({ navigation }) {
  const { register, setValue, handleSubmit } = useForm()

  useEffect(() => {
    register('title')
    register('price')
    register('description')
    register('image')
    register('contact')
    register('category')
    register('side')
    register('weight_capacity')
    register('weight')
    register('material')

  }, [register])

  const onSubmit = (data) => {
     data ={
      CLI_ID: 1,
      ITE_TITLE:data.title,
      ITE_PRICE:data.price,
      ITE_DESCRIPTION:data.description,
      ITE_IMAGE:data.image,
      ITE_CONTACT:data.contact,
      ITE_CATEGORY:data.category,
      ITE_SIDE:data.side,
      ITE_WEIGHT_CAPECITY:data.weight_capacity,
      ITE_WEIGHT:data.weight,
      ITE_MATERIAL:data.material
          }
    api.post('/item/create', data)
    .then(() => {
      navigation.navigate('Home')
    })
    .catch((error) => {
           console.log(error.message)
         });
  };
  return (
    <ScrollView>
      <KeyboardAvoidingView style={styles.background}>
        <View style={styles.container}>
          <TextInput
          style={styles.input}
          placeholder="imagem"
          autoCorrect={false}
          onChangeText={text => setValue('image', text)}
          />

          <TextInput
          style={styles.input}
          placeholder="Título"
          autoCorrect={false}
          onChangeText={text => setValue('title', text)}
          />

          <TextInput
          style={styles.input}
          placeholder="Contato"
          autoCorrect={false}
          onChangeText={text => setValue('contact', text)}
          />

          <TextInput
          style={styles.input}
          placeholder="Valor"
          autoCorrect={false}
          onChangeText={text => setValue('price', text)}
          />

          <TextInput
          style={styles.input}
          placeholder="Descrição"
          autoCorrect={false}
          onChangeText={text => setValue('description', text)}
          />
          <TextInput
          style={styles.input}
          placeholder="Catedoria"
          autoCorrect={false}
          onChangeText={text => setValue('category', text)}
          />
          <TextInput
          style={styles.input}
          placeholder="Lado"
          autoCorrect={false}
          onChangeText={text => setValue('size', text)}
          />
          <TextInput
          style={styles.input}
          placeholder="Peso que aguenta"
          autoCorrect={false}
          onChangeText={text => setValue('weight_capacity', text)}
          />
          <TextInput
          style={styles.input}
          placeholder="Peso do produto"
          autoCorrect={false}
          onChangeText={text => setValue('weight', text)}
          />
          <TextInput
          style={styles.input}
          placeholder="Material"
          autoCorrect={false}
          onChangeText={text => setValue('material', text)}
          />
          <TextInput
          style={styles.input}
          placeholder="Faixa etária"
          autoCorrect={false}
          onChangeText={text => setValue('name', text)}
          />
          <Button
          style={styles.btnRegister}
          title="Cadastrar produto"
          onPress={handleSubmit(onSubmit)}
          />
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
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
  text:{
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