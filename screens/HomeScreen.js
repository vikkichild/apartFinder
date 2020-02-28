import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  ImageBackground,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';

const HomeScreen = ({navigation}) => {
  const [inputValue, onChangeInputValue] = useState('');

  const displaySearchButton = () => {
    if (inputValue && inputValue.length > 2) {
      return (
        <TouchableOpacity
          style={styles.searchButtonContainer}
          onPress={searchCity}>
          <Image
            style={styles.searchButtonIcon}
            source={{
              uri:
                'https://cdn0.iconfinder.com/data/icons/feather/96/591276-arrow-right-512.png',
            }}
          />
        </TouchableOpacity>
      );
    }
  };

  const searchCity = async () => {
    const response = await fetch(
      `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${inputValue}`,
      {
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'devru-latitude-longitude-find-v1.p.rapidapi.com',
          'x-rapidapi-key':
            'a002804b5fmsh3ef43d6b0756d2bp15e9d8jsn1dc393d4fe01',
        },
      },
    );
    const data = await response.json();
    const result = data.Results;
    navigation.navigate('Search', {result, searchInputValue: inputValue});
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri:
            'https://images.unsplash.com/photo-1577744062836-c90121eb0331?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80',
        }}
        style={{width: '100%', height: '100%'}}>
        <View style={styles.topBarBlock}>
          <Text style={styles.topBarText}>Apartment Finder</Text>
          <TouchableOpacity onPress={() => navigation.navigate('CommonLogin')}>
            <Text style={styles.topBarText}>LOGIN</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.text}>Start your search</Text>
        <View style={styles.searchContainer}>
          <Image
            style={styles.searchIcon}
            source={{
              uri:
                'https://cdn4.iconfinder.com/data/icons/ios7-essence/22/common_search_lookup__-512.png',
            }}
          />
          <TextInput
            style={styles.textInput}
            placeholder={'Search By City'}
            value={inputValue}
            onChangeText={text => onChangeInputValue(text)}
          />
          {displaySearchButton()}
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  text: {
    marginLeft: 20,
    marginTop: 150,
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#ffffff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  topBarBlock: {
    alignSelf: 'stretch',
    height: 52,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 10,
  },
  topBarText: {
    fontSize: 20,
    color: '#ffffff',
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
  textInput: {
    paddingTop: 8,
    paddingLeft: 10,
  },
  searchButtonIcon: {
    width: 20,
    height: 20,
    marginTop: 10,
  },
  searchButtonContainer: {
    position: 'absolute',
    right: 10,
  },
});

export default HomeScreen;
