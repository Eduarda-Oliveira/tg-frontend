import React from 'react';
import {Image, View, Text, StyleSheet, ScrollView, KeyboardAvoidingView, TouchableOpacity} from "react-native";
import { useEffect, useState } from "react";
import api from '../../services/api';

export function ListItemsToEdit({ navigation }) {
 const [items, setItems] = useState([]);

 useEffect(() => {
   api.get(
     "/item/list"
   ).then(({data}) => {
     setItems(data.items)
   }).catch((error) => {
     console.log(error.message)
   });
 }, [])
  return(
    <KeyboardAvoidingView style={styles.background}>
      <ScrollView>
        <View style={styles.container} className="Items">
          {
              items.map((item, index) =>{
                return( <>
                  <Text 
                    style={styles.listText}
                    key={index}>
                    {item.ITE_ID} {item.ITE_TITLE} {item.ITE_DESCRIPTION} {item.ITE_PRICE} 
                    <Image source={{ uri: item.ITE_IMAGE }} style={styles.thumbnail} />
                  </Text>

                  <TouchableOpacity
                    style={styles.btnSubmit}
                    onPress={ () => navigation.navigate('AnuncioToEdit', {
                      screen: 'ItemToEdit',
                      params: { itemId: item.ITE_ID },
                    })
                    }
                  >
                   <Text style={styles.submitText}>Editar</Text>
                  </TouchableOpacity>
                  </>
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
    backgroundColor: '#FFF7C0',
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
});