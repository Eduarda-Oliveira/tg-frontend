import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, KeyboardAvoidingView, TextInput} from "react-native";
import { useEffect, useState } from "react";
import { useForm } from 'react-hook-form'
import Checkbox from 'expo-checkbox';
import api from '../../services/api';

export function UpdateItem({ navigation, route }) {
  const { register, setValue, handleSubmit } = useForm()
  const [items, setItems] = useState({});
  const [isChecked, setChecked] = useState();

  useEffect(() => {
    let params ={
      ITE_ID: route.params.id}
    api.get( "/item/id", {params:params})
    .then(({data}) => {
      setItems(data.item)
    }).catch((error) => {
      console.log(error.message)
    });
  }, []);
 
  if (items.ITE_ENABLED = true) {
    return (
      setChecked(true)
    );
  }

  console.log(isChecked)
 const onSubmit = () => {
  let params ={
    ITE_ID: route.params.id,
    ITE_TITLE: items.ITE_TITLE,
    ITE_PRICE: items.ITE_PRICE,
    ITE_DESCRIPTION: items.ITE_DESCRIPTION,
    ITE_CONTACT: items.ITE_CONTACT,
    ITE_ENABLED: isChecked
        }
  console.log(params)
  api.put('/item/update', params)
 .then(({data}) => {
  navigation.navigate('Home')
  })
 .catch((error) => {
        console.log(error.message)
      });
};

  return(
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.text}> Editar anúncio </Text>
        <TextInput
          style={styles.input}
          placeholder="Título"
          placeholderTextColor={'#FFF7C0'}
          editable={true}
          autoCorrect={false}
          onChangeText={(text) => setItems({ ITE_TITLE: text })}
          value={items.ITE_TITLE}
          />
          <TextInput
          style={styles.input}
          placeholder="Contato"
          placeholderTextColor={'#FFF7C0'}
          autoCorrect={false}
          value={items.ITE_CONTACT}
          onChangeText={(text) => setItems({ ITE_CONTACT: text })}
          />
          <TextInput
          style={styles.input}
          placeholder="Valor"
          placeholderTextColor={'#FFF7C0'}
          autoCorrect={false}
          value={items.ITE_PRICE}
          onChangeText={(text) => setItems({ ITE_PRICE: text })}
          />
          <TextInput
          multiline
          numberOfLines={4}
          style={styles.input}
          placeholder="Descrição"
          placeholderTextColor={'#FFF7C0'}
          autoCorrect={false}
          value={items.ITE_DESCRIPTION}
          onChangeText={(text) => setItems({ ITE_DESCRIPTION: text })}
          />
         <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? 'rgba(103, 64, 119, 0.78)' : undefined}
          
        />
          <TouchableOpacity
            style={styles.btnSubmit}
            onPress={handleSubmit(onSubmit)}>
            <Text style={styles.submitText}>Atualizar</Text>
          </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>

  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#FFF7C0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    height: 90,
    width: '100%',
    fontSize: 46,
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

  listText: {
    fontWeight: 'bold',
    fontSize:20,
    color: 'rgba(106, 61, 116, 1)',
    textAlign: 'center',
  },

  thumbnail: {
    width: 300,
    height: 150,
    resizeMode: 'contain',
  },
  
  checkbox: {
    margin: 8,
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
});