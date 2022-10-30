import React, { useState , useEffect }from 'react'
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
import FormularioReserva from '../src/components/FormularioReserva'
import globalStyle from '../src/globalStyle'
import Ofertas from '../src/components/Ofertas'







const image = {uri:'https://images.pexels.com/photos/237272/pexels-photo-237272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}


const Home = ({navigation}) => {


  const [ reservas , setReservas] = useState([])
  const [modal,setModal] = useState(false)

 
  const handlerReservas = () => {
      setModal(true)

  }

 

 



  return (
      <SafeAreaView >
        <ScrollView>
         <View style={style.contenedor}>
           <ImageBackground
              style={style.imagen}
              source={image}
              resizeMode='cover'>
                <View style={style.contenedorLogo}>
                  <Image
                  style={style.imagenLogo} 
                  source = {require('../src/img/logoApp2.png')}/>
                </View>
                 <Text style={style.textoInside}>Vivelo desde dentro</Text>
                 <Pressable 
                 onPress = {handlerReservas}
                 style={style.btnReserva}>
                     <Text style={style.textoBtnReserva}>Hacer reserva en el hotel</Text>
                 </Pressable>
           </ImageBackground>
         </View>

         
          <Ofertas
          navigation={navigation}
          />
         

         <Modal
         visible={modal}
         animationType='slide'
         >
          <Pressable 
          onPress={ () => setModal(!modal)}
          style={style.btnCancelar}>
             <Text style={style.textoBtnReserva}>Cancelar</Text>
          </Pressable>

           <FormularioReserva
           setReservas={setReservas}
           reservas={reservas}
           setModal={setModal}
           />

         </Modal>
        
         
        
         




 
      </ScrollView>
      </SafeAreaView>
    
  )
}


const style = StyleSheet.create({

      contenedor:{
        ...globalStyle.contenedor,
        
      },
      imagen:{
        flex:1
      },
      contenedorLogo:{
          width:200,
          height:120,
          marginHorizontal:90,
          marginTop:30
      },
      imagenLogo:{
          width:'100%',
          height:'100%',
          marginHorizontal:10
      },
      textoInside:{
        textAlign:'center',
        color:'#fff',
        fontSize:60,
        marginTop:30,
        fontFamily:'Outfit-Regular'
      },
      btnReserva:{
        ...globalStyle.btn,
        marginTop:40,
        padding:10
      },
      textoBtnReserva:{
        fontSize:20,
        textTransform:'uppercase',
        color:'#fff',
        fontFamily:'Outfit-Regular',
        textAlign:'center'
      },
      modalTexto:{
        fontSize:50,
        textAlign:'center'
      },
      btnCancelar:{
        ...globalStyle.btn,
        marginTop:30
      }
})

export default Home