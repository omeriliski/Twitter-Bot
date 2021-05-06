import React from "react";
import {View} from "react-native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Home from "./Home";
import Settings from "./Settings";
import Statistics from "./Statistics";

const TabPages=()=>{
    const Tab = createBottomTabNavigator();  
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home}></Tab.Screen>
            <Tab.Screen name="Statistics" component={Statistics}></Tab.Screen>
            <Tab.Screen name="Settings" component={Settings}></Tab.Screen>
        </Tab.Navigator>
    )
}

export default TabPages;

