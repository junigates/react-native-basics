import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const MyJBox = props => {
  const {boxcolor, flexValue, name_vale} = props;

  return (
    <View
      style={[
        MyJBoxStyleSheet.MainView,
        {backgroundColor: boxcolor, flex: flexValue},
      ]}>
      <Text style={{color: 'white', fontWeight: 'bold', fontSize: 24}}>
        {name_vale}
      </Text>
      <Text style={{color: 'white', fontWeight: 'bold'}}>Flex {flexValue}</Text>
    </View>
  );
};

const MyJBoxStyleSheet = StyleSheet.create({
  MainView: {
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    backgroundColor: 'green',
    borderWidth: 1,
    borderColor: 'black',
  },
});

export default MyJBox;
