import React, {useContext} from "react";
import {Text, View, TextInput,StyleSheet, TouchableOpacity } from "react-native";
import { Context } from "../App";
import StyledButton from "../components/StyledButton"; 

const Register=()=>{
    const consumer=useContext(Context);
    return(
        <View>
            <View style={styles.textInputs}>
              <TextInput
                placeholder="Email"
                keyboardType="email-address"
                />
            </View>
            <View style={styles.textInputs}> 
              <TextInput
                placeholder="Password"
                secureTextEntry={true}
                />
            </View>
            <View style={styles.textInputs}>
              <TextInput
                placeholder="Re-enter password"
                secureTextEntry={true}
                />
            </View>
            <StyledButton 
              text="Create your account"
              onPress={() => {
                  consumer.setRegisterModalVisible(!consumer?.registerModalVisible)}
                }
                />
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
        width:200,
        paddingLeft:5,
        borderRadius:5,
        backgroundColor:'#e3f2fd',
        marginBottom:10
      },
      signInButton:{
        marginTop:10,
        backgroundColor:"#81c784",
        padding:10,
        borderRadius:5
      },
      signInText:{
        color:"white"
      },
})
export default Register;
        