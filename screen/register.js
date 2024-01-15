import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  TextInput,
  Pressable,
} from 'react-native';

import React from 'react';

export default function Login({navigation}) {
  const [username, password, onChangeText] = React.useState('');

  return (
    <View style={styles.container}>
      <Image source={require('../assets/snack-icon.png')} style={styles.logo} />
      <Text style={styles.title}>Selamat Datang,</Text>
      <Text style={styles.description}>Register untuk mendapatkan akun :3</Text>

      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={username}
        placeholder="Username"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={username}
        placeholder="Email"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={password}
        placeholder="Password"
        secureTextEntry={true}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={password}
        placeholder="Confirm Password"
        secureTextEntry={true}
      />

      <Pressable
       style={styles.btnRegister}
       onPress={() => navigation.navigate('Portfolio')}>
        <Text style={styles.btntext}>Register</Text>
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

      <View style={{flexDirection: 'row'}}>
      <Text style={[styles.reset, {}]}>Sudah punya akun?</Text>
      <Pressable
      onPress={() => navigation.navigate('Login')}>
      <Text style={[styles.reset, {color: '#0275d8'}]}> Login</Text>
      </Pressable>
      </View>

      
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
    marginTop: 5,
    marginBottom: 30,
  },
  btnRegister: {
    flexDirection: 'row',
    marginTop: 30,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },

  btntext: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },

});
