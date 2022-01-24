import React, {useState} from 'react';
import {FlatList, View, ScrollView, Text, StyleSheet} from 'react-native';
import {DisplayName} from './components/displayName';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App = () => {
  const [details, setDetails] = useState([
    {name: 'harish', id: 1},
    {name: 'jai', id: 2},
    {name: 'kumar', id: 3},
    {name: 'san', id: 4},
    {name: 'pandu', id: 5},
    {name: 'harish', d: 16},
    {name: 'jai', id: 25},
    {name: 'kumar', id: 35},
    {name: 'san', id: 45},
    {name: 'pandu', id: 55},
  ]);
  var i = 0;
  const deleteItem = id => {
    const newDetails = [...details];
    newDetails.splice(id, 1);
    setDetails(newDetails);
    // console.log('the id i shere ', id);
  };

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <GestureHandlerRootView style={{flex: 1}}>
      <View style={styles.container}>
        <FlatList
          keyExtractor={item => item.id}
          data={details}
          renderItem={({item, index}) => (
            <DisplayName data={item} handleDelete={() => deleteItem(index)} />
          )}
        />
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  item: {
    backgroundColor: '#26C6DA',
    textAlign: 'center',
    marginHorizontal: 10,
    marginTop: 10,
    fontSize: 40,
    color: 'white',
    padding: 10,
    borderRadius: 5,
  },
});

export default App;
