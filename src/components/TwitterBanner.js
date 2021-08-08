import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const TwitterBanner = () => {
    return (
    <View style={styles.container}>
      <Text style={styles.header}>TWITTER BOT</Text>
    </View>
    )
}

const styles=StyleSheet.create({
    container:{
      backgroundColor:'#1DA1F2',
      padding:5,
      margin:40,
      borderRadius:15,
    },
    header:{
      color:'white',
      fontSize:25,
      fontWeight:'bold',
      textAlign:'center',
    }
  })

  export default TwitterBanner;