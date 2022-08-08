import React from 'react';
import { ScrollView, StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, Picker} from 'react-native';
import api from '../../services/api';
import { Button } from 'react-native-elements';
import RNPickerSelect from 'react-native-picker-select';
import { useForm } from 'react-hook-form'
import { useEffect, useState } from "react";
import * as ImagePicker from 'expo-image-picker';


export function RegisterItem({ navigation }) {
  const { register, setValue, handleSubmit } = useForm()
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategories] = useState("");
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
  }, [categories])

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


        <Picker
          selectedValue={selectedCategory}
          onValueChange={(itemValue, itemIndex) => setSelectedCategories( itemValue)} >
          {categories.map((item, key)=>(
            <Picker.Item label={item.CAT_NAME} value={item.CAT_ID} key={key} />)
            )}
        </Picker>

        <TouchableOpacity onPress={openImagePickerAsync} style={styles.btnRegister} >
          <Text style={styles.buttonText}>Pick a photo</Text>
        </TouchableOpacity>

          <Button
          style={styles.btnRegister}
          title="Cadastrar produto"
          onPress={handleSubmit(onSubmit)}
          />
        </View>
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
  input: {
    backgroundColor: '#FFF',
    width: '90%',
    marginBottom: 15,
    color: '#222',
    fontSize: 17,
    borderRadius: 7,
    padding: 10,
  },

  btnSubmit:{
    backgroundColor: '#35AAFF',
    width: '90%',
    height:45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },
  submitText:{
    fontSize:18,
    color: '#FFF',
  },
  text:{
    fontSize:18,
    color: '#FFF',
  },
  btnRegister:{
    marginTop: 10,
  },
  registerText:{
    color: '#FFF',
  },
});