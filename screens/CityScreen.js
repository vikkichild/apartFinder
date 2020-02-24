import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const CityScreen = ({navigation, route}) => {
  const {cityName} = route.params;
  const displayText = () => cityName && <Text>{cityName}</Text>;

  return <View style={styles.container}>{displayText()}</View>;
};

const styles = StyleSheet.create({
  container: {flex: 1},
});

export default CityScreen;
