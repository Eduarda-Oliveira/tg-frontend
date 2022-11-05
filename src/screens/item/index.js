import React from "react";
import {View, Text, Image, StyleSheet, KeyboardAvoidingView, TouchableOpacity} from "react-native";
import { useEffect, useState } from "react";
import api from '../../services/api';

export function Item({ route }) {
  const [items, setItems] = useState("");

  useEffect(() => {
    let params ={
      ITE_ID: route.params?.itemId
    }
    console.log(params)
    api.get( "/item/id", {params:params})
    .then(({data}) => {
      setItems(data.item)
    }).catch((error) => {
      console.log(error.message)
    });
  }, []);

  return(
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.container}>
        <View style={styles.anuncio}>
          <Text 
          style={styles.listText}
          >
            {items.ITE_TITLE} 
          </Text>
          <Image source={{ uri: items.ITE_IMAGE }} style={styles.thumbnail} />
          <Text
            style={styles.descriptionText}
          >
            {items.ITE_DESCRIPTION} 
          </Text>
          <Text
            style={styles.valueText}
          >
            {items.ITE_PRICE} 
          </Text>
          <Text
            style={styles.contactText}
          >
            {items.ITE_CONTACT} 
          </Text>
          <Text
            style={styles.contactText}
          >
            {items.ITE_CITY} 
          </Text>
          <Text
            style={styles.contactText}
          >
            {items.ITE_NEIGHBORHOOD} 
          </Text>
          <Text
            style={styles.valueText}
          >
            {items.ITE_CATEGORY} 
          </Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}
const styles = StyleSheet.create({
  background: {
    justifyContent: 'center',
    width: '100%',
    height: '100%'
  },
  container:{
    flex: 1,
    backgroundColor: '#FFF7C0',
    width: '100%',
    height: '100%',
  },
  Scroll:{
    flex: 1,
  },
  anuncio:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  listText: {
    fontWeight: 'bold',
    fontSize: 45,
    color: 'rgba(106, 61, 116, 1)',
    textAlign: 'center',
    bottom:'1%',
    top: '1%',
  },
  descriptionText: {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'rgba(106, 61, 116, 1)',
    textAlign: 'center',
    bottom:'1%',
    top: '1%',
  },
  valueText: {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'rgba(106, 61, 116, 1)',
    textAlign: 'center',
  },
  contactText: {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'rgba(106, 61, 116, 1)',
    textAlign: 'center',
  },
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
  btnSubmit:{
    backgroundColor: 'rgba(106, 61, 116, 1)',
    width: '50%',
    height:40,
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
});

  