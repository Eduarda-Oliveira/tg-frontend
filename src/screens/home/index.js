import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, Picker} from 'react-native';
import { useEffect, useState } from "react";
import api from '../../services/api';
import RNPickerSelect from 'react-native-picker-select';
import { useForm } from 'react-hook-form'
import { Button } from 'react-native-elements';

export function Home({ navigation }) {
  const { register, setValue, handleSubmit } = useForm()
  const [selectedCategory, setSelectedCategories] = useState("");
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
          <Button
            //style={styles.btnRegister}
            title="tudo"
            onPress={ () => navigation.navigate('Category')}
            type="clear"
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
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

  thumbnail: {
    width: 300,
    height: 150,
    resizeMode: 'contain',
  },
  
  btnRegister:{
    backgroundColor: '#35AAFF',
    width: '40%',
    height:45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },
});
