import {
  Pressable,
  Image,
  Text,
  StyleSheet,
  Linking
} from 'react-native'

export default function GithubOne({link}) {
  const handlePressProject = () => {
      Linking.openURL(link);
    };
  return(
    <Pressable
      style={({pressed}) => [styles.btnProject, {backgroundColor: pressed ? '#DDDDDD' : '#000000'}]}
      onPress={handlePressProject}> 
      <Image 
      source={require('../assets/gh_white.png')} 
      style={{width: 16, height: 16}}/>
      <Text style={{color: '#ffffff'}}> Github</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btnProject: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: 'black',
  },
})