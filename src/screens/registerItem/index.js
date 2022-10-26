import React from 'react';
import { ScrollView, StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity} from 'react-native';
import api from '../../services/api';
import {Picker} from '@react-native-picker/picker';
import { useForm } from 'react-hook-form'
import { useEffect, useState } from "react";
import * as ImagePicker from 'expo-image-picker';


export function RegisterItem({ navigation }) {
  const { register, setValue, handleSubmit } = useForm()
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategories] = useState('1');
  const [image, setImage] = React.useState(null);

  useEffect (() => {
    console.log(selectedCategory);
  }, [selectedCategory])
  
  useEffect(() => {
    register('title')
    register('price')
    register('description')
    register('image')
    register('contact')
    register('category')
    register('image')
  }, [register])

  useEffect(() => {
    api.get(
      "/category/list"
    ).then(({data}) => {
      setCategories(data.categories)
    }).catch((error) => {
      console.log(error.message)
    });
  }, [])

  const onSubmit = (data) => {
     data ={
      CLI_ID: 1,
      ITE_TITLE:data.title,
      ITE_PRICE:data.price,
      ITE_DESCRIPTION:data.description,
      ITE_IMAGE: image,
      ITE_CONTACT:data.contact,
      CAT_ID: selectedCategory,
          }
    api.post('/item/create', data)
    .then(() => {
      navigation.navigate('Home')
    })
    .catch((error) => {
           console.log(error.message)
           console.log(data)
         });
  };

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (result.cancelled === true) {
      return;
    }
    setImage(result.uri);
    console.log(result.uri)
  };

  return (
      <KeyboardAvoidingView style={styles.background}>
        <View style={styles.container}>
          <Text style={styles.text}> Criar anúncio </Text>
          <TextInput
          style={styles.input}
          placeholder="Título"
          autoCorrect={false}
          onChangeText={text => setValue('title', text)}
          />

          <TextInput
          style={styles.input}
          placeholder="Contato"
          autoCorrect={false}
          onChangeText={text => setValue('contact', text)}
          />

          <TextInput
          style={styles.input}
          placeholder="Valor"
          autoCorrect={false}
          onChangeText={text => setValue('price', text)}
          />

          <TextInput
          style={styles.input}
          placeholder="Descrição"
          autoCorrect={false}
          onChangeText={text => setValue('description', text)}
          />

        <TouchableOpacity 
          onPress={openImagePickerAsync} 
          style={styles.button} >
          <Text style={styles.buttonText}>Selecione uma Imagem</Text>
        </TouchableOpacity>

        <Picker
          style={styles.picker}
          selectedValue={selectedCategory}
          onValueChange={(itemValue, itemIndex) => setSelectedCategories( itemValue)} >
          {categories.map((item, key)=>(
            <Picker.Item label={item.CAT_NAME} value={item.CAT_ID} key={key} />)
            )}
        </Picker>

          <TouchableOpacity
            style={styles.btnSubmit}
            onPress={handleSubmit(onSubmit)}>
            <Text style={styles.submitText}>Cadastrar</Text>
          </TouchableOpacity>

        </View>
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
  logo:{
    resizeMode: "center",
    height: 200,
    width: 200
  },
  picker:{
    fontSize:20,
  },
  text:{
    height: 90,
    fontSize: 50,
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
  button: {
    backgroundColor: 'rgba(103, 64, 119, 0.78)',
    padding: 7,
    width: '90%',
    height:40,
    borderRadius: 20,
  },
  buttonText:{
    fontSize:18,
    fontWeight: 'bold',
    color: '#FFF7C0',
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
  btnRegister:{
    width: '50%',
    height:45,
    backgroundColor: 'rgba(106, 61, 116, 1)',
  },
  registerText:{
    fontWeight: 'bold',
    fontSize:20,
    color: 'rgba(106, 61, 116, 1)',
    },

});