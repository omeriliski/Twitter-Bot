import React, { useContext } from "react";
import { Text, View, TextInput, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { Context } from "../App";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { Formik } from "formik";
import {postData} from "../helper/postData";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";

const Login =(props) => {
const consumer = useContext(Context);

  const login =async(values) => {
    await axios.post("api/user/login", values)
      .then((response) => {
        //consumer.setCurrentUser(values);
        //tele kaydet
        console.log("token", response.data.token);
        //AsyncStorage.setItem('token', response.data.token) 
        // localStorage.setItem("token", data.token);
        //consumer.getCheckout();
        // setLoggedIn(true);
        //history.push("/");
      })
      .catch((err) => {
        console.log("Wrong password or username", err)
        //consumer.setsnackBarMessage("Wrong password or username", err);
        //consumer.snackBarHandleClick();
        // toast(err?.message || "An error occured");
      });
  };
  // const formik = useFormik({
  //   initialValues: {
  //     userEmail: "",
  //     userPassword: "",
  //   },
  //   validationSchema: Yup.object().shape({
  //     userEmail: Yup.string().email('Invalid email address').required('Required'),
  //     userPassword: Yup.string()
  //       .required('Required')
  //       .min(6, 'Must be 6 characters or more'),
  //   }),
  //   onSubmit: () => {
  //     onFinish(formik.values);
  //     console.log("Success");
  //   },
  // });

  return (
    <Formik
      initialValues={{ userEmail: "", userPassword: "" }}
      onSubmit={(values) =>login(values)}
    >
      {(formikProps) =>(
        <View>
          <View style={styles.textInputs}>
            <Input
              placeholder='email@address.com'
              keyboardType="email-address"
              leftIcon={{ type: 'font-awesome', name: 'chevron-left' }}
              onChangeText={formikProps.handleChange("userEmail")}
              value={formikProps.values.userEmail}
            />
          </View>
          <View style={styles.textInputs}>
            <Input 
              placeholder="Password" 
              secureTextEntry={true} 
              onChangeText={formikProps.handleChange("userPassword")}
              value={formikProps.values.userPassword}
            />
          </View>
          <View style={styles.signInButton}>
            <TouchableOpacity
              onPress={() => {
                consumer.setRegisterModalVisible(false)
                formikProps.handleSubmit()
                props.onPress()
              }}
            >
              <Text style={styles.signInText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>)
      }
    </Formik>
  )
}

const styles = StyleSheet.create({
  textInputs: {
    width: Dimensions.get("window").width * .7,
    paddingLeft: 5,
    backgroundColor: '#e3f2fd',
    marginBottom: 10
  },
  signInButton: {
    marginTop: 10,
    backgroundColor: "#81c784",
    padding: 10,
    borderRadius: 5
  },
  signInText: {
    color: "white"
  },
})
export default Login;
