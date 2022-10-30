import React from 'react'
import 
{
Text,
View,
StyleSheet,
Image,
ScrollView,
Pressable
} from 'react-native'
import globalStyle from '../src/globalStyle';

const DetalleOferta = ({route ,navigation }) => {

  const { nombre , imagen , precio , fecha , info , hotel , destinos } = route.params;

  return (
      <View style={style.contenedor}>
        <ScrollView>
        <Text style={style.texto}>{nombre}</Text>
        <Text style={[style.textoInfo , style.textoFecha]}> Fecha de salida</Text>
        <Text style={style.texto}>{fecha}</Text>
        <Text style={[style.texto , style.textoPrecio]}>{precio}</Text>
        <View style={style.contenedorImagen}>
        <Image
                  style={style.imagenes} 
                  source = {{uri:imagen}}/>
        </View>
        <Text style={style.textoInfo}>{info}</Text>

        <View style={style.contenedorInformacionPaquete}>

          <View style={style.contenedorFlex}>
          <View style={style.contenedorIcono}>
            <Image style={style.icono} source={require('../src/img/avion.png')}/>
          </View>
            <Text style={style.textoIcono}>Ida: Aeropuerto Principal - Llega Aeropuerto {nombre}.</Text>
          </View>

          <View style={style.contenedorFlex}>
          <View style={style.contenedorIcono}>
            <Image style={style.icono} source={require('../src/img/avion.png')}/>
          </View>
            <Text style={style.textoIcono}>Regreso: Aeropuerto {nombre} - Llega Aeropuerto Principal.</Text>
          </View>

          <View style={style.contenedorFlex}>
          <View style={style.contenedorIcono}>
            <Image style={style.icono} source={require('../src/img/hotels.png')}/>
          </View>
            <Text style={style.textoIcono}>7 dias / 7 noches . Hotel "{hotel}".</Text>
          </View>
          <View style={style.contenedorFlex}>
          <View style={style.contenedorIcono}>
            <Image style={style.icono} source={require('../src/img/destino.png')}/>
          </View>
            <Text style={[style.textoIcono , style.textoDestino]}>{destinos}</Text>
          </View>

          <Text style={style.textoInfoPrecio}>Precio final por persona - sujeto a impuestos.</Text>

          <Pressable 
          onPress={() => navigation.navigate('FormularioCompra')}
          style={style.btnComprar}>
            <Text style={style.textoComprar}>Comprar</Text>
          </Pressable>

        </View>
        <Pressable
                 
                 onPress={() => navigation.navigate('Home')}
                 style={style.btn}>
                    <Text style={style.btnTexto}>Atras</Text>
                 </Pressable>
      </ScrollView>  
      </View>
  )
}

const style=StyleSheet.create({
contenedor:{
  flex:1,
  marginTop:40,
  paddingBottom:40,
  backgroundColor:'#E2E7E7'
},
texto:{
  fontSize:30,
  color:'#1e1e1e',
  textAlign:'center',
  textTransform:'uppercase'
},
textoFecha:{
 textAlign:'left'
},
textoPrecio:{
 textTransform:'uppercase',
 fontWeight:'900',
 fontSize:40
},
contenedorImagen:{
  width:'100%',
  height:300
},
imagenes:{
  flex:1,
  marginHorizontal:10,
  borderRadius:5,
  shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,
},
textoInfo:{
  fontSize:16,
  marginHorizontal:10,
  paddingHorizontal:10,
  marginTop:20,
  textAlign:'center'
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
 },
 btnComprar:{
...globalStyle.btn,
marginTop:50,
backgroundColor:'#1390C7',
shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,

 },
 textoComprar:{
   color:'#fff',
   fontWeight:'700',
   textTransform:'uppercase',
   textAlign:'center',
   fontSize:20
 },
 contenedorIcono:{
  width:30,
  height:30,
  marginTop:40,

 },
 icono:{
  width:'100%',
  height:'100%',


 },
 contenedorInformacionPaquete:{
  width:'95%',
  height:540,
  marginHorizontal:10,
  marginTop:20,
  borderRadius:10,
  backgroundColor:'#fff',
  padding:10,
  paddingBottom:40,
  shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,
  
 },
 contenedorFlex:{
   flexDirection:'row',
   flex:1

 },
 textoIcono:{
  textAlign:'center',
  marginHorizontal:50,
  paddingTop:30,
  marginTop:10
 },
 textoInfoPrecio:{
  fontSize:20,
  textAlign:'center',
  marginTop:50,
  color:'#1390C7',
  fontWeight:'700'
 },
 textoDestino:{
  height:120,
 }

})



export default DetalleOferta