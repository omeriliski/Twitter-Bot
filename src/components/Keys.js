import React,{useContext} from "react";
import {View, StyleSheet} from "react-native";
import { Button, Input, Card,Text } from 'react-native-elements';
import { Formik } from 'formik';
import { Context } from '../App';
import {privatePostData} from "../helper/postData";


const Keys=()=>{
    const consumer = useContext(Context);

    const setKeys=async(values)=>{
        //console.log("consumer.activeUser",consumer.activeUser.apiKey);
        consumer.activeUser.apiKey = values.apiKey;
        consumer.activeUser.apiSecretKey = values.apiSecretKey;
        consumer.activeUser.accessToken = values.accessToken;
        consumer.activeUser.accessTokenSecret = values.accessTokenSecret;
        console.log("consumer.activeUser",consumer.activeUser);
        await privatePostData(`http://192.168.0.123:${consumer.port}/api/user/${consumer?.activeUser._id}/update_user`, consumer.activeUser)
        .then(response => {
            console.log("Keys Saved", response.data)
        })
        .catch(err => {
          console.log("Keys save error", err);
          console.log(`http://192.168.0.123:5000/api/user/${consumer.activeUser._id}/update_user`);
          console.log("values",values)
        });
    }

    return(
        <Formik 
            initialValues={{ 
                apiKey:consumer?.activeUser?.apiKey, 
                apiSecretKey: consumer?.activeUser?.apiSecretKey,
                accessToken:consumer?.activeUser?.accessToken,
                accessTokenSecret:consumer?.activeUser?.accessTokenSecret
            }}
        >
        {formikProps => (
        <Card>
            <Card.Title>KEYS</Card.Title>
            <Card.Divider/>
            <View>
                <Input 
                    name="apiKey" 
                    placeholder="API Key"
                    onChangeText={formikProps.handleChange('apiKey')}
                    value={formikProps.values.apiKey}
                />
                <Input 
                    name="apiSecretKey" 
                    placeholder="API Secret Key"
                    onChangeText={formikProps.handleChange('apiSecretKey')}
                    value={formikProps.values.apiSecretKey}
                />
                <Input 
                    name="accessToken" 
                    placeholder="Access Token"
                    onChangeText={formikProps.handleChange('accessToken')}
                    value={formikProps.values.accessToken}
                />
                <Input 
                    name="accessTokenSecret" 
                    placeholder="Access Token Secret"
                    onChangeText={formikProps.handleChange('accessTokenSecret')}
                    value={formikProps.values.accessTokenSecret}
                />
            </View>
            <Text style={{marginBottom: 10}}>
                Write your keys here to control your Twitter Bot!
            </Text>
            <View style={styles.buttonsContainer}>
                <Button title="Edit" buttonStyle={styles.buttons}/>
                <Button 
                    title="Save" 
                    buttonStyle={[styles.saveButton,styles.buttons]}
                    onPress={()=>setKeys(formikProps.values)}
                />
            </View>
        </Card>)}
        </Formik>
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