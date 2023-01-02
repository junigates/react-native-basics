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

export default UserInput = props => {
  const {enteredGoalHandler, enteredGoal, clearText, addGoal} = props;

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 10,
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: 10,
        }}>
        <View style={{flex: 3, marginEnd: 5}}>
          <TextInput
            textAlign="center"
            onChangeText={enteredGoalHandler}
            value={enteredGoal}
            style={Style_UserInput.inputTextStyle}
            placeholder="Please Enter Goal Name"
            placeholderTextColor={'grey'}
          />
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 10,
          marginTop: 5,
        }}>
        <View style={{flex: 1, marginStart: 5}}>
          <ButtonView text="Clear Text" clickFunction={clearText} />
        </View>
        <View style={{flex: 1, marginStart: 5}}>
          <ButtonView text="Add New Goal" clickFunction={addGoal} />
        </View>
      </View>
    </View>
  );
};

const Style_UserInput = StyleSheet.create({
  inputTextStyle: {
    padding: 10,
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
    borderRadius: 10,
    backgroundColor: 'white',
    borderColor: '#323232',
    borderWidth: 0.5,
  },
});
