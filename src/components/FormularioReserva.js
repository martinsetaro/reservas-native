import React ,{ useState , useEffect} from 'react'
import {
Text,
View,
StyleSheet,
TextInput,
Pressable,
ScrollView,
SafeAreaView,
Alert
} from 'react-native'
import DatePicker from 'react-native-date-picker'

const FormularioReserva = ({setReservas,reservas,setModal}) => {

    const [nombre,setNombre] = useState('')
    const [telefono,setTelefono] = useState('')
    const [email,setEmail] = useState('')
    const [fechaEntrada,setFechaEntrada] = useState('')
    const [fechaSalida,setFechaSalida] = useState('')
    const [adultos,setAdultos] = useState('')
    const [niños,setNiños] = useState('')
    const [fecha,setFecha] = useState(new Date())
   

    
      const reserva = { nombre,telefono,email,fechaEntrada,fechaSalida,adultos,niños }
   
   
    


    const handlerReservar = () => {
    if([nombre,telefono,email,adultos].includes('')){
         Alert.alert(
            `Error`,
            `No pueden estar los campos vacios`
         )
    }else {
        Alert.alert(
            "Atención",
            "Se realizara la reserva, desea verificar los datos",
            [
                {text:"Cancel"},
                {text:"Hacer reserva", onPress:()=> {
                    setReservas([...reservas, reserva])
                    setModal(false)
                }}
            ]
        )
       
    }
}




  return (
    <SafeAreaView style={style.main}>
 <ScrollView>
    <View style={style.contenedor}>
       
           <Text style={style.titulo}> Realiza tu reserva en nuestro Hotel exclusivo de {''} 
           <Text style={style.textoSpan}>Vacacionar</Text>
           </Text>

          <View>
            <Text style={style.label}>Nombre:</Text>
            <TextInput
            style={style.input}
            value={nombre}
            onChangeText={setNombre}
            placeholder='Ingrese su nombre'
            />
          </View>
          <View>
            <Text style={style.label}>Telefono:</Text>
            <TextInput
            style={style.input}
            value={telefono}
            onChangeText={setTelefono}
            placeholder='Ingrese su nombre'
            />
          </View>
          <View>
          <Text style={style.label}>Email:</Text>
          <TextInput
          keyboardType='email-address'
          style={style.input}
          value={email}
          onChangeText={setEmail}
          placeholder='Ingrese su nombre'
          />
        </View>
        <View style={style.contenedoresPicker}>
            <Text style={style.label}>Fecha de ingreso</Text>
            <DatePicker 
            androidVariant='iosClone'
            textColor='black'
            date={fecha}
            locale='es'
            onDateChange={(date) => setFechaEntrada(date)}
           
            />
        </View>
        <View style={style.contenedoresPicker}>
            <Text style={style.label}>Fecha de Salida</Text>
            <DatePicker 
            androidVariant='iosClone'
            textColor='black'
            date={fecha}
            locale='es'
            onDateChange={(date) => setFechaSalida(date)}
           
            />
        </View>
    <View style={style.cantidadPersonas}>
        <View>
          <Text style={style.labelCantidad}>Adultos</Text>
          <TextInput
          style={style.inputCantidad}
          value={adultos}
          keyboardType='numeric'
          onChangeText={setAdultos}
          placeholder='Desde 18'
          />
        </View>
        <View>
          <Text style={style.labelCantidad}>Niños:</Text>
          <TextInput
          style={style.inputCantidad}
          keyboardType='numeric'
          value={niños}
          onChangeText={setNiños}
          placeholder='Hasta 18'
          />
        </View>
    </View>


 
        <Pressable
        onPress={handlerReservar}
          style={style.btnReservar}>
             <Text style={style.textoBtnReserva}>Reservar</Text>
          </Pressable>

</View>
       </ScrollView>
    
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
    main:{
       flex:1,
       paddingBottom:30
    },
    contenedor:{
        
        marginHorizontal:10
    },
    titulo:{
        fontSize:30,
        textAlign:'center',
        marginTop:20,
        marginBottom:20,
        color:'#1e1e1e'
    },
    label:{
      fontSize:20,
      marginLeft:10,
      marginBottom:10,
      color:'#1e1e1e'
    },
    input:{
        marginBottom:20,
        backgroundColor:'#f0f0f0',
        paddingLeft:10

    },
    btnReservar:{
        backgroundColor:'#0689CF',
        borderRadius:5,
        padding:5,
        marginTop:30
        
    },
    textoBtnReserva:{
        fontSize:20,
        textTransform:'uppercase',
        color:'#fff',
        fontWeight:'bold',
        textAlign:'center'
    },
    contenedoresPicker:{
        marginTop:20,
        marginBottom:20,
        marginHorizontal:10,
        backgroundColor:'#f3f3f3'
    },
    cantidadPersonas:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:20,
        flex:1
    },
    labelCantidad:{
        fontSize:20,
       marginBottom:10,
       color:'#1e1e1e'
    },
    inputCantidad:{
        marginBottom:20,
        backgroundColor:'#f0f0f0',
        
    },
    textoSpan:{
        color:'red',
        textTransform:'uppercase'
    }
})

export default FormularioReserva