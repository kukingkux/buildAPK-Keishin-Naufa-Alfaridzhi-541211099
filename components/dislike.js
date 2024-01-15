import React from 'react';
import {
  View,
  Pressable,
  Text,
} from 'react-native';

export default function Dislike() {
  const [dislikeCount, setDislikeCount] = React.useState(0);

  const handleDislike = () => {
      setDislikeCount(dislikeCount + 1);
    };

  return(
  <View style={{flexDirection: 'column', alignItems: 'center'}}>
    <Pressable
    onPress={handleDislike}
    style={({pressed}) => [{backgroundColor: pressed ? '#DDDDDD' : '#eaeaea',
    color: 'black',
    width: 40,
    minHeight: 40,
    borderRadius: 40/2,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#000000',
    borderWidth: 2,
    }]}>
      <Text>Dislike</Text>
    </Pressable>
    <Text>{dislikeCount}</Text>
  </View>
  );
}