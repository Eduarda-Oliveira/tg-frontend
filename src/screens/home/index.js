import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View, KeyboardAvoidingView, TouchableOpacity} from 'react-native';
import { useEffect, useState } from "react";
import api from '../../services/api';
import {Picker} from '@react-native-picker/picker';
import { useForm } from 'react-hook-form'
import { SafeAreaView } from 'react-native-safe-area-context';

export function Home({ navigation }) {
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


  return (
    <SafeAreaView
    style={{ flex: 1, backgroundColor: '#FFF7C0'}}
  >
    <KeyboardAvoidingView style={styles.background}>

        <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require("../../../assets/LOGOtg.png")}
        />  
          
          <TouchableOpacity
            style={styles.btnAll}
            onPress={ () => navigation.navigate('Anuncio', {screen: "ListItems"})}
            >
            <Text style={styles.submitText}> Meus Anúncios</Text>
          </TouchableOpacity>
          <TouchableOpacity
              style={styles.btnAll}
              onPress={ () => navigation.navigate('Register Item')} 
          >
            <Text style={styles.submitText}> Novo Anúncio</Text>
          </TouchableOpacity> 
        </View>
    </KeyboardAvoidingView>
    </SafeAreaView>
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
    flex: 1,
    backgroundColor: '#FFF7C0',
    width: '100%',
    height: '100%',
  },
  logo:{
    resizeMode: "center",
    height: 400,
    width: 400
  },
  btnAll:{
    left: '12%',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(106, 61, 116, 1)',
    width: '80%',
    height:60,
    borderRadius: 20,
    marginBottom: '5%'
  },
  submitText:{
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize:20,
    color: '#FFF7C0',

  }, 
});
