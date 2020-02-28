import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';

const LoginForm = ({additionalBlock, sendSubmittedData, submitButtonText}) => {
  const [email, onEmailChange] = useState('');
  const [isShowEmailWarning, setIsShowEmailWarning] = useState(false);
  const [isShowPasswordWarning, setIsShowPasswordWarning] = useState(false);
  const [password, onPasswordChange] = useState('');
  const [emailInputFocus, setEmailInputFocus] = useState(false);
  const [passwordInputFocus, setPasswordInputFocus] = useState(false);
  const [isEmailPlaceholder, setIsEmailPlaceholder] = useState(true);
  const [isPasswordPlaceholder, setIsPasswordPlaceholder] = useState(true);

  useEffect(() => {
    setIsEmailPlaceholder(!emailInputFocus);
  }, [emailInputFocus]);

  useEffect(() => {
    setIsPasswordPlaceholder(!passwordInputFocus);
  }, [passwordInputFocus]);

  const handleSubmitButton = () => {
    if (
      !!email &&
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
    ) {
      console.log('email is valid');
      setIsShowEmailWarning(false);
    } else {
      setIsShowEmailWarning(true);
    }
    if (!!password && password.length > 7) {
      console.log('password is valid');
      setIsShowPasswordWarning(false);
    } else {
      setIsShowPasswordWarning(true);
    }
    if (!isShowEmailWarning && !isShowPasswordWarning) {
      sendSubmittedData();
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.textInputBlock}>
          {(emailInputFocus || !!email) && (
            <Text style={styles.textInputLabel}>Email</Text>
          )}
          <TextInput
            style={[
              styles.textInput,
              emailInputFocus ? styles.boldBorder : styles.thinBorder,
            ]}
            placeholder={isEmailPlaceholder ? 'Email' : ''}
            value={email}
            onFocus={() => setEmailInputFocus(true)}
            onBlur={() => setEmailInputFocus(false)}
            keyboardType={'email-address'}
            onChangeText={inputValue => onEmailChange(inputValue)}
          />
          {isShowEmailWarning && (
            <Text style={styles.warningText}>
              Please enter a valid email address
            </Text>
          )}
        </View>
        <View style={styles.textInputBlock}>
          {(passwordInputFocus || !!password) && (
            <Text style={styles.textInputLabel}>Password</Text>
          )}
          <TextInput
            style={[
              styles.textInput,
              passwordInputFocus ? styles.boldBorder : styles.thinBorder,
            ]}
            placeholder={isPasswordPlaceholder ? 'Password' : ''}
            secureTextEntry={true}
            value={password}
            onFocus={() => setPasswordInputFocus(true)}
            onBlur={() => setPasswordInputFocus(false)}
            onChangeText={inputValue => onPasswordChange(inputValue)}
          />
          {isShowPasswordWarning && (
            <Text style={styles.warningText}>
              Password must contain minimum 8 characters
            </Text>
          )}
        </View>
      </View>
      {additionalBlock()}
      <View style={styles.submitBlock}>
        <TouchableOpacity
          style={styles.submitButton}
          onPress={handleSubmitButton}>
          <Text style={styles.submitButtonText}>{submitButtonText}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  textInputBlock: {
    marginTop: 10,
    marginLeft: 15,
    marginRight: 15,
  },
  textInput: {
    marginTop: 7,
    paddingLeft: 10,
    paddingRight: 10,
    borderColor: '#9e9b9b',
    borderRadius: 5,
    fontSize: 17,
  },
  boldBorder: {
    borderWidth: 2,
  },
  thinBorder: {
    borderWidth: 1,
  },
  textInputLabel: {
    color: '#737373',
    fontWeight: 'bold',
    fontSize: 17,
  },
  warningText: {
    color: '#d90000',
  },
  submitBlock: {
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
  },
  submitButton: {
    height: 40,
    width: 120,
    backgroundColor: '#d90000',
    borderRadius: 25,
  },
  submitButtonText: {
    color: '#ffffff',
    marginTop: 10,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
});

export default LoginForm;
