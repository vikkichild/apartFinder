import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

class TopBar extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Apartment Finder</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    height: 52,
    flexDirection: 'row',
    backgroundColor: '#00708d',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },
});

export default TopBar;
