import React from 'react';
import {
  View,
  Image,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const SearchScreen = ({navigation}) => {
  const [inputValue, onChangeInputValue] = React.useState('');

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image
            style={styles.searchIcon}
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
          onChangeText={text => onChangeInputValue(text)}
        />
        <TouchableOpacity
          style={styles.cleanIconButton}
          onPress={() => alert('button clicked')}>
          <Image
            style={styles.cleanIcon}
            source={{
              uri:
                'https://cdn3.iconfinder.com/data/icons/ui-icons-5/16/cross-small-01-512.png',
            }}
          />
        </TouchableOpacity>
      </View>
      <Text>{inputValue}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    height: 40,
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
  searchIcon: {
    width: 20,
    height: 20,
    marginTop: 10,
    marginLeft: 20,
  },
  textInput: {
    paddingTop: 8,
    paddingLeft: 10,
  },
  cleanIconButton: {
    marginTop: 10,
    position: 'absolute',
    right: 10,
  },
  cleanIcon: {
    width: 20,
    height: 20,
  },
});

export default SearchScreen;
