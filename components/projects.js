import { Image, StyleSheet, View, Text } from 'react-native'

import BtnLike from './like'
import BtnDislike from './dislike'
import BtnGithub from './github'

export default function Projects({imageUri, name, desc, linking}){
  return(
    <>
      <Image
      source={imageUri}
      style={styles.project}
      />

      <Text
      name={name}
      style={styles.projectTitle}>{name}</Text>
      <Text
      desc={desc}
      >{desc}</Text>
      <Text
      >View On:</Text>
      
      <BtnGithub
      link={linking}
      />

      <View
        style={styles.count}>
          
          <BtnLike />
          <BtnDislike />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  project: {
      maxWidth: '100%',
      maxHeight: 350,
      marginTop: 10,
      marginBottom: 10,
      borderRadius: 4,
  },
  count: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 5,
  },
  projectTitle: {
    fontWeight: 'bold',
    textAlign: 'left',
    fontSize: 18,
  },
});