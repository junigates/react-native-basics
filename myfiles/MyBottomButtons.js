import React, {useState} from 'react';

import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const MyBottomButton = props => {
  const {list_item, changeDirection, backColor} = props;

  const myBackColor = backColor ? backColor : '#00a9ae';

  return (
    <TouchableOpacity
      style={[MyBottomButtonStyle.ButtonStyle, {backgroundColor: myBackColor}]}
      onPress={() => changeDirection(list_item.id)}>
      <Text style={{color: 'white'}}>{list_item.name}</Text>
    </TouchableOpacity>
  );
};

export default MyBottomButton;

const MyBottomButtonStyle = StyleSheet.create({
  ButtonStyle: {
    alignItems: 'center',
    backgroundColor: '#b96900',
    padding: 10,
  },
});
