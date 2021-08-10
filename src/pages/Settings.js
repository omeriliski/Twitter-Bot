import React from "react";
import {ScrollView, StyleSheet} from "react-native";
import {Sliders, PopularAccountsList, Keys} from "../components";
import { Card, Text, Button } from 'react-native-elements';
import { Dimensions } from "react-native";

const Settings=()=>{
    return(
        <ScrollView>
            <Text h4 h4Style={styles.header}>Settings</Text>
            <Keys/>
            <Card>
                <Sliders/>
                <Button title="Save" buttonStyle={styles.saveButton}/>
            </Card>
            <Card>
                <PopularAccountsList />
            </Card>
        </ScrollView>
    )
}

const styles=StyleSheet.create({
    header:{
        margin:10
    },
    saveButton:{
        backgroundColor:"#81c784",
        width: Dimensions.get("window").width*.4,
        alignSelf:"center"
    }
})
export default Settings;