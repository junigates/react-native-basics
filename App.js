import React, {useState} from 'react';

import {SafeAreaView} from 'react-native';
import MainFlexBox from './playingwithflexbox/MainFlexBox';

function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <MainFlexBox />
    </SafeAreaView>
  );
}

export default App;
