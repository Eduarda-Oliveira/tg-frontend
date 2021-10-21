import React from 'react';
import { ScrollView, StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, Button} from 'react-native';

export function RegisterItemFilters({ navigation }) {
  return (
    <ScrollView>
      <KeyboardAvoidingView style={styles.background}>
        <View style={styles.container}>
          <Text style={styles.text} numberOfLines={5}>{"Preencha as informações que condizem com o seu produto"}</Text>
          <TextInput
          style={styles.input}
          placeholder="Lado"
          autoCorrect={false}
          onChangeText={()=> {}}
          />
          <TextInput
          style={styles.input}
          placeholder="Peso que aguenta"
          autoCorrect={false}
          onChangeText={()=> {}}
          />
          <TextInput
          style={styles.input}
          placeholder="Peso do produto"
          autoCorrect={false}
          onChangeText={()=> {}}
          />
          <TextInput
          style={styles.input}
          placeholder="Material"
          autoCorrect={false}
          onChangeText={()=> {}}
          />
          <TextInput
          style={styles.input}
          placeholder="Faixa etária"
          autoCorrect={false}
          onChangeText={()=> {}}
          />
           <TextInput
          style={styles.input}
          placeholder="Categoria"
          autoCorrect={false}
          onChangeText={()=> {}}
          />
          <Button
          style={styles.btnRegister}
          title="Cadastrar produto"
          onPress={ () => navigation.navigate('Login')}
          />
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
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
