import React from "react";
import {View} from "react-native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import How from "./How";
import Home from "./Home";
import Settings from "./Settings";
import Statistics from "./Statistics";
import { Tab } from 'react-native-elements';

const TabPages=()=>{
    const Tab = createBottomTabNavigator();  
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="How It Works" component={How} />
            <Tab.Screen name="Statistics" component={Statistics}/>
            <Tab.Screen name="Settings" component={Settings}/>
        </Tab.Navigator>
    )
}

export default TabPages;

