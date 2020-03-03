import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {formatDate} from '../utils';

const PropertyListItem = ({item, handleItemPress}) => (
  <View key={item.id} style={styles.container}>
    <TouchableOpacity onPress={() => handleItemPress(item)}>
      <ImageBackground
        source={{
          uri: item.photos[0],
        }}
        style={styles.image}>
        <View style={styles.label}>
          <Text style={{color: '#ffffff'}}>
            {formatDate(item.data) < 1
              ? 'today'
              : `${formatDate(item.data)}d ago`}
          </Text>
        </View>
        <View style={styles.textBlock}>
          <View style={{flexDirection: 'row'}}>
            <Text style={[styles.priceText, styles.text]}>{item.price}</Text>
            <Text style={[styles.sizeText, styles.text]}>
              {item.beds} bd {item.baths} ba {item.sqft} sqft
            </Text>
          </View>
          <Text style={[styles.addressText, styles.text]}>{item.address}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    height: 200,
    marginBottom: 5,
  },
  text: {
    fontWeight: 'bold',
    color: '#ffffff',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },
  priceText: {
    fontSize: 25,
  },
  sizeText: {
    marginTop: 10,
    marginLeft: 5,
    fontSize: 15,
  },
  addressText: {
    fontSize: 17,
  },
  textBlock: {
    marginLeft: 20,
    position: 'absolute',
    bottom: 10,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  label: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    width: '17%',
    marginTop: 10,
    marginLeft: 15,
    paddingLeft: 5,
  },
});

export default PropertyListItem;
