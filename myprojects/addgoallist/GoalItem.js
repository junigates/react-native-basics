import React, {useState} from 'react';

import {
  View,
  StyleSheet,
  TextInput,
  Text,
  Pressable,
  ScrollView,
  FlatList,
} from 'react-native';

export default GoalItem = props => {
  const {goal, flatScroll, deleteGoal} = props;

  return (
    <View
      key={goal.id}
      style={[
        Style_GoalItem.listItemContainerStyle,
        {backgroundColor: flatScroll === 'scroll' ? '#323232' : '#02505d'},
      ]}>
      <View style={{flex: 1}}>
        <Text key={goal.id} style={{color: '#00ca87', fontSize: 16}}>
          {goal.goal_name}
        </Text>
      </View>
      <View
        style={{
          backgroundColor: '#515151',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 5,
          borderRadius: 5,
        }}>
        <Pressable
          style={({pressed}) => pressed && Style_GoalItem.pressedItem}
          android_ripple={'#290960'}
          onPress={deleteGoal.bind(this, goal.id)}>
          <Text style={{color: 'white', fontSize: 10}}>Delete</Text>
        </Pressable>
      </View>
    </View>
  );
};

const Style_GoalItem = StyleSheet.create({
  listItemContainerStyle: {
    width: '100%',
    marginVertical: 5,
    flexDirection: 'row',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#323232',
  },

  pressedItem: {
    opacity: 0.5,
  },
});
