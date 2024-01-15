import React from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  TextInput,
  Pressable,
} from 'react-native';

import UsernameInput from '../components/usernameinput'
import PasswordInput from '../components/passwordinput'


export default function Login({navigation}) {

  return (
    <View style={styles.container}>
      <Image source={require('../assets/snack-icon.png')} style={styles.logo} />
      <Text style={styles.title}>Hello,</Text>
      <Text style={styles.description}>Masuk untuk melanjutkan yh</Text>

      <UsernameInput />
      <PasswordInput />
            
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      
      <Text style={styles.reset}>Lupa Password ?</Text>
      <Pressable
      onPress={() => navigation.navigate('Register')}>
      <Text style={[styles.reset, {color: '#0275d8'}]}>Belum punya akun? Register</Text>
      </Pressable>
      </View>

      <Pressable 
      style={styles.btnLogin}
      onPress={() => navigation.navigate('Portfolio')}
      >
        
        <Text style={styles.btntext}>Login</Text>
        
        
      </Pressable>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 10,
          marginBottom: 10,
          gap: 12,
        }}>
        <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
        <View>
          <Text
            style={{
              width: 30,
              paddingBottom: 2,
              textAlign: 'center',
              fontWeight: 'bold',
            }}>
            Atau
          </Text>
        </View>
        <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
      </View>

     

      <Pressable style={[styles.btnLogin, styles.btnSocial]}>
        <Image
          source={require('../assets/google.png')}
          style={styles.logoOptions}
        />
        <Text style={styles.btntext}> Google</Text>
      </Pressable>
      <Pressable style={[styles.btnLogin, styles.btnSocial]}>
        <Image
          source={require('../assets/facebook.png')}
          style={styles.logoOptions}
        />
        <Text style={styles.btntext}> Facebook</Text>
      </Pressable>
      
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    padding: 48,
    backgroundColor: '#fafafa',
  },
  logo: {
    width: 96,
    height: 96,
  },
  title: {
    marginTop: 10,
    paddingVertical: 8,
    color: 'black',
    textAlign: 'left',
    fontSize: 30,
    fontWeight: 'bold',
  },
  description: {
    color: 'grey',
  },
  input: {
    height: 40,
    marginTop: 12,
    borderWidth: 1,
    padding: 10,
  },
  reset: {
    textAlign: 'right',
    marginTop: 30,
    marginBottom: 30,
  },
  btnLogin: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
  btnSocial: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'left',
    minHeight: 48,
    color: '#ffffff',
  },
  btntext: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  logoOptions: {
    maxWidth: 16,
    maxHeight: 16,
  },
});
