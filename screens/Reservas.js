import React , {useEffect} from 'react'
import 
{
Text,
Pressable,
StyleSheet,
View,
FlatList
} from 'react-native'
import { Item } from 'react-native-paper/lib/typescript/components/List/List'
import globalStyle from '../src/globalStyle'
import {formatearFecha} from '../src/helpers/index'



const Reservas = ({setModalReservas,reservas,eliminarReserva}) => {




    const renderItem = ({ item }) => (
        <View style={style.card}>
         <Text style={style.label}>Nombre: {''}   
        <Text style={style.textoInfo}>{item.nombre}</Text></Text>
        <Text style={style.label}>Telefono: {''}   
        <Text style={style.textoInfo}>{item.telefono}</Text></Text>
        <Text style={style.label}>Email: {''} 
        <Text style={style.textoInfo}>{item.email}</Text></Text>
        <Text style={style.label}>Adultos: {''} 
        <Text style={style.textoInfo}>{item.adultos}</Text></Text>
        <Text style={style.label}>Niños: {''} 
        <Text style={style.textoInfo}>{item.niños}</Text></Text>
        <Text style={style.label}>Fecha entrada: {''} 
        <Text style={style.textoInfo}>{formatearFecha(item.fechaEntrada)}</Text></Text>
        <Pressable
        onPress={() => eliminarReserva(item.nombre)}
        style={style.btnEliminar}>
            <Text style={style.textoEliminar}>Eliminar</Text>
        </Pressable>
        </View>
      );




  return (

   <View style={style.principal}>
    <Pressable
    style={style.btnCancelar}
    onPress={() => setModalReservas(false)}
    >
        <Text style={style.textoCancelar}>Cancelar</Text>
    </Pressable>
    { reservas.length === 0 ? <Text style={style.titulo}>No hay reservas</Text> :

       <Text style={style.titulo}>Reservas realizadas</Text> 
    }
    

    <FlatList
    data={reservas}
    renderItem={renderItem}
    keyExtractor={item => item.id}
    
    />




   </View>
  )
}

const style= StyleSheet.create({
    principal:{
   flex:1,
   marginBottom:40
    },
    titulo:{
        fontSize:40,
        marginTop:20,
        textAlign:'center'
    },
    btnCancelar:{
        ...globalStyle.btn,
        marginTop:30
    },
    textoCancelar:{
        fontSize:20,
        color:'#fff',
        textTransform:'uppercase',
        textAlign:'center'
    },
    card:{
        
        flex:1,
        padding:5,
        marginTop:20,
        marginBottom:20,
        borderColor:'#7d7d7d',
        borderWidth:1
    },
    label:{
        fontSize:20,
        fontWeight:'700',
        marginBottom:10
    },
    textoInfo:{
        fontFamily:'Outfit-Regular'
    },
    btnEliminar:{
       backgroundColor:'#D3410F',
       marginTop:20,marginBottom:10
    },
    textoEliminar:{
        fontWeight:'700',
        color:'#fff',
        textAlign:'center',
        fontSize:20
    }
})

export default Reservas