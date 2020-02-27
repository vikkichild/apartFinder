import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const TopBar = ({handleButtonPress}) => (
  <View style={styles.container}>
    <Text style={styles.title}>Apartment Finder</Text>
    <TouchableOpacity onPress={handleButtonPress}>
      <Text style={styles.title}>LOGIN</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    height: 52,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 10,
  },
  title: {
    fontSize: 20,
    color: '#ffffff',
  },
});

export default TopBar;
