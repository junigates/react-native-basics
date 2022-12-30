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
import MyCustomLists from '../../myconstantclasses/MyCustomLists';

const GoalMainScreen = () => {
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

  function ButtonView({clickFunction, text, colored}) {
    var color = colored ? colored : '#323232';

    return (
      <TouchableOpacity
        style={[
          Style_GoalMainScreen.buttonTouchabilityStyle,
          {backgroundColor: color},
        ]}
        onPress={clickFunction}>
        <Text style={{color: '#00ca87'}}>{text}</Text>
      </TouchableOpacity>
    );
  }

  function ListItem({goal}) {
    return (
      <TouchableOpacity
        key={goal.id}
        style={[
          Style_GoalMainScreen.listItemContainerStyle,
          {backgroundColor: flatScroll === 'scroll' ? '#323232' : '#02505d'},
        ]}>
        <Text key={goal.id} style={{color: '#00ca87', fontSize: 16}}>
          {goal.goal_name}
        </Text>
      </TouchableOpacity>
    );
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
            style={Style_GoalMainScreen.inputTextStyle}
            placeholder="Please Enter Goal Name"
            placeholderTextColor={'grey'}
          />
        </View>
        <View style={{flex: 1, marginStart: 5}}>
          <ButtonView text="Clear Text" clickFunction={clearText} />
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
          paddingHorizontal: 10,
          marginTop: 10,
        }}>
        <ButtonView text="Clear List" clickFunction={clearList} />
        <View style={{marginHorizontal: '3%'}}></View>
        <ButtonView text="Add New Goal" clickFunction={addGoal} />
      </View>

      <View
        style={{
          borderTopWidth: 1,
          borderTopColor: 'yellow',
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
          <View style={{marginHorizontal: '3%'}}></View>
          <ButtonView
            text="Scrollview"
            clickFunction={() => setFlatScroll('scroll')}
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
              You did not set any goal for 2023, chutiya hai kia?
            </Text>
          </View>
        ) : flatScroll === 'scroll' ? (
          <ScrollView alwaysBounceVertical={false}>
            <View style={{paddingHorizontal: 20, paddingVertical: 10}}>
              {goalList.map(goal => (
                <ListItem key={goal.id} goal={goal} />
              ))}
            </View>
          </ScrollView>
        ) : (
          <View style={{paddingHorizontal: 20, paddingVertical: 10}}>
            <FlatList
              data={goalList}
              renderItem={({item, index}) => (
                <ListItem key={item.id} goal={item} />
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

  listItemContainerStyle: {
    width: '100%',
    marginVertical: 5,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#323232',
  },

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

export default GoalMainScreen;
