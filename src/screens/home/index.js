import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView, KeyboardAvoidingView} from "react-native";
import { useEffect, useState } from "react";
import api from '../../services/api';

export function Home() {
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
    <ScrollView>
      <KeyboardAvoidingView style={styles.background}>
        <View style={styles.container} className="Items">
          {
              items.map((item, index) =>{
                return(
                  <Text 
                  style={styles.listText}
                  key={index}>
                  {item.ITE_TITLE} {item.ITE_DESCRIPTION} {item.ITE_PRICE}
                  </Text>
                )
              })
            }
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    left: 0,
    right: -50,
    top: 0,
    height: '100%',
  },

  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
  },

  listText: {
    fontSize: 200,
    textAlign: 'center',
  }
});