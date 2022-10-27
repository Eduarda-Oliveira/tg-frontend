import React, {Component} from "react";
import {View, Text, Image, StyleSheet, KeyboardAvoidingView, TouchableOpacity} from "react-native";
import { useEffect, useState } from "react";
import api from '../../services/api';

export function Item(route) {
  const [items, setItems] = useState("");

  useEffect(() => {
    let params ={
      ITE_ID: 1 }
    api.get( "/item/id", {params:params})
    .then(({data}) => {
      setItems(data.item)
      console.log(items)
    }).catch((error) => {
      console.log(error.message)
    });
  }, []);

  return(
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.container}>
          <Text style={styles.submitText}>{items.ITE_TITLE}</Text>
          <Text style={styles.listText}>
            {items.ITE_TITLE} {items.ITE_DESCRIPTION} {items.ITE_PRICE} {items.ITE_CATEGORY} 
          <Image source={{ uri: items.ITE_IMAGE }} style={styles.thumbnail} />
          </Text>


          <TouchableOpacity
            style={styles.btnSubmit}
            onPress={ () => navigation.navigate({ name: 'UpdateItem', 
            params: { itemId: items.ITE_ID } })
            }
            >
            <Text style={styles.submitText}>Editar</Text>
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
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  picker:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize:20,
  },
  logo:{
    resizeMode: "center",
    height: 200,
    width: 200
  },
  thumbnail: {
    width: 300,
    height: 150,
    resizeMode: 'contain',
  },
  
  btnSubmit:{
    backgroundColor: 'rgba(106, 61, 116, 1)',
    width: '90%',
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
    //width: '100%',
    //height:45,
    //backgroundColor: 'rgba(106, 61, 116, 1)',
  },
  registerText:{
    fontWeight: 'bold',
    fontSize:20,
    color: 'rgba(106, 61, 116, 1)',
    },
  listText: {
    fontWeight: 'bold',
    fontSize:20,
    color: 'rgba(106, 61, 116, 1)',
    textAlign: 'center',
  },
    
});

  