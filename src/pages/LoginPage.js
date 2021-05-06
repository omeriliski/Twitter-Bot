import React,{useContext} from "react";
import {View, StyleSheet} from "react-native";
import RegisterModal from "../components/RegisterModal";
import {Context} from "../App"
import StyledButton from '../components/StyledButton';
import Logo from '../components/Logo';

const LoginPage=(props)=>{
    const consumer = useContext(Context)
    return(
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Logo/>
            </View>
            <RegisterModal onPress={()=>props.navigation.navigate("Home")}/>
            <View style={styles.loginButtonsContainer}>
                <StyledButton text="Register" onPress={async() =>{ 
                    await consumer?.setActiveModal("register");
                    await consumer?.setRegisterModalVisible(true);
                    console.log("activeModal",consumer?.activeModal);
                    console.log("registerModalVisible",consumer?.registerModalVisible);
                }}/>
                <StyledButton text="Login" onPress={async() =>{
                    await consumer?.setActiveModal("login");
                    await consumer?.setRegisterModalVisible(true);
                    console.log("login page props",props)
                    console.log("activeModal",consumer?.activeModal);
                    console.log("registerModalVisible",consumer?.registerModalVisible);
                }}/> 
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white"
    },
    logoContainer:{
        flex:1,
        alignItems:"center",
        justifyContent:"flex-end"
    },
    loginButtonsContainer:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    loginButtons:{
        backgroundColor:'#1DA1F2',
        marginBottom:10,
        padding:10,
        borderRadius:10,
    },
    loginText:{
        color:'white',
        fontSize:20,
        fontWeight:"bold"
    }
})
export default LoginPage;