import React,{useState} from "react";
import {View, StyleSheet} from "react-native";
import Slider from "react-native-slider";
import {Text} from "react-native-elements";

const LikeSlider=()=>{
  const [like,setLike]=useState(20);
  return(
    <View style={styles.container}>
        <Text>How many Likes do you want in a day?</Text>
      <Slider
        value={like}
        onValueChange={value => setLike(Math.floor(value))}
        maximumValue="100"
        minimumValue="0"
      />
      <Text>{like}</Text>
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

export default LikeSlider;