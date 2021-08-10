import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Slider from "react-native-slider";
import { Text } from "react-native-elements";

const Sliders = () => {
  const [retweet, setRetweet] = useState(20);
  const [like, setLike] = useState(20);
  const [follow, setFollow] = useState(20);
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
  }
})

export default Sliders;