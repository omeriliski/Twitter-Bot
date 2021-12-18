import React, {useContext} from "react";
import {Text, View, TextInput,StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { Context } from "../App";
import { Button,Input } from 'react-native-elements';
import { Formik } from 'formik';
import * as Yup from "yup";
import axios from 'axios';

const RegisterSchema = Yup.object().shape({
  userEmail: Yup.string().email('Invalid email address').required('Required'),
  password1: Yup.string()
  .required('Required')
  .min(6, 'Must be 6 characters or more'),
  password2: Yup.string()
  .required('Required')
  .oneOf([Yup.ref('password1'), null], 'Passwords must match')
})

const Register=()=>{
    const consumer=useContext(Context);

    const register = async (values) => {
      try {
          await axios.post(`http://192.168.0.123:${consumer.port}/api/user/register`, {
              userEmail: values.userEmail,
              userPassword: values.password1,
              apiKey:"",
              apiSecretKey:"",
              accessToken:"",
              accessTokenSecret:"",
              rtCount:0,
              likeCount:0,
              followCount:0
          })
      } catch (error) {
          console.log(error);
      }
  }

    return(
      <Formik 
      initialValues={{ userEmail: '', password1: '', password2:''}}
      validationSchema={RegisterSchema}
      >
      {formikProps => (
        <View>
            <View style={styles.textInputs}>
              <Input
                name = "userEmail"
                placeholder='email@address.com'
                keyboardType="email-address"
                leftIcon={{ type: 'font-awesome', name: 'chevron-left' }}
                onChangeText={formikProps.handleChange('userEmail')}
                value={formikProps.values.userEmail}
              /> 
              {formikProps.errors.userEmail  ? 
              (<Text  styles="backgroundColor:red">{formikProps.errors.userEmail}</Text>):null}
            </View>
            <View style={styles.textInputs}> 
              <Input 
                name="password1" 
                placeholder="Password" 
                secureTextEntry={true}
                onChangeText={formikProps.handleChange('password1')}
                value={formikProps.values.password1}
              />
              {formikProps.errors.password1  ? 
              (<Text  styles="backgroundColor:red">{formikProps.errors.password1}</Text>):null}
            </View>
            <View style={styles.textInputs}>
              <Input 
                name="password2" 
                placeholder="Re-enter password" 
                secureTextEntry={true}
                onChangeText={formikProps.handleChange('password2')}
                value={formikProps.values.password2}
              />
              {formikProps.errors.password2  ? 
              (<Text  styles="backgroundColor:red">{formikProps.errors.password2}</Text>):null}
            </View>
            <Button title="Create your account" onPress={() => {
                  consumer.setRegisterModalVisible(!consumer?.registerModalVisible)
                  register(formikProps.values);
                }
            }/>
            <Text>Already have an account?</Text>
            <View style={styles.signInButton}>
              <TouchableOpacity onPress={() => {
                  consumer.setActiveModal("login")}
                }>
                <Text style={styles.signInText}>Login</Text>
              </TouchableOpacity> 
            </View>
        </View>)}
      </Formik>
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
        