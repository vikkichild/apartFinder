import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

const TopBar = ({handleButtonPress, icon, title}) => (
  <View style={styles.headerBlock}>
    <TouchableOpacity onPress={handleButtonPress}>
      <Image
        style={styles.backIcon}
        source={{
          uri: icon,
        }}
      />
    </TouchableOpacity>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  headerBlock: {
    height: 50,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#b8b8b8',
    paddingTop: 10,
    paddingLeft: 15,
    paddingRight: 10,
  },
  title: {
    marginLeft: 25,
    fontSize: 20,
    fontWeight: 'bold',
  },
  backIcon: {
    marginTop: 3,
    width: 25,
    height: 25,
  },
});

export default TopBar;
