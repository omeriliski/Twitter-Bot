import React from "react";
import {ScrollView, StyleSheet} from "react-native";
import {RtSlider, LikeSlider, FollowSlider, PopularAccountsList, Keys} from "../components";
import { Card, Text } from 'react-native-elements';

const Settings=()=>{
    return(
        <ScrollView>
            <Text h4 h4Style={styles.header}>Settings</Text>
            <Keys/>
            <Card>
                <RtSlider/>
                <LikeSlider/>
                <FollowSlider/>
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
    }
})
export default Settings;