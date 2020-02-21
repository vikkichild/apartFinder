import React from 'react';
import {StyleSheet, Text, ImageBackground, View, Button} from 'react-native';

import TopBar from '../components/TopBar';

const HomeScreen = ({navigation}) => (
  <View style={styles.container}>
    <TopBar />
    <ImageBackground
      source={{
        uri:
          'https://images.unsplash.com/photo-1577744062836-c90121eb0331?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80',
      }}
      style={{width: '100%', height: '100%'}}>
      <Text style={styles.text}>Home Screen</Text>
      <Button
        title="Next screen"
        onPress={() => navigation.navigate('Details')}
      />
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center'},
  text: {justifyContent: 'center', color: 'white', fontSize: 20},
});

export default HomeScreen;
