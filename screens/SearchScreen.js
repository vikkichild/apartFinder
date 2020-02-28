import React, {useState} from 'react';
import Geolocation from '@react-native-community/geolocation';
import {
  View,
  Image,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ProgressBarAndroid,
} from 'react-native';

import {filterCityList} from '../utils';

const SearchScreen = ({navigation}) => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [inputValue, onChangeInputValue] = useState('');
  const [cityList, setCityList] = useState('');
  const [location, setLocation] = useState({
    latitude: 0,
    longitude: 0,
  });

  const getCityList = async text => {
    setLoading(true);
    const response = await fetch(
      `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${text}`,
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
    const resultList = data.Results;
    const filteredCityList = filterCityList(resultList);
    setCityList(filteredCityList);
    setLoading(false);
  };

  const getLocation = () => {
    Geolocation.getCurrentPosition(
      loc => {
        setError('');
        setLocation({
          latitude: loc.coords.latitude,
          longitude: loc.coords.longitude,
        });
      },
      err => setError(err.message),
    );
  };

  const handleTextInputChange = text => {
    onChangeInputValue(text);
    text.length > 2 && getCityList(text);
  };

  const handleCleanButton = () => {
    onChangeInputValue('');
    setCityList('');
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <View style={styles.searchInputBlock}>
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
              onChangeText={text => handleTextInputChange(text)}
            />
            <TouchableOpacity
              style={styles.cleanIconButton}
              onPress={handleCleanButton}>
              <Image
                style={styles.cleanIcon}
                source={{
                  uri:
                    'https://cdn3.iconfinder.com/data/icons/ui-icons-5/16/cross-small-01-512.png',
                }}
              />
            </TouchableOpacity>
          </View>
          {loading && (
            <ProgressBarAndroid styleAttr="Horizontal" color="#2196F3" />
          )}
        </View>
        {!inputValue && (
          <View style={styles.locationContainer}>
            <TouchableOpacity
              style={styles.locationButton}
              onPress={getLocation}>
              <Image
                style={styles.locationIcon}
                source={{
                  uri:
                    'https://cdn0.iconfinder.com/data/icons/typicons-2/24/location-arrow-512.png',
                }}
              />
              <Text style={styles.locationText}>Search nearby</Text>
            </TouchableOpacity>
          </View>
        )}
        {!!cityList && !!inputValue && (
          <View style={styles.searchResultContainer}>
            {cityList.map(city => (
              <TouchableOpacity
                key={city.l}
                style={styles.searchResult}
                onPress={() =>
                  navigation.navigate('City', {cityName: city.name})
                }>
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
                        'https://cdn1.iconfinder.com/data/icons/arrows-i/24/Material_icons-02-08-512.png',
                    }}
                  />
                </View>
              </TouchableOpacity>
            ))}
          </View>
        )}
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
  },
  searchInputBlock: {
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
    width: '90%',
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
  locationContainer: {
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  locationButton: {
    height: 55,
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
  locationIcon: {
    marginTop: 6,
    marginLeft: 5,
    height: 40,
    width: 40,
  },
  locationText: {
    marginTop: 17,
    marginLeft: 5,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});

export default SearchScreen;
