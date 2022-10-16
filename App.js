import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

export default function App() {
  const [enteredGoaltext, setEnteredGoalText] = useState('');
  const [courseGoal, setCourseGoals] = useState([]); // array 

  function goalInputHandler(enteredText) {
    // console.log(enteredText);
    setEnteredGoalText(enteredText);
  }
  function addGoalHandler() {
    // console.log(enteredGoaltext);
    setCourseGoals((currentCourseGoals) => [
      ...courseGoal,
      {text: enteredGoaltext, id: Math.random().toString()}
    ])
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder=' your course goal!'
          onChangeText={goalInputHandler} />
        <Button title='Add Goal' onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
      <FlatList 
      data={courseGoal} renderItem={(itemData) => {
        itemData.index
        return (
          <View style={styles.goalItem} >
            <Text style={styles.goalText}>{itemData.item.text}</Text>
          </View>
        );
      }} 
      keyExtractor={(item, index)=> {
        return item.id;
      }}
      alwaysBounceVertical={false}>
      </FlatList>
      </View>

    </View>
  );
}


const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 6
  },
  goalsContainer: {
    flex: 5,
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    color: 'white',
  }

});