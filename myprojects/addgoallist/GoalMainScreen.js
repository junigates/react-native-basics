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
import ButtonView from './ButtonView';
import GoalItem from './GoalItem';
import UserInput from './UserInput';

export default GoalMainScreen = () => {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [goalList, setGoalList] = useState([]);
  const [flatScroll, setFlatScroll] = useState('scroll');

  const newObject = name => {
    const randomNumber = Math.random().toString();
    return {id: randomNumber, goal_name: name};
  };

  function enteredGoalHandler(text) {
    setEnteredGoal(text);
  }

  function deleteGoal(delete_id) {
    setGoalList(currentList => {
      return currentList.filter(goal => goal.id !== delete_id);
    });
  }

  function addGoal() {
    setGoalList(currentList => [...currentList, newObject(enteredGoal)]);
    setEnteredGoal('');
  }

  function clearList() {
    setGoalList(currentList => []);
    setEnteredGoal('');
  }

  function clearText() {
    setEnteredGoal('');
  }

  return (
    <View style={Style_GoalMainScreen.maincontainer}>
      <View
        style={{
          backgroundColor: '#000000',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 24,
            color: '#00ca87',
            paddingVertical: 10,
          }}>
          2023 Goals List
        </Text>
      </View>

      <UserInput
        enteredGoalHandler={enteredGoalHandler}
        enteredGoal={enteredGoal}
        clearText={clearText}
        addGoal={addGoal}
      />

      <View
        style={{
          borderTopWidth: 1,
          borderTopColor: 'green',
          marginTop: 10,
          paddingHorizontal: 20,
          paddingVertical: 10,
          justifyContent: 'flex-start',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <Text style={{color: '#00ca87', fontSize: 18, fontWeight: 'bold'}}>
          List ({goalList.length})
        </Text>
        <View style={{marginHorizontal: '3%'}}></View>
        <View
          style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>
          <ButtonView
            text="Flatlist"
            colored={'#02505d'}
            clickFunction={() => {
              setFlatScroll('flat');
            }}
          />
          <View style={{marginHorizontal: '2%'}}></View>
          <ButtonView
            text="Scrollview"
            clickFunction={() => setFlatScroll('scroll')}
          />
          <View style={{marginHorizontal: '2%'}}></View>
          <ButtonView
            colored={'#3a4602'}
            text="Clear List"
            clickFunction={clearList}
          />
        </View>
      </View>
      <View style={{flex: 1}}>
        {goalList.length === 0 ? (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              paddingHorizontal: 20,
            }}>
            <Text
              style={{
                fontSize: 20,
                color: '#00ca87',
                textAlign: 'center',
              }}>
              You did not set any goal for 2023!!!
            </Text>
          </View>
        ) : flatScroll === 'scroll' ? (
          <ScrollView alwaysBounceVertical={false}>
            <View style={{paddingHorizontal: 20, paddingVertical: 10}}>
              {goalList.map(goal => (
                <GoalItem
                  goal={goal}
                  flatScroll={flatScroll}
                  deleteGoal={deleteGoal}
                />
              ))}
            </View>
          </ScrollView>
        ) : (
          <View style={{paddingHorizontal: 20, paddingVertical: 10}}>
            <FlatList
              data={goalList}
              renderItem={({item, index}) => (
                <GoalItem
                  goal={item}
                  flatScroll={flatScroll}
                  deleteGoal={deleteGoal}
                />
              )}
              keyExtractor={item => item.id}
            />
          </View>
        )}
      </View>
    </View>
  );
};

const Style_GoalMainScreen = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: '#555555',
  },

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
