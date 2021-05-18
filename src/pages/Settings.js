import React, {useState} from "react";
import {View, Text, TextInput, StyleSheet, Dimensions, ScrollView} from "react-native";
import { Button, Input } from 'react-native-elements';
import Header from "../components/Header";
import Slider from "react-native-slider";

const Settings=()=>{
    const [slider,setSlider]=useState(2);
    return(
        <ScrollView>
            <Header text="Settings"/>
            <Text style={styles.text}>Write your keys here to control your Twitter Bot!</Text>
            <View>
                <Input placeholder="API Key"/>
                <Input placeholder="API Secret Key"/>
                <Input placeholder="Access Token"/>
                <Input placeholder="Access Token Secret"/>
            </View>
            <View style={styles.buttonsContainer}>
                <Button title="Edit" buttonStyle={styles.buttons}/>
                <Button title="Save" buttonStyle={[styles.saveButton,styles.buttons]}/>
            </View>
            <View style={styles.container}>
                <Text>How many Retweet do you want today?</Text>
              <Slider
                value={slider}
                onValueChange={value => setSlider(value)}
                maximumValue="100"
                minimumValue="0"
                mini
              />
              <Text>
                Value: {slider}
              </Text>
            </View>
        </ScrollView>
    )
}
const styles=StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
        marginTop:20,
        alignItems: "stretch",
        justifyContent: "center",
    },
    text:{
        margin:10,
        textAlign:"center"
    },
    buttonsContainer:{
        flexDirection:"row",
        justifyContent:"center",
        marginTop:5
    },
    buttons:{
        width:150,
        marginRight:20
    },
    saveButton:{
        backgroundColor:"#81c784"
    }
})
export default Settings;