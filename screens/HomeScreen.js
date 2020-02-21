import React from 'react';
import {
  StyleSheet,
  Text,
  ImageBackground,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';

import TopBar from '../components/TopBar';

const HomeScreen = ({navigation}) => (
  <View style={styles.container}>
    <ImageBackground
      source={{
        uri:
          'https://images.unsplash.com/photo-1577744062836-c90121eb0331?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80',
      }}
      style={{width: '100%', height: '100%'}}>
      <TopBar handleButtonPress={() => navigation.navigate('Search')} />
      <Text style={styles.text}>Start your search</Text>
      <TouchableOpacity
        style={styles.searchContainer}
        onPress={() => navigation.navigate('Search')}>
        <Image
          style={styles.searchIcon}
          source={{
            uri:
              'https://cdn4.iconfinder.com/data/icons/ios7-essence/22/common_search_lookup__-512.png',
          }}
        />
        <Text style={styles.inputText}>Country, City or Address</Text>
      </TouchableOpacity>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {flex: 1},
  text: {
    marginLeft: 20,
    marginTop: 150,
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  searchContainer: {
    marginLeft: 20,
    marginRight: 20,
    height: 40,
    borderRadius: 3,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginTop: 10,
    marginLeft: 20,
  },
  inputText: {
    color: '#7a7a7a',
    paddingTop: 8,
    paddingLeft: 10,
  },
});

export default HomeScreen;
