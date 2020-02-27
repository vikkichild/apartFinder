import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';

const LoginScreen = ({navigation}) => (
  <View style={styles.container}>
    <View style={styles.headerBlock}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Image
          style={styles.backIcon}
          source={{
            uri:
              'https://icons.iconarchive.com/icons/icons8/ios7/256/Arrows-Left-icon.png',
          }}
        />
      </TouchableOpacity>
      <Text style={styles.title}>Sign Up or Log In</Text>
    </View>
    <View style={styles.loginTextBlock}>
      <Text style={styles.loginTextTitle}>One account. All devices.</Text>
      <Text style={styles.loginText}>
        Sign up to keep track of your favorite homes across all your devices.
      </Text>
    </View>
    <View style={styles.loginButtonBlock}>
      <TouchableOpacity
        onPress={() => alert('Google Login Page')}
        style={[styles.loginButtonGoogle, styles.loginButton]}>
        <Image
          style={styles.googleIcon}
          source={{
            uri:
              'https://www.jing.fm/clipimg/full/181-1814835_google-logo-png-circle-google-icon-png-white.png',
          }}
        />
        <Text style={[styles.loginButtonText, styles.loginButtonGoogleText]}>
          Continue with Google
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => alert('Facebook Login Page')}
        style={[styles.loginButtonFacebook, styles.loginButton]}>
        <Image
          style={styles.facebookIcon}
          source={{
            uri:
              'https://cdn1.iconfinder.com/data/icons/social-media-set-for-free/32/facebook-512.png',
          }}
        />
        <Text style={[styles.loginButtonText, styles.loginButtonFacebookText]}>
          Continue with Facebook
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => alert('Email Login Page')}
        style={[styles.loginButtonEmail, styles.loginButton]}>
        <Image
          style={styles.emailIcon}
          source={{
            uri:
              'https://cdn0.iconfinder.com/data/icons/google-material-design-3-0/48/ic_email_48px-512.png',
          }}
        />
        <Text style={[styles.loginButtonText, styles.loginButtonEmailText]}>
          Continue with Email
        </Text>
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  headerBlock: {
    height: 50,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#b8b8b8',
    paddingTop: 10,
    paddingLeft: 15,
    paddingRight: 10,
  },
  title: {
    marginLeft: 25,
    fontSize: 20,
    fontWeight: 'bold',
  },
  backIcon: {
    marginTop: 3,
    width: 25,
    height: 25,
  },
  loginTextBlock: {
    marginTop: 100,
    marginLeft: 40,
  },
  loginTextTitle: {
    fontSize: 30,
  },
  loginText: {
    fontSize: 18,
    marginTop: 15,
    color: '#828282',
    textAlign: 'center',
    paddingRight: 30,
  },
  loginButtonBlock: {
    marginTop: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButton: {
    flexDirection: 'row',
    width: 300,
    height: 50,
    marginBottom: 20,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  loginButtonGoogle: {
    backgroundColor: '#4c8bf5',
  },
  loginButtonText: {
    marginTop: 15,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  loginButtonGoogleText: {
    marginLeft: 15,
    color: '#ffffff',
  },
  googleIcon: {
    marginTop: 12,
    marginLeft: 20,
    height: 25,
    width: 25,
  },
  loginButtonFacebook: {
    backgroundColor: '#3b5998',
  },
  loginButtonFacebookText: {
    marginLeft: 3,
    color: '#ffffff',
  },
  facebookIcon: {
    marginLeft: 8,
    height: 50,
    width: 50,
  },
  loginButtonEmail: {
    backgroundColor: '#fffbfa',
  },
  loginButtonEmailText: {
    marginLeft: 10,
    color: '#d90000',
  },
  emailIcon: {
    marginTop: 10,
    marginLeft: 20,
    height: 30,
    width: 30,
  },
});

export default LoginScreen;
