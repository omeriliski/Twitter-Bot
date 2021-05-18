import React, {useContext} from "react";
import {Text, View, TextInput,StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { Context } from "../App";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

const Login=(props)=>{
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
              <Input placeholder="Password" secureTextEntry={true} />
            </View>
            <View style={styles.signInButton}>
              <TouchableOpacity 
                onPress={()=>{
                  consumer.setRegisterModalVisible(false)
                  props.onPress()
                }}
                >
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
        borderRadius:5
      },
      signInText:{
        color:"white"
      },
})
export default Login;
        