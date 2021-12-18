import React, { useState,useContext } from "react";
import { View, StyleSheet } from "react-native";
import Slider from "react-native-slider";
import { Text,Button } from "react-native-elements";
import { Dimensions } from "react-native";
import { Context } from '../App';
import {privatePostData} from "../helper/postData";

const Sliders = () => {

  const consumer = useContext(Context);

  const [retweet, setRetweet] = useState(consumer?.activeUser?.rtCount);
  const [like, setLike] = useState(consumer?.activeUser?.likeCount);
  const [follow, setFollow] = useState(consumer?.activeUser?.followCount);

  const setSliders = async () => {
    consumer.activeUser.rtCount = retweet;
    consumer.activeUser.likeCount = like;
    consumer.activeUser.followCount = follow;
    console.log("consumer.activeUser", consumer.activeUser);

    await privatePostData(`http://192.168.0.123:${consumer.port}/api/user/${consumer?.activeUser._id}/update_user`, consumer.activeUser)
      .then(response => {
        console.log("Keys Saved", response.data)
      })
      .catch(err => {
        console.log("Keys save error", err);
        console.log(`http://192.168.0.123:${consumer.port}/api/user/${consumer.activeUser._id}/update_user`);
        console.log("values", values)
      });
  }
  return (
    <View>
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
      <View style={styles.container}>
        <Text>How many People do you want to follow in a day?</Text>
        <Slider
          value={follow}
          onValueChange={value => setFollow(Math.floor(value))}
          maximumValue="100"
          minimumValue="0"
        />
        <Text>{follow}</Text>
      </View>
      <Button 
        title="Save" 
        buttonStyle={styles.saveButton} 
        onPress = {()=>setSliders()}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
    alignItems: "stretch",
    justifyContent: "center",
  },
  saveButton: {
    backgroundColor: "#81c784",
    width: Dimensions.get("window").width * .4,
    alignSelf: "center"
  }
})

export default Sliders;