import React from 'react'
import {
    Text,
    View,
    Pressable,
    StyleSheet,
    Image,
    ImageBackground

} from 'react-native'
import globalStyle from '../globalStyle'
import DetalleOferta from '../../screens/DetalleOferta'








const OpcionesOfertas = ({item,navigation}) => {



   
   const{nombre,imagen,precio,fecha} = item
   const pic ={uri:imagen}


  return (
   
   
    <View style={style.contenedor}>
        
                
                <ImageBackground
                resizeMode='cover'
                source={pic}
                style={style.contenedorImagen}
                 >
                  <Text style={style.titulo}>{nombre}</Text>
                  <Text style={style.subTituloSegundo}>Proxima salida</Text>
                   <Text style={style.subTitulo}>{fecha}</Text>
                  <Text style={style.precioTexto}>{precio}</Text>

                 <Pressable
                 
                 onPress={() => navigation.navigate('Detalleoferta',item)}
                 style={style.btn}>
                    <Text style={style.btnTexto}>Ver mas</Text>
                 </Pressable>
                </ImageBackground>

                
                
                   
        
       
    </View>
    
    
  )
}

const style= StyleSheet.create({
   contenedor:{
      width:'100%',
      height:450,
      marginBottom:10,
      marginTop:30
   },
   contenedorImagen:{
    width:'100%',
    height:'100%',
    
    
   },
   titulo:{
    fontSize:35,
    color:'#fff',
    fontWeight:'900',
    marginTop:20,
    marginLeft:10
   },
   subTitulo:{
    fontSize:30,
    color:'#fff',
    fontWeight:'900',
    marginLeft:10
  
   },
   subTituloSegundo:{
      fontSize:30,
      color:'#fff',
      fontWeight:'900',
      marginTop:140,
      marginLeft:10,
      backgroundColor:'#B217E8',
      paddingLeft:10,
      marginHorizontal:10,
      borderRadius:7
   },
   precioTexto:{
    fontSize:70,
    color:'#fff',
    textTransform:'uppercase',
    fontWeight:'900',
   
   },
   btn:{
    ...globalStyle.btn,
    marginHorizontal:90,
    marginTop:20
   },
   btnTexto:{
    color:'#fff',
    textTransform:'uppercase',
    textAlign:'center',
    fontWeight:'900',
    fontSize:20,
   }
})

export default OpcionesOfertas