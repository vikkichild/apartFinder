import React from 'react';
import {View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native';

const SearchListItem = ({handleCityPress, text}) => (
  <TouchableOpacity style={styles.searchResult} onPress={() => handleCityPress}>
    <Image
      style={styles.pointIcon}
      source={{
        uri:
          'https://cdn0.iconfinder.com/data/icons/basic-for-ui-ux-glyph-version/32/basic_uiux_glyph-01-512.png',
      }}
    />
    <View style={styles.searchResultTextContainer}>
      <Text style={styles.searchResultText}>{text}</Text>
      <Image
        style={styles.openIcon}
        source={{
          uri:
            'https://cdn1.iconfinder.com/data/icons/arrows-i/24/Material_icons-02-08-512.png',
        }}
      />
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  searchResult: {
    height: 55,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
  },
  searchResultTextContainer: {
    width: '85%',
    borderBottomWidth: 1,
    borderBottomColor: '#b8b8b8',
  },
  searchResultText: {
    fontSize: 18,
    marginTop: 15,
  },
  pointIcon: {
    width: 25,
    height: 25,
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
  },
  openIcon: {
    width: 25,
    height: 25,
    marginTop: 15,
    position: 'absolute',
    right: 10,
  },
});

export default SearchListItem;
