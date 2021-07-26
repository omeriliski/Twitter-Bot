import React, {useContext} from "react";
import {Text, View, TextInput,StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { Context } from "../App";
import { Button,Input } from 'react-native-elements';

const Register=()=>{
    const consumer=useContext(Context);
    return(
        <View>
            <View style={styles.textInputs}>
              <Input
                placeholder='email@address.com'
                keyboardType="email-address"
                leftIcon={{ type: 'font-awesome', name: 'chevron-left' }}
              /> 
            </View>
            <View style={styles.textInputs}> 
              <Input placeholder="Password" secureTextEntry={true}/>
            </View>
            <View style={styles.textInputs}>
              <Input placeholder="Re-enter password" secureTextEntry={true}/>
            </View>
            <Button title="Create your account" onPress={() => {
                  consumer.setRegisterModalVisible(!consumer?.registerModalVisible)}
            }/>
            <Text>Already have an account?</Text>
            <View style={styles.signInButton}>
              <TouchableOpacity onPress={() => {
                  consumer.setActiveModal("login")}
                }>
                <Text style={styles.signInText}>Login</Text>
              </TouchableOpacity> 
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    textInputs:{
        width:Dimensions.get("window").width*.7,
        paddingLeft:5,
        backgroundColor:'#e3f2fd',
        marginBottom:10
      },
      signInButton:{
        marginTop:10,
        backgroundColor:"#81c784",
        padding:10,
        borderRadius:5,
        textAlign:'center'
      },
      signInText:{
        color:"white"
      },
})
export default Register;
        