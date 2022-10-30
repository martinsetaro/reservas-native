import React from 'react'
import {
Text,
View,
StyleSheet,
Pressable,
Image,
SafeAreaView,
TextInput,
ScrollView
}from 'react-native'
import globalStyle from '../src/globalStyle'

const FormularioCompra = ({navigation}) => {








  return (
   
    <View style={style.contenedor}>
       <ScrollView>
        <View style={style.contenidoTitulo}>
            <Image
            style={style.imagen}
             source={require('../src/img/seguridad.png')}/>
            <Text style={style.tituloPago}>Información de pago</Text>

        </View>
        <View style={style.contenidoTitulo}>
        <Image style={style.imagenTarjetas}
        source={require('../src/img/visa.png')}/>
        <Image style={style.imagenTarjetas}
        source={require('../src/img/american-express.png')}/>
        <Image style={style.imagenTarjetas}
        source={require('../src/img/paypal.png')}/>
        <Image style={style.imagenTarjetas}
        source={require('../src/img/master-card.png')}/>
            
        </View>

        <View style={[style.formulario , style.formularioPrincipal]}>
            <Text style={style.label}>Detalle de tarjeta</Text>
            <TextInput
            style={style.input}
            placeholder='Ingrese numero de tarjeta ej: 3663..'
            keyboardType='numeric'
            />
            <View style={[style.contenidoTitulo, style.formulario ,style.seguridad]}>
                <View>
                    <Text>-Mes-</Text>
                    <TextInput
                    style={[style.input, style.entradaSeguridad]}
                    keyboardType='numeric'
                    />
                </View>
                <View>
                    <Text>-Año-</Text>
                    <TextInput
                    style={[style.input, style.entradaSeguridad]}
                    keyboardType='numeric'
                    />
                </View>
                <View>
                    <Text>-CCV-</Text>
                    <TextInput
                    style={[style.input, style.entradaSeguridad]}
                    keyboardType='numeric'
                    />
                </View>
                
            </View>

            <Pressable style={[style.btn]}>
                <Text style={style.textoBtn}>Confirmar compra</Text>
            </Pressable>

<Pressable
       style={[style.btn , style.Cancelar]}
       onPress={() => navigation.navigate('Home')}
       >
         <Text style={style.textoBtn}>Cancelar</Text>
       </Pressable>
        </View>
           
       
       </ScrollView>
    </View>
   
  )
}

const style= StyleSheet.create({
    contenedor:{
        flex:1,
        backgroundColor:'#e9e9e9',
        marginHorizontal:10,
        paddingBottom:40
        
    },
    contenidoTitulo:{
        width:'100%',
        height:100,
        padding:20,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center'
    },
    label:{
     fontSize:20,
     marginBottom:10
    },
    input:{
     marginTop:20,
     borderColor:'#1e1e1e',
     borderBottomWidth:1,
     marginBottom:30
    },
    formularioPrincipal:{
       paddingBottom:60,
       paddingTop:40
    }, 
    formulario:{
       backgroundColor:'#fff',
       paddingTop:10,
    },
    imagen:{
        width:90,
        height:90
    },
    imagenTarjetas:{
        width:50,
        height:50
    },
    tituloPago:{
        fontSize:20,
        textTransform:'uppercase'
    },
    seguridad:{
        height:100,
        
    },
    entradaSeguridad:{
        width:50,
        height:40,
        padding:10,
        marginBottom:-50
    },
    btn:{
        ...globalStyle.btn,
        marginTop:60,
        backgroundColor:'#1390C7'
    },
    textoBtn:{
        fontWeight:'700',
        textAlign:'center',
        fontSize:20,
        color:'#fff'
    },
    Cancelar:{
        marginTop:40,
        backgroundColor:'red'
    }
})

export default FormularioCompra