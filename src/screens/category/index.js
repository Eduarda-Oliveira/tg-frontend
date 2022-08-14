import React from 'react';
import {Image, View, Text, StyleSheet, ScrollView, KeyboardAvoidingView} from "react-native";
import { useEffect, useState } from "react";
import api from '../../services/api';
import { withTheme } from 'react-native-elements';

export function Category() {
 const [items, setItems] = useState([]);
 useEffect(() => {
   api.get(
     "/item/list"
   ).then(({data}) => {
     setItems(data.items)
     //console.log(data["items"])
     //setItems(data.items);
     //console.log(data)
   }).catch((error) => {
     console.log(error.message)
   });
 })
  return(
    <KeyboardAvoidingView style={styles.background}>
      <ScrollView>
        <View style={styles.container} className="Items">
          {
              items.map((item, index) =>{
                return(
                  <Text 
                  style={styles.listText}
                  key={index}>
                  {item.ITE_TITLE} {item.ITE_DESCRIPTION} {item.ITE_PRICE} 
                  <Image source={{ uri: item.ITE_IMAGE }} style={styles.thumbnail} />
                  </Text>
                )
              })
            }
        </View>
      </ScrollView>
    </KeyboardAvoidingView>

  )
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

  listText: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold'
  },

  thumbnail: {
    width: 300,
    height: 150,
    resizeMode: 'contain',
  },
});