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
      

        <View style={style.contenedorImagen}>
            <Image 
            style={style.imagen}
            source={require('../img/banner.png')}/>
        </View>


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
    contenedorImagen:{
      width:'100%',
      height:200
    },
    imagen:{
        width:'100%',
        height:200
    }

})

export default Ofertas