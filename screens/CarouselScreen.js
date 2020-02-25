import React from 'react';
import {View, StyleSheet} from 'react-native';
import ImageCarousel from '../components/ImagesCarousel';

const CarouselScreen = () => {
  const images = [
    'https://lc.zoocdn.com/ac63a75a1b8f542bfd7fc1748283d83d2d866296.jpg',
    'https://lc.zoocdn.com/b9ae6e1d5a163b9d78fc7567ce93d05184538b07.jpg',
    'https://lc.zoocdn.com/cbc370d29dff6a49cef049ff6f1c38e7be7a5ced.jpg',
    'https://lc.zoocdn.com/3b3cc8fa164fcaaaf677dc0bb5355b6d00db621f.jpg',
    'https://lc.zoocdn.com/dcca2306ec7c9ea484f4b095cbeeb803637e4d38.jpg',
    'https://lc.zoocdn.com/02fcebf56b82bbcbd899857171e3dc189c4cbecf.jpg',
    'https://lc.zoocdn.com/b14f63349086923f70f8ccc2e4bf289cc76a365c.jpg',
    'https://lc.zoocdn.com/82c2b151fab990dc123b5420087bf1cb2f5313f7.jpg',
  ];

  return (
    <View style={styles.container}>
      <ImageCarousel images={images} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#f5fcff',
  },
});

export default CarouselScreen;
