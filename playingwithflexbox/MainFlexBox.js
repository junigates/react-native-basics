import React, {useState} from 'react';

import {View, Text, SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import MyBottomButton from '../myfiles/MyBottomButtons';
import MyJBox from '../myfiles/MyBox';
import MyCustomLists from '../myconstantclasses/MyCustomLists';
import FlexBoxListComponent from './FlexBoxListComponent';

const MainFlexBox = () => {
  const [flexDirection, setflexDirection] = useState('column');
  const [mainViewFlex, setMainViewFlex] = useState('center');
  const [crossAxisView, setCrossAxisView] = useState('center');
  const [flexValue, setFlexValue] = useState(1);

  function changeFlexDirection(direction) {
    setflexDirection(direction);
  }

  function setFlexPosition(direction) {
    setMainViewFlex(direction);
  }

  return (
    <View style={{flex: 1}}>
      <Text
        style={{
          backgroundColor: '#2a2a2a',
          fontSize: 20,
          alignItems: 'center',
          color: 'white',
          fontWeight: '900',
          textAlign: 'center',
          padding: 10,
        }}>
        Playing With FlexBox
      </Text>
      <View
        style={[
          MainFlexBoxSheet.MainViewStyle,
          {
            flexDirection: flexDirection,
            justifyContent: mainViewFlex,
            alignItems: crossAxisView,
          },
        ]}>
        <MyJBox name_vale={'L'} flexValue={flexValue} boxcolor={'#7a6001'} />
        <MyJBox name_vale={'T'} flexValue={flexValue} boxcolor={'#171717'} />
        <MyJBox name_vale={'R'} flexValue={flexValue} boxcolor={'#006b80'} />
        {/* <MyJBox boxcolor={'black'} /> */}
      </View>

      <View style={{backgroundColor: 'grey'}}>
        <View style={{flexDirection: 'row'}}>
          <View style={MainFlexBoxSheet.ListHeadings}>
            <Text style={{color: 'white'}}>Flex Direction</Text>
          </View>
          <View style={MainFlexBoxSheet.ListHeadings}>
            <Text style={{color: 'white'}}>Align Items</Text>
          </View>
          <View style={MainFlexBoxSheet.ListHeadings}>
            <Text style={{color: 'white'}}>Justify Content</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <View
            style={{
              flex: 1,
            }}>
            <View style={{flex: 2}}>
              <FlexBoxListComponent
                data_list={MyCustomLists.MyLists.FlexDirextions}
                changeDirectionFunc={changeFlexDirection}
                currentDirection={flexDirection}
              />
            </View>
            <View style={{flex: 1}}>
              <FlexBoxListComponent
                data_list={MyCustomLists.MyLists.FlexValues}
                changeDirectionFunc={direction => {
                  setFlexValue(parseInt(direction));
                }}
                currentDirection={flexValue.toString()}
              />
            </View>
          </View>
          <FlexBoxListComponent
            data_list={MyCustomLists.MyLists.AlignItemsList}
            changeDirectionFunc={direction => {
              setCrossAxisView(direction);
            }}
            currentDirection={crossAxisView}
          />
          <FlexBoxListComponent
            data_list={MyCustomLists.MyLists.JustifyContentList}
            changeDirectionFunc={setFlexPosition}
            currentDirection={mainViewFlex}
          />
        </View>
      </View>
    </View>
  );
};

export default MainFlexBox;

const MainFlexBoxSheet = StyleSheet.create({
  ListHeadings: {
    flex: 1,
    borderWidth: 0.2,
    borderColor: '#ffffff',
    paddingVertical: 5,
    backgroundColor: '#012a48',
    alignItems: 'center',
  },

  MainViewStyle: {
    justifyContent: 'center',
    padding: 5,
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#cccccc',
  },
});
