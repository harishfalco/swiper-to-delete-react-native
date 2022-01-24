import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

export const DisplayName = ({data, handleDelete}) => {
  const leftActions = () => {
    return (
      <TouchableOpacity onPress={() => handleDelete()}>
        <View style={style.deleteBtn}>
          <Text style={style.deleteText}>Delete</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <Swipeable renderLeftActions={leftActions}>
      <Text style={style.item}>
        {data.name} {data.id}
      </Text>
    </Swipeable>
  );
};

const style = StyleSheet.create({
  item: {
    flex: 1,
    backgroundColor: '#26C6DA',
    textAlign: 'center',
    marginHorizontal: 10,
    marginTop: 10,
    fontSize: 40,
    color: 'white',
    padding: 10,
    borderRadius: 5,
  },
  deleteBtn: {
    backgroundColor: '#f44336',
    flex: 1,
    height: 55,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  deleteText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
