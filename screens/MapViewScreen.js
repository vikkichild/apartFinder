import React, {useState, useEffect} from 'react';
import Geolocation from '@react-native-community/geolocation';
import {View, StyleSheet, Dimensions} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

import TopBar from '../components/TopBar';
import PriceMapMarker from '../components/PriceMapMarker';
import PropertyListItem from '../components/PropertyListItem';
import places from '../mocks/apartmentsMock.json';

const {width, height} = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 40.6435;
const LONGITUDE = -73.9498;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const MapViewScreen = ({navigation}) => {
  const [error, setError] = useState('');
  const [location, setLocation] = useState({
    latitude: 0,
    longitude: 0,
  });
  const [property, setProperty] = useState({});

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

  useEffect(() => {
    getLocation();
  });

  const handleMarkerPress = item => {
    setProperty(item);
  };

  return (
    <View style={styles.container}>
      <TopBar
        handleButtonPress={() => navigation.navigate('Search')}
        icon={
          'https://icons.iconarchive.com/icons/icons8/ios7/256/Arrows-Left-icon.png'
        }
        title={'Map View'}
      />
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        showsUserLocation={true}
        initialRegion={{
          latitude: LATITUDE,
          longitude: LONGITUDE,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }}>
        {!!places &&
          places.map(place => (
            <Marker
              description={place.address}
              title={`${place.beds} bd ${place.baths} ba ${place.sqft} sqft`}
              key={place.id}
              coordinate={place.coordinate}
              onPress={() => handleMarkerPress(place)}>
              <PriceMapMarker fontSize={13} amount={place.price} />
            </Marker>
          ))}
      </MapView>
      {property.id && (
        <View style={styles.propertyDetails}>
          <PropertyListItem
            item={property}
            handleItemPress={place => navigation.navigate('Place', {place})}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  propertyDetails: {
    height: 200,
    width: '95%',
    backgroundColor: 'grey',
    position: 'absolute',
    bottom: 10,
    margin: 10,
  },
  propertyImage: {
    height: 160,
    backgroundColor: 'blue',
  },
});

export default MapViewScreen;
