import React, {
  useState,
  useEffect
} from 'react'
import {
  Text,
  View,
  SafeAreaView,
  Image,
  StyleSheet,
  ImageBackground,
  Pressable,
  Modal,
  ScrollView
} from 'react-native'
import Home from './screens/Home';
import DetalleOferta from './screens/DetalleOferta';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FormularioCompra from './screens/FormularioCompra';
import Reservas from './screens/Reservas';



const Stack = createNativeStackNavigator();


const App = () => {


const Tab = createBottomTabNavigator()




  return (
  <NavigationContainer>
    
    <Stack.Navigator
     screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name={'Home'} component={Home}/>
      <Stack.Screen name={'Detalleoferta'} component={DetalleOferta}/>
      <Stack.Screen name={'FormularioCompra'} component={FormularioCompra}/>
      <Stack.Screen name={'Reservas'} component={Reservas}/>
      
      
    </Stack.Navigator>
  </NavigationContainer>
  )
}


export default App