import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LastScreen from './screens/LastS';
import PictureScreen from './screens/PictureS';
import FormScreen from './screens/FormS';
/*
import apple from './assets/iphone.jpg';
import samsung from './assets/samsung.jpg';
import pixel from './assets/pixel.jpg';
import flip from './assets/flip.jpg';
//import { useCallback, useState } from 'react';
//import { TextInput } from 'react-native-gesture-handler';
*/

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
        headerStyle: {
          backgroundColor: '#2196f3',
        }
        }}
        >
        <Stack.Screen name="Start" 
        component={FormScreen}
        options={{
          title: "Home",
          headerTitleStyle: {
            color: '#fff',
            fontSize: 20,
          }
        }} />
        <Stack.Screen name="Home" 
        component={PictureScreen} 
        options={{
          title: "Hottest Phones",
          headerTitleStyle: {
            color: '#fff',
            fontSize: 20,
          }
        }}
        />
        <Stack.Screen name="DashBoard" 
        component={LastScreen}
        options={{
          title: "Phone Details",
          headerTitleStyle: {
            color: '#fff',
            fontSize: 20,
          }
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

//STYLING SHEET 
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



//export default App; 