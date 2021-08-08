/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text} from 'react-native';

const Header = props => {
  return <Text style={styles.header}>{props.text}</Text>;
};
const styles = StyleSheet.create({
  header: {
    color: '#61DAFB',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
export default Header;
