/* eslint-disable prettier/prettier */
import React, { useContext } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { Context } from '../App';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button, Text } from 'react-native-elements';
import { Formik } from 'formik';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import * as Yup from "yup";
import { privateFetchData } from '../helper/fetchData';


const LoginSchema = Yup.object().shape({
      userEmail: Yup.string().email('Invalid email address').required('Required'),
      userPassword: Yup.string()
      .required('Required')
      .min(6, 'Must be 6 characters or more'),
})

const Login = props => {
  const consumer = useContext(Context);
  
  const getUserData = async () => {
    console.log("*********************get profile started *****************************");
    const userData = await privateFetchData(`http://192.168.0.123:${consumer.port}/api/user/profile`);
    consumer.setActiveUser(userData);
    console.log("userData!!!!!!!!!!!!!!!!!!!!!!",userData);
  }

  const login = async values => {
    await axios
      .post(`http://192.168.0.123:${consumer.port}/api/user/login`, values)
      .then(response => {
        //consumer.setCurrentUser(values);
        //tele kaydet
        console.log('token', response.data.token);
        props.onPress();
        try{
          AsyncStorage.setItem('token', response.data.token);
        }catch(e){
          console.log("AsyncStorage Error:!!!!!!!!11 ",e)
        }
        //console.log(response.data);
        getUserData();
      })
      .catch(err => {
        //console.log("values", values)
        console.log('Wrong password or username', err);
        
        //consumer.setsnackBarMessage("Wrong password or username", err);
        //consumer.snackBarHandleClick();
        // toast(err?.message || "An error occured");
      });
  };
  return (
    <Formik 
      initialValues={{ userEmail: '', userPassword: '' }}
      validationSchema={LoginSchema}
      >
      {formikProps => (
        <View>
          <View style={styles.textInputs}>
            <Input
              name="userEmail"
              placeholder="email@address.com"
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
              name="userPassword"
              placeholder="Password"
              secureTextEntry={true}
              onChangeText={formikProps.handleChange('userPassword')}
              value={formikProps.values.userPassword}
            />
            {formikProps.errors.userPassword ? 
              (<Text>{formikProps.errors.userPassword}</Text>):null}
          </View>
          <View style={styles.signInButton}>
            <Button
              type="submit"
              onPress={() => {
                consumer.setRegisterModalVisible(false);
                formikProps.handleSubmit();
                login(formikProps.values);
                
              }}
              title="Login"/>
          </View>
        </View>
      )}
    </Formik>
  );
};


const styles = StyleSheet.create({
  textInputs: {
    width: Dimensions.get('window').width * 0.7,
    paddingLeft: 5,
    backgroundColor: '#e3f2fd',
    marginBottom: 10,
  },
  signInButton: {
    marginTop: 10,
    backgroundColor: '#81c784',
    padding: 10,
    borderRadius: 5,
  },
  signInText: {
    color: 'white',
  },
});
export default Login;
