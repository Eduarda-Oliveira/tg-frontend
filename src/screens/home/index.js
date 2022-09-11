import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View, KeyboardAvoidingView, TouchableOpacity, Picker} from 'react-native';
import { useEffect, useState } from "react";
import api from '../../services/api';
import RNPickerSelect from 'react-native-picker-select';
import { useForm } from 'react-hook-form'

export function Home({ navigation }) {
  const { register, setValue, handleSubmit } = useForm()
  const [selectedCategory, setSelectedCategories] = useState('Escolha uma categoria');
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
    <KeyboardAvoidingView style={styles.background}>
      <ScrollView>
        <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require("../../../assets/LOGOtg.png")}
        />  
          <Picker
            selectedValue={selectedCategory}
            onValueChange={(itemValue, itemIndex) => setSelectedCategories( itemValue)} >
            {categories.map((item, key)=>(
              <Picker.Item label={item.CAT_NAME} value={item.CAT_ID} key={key} />)
              )}
          </Picker>
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
          <TouchableOpacity
            style={styles.btnRegister}
            onPress={handleSubmit(onSubmit)}
            >
            <Text style={styles.registerText}>Buscar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnSubmit}
            onPress={ () => navigation.navigate('Category')}
            >
            <Text style={styles.submitText}>Buscar todos</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
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
