import React from 'react';
import {Image, View, Text, StyleSheet, ScrollView, KeyboardAvoidingView, TouchableOpacity} from "react-native";
import { useEffect, useState } from "react";
import api from '../../services/api';
import { SafeAreaView } from 'react-native-safe-area-context';

export function ListItems({ navigation }) {
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
    <SafeAreaView
    style={{ flex: 1, backgroundColor: '#FFF7C0'}}
  >
        <ScrollView style={styles.container} >
          {
              items.map((item, index) =>{
                return( <>
                  <View style={styles.anuncio}>
                    <Text 
                    style={styles.listText}
                    >
                       {item.ITE_TITLE} 
                    </Text>
                    <Image source={{ uri: item.ITE_IMAGE }} style={styles.thumbnail} />
                    <Text
                      style={styles.descriptionText}
                    >
                      {item.ITE_DESCRIPTION} 
                    </Text>
                    <Text
                      style={styles.valueText}
                    >
                      {item.ITE_PRICE} 
                    </Text>

                    <TouchableOpacity
                      style={styles.btnSubmit}
                      onPress={ () => navigation.navigate('Busca', {
                        screen: 'Item',
                        params: { itemId: item.ITE_ID },
                      })
                      } 
                    >
                   <Text style={styles.submitText}>ver</Text>
                  </TouchableOpacity>
                </View>
              </>
            )
          })
        }
        </ScrollView>
        </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#FFF7C0',
    width: '100%',
    height: '100%',
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
    fontSize: 30,
    color: 'rgba(106, 61, 116, 1)',
    textAlign: 'center',
  },
  descriptionText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'rgba(106, 61, 116, 1)',
    textAlign: 'center',
  },
  valueText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'rgba(106, 61, 116, 1)',
    textAlign: 'center',
  },
  thumbnail: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  btnSubmit:{
    flex:1,
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