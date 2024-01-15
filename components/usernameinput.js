import React from 'react';
import {
  TextInput,
  StyleSheet
} from 'react-native';

export default function Inputbos() {
  const [username, onChangeText] = React.useState('');

  return(
  <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={username}
        placeholder="Username"
      />    
  );
}

const styles = StyleSheet.create({
input: {
    height: 40,
    marginTop: 12,
    borderWidth: 1,
    padding: 10,
  },

})


