import React from 'react';
import {
  View,
  Pressable,
  Text,
} from 'react-native';

export default function Like() {
  const [likeCount, setLikeCount] = React.useState(0);
    

  const handleLike = () => {
    setLikeCount(likeCount + 1);
  };

  return(
  <View style={{flexDirection: 'column', alignItems: 'center'}}>
        <Pressable
        onPress={handleLike}
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
          <Text>Like</Text>
        </Pressable>
        <Text>{likeCount}</Text>
        </View>
  );
}