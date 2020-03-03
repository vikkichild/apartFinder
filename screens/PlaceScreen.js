import React, {useState} from 'react';
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
  const [isVisibleDetailsBlock, setIsVisibleDetailsBlock] = useState(true);
  const [isVisibleAmenitiesBlock, setIsVisibleAmenitiesBlock] = useState(true);
  const [isVisibleDescriptionBlock, setIsVisibleDescriptionBlock] = useState(
    true,
  );
  const {place} = route.params;
  const checkMarkImage = (
    <Image
      style={styles.checkMarkIcon}
      source={{
        uri:
          'https://cdn2.iconfinder.com/data/icons/flat-ui-icons-24-px/24/checkmark-24-512.png',
      }}
    />
  );
  const toggleImageURL = condition =>
    condition
      ? 'https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-up-01-512.png'
      : 'https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-down-01-512.png';
  const displayAmenity = (condition, text) =>
    !!condition && (
      <View style={{flexDirection: 'row'}}>
        {checkMarkImage}
        <Text>{text}</Text>
      </View>
    );
  const displayPlace = () =>
    place && (
      <View>
        <View style={styles.placePhotoBlock}>
          <ImagesCarousel images={place.photos} />
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}>
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
          <Text style={styles.placeAddress}>
            {place.address} {place.city}
          </Text>
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
        <View
          style={[
            styles.placeDetailsBlock,
            {marginBottom: isVisibleDetailsBlock ? 15 : 0},
          ]}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.placeBlockTitle}>Details</Text>
            <TouchableOpacity
              style={styles.toggleIconButton}
              onPress={() => setIsVisibleDetailsBlock(!isVisibleDetailsBlock)}>
              <Image
                style={styles.toggleIcon}
                source={{
                  uri: toggleImageURL(isVisibleDetailsBlock),
                }}
              />
            </TouchableOpacity>
          </View>
          {isVisibleDetailsBlock && (
            <View style={{flexDirection: 'row'}}>
              <View style={{flex: 1}}>
                <Text>Type</Text>
                <Text>Area</Text>
                <Text>Bedrooms</Text>
                <Text>Bathrooms</Text>
                <Text>Price</Text>
                <Text>Price per sqft</Text>
                <Text>Ownership type</Text>
                <Text>Build year</Text>
              </View>
              <View style={{flex: 1}}>
                <Text>{place.property_type}</Text>
                <Text>
                  {place.sqft} sqft / {place.sqm} sqm
                </Text>
                <Text>{place.beds}</Text>
                <Text>{place.baths}</Text>
                <Text>{place.price}</Text>
                <Text>{place.price_sqft}</Text>
                <Text>{place.ownership_type}</Text>
                <Text>{place.year_build ? place.year_build : '---'}</Text>
              </View>
            </View>
          )}
        </View>
        <View
          style={[
            styles.placeAmenitiesBlock,
            {paddingBottom: isVisibleAmenitiesBlock ? 10 : 0},
          ]}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              style={styles.toggleIconButton}
              onPress={() =>
                setIsVisibleAmenitiesBlock(!isVisibleAmenitiesBlock)
              }>
              <Image
                style={styles.toggleIcon}
                source={{
                  uri: toggleImageURL(isVisibleAmenitiesBlock),
                }}
              />
            </TouchableOpacity>
            <Text style={styles.placeBlockTitle}>Amenities</Text>
          </View>
          {isVisibleAmenitiesBlock && (
            <View style={{flexDirection: 'row'}}>
              <View style={{flex: 1, paddingRight: 10}}>
                {displayAmenity(place.parking, 'Parking')}
                {displayAmenity(place.ac, 'A/C')}
                {displayAmenity(place.balcony, 'Balcony')}
                {displayAmenity(place.security, 'Security Service')}
                {displayAmenity(place.pets_allowed, 'Pets Allowed')}
                {displayAmenity(place.view_of_water, 'View of Water')}
                {displayAmenity(place.build_in_wardrobes, 'Build-in Wardrobes')}
                {displayAmenity(
                  place.build_in_kitchen_appliances,
                  'Build-in Kitchen Appliances',
                )}
                {displayAmenity(place.shared_gym, 'Shared Gym')}
                {displayAmenity(place.private_pool, 'Private Pool')}
              </View>
              <View style={{flex: 1}}>
                {displayAmenity(place.covered_parking, 'Covered Parking')}
                {displayAmenity(place.central_heat, 'Central Heat')}
                {displayAmenity(place.shared_pool, 'Shared Pool')}
                {displayAmenity(place.concierge_service, 'Concierge Service')}
                {displayAmenity(place.children_play_area, 'Children Play Area')}
                {displayAmenity(place.walk_in_closet, 'Walk-in Closet')}
                {displayAmenity(place.barbecue_area, 'Barbecue Area')}
                {displayAmenity(place.private_garden, 'Private Garden')}
                {displayAmenity(place.private_jacuzzi, 'Private Jacuzzi')}
              </View>
            </View>
          )}
        </View>
        <View
          style={[
            styles.placeDescriptionBlock,
            {paddingBottom: isVisibleDescriptionBlock ? 10 : 0},
          ]}>
          <View>
            <Text style={styles.placeBlockTitle}>Description</Text>
            <TouchableOpacity
              style={styles.toggleIconButton}
              onPress={() =>
                setIsVisibleDescriptionBlock(!isVisibleDescriptionBlock)
              }>
              <Image
                style={styles.toggleIcon}
                source={{
                  uri: toggleImageURL(isVisibleDescriptionBlock),
                }}
              />
            </TouchableOpacity>
          </View>
          {isVisibleDescriptionBlock && (
            <Text style={styles.placeDescriptionText}>{place.overview}</Text>
          )}
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
  placeDescriptionBlock: {
    paddingTop: 10,
    paddingLeft: 15,
    borderTopColor: '#d1d1d1',
    borderTopWidth: 7,
    borderBottomColor: '#d1d1d1',
    borderBottomWidth: 7,
  },
  placeBlockTitle: {
    fontWeight: 'bold',
    fontSize: 17,
    marginBottom: 10,
  },
  placeDescriptionText: {
    fontSize: 15,
    color: '#828282',
    paddingRight: 10,
  },
  placeDetailsBlock: {
    marginLeft: 15,
  },
  placeAmenitiesBlock: {
    borderTopColor: '#d1d1d1',
    borderTopWidth: 7,
    paddingTop: 10,
    paddingLeft: 15,
  },
  checkMarkIcon: {
    width: 15,
    height: 15,
    marginTop: 3,
    marginRight: 10,
  },
  toggleIconButton: {
    position: 'absolute',
    right: 15,
  },
  toggleIcon: {
    width: 25,
    height: 25,
  },
});

export default PlaceScreen;
