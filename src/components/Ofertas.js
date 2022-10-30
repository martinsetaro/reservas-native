import React from 'react'
import {
Text,
View,
StyleSheet,
Image,
FlatList,
VirtualizedList,
SafeAreaView
} from 'react-native'
import OpcionesOfertas from './OpcionesOfertas'
import Destinos from './Destinos'





const Ofertas = ({navigation}) => {

    
   

  return (
     <SafeAreaView style={style.contenedor}>
      

        <Text style={style.titulo}>No dejes pasar estas ofertas!!</Text>


         {Destinos.map( item =>{
            return (
                <OpcionesOfertas item ={item} key={item.id} navigation={navigation}/>
            )
         })}

     </SafeAreaView>
    
  )
}

const style= StyleSheet.create({
    contenedor:{
        marginHorizontal:5,
        paddingTop:10,
        paddingBottom:40
    },
    titulo:{
        textAlign:'center',
        fontSize:30,
        color:'#1e1e1e',
        textTransform:'uppercase'
        
    }
})

export default Ofertas