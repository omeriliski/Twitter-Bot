import React from "react";
import {TouchableOpacity, Text, StyleSheet} from "react-native";

const StyledButton=(props)=>{
    return(
        <TouchableOpacity style={styles.buttonContainer} onPress={()=>props.onPress()}>
            <Text style={styles.text}>{props.text}</Text>
        </TouchableOpacity>
    )
}

const styles=StyleSheet.create({
    buttonContainer:{
        backgroundColor:'#1DA1F2',
        padding:10,
        margin:5,
        borderRadius:5,
        alignItems:'center',
        width:200
    },
    text:{
        color:'white'
    }
})

export default StyledButton;