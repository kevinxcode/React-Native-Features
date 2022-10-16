import { useState } from 'react';
import {StyleSheet, Text, TextInput, View, Button, Modal} from 'react-native'
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

       // hide modal
    function endAddHandler(){
        SetModalIsVisible(false);
      }
      // end hide modal


    return (
        <Modal visible={props.visible} animationType="slide">
        <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder=' your course goal!'
          onChangeText={goalInputHandler} />
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                <Button title='Add Goal' onPress={addGoalHandler} />
                </View>
                <View style={styles.button}>
                <Button title='Cancel' onPress={props.onCancel}  />
                </View>
            </View>
      </View>
      </Modal>
    );
}
export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        // flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
      },
      textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '100%',
        marginRight: 8,
        padding: 6
      },
      buttonContainer:{
        marginTop: 16,
        flexDirection: 'row',
      },
      button:{
        width: '30%',
        marginHorizontal: 8
      }
})