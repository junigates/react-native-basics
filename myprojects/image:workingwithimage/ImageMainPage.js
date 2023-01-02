import React, {useState} from 'react';

import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Image,
} from 'react-native';

export default ImageMainPage = () => {
  return (
    <View style={MyStyle.maincontainor}>
      <Image source={require('../../assets/images/download.png')} />
    </View>
  );
};

const MyStyle = StyleSheet.create({
  maincontainor: {
    flex: 1,
    backgroundColor: '#d8d8d8',
  },
});
