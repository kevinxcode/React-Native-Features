import { useState } from 'react';
import {StyleSheet, Text, TextInput, View, Button} from 'react-native'
function GoalInput(props){
    const [enteredGoaltext, setEnteredGoalText] = useState(''); // variable
    // get from first view
    function goalInputHandler(enteredText) {
        // console.log(enteredText);
        setEnteredGoalText(enteredText);
      }
      // end 
      // button add 
      function addGoalHandler(){
        props.onAddGoal(enteredGoaltext);
      }
      // 


    return (
        <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder=' your course goal!'
          onChangeText={goalInputHandler} />
        <Button title='Add Goal' onPress={addGoalHandler} />
      </View>
    );
}
export default GoalInput;

const styles = StyleSheet.create({
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
})