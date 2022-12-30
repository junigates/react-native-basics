import React, {useState} from 'react';

import {SafeAreaView} from 'react-native';
import GoalMainScreen from './myprojects/addgoallist/GoalMainScreen';
import MainFlexBox from './playingwithflexbox/MainFlexBox';

function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* You can comment a screen and uncomment other one to play.*/}
      <GoalMainScreen />
    </SafeAreaView>
  );
}

export default App;

//  Playing  with flex box
//  <MainFlexBox />
