import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  ScrollView,
} from 'react-native';

import places from '../mocks/apartmentsMock.json';
import {filterPlaces, formatDate} from '../utils';

const CityScreen = ({navigation, route}) => {
  const {cityName} = route.params;
  const displayText = () =>
    cityName && <Text style={styles.cityText}>{cityName}</Text>;
  const filteredPlaces = filterPlaces(places, cityName);
  const displayPlace = () =>
    filteredPlaces &&
    filteredPlaces.map(place => (
      <View key={place.id} style={styles.placeContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Place', {place})}>
          <ImageBackground
            source={{
              uri: place.photos[0],
            }}
            style={styles.placePhoto}>
            <View style={styles.placeLabel}>
              <Text style={{color: '#ffffff'}}>
                {formatDate(place.data) < 1
                  ? 'today'
                  : `${formatDate(place.data)}d ago`}
              </Text>
            </View>
            <View style={styles.placeTextBlock}>
              <View style={{flexDirection: 'row'}}>
                <Text style={[styles.placePriceText, styles.placeText]}>
                  {place.price}
                </Text>
                <Text style={[styles.placeSizeText, styles.placeText]}>
                  {place.beds} bd {place.baths} ba {place.sqft} sqft
                </Text>
              </View>
              <Text style={[styles.placeAddressText, styles.placeText]}>
                {place.address}
              </Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      </View>
    ));

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.cityContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Search')}>
            <Image
              style={styles.backIcon}
              source={{
                uri:
                  'https://icons.iconarchive.com/icons/icons8/ios7/256/Arrows-Left-icon.png',
              }}
            />
          </TouchableOpacity>
          {displayText()}
          <TouchableOpacity style={styles.cleanIconButton}>
            <Image
              style={styles.cleanIcon}
              source={{
                uri:
                  'https://cdn3.iconfinder.com/data/icons/ui-icons-5/16/cross-small-01-512.png',
              }}
            />
          </TouchableOpacity>
        </View>
        {displayPlace()}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  cityContainer: {
    height: 50,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#b8b8b8',
  },
  backIcon: {
    width: 25,
    height: 25,
    marginTop: 13,
    marginLeft: 20,
  },
  cityText: {
    paddingTop: 13,
    paddingLeft: 10,
    fontSize: 18,
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
  placeContainer: {
    height: 200,
    marginBottom: 5,
    marginTop: 5,
  },
  placeText: {
    fontWeight: 'bold',
    color: '#ffffff',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },
  placePriceText: {
    fontSize: 25,
  },
  placeSizeText: {
    marginTop: 10,
    marginLeft: 5,
    fontSize: 15,
  },
  placeAddressText: {
    fontSize: 17,
  },
  placeTextBlock: {
    marginLeft: 20,
    position: 'absolute',
    bottom: 10,
  },
  placePhoto: {
    width: '100%',
    height: '100%',
  },
  placeLabel: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    width: '17%',
    marginTop: 10,
    marginLeft: 15,
    paddingLeft: 5,
  },
});

export default CityScreen;
