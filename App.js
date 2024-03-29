import React, {useState} from 'react';

import {SafeAreaView} from 'react-native';
import GoalMainScreen from './myprojects/addgoallist/GoalMainScreen';
import GoalMainScreen_Modal from './myprojects/addgoallist/GoalMainScreen_Modal';
import ImageMainPage from './myprojects/image:workingwithimage/ImageMainPage';
import MainFlexBox from './playingwithflexbox/MainFlexBox';

function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* You can comment a screen and uncomment other one to play.*/}
      <GoalMainScreen_Modal />
    </SafeAreaView>
  );
}

export default App;

//  Playing  with flex box
//  <MainFlexBox />
