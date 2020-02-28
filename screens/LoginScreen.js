import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import TopBar from '../components/TopBar';
import LoginForm from '../components/LoginForm';

const LoginScreen = ({navigation}) => {
  const additionalBlock = () => {
    return (
      <View>
        <View style={styles.resetPasswordBlock}>
          <TouchableOpacity onPress={() => alert('reset password')}>
            <Text style={styles.resetPasswordLink}>Reset your password</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.loginBlock}>
          <Text>Don't you have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.loginLink}>sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const sendSubmittedData = () => {
    console.log('send login data');
  };

  return (
    <View style={styles.container}>
      <TopBar
        handleButtonPress={() => navigation.navigate('SignUp')}
        icon={
          'https://icons.iconarchive.com/icons/icons8/ios7/256/Arrows-Left-icon.png'
        }
        title={'Log In'}
      />
      <LoginForm
        additionalBlock={additionalBlock}
        sendSubmittedData={sendSubmittedData}
        submitButtonText={'log in'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  resetPasswordBlock: {
    marginTop: 20,
    marginLeft: 15,
    marginRight: 15,
  },
  resetPasswordLink: {
    color: '#4096ff',
  },
  loginBlock: {
    flexDirection: 'row',
    marginTop: 5,
    marginLeft: 15,
    marginRight: 15,
  },
  loginLink: {
    marginLeft: 5,
    textTransform: 'uppercase',
    color: '#4096ff',
  },
});

export default LoginScreen;
