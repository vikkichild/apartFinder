import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import ImagesCarousel from '../components/ImagesCarousel';

const PlaceScreen = ({navigation, route}) => {
  const {place} = route.params;
  const displayPlace = () =>
    place && (
      <View>
        <View style={styles.placePhotoBlock}>
          <ImagesCarousel images={place.photos} />
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.navigate('City')}>
            <Image
              style={styles.backIcon}
              source={{
                uri:
                  'https://c7.uihere.com/icons/129/421/307/arrow-left-543a69a4e73020bd68f21781c65b359c.png',
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.placePriceBlock}>
          <Text style={styles.placePrice}>{place.price}</Text>
        </View>
        <View style={styles.placeAddressBlock}>
          <Text style={styles.placeAddress}>{place.address}</Text>
        </View>
        <View style={styles.placeSizeInfoBlock}>
          <View style={styles.placeSizeInfoLeft}>
            <Text style={styles.placeSizeInfoText}>{place.beds}</Text>
            <Text style={styles.placeSizeInfoText}>bed</Text>
          </View>
          <View style={styles.placeSizeInfoCenter}>
            <Text style={styles.placeSizeInfoText}>{place.baths}</Text>
            <Text style={styles.placeSizeInfoText}>bath</Text>
          </View>
          <View style={styles.placeSizeInfoCenter}>
            <Text style={styles.placeSizeInfoText}>{place.sqft}</Text>
            <Text style={styles.placeSizeInfoText}>sqft</Text>
          </View>
          <View style={styles.placeSizeInfoRight}>
            <Text style={styles.placeSizeInfoText}>{place.sqm}</Text>
            <Text style={styles.placeSizeInfoText}>sqm</Text>
          </View>
        </View>
        <View style={styles.placeAdditionalInfo}>
          <Text>For Sale</Text>
          <Text>Build in {place.year_build}</Text>
          <TouchableOpacity
            onPress={() => alert('More Details Button Pressed!')}>
            <Text style={styles.placeMoreDetailsButton}>MORE DETAILS</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.placeDescription}>
          <Text style={styles.placeDescriptionTitle}>Description:</Text>
          <Text style={styles.placeDescriptionText}>{place.overview}</Text>
        </View>
      </View>
    );

  return (
    <ScrollView>
      <View style={styles.container}>{displayPlace()}</View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  placePhotoBlock: {
    height: 200,
  },
  backButton: {
    position: 'absolute',
    top: 5,
  },
  backIcon: {
    width: 25,
    height: 25,
    marginTop: 13,
    marginLeft: 20,
  },
  placePhoto: {
    width: '100%',
    height: '100%',
  },
  placePriceBlock: {
    paddingTop: 10,
    paddingBottom: 5,
    paddingLeft: 15,
  },
  placePrice: {
    fontWeight: 'bold',
    fontSize: 25,
  },
  placeAddressBlock: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 15,
  },
  placeAddress: {
    fontSize: 15,
  },
  placeSizeInfoBlock: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
    marginLeft: 15,
    marginBottom: 15,
    paddingTop: 10,
    paddingBottom: 15,
    borderBottomColor: '#b8b8b8',
    borderBottomWidth: 0.8,
  },
  placeSizeInfoLeft: {
    paddingRight: 39,
    paddingLeft: 20,
    borderRightColor: '#b8b8b8',
    borderRightWidth: 0.5,
  },
  placeSizeInfoCenter: {
    paddingRight: 39,
    paddingLeft: 39,
    borderRightColor: '#b8b8b8',
    borderRightWidth: 0.5,
  },
  placeSizeInfoRight: {
    paddingRight: 20,
    paddingLeft: 39,
  },
  placeSizeInfoText: {
    textAlignVertical: 'center',
    textAlign: 'center',
  },
  placeDescription: {
    paddingTop: 10,
    paddingLeft: 15,
    paddingBottom: 10,
    borderTopColor: '#d1d1d1',
    borderTopWidth: 7,
    borderBottomColor: '#d1d1d1',
    borderBottomWidth: 7,
  },
  placeDescriptionTitle: {
    fontSize: 15,
    marginBottom: 10,
  },
  placeDescriptionText: {
    fontSize: 15,
    color: '#828282',
  },
  placeAdditionalInfo: {
    marginLeft: 15,
    marginBottom: 15,
  },
  placeMoreDetailsButton: {
    marginTop: 15,
    color: '#2438c9',
  },
});

export default PlaceScreen;
