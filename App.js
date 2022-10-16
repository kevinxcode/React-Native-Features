import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';


export default function App() {
  const [courseGoal, setCourseGoals] = useState([]); // array 

 // set on first view
  function addGoalHandler(enteredGoaltext) {
    // console.log(enteredGoaltext);
    setCourseGoals((currentCourseGoals) => [
      ...courseGoal,
      {text: enteredGoaltext, id: Math.random().toString()}
    ])
  }
  // end  
  // delete 
  function deleteGoalHandler(id){
    console.log(id);
    setCourseGoals(currentCourseGoals =>{
      return currentCourseGoals.filter((goal) =>goal.id !==id);
    });
  }
  // end felet

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
      <FlatList 
      data={courseGoal} renderItem={(itemData) => {
        itemData.index
        return <GoalItem text={itemData.item.text} 
        id={itemData.item.id}
        onDeleteItem={deleteGoalHandler}/>;
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
  
  goalsContainer: {
    flex: 5,
  },
  

});