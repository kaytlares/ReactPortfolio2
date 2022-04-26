import React from 'react'
import { useState } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import { StyleSheet, Text, View, Button} from 'react-native';

function FormScreen({navigation}) {
  const [name, setName] = useState();
  const [last, setLast] = useState();
  const [email, setEmail] = useState();

  return (
    <View style={styles.container}>
    <View style={styles.inputContainer}>
    <Text style = {styles.text}> A Guide To The Best Phones Of 2022: </Text>
    <Text style={styles.second}> Please Enter Your Information Below </Text>

    <Text style={styles.third}>First Name: </Text>
    <TextInput style={styles.input}
    placeholder= 'Enter First Name'
    onChangeText={(val) => setName(val)} />

    <Text style={styles.third}>Last Name: </Text>
    <TextInput style={styles.input}
    placeholder= 'Enter Last Name'
    onChangeText={(val) => setLast(val)} />

    <Text style={styles.third}>Email Here: </Text>
    <TextInput style={styles.input}
    placeholder= 'Enter Email'
    onChangeText={(val) => setEmail(val)} />

   <Text style={styles.welcome}> Welcome, {name} to our site!</Text>

    <Button style={styles.button} title="Submit" 
    onPress={() => navigation.navigate('Home', {name, last})} ></Button>
     </View>
     </View>
     
  );
}
const styles = StyleSheet.create({

   container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    marginBottom: 20,
    fontSize: 32,
    fontWeight: 'bold',
    color: '#c50c6e',
  },

  second: {
    fontSize: 22,
    marginBottom: 10,
  },

  third: {
    fontSize: 18,
  },

  welcome: {
    fontSize: 22,
    marginBottom: 10,
  },

  input: {
    margin: 3,
    marginBottom: 15,
    height: 40,
    borderColor: '#000080',
    borderWidth: 2
  },

});


export default FormScreen;