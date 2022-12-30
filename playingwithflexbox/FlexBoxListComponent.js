import React, {useState} from 'react';

import {View, FlatList} from 'react-native';
import MyBottomButton from '../myfiles/MyBottomButtons';

const FlexBoxListComponent = props => {
  const {data_list, changeDirectionFunc, currentDirection} = props;

  const getSelectedColor = (direction1, direction2) => {
    return direction1.toLowerCase() === direction2.toLowerCase()
      ? '#018b69'
      : '#00a9ae';
  };

  return (
    <View style={{flex: 1}}>
      <FlatList
        horizontal={false}
        data={data_list}
        renderItem={({item, index}) => {
          return (
            <MyBottomButton
              backColor={getSelectedColor(currentDirection, item.id)}
              list_item={item}
              changeDirection={changeDirectionFunc}
            />
          );
        }}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default FlexBoxListComponent;
