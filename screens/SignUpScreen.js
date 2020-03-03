import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import TopBar from '../components/TopBar';
import LoginForm from '../components/LoginForm';

const SignUpScreen = ({navigation}) => {
  const additionalBlock = () => {
    return (
      <View>
        <View style={styles.agreementBlock}>
          <Text>
            By creating an account you agree to our Terms of Use and Privacy
            Policy
          </Text>
        </View>
        <View style={styles.loginBlock}>
          <Text>Have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.loginLink}>Log in</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const sendSubmittedData = () => {
    console.log('send sign up data');
  };

  return (
    <View style={styles.container}>
      <TopBar
        handleButtonPress={() => navigation.navigate('CommonLogin')}
        icon={
          'https://icons.iconarchive.com/icons/icons8/ios7/256/Arrows-Left-icon.png'
        }
        title={'Sign Up'}
      />
      <LoginForm
        additionalBlock={additionalBlock}
        sendSubmittedData={sendSubmittedData}
        submitButtonText={'sign up'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  agreementBlock: {
    marginTop: 20,
    marginLeft: 15,
    marginRight: 15,
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

export default SignUpScreen;
