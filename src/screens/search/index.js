import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View, KeyboardAvoidingView, TouchableOpacity} from 'react-native';
import { useEffect, useState } from "react";
import api from '../../services/api';
import {Picker} from '@react-native-picker/picker';
import { useForm } from 'react-hook-form'
import { SafeAreaView } from 'react-native-safe-area-context';

export function Search({ navigation }) {
  const { register, setValue, handleSubmit } = useForm()
  const [selectedCategory, setSelectedCategories] = useState('1');
  const [categories, setCategories] = useState([]);
  const [items, setItems] = useState([]);


  useEffect(() => {
    api.get(
      "/category/list"
    ).then(({data}) => {
      setCategories(data.categories)
    }).catch((error) => {
      console.log(error.message)
    });
  }, [])

  const onSubmit = () => {
    let params ={
      CAT_ID: selectedCategory,
          }
    console.log(params)
    api.get('/item/listCategory', {params:params})
   .then(({data}) => {
    setItems(data.items) 
    console.log(data)
    })
   .catch((error) => {
          console.log(error.message)
        });
};

  return (
    <SafeAreaView
    style={{ flex: 1, backgroundColor: '#FFF7C0'}}
  >
      <ScrollView style={styles.container}>
        <Image
          style={styles.logo}
          source={require("../../../assets/LOGOtg.png")}
        />  
          <Picker
            style={styles.picker}
            selectedValue={selectedCategory}
            onValueChange={(itemValue, itemIndex) =>setSelectedCategories(itemValue)} >
            {categories.map((item, key)=>(
              <Picker.Item label={item.CAT_NAME} value={item.CAT_ID} key={key}/>)
              )}
          </Picker>
          <TouchableOpacity style={styles.btnRegister}
            onPress={handleSubmit(onSubmit)}
            >
            <Text style={styles.registerText}>Buscar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnAll}
            onPress={ () => navigation.navigate('Busca', {screen: "ListItems"})}
            >
            <Text style={styles.submitText}>Buscar todos</Text>
          </TouchableOpacity>
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
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#FFF7C0',
    width: '100%',
    height: '100%',
  },
  picker:{
    flex:1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize:20,
  },
  logo:{
    resizeMode: "center",
    height: 200,
    width: 200
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
    backgroundColor: 'rgba(106, 61, 116, 1)',
    width: '50%',
    height:40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    elevation: 2,
  },
  btnAll:{
    left: '12%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(106, 61, 116, 1)',
    width: '70%',
    height:40,
    borderRadius: 20,
  },
  submitText:{
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize:20,
    color: '#FFF7C0',
  },
  btnRegister:{
    left: '20%',
    width: '50%',
    height:40,
    alignItems: 'center',
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
