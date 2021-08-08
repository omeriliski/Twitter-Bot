/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Slider from 'react-native-slider';
import {Text} from 'react-native-elements';
const FollowSlider = () => {
  const [follow, setFollow] = useState(20);
  return (
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});

export default FollowSlider;
