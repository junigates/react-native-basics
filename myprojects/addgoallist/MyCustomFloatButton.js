import React, {useState} from 'react';

import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Pressable,
  Image,
  FlatList,
  Modal,
} from 'react-native';

export default MyCustomFloatButton = props => {
  const {clickFunction} = props;

  return (
    <Pressable
      onPress={clickFunction}
      style={({pressed}) =>
        (pressed && {
          opacity: 0.5,
          flexDirection: 'row',
          justifyContent: 'flex-end',
        }) || {
          flexDirection: 'row',
          justifyContent: 'flex-end',
        }
      }>
      <View
        style={{
          elevation: 10,
          margin: 10,
          padding: 5,
          borderRadius: 100,
          backgroundColor: '#283139',
          alignSelf: 'baseline',
        }}>
        <Image
          style={{tintColor: 'white', width: 40, height: 40}}
          source={require('../../assets/images/ic_add.png')}
        />
      </View>
    </Pressable>
  );
};

const MyStyle = StyleSheet.create({
  mainContanor: {
    backgroundColor: 'grey',
  },
});
