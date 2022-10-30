import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";


import Home from "./screens/Home";
import DetalleOferta from "./screens/DetalleOferta";



const Tab = createBottomTabNavigator();

function MyTabs(){
    return(
        <Tab.Navigator
        initialRouteName="Home"
        >
            <Tab.Screen name="Home" component={Home}/>
            <Tab.Screen name="DetalleOferta" component={DetalleOferta}/>
        </Tab.Navigator>
    )
}

export default function Navigation(){
    <NavigationContainer>
        <MyTabs/>
    </NavigationContainer>
}