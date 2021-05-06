import React from "react";
import {View, Text, TextInput} from "react-native";

const Settings=()=>{
    return(
        <View>
            <Text>Settings</Text>
            <View>
                <TextInput placeholder="API Key"></TextInput>
                <TextInput placeholder="API Secret Key"></TextInput>
                <TextInput placeholder="Access Token"></TextInput>
                <TextInput placeholder="Access Token Secret"></TextInput>
            </View>
        </View>
    )
}

export default Settings;