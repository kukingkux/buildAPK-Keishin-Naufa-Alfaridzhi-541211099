import React from 'react';
import { 
  View, 
  ScrollView,
  Text, 
  StyleSheet, 
  Image,
  Pressable,
  Linking } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack

import Projects from '../components/projects';


export default function Porto() {
        
  return(
  <ScrollView style={styles.container}>
    <Image
    source={require('../assets/profile.png')} 
    style={styles.profile} />

    <Text style={styles.title}>Keishin Naufa Alfaridzhi</Text>
    <Text style={styles.paragraph}>
    Saya merupakan seseorang yang tertarik pada bidang IT khususnya untuk Software Programming seperti Website Development bagian Back-End Developer.
    </Text>

    <Pressable style={({pressed}) => [styles.btnLogin, {backgroundColor: pressed ? '#DDDDDD' : '#000000'}]} >
        <Text style={styles.btntext}>Contact Me</Text>
    </Pressable>
    <View style={{maxWidth:'100%', marginBottom: 80}}>
      <Text style={styles.title}>My Recent Project</Text>

      <Projects
      imageUri={require('../assets/project1.png')}
      name={'Website Jurnal Perusahaan'}
      desc={'Website Developing'}     
      linking={'https://github.com/kukingkux/website_jurnal'}
      />
            
      <Text style={{borderColor: 'black'}}></Text>

      <Projects
      imageUri={require('../assets/project2.png')}
      name={'Website Portfolio Client'}
      desc={'Website Developing'}
      linking={'https://github.com/kukingkux/Satoriya-Kobayashi-SATO'}
       />
       
    </View>
  </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#eaeaea',
    
    alignItems: 'center',
  },
  title: {
    marginTop: 20,
    paddingVertical: 8,
    color: 'black',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  paragraph: {
    fontSize: 14,
    margin: 10,
    color: 'grey',
    textAlign: 'center',
    justifyContent: 'center',
  },
  profile: {
    width: 156,
    height: 156,
    marginTop: 50,
    borderRadius: 10,
    marginLeft: '28%'
  },
  btnLogin: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
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



