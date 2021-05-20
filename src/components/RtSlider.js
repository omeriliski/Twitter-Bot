import React,{useState} from "react";
import {View, StyleSheet} from "react-native";
import Slider from "react-native-slider";
import {Text} from "react-native-elements";

const RtSlider=()=>{
  const [retweet,setRetweet]=useState(20);
  return(
    <View style={styles.container}>
        <Text>How many Retweet do you want in a day?</Text>
      <Slider
        value={retweet}
        onValueChange={value => setRetweet(Math.floor(value))}
        maximumValue="100"
        minimumValue="0"
      />
      <Text>{retweet}</Text>
    </View>
  )
}

const styles=StyleSheet.create({
  container: {
      flex: 1,
      marginLeft: 10,
      marginRight: 10,
      marginTop:20,
      alignItems: "stretch",
      justifyContent: "center",
  }
})

export default RtSlider;