import React, {useState, useEffect} from 'react';
import {
  View,
  Image,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import {filterCityList} from '../utils';

const SearchScreen = ({navigation, route}) => {
  const [inputValue, onChangeInputValue] = useState('');
  const [cityList, setCityList] = useState('');
  const {result, searchInputValue} = route.params;

  useEffect(() => onChangeInputValue(searchInputValue), [searchInputValue]);
  useEffect(() => {
    const filteredCityList = filterCityList(result);
    setCityList(filteredCityList);
  }, [result]);

  const displaySearchResult = () => {
    if (cityList) {
      return (
        <View style={styles.searchResultContainer}>
          {cityList.map(city => (
            <TouchableOpacity style={styles.searchResult}>
              <Image
                style={styles.pointIcon}
                source={{
                  uri:
                    'https://cdn0.iconfinder.com/data/icons/basic-for-ui-ux-glyph-version/32/basic_uiux_glyph-01-512.png',
                }}
              />
              <View style={styles.searchResultTextContainer}>
                <Text style={styles.searchResultText}>{city.name}</Text>
                <Image
                  style={styles.openIcon}
                  source={{
                    uri:
                      'https://cdn4.iconfinder.com/data/icons/arrow-68/48/37-512.png',
                  }}
                />
              </View>
            </TouchableOpacity>
          ))}
        </View>
      );
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Image
              style={styles.backIcon}
              source={{
                uri:
                  'https://icons.iconarchive.com/icons/icons8/ios7/256/Arrows-Left-icon.png',
              }}
            />
          </TouchableOpacity>
          <TextInput
            style={styles.textInput}
            autoFocus={true}
            placeholder={'Search'}
            value={inputValue}
            onChangeText={text => onChangeInputValue(text)}
          />
          <TouchableOpacity
            style={styles.cleanIconButton}
            onPress={() => onChangeInputValue('')}>
            <Image
              style={styles.cleanIcon}
              source={{
                uri:
                  'https://cdn3.iconfinder.com/data/icons/ui-icons-5/16/cross-small-01-512.png',
              }}
            />
          </TouchableOpacity>
        </View>
        {displaySearchResult()}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
    height: 50,
    borderRadius: 3,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  backIcon: {
    width: 25,
    height: 25,
    marginTop: 13,
    marginLeft: 20,
  },
  textInput: {
    paddingTop: 8,
    paddingLeft: 10,
    fontSize: 17,
    fontWeight: 'bold',
  },
  cleanIconButton: {
    marginTop: 15,
    position: 'absolute',
    right: 10,
  },
  cleanIcon: {
    width: 20,
    height: 20,
  },
  searchResultContainer: {
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
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

export default SearchScreen;
