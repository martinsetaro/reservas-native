import React from 'react'
import {
Text,
View,
StyleSheet,
Image,
FlatList
} from 'react-native'
import OpcionesOfertas from './OpcionesOfertas'
import Destinos from './Destinos'





const Ofertas = () => {




  return (
     <View style={style.contenedor}>

         {Destinos.map( item =>{
            return (
                <OpcionesOfertas item ={item} key={item.id}/>
            )
         })}

     </View>
    
  )
}

const style= StyleSheet.create({
    contenedor:{
       
        paddingTop:10,
        paddingBottom:40
    },
    titulo:{
        textAlign:'center',
        fontSize:30,
        color:'#1e1e1e'
        
    }
})

export default Ofertas