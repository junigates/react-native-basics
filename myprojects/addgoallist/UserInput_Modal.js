import React, {useState} from 'react';

import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
  FlatList,
  Modal,
} from 'react-native';
import ButtonView from './ButtonView';

export default UserInput_Modal = props => {
  const {
    enteredGoalHandler,
    enteredGoal,
    clearText,
    addGoal,
    startAddGoalHandler,
  } = props;

  return (
    <Modal
      onShow={() => {
        console.log('modal show');
      }}
      visible={props.visible}
      animationType="slide">
      <SafeAreaView
        style={{
          backgroundColor: '#c6c6c6',
          flex: 1,
          justifyContent: 'flex-start',
        }}>
        <Image
          resizeMode="cover"
          style={Style_UserInput.imageView}
          source={require('../../assets/images/download.png')}
        />
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
            <ButtonView
              text="Cancel"
              clickFunction={startAddGoalHandler.bind(this, false)}
              colored={'#24202e'}
            />
          </View>
          <View style={{flex: 1, marginStart: 5}}>
            <ButtonView text="Clear Text" clickFunction={clearText} />
          </View>
          <View style={{flex: 1, marginStart: 5}}>
            <ButtonView text="Add New Goal" clickFunction={addGoal} />
          </View>
        </View>
      </SafeAreaView>
    </Modal>
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
  imageView: {
    height: 200,
    width: '100%',
  },
});
