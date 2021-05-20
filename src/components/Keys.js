import React from "react";
import {View, StyleSheet} from "react-native";
import { Button, Input, Card,Text } from 'react-native-elements';

const Keys=()=>{
    return(
        <Card>
            <Card.Title>KEYS</Card.Title>
            <Card.Divider/>
            <View>
               <Input placeholder="API Key"/>
                 <Input placeholder="API Secret Key"/>
                 <Input placeholder="Access Token"/>
                 <Input placeholder="Access Token Secret"/>
            </View>
            <Text style={{marginBottom: 10}}>
                Write your keys here to control your Twitter Bot!
            </Text>
            <View style={styles.buttonsContainer}>
                <Button title="Edit" buttonStyle={styles.buttons}/>
                <Button title="Save" buttonStyle={[styles.saveButton,styles.buttons]}/>
            </View>
        </Card>
    )
}

const styles=StyleSheet.create({
    container:{
        margin:10,
        borderColor:"red"
    },
    text:{
        margin:10,
        textAlign:"center"
    },
    buttonsContainer:{
        flexDirection:"row",
        marginTop:5
    },
    buttons:{
        width:150,
        marginRight:20
    },
    saveButton:{
        backgroundColor:"#81c784"
    },
    popularAccountsListContainer:{
        marginTop:40
    }
})
export default Keys;