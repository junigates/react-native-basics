import React, {useState} from 'react';

import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';

export default ButtonView = props => {
  const {clickFunction, text, colored} = props;

  var color = colored ? colored : '#323232';

  return (
    <TouchableOpacity
      style={[
        Style_ButtonView.buttonTouchabilityStyle,
        {backgroundColor: color},
      ]}
      onPress={clickFunction}>
      <Text style={{color: '#00ca87'}}>{text}</Text>
    </TouchableOpacity>
  );
};

const Style_ButtonView = StyleSheet.create({
  buttonTouchabilityStyle: {
    width: 'auto',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#323232',
  },
});
