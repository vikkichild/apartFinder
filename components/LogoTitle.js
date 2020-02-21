import React from 'react';
import {StyleSheet, Text} from 'react-native';

const LogoTitle = () => <Text style={styles.title}>Apartment Finder</Text>;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: 'white',
  },
});

export default LogoTitle;
