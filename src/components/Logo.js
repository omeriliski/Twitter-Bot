import React from "react";
import {View,Image,StyleSheet} from "react-native";
    
const Logo=()=>{
    return(
        <Image
            style={styles.logoImage}
            source={require('../images/logo.jpg')}
        />
    )
}

const styles=StyleSheet.create({
    logoImage:{
        width:150,
        height:150
    }
})
export default Logo;
    