import React from 'react';
import {View, Image, StyleSheet, Dimensions, ScrollView} from 'react-native';

const DEVICE_WIDTH = Dimensions.get('window').width;

const ImageCarousel = ({images}) => (
  <View style={{height: '100%', width: '100%'}}>
    <ScrollView horizontal pagingEnabled>
      {images.map(image => (
        <Image key={image} source={{uri: image}} style={styles.image} />
      ))}
    </ScrollView>
  </View>
);
const styles = StyleSheet.create({
  image: {
    height: '100%',
    width: DEVICE_WIDTH,
  },
});

export default ImageCarousel;
