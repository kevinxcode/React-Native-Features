
import {StyleSheet, Text, View, Pressable} from 'react-native'
function GoalItem(props){
    return (
        <View style={styles.goalItem} >
        <Pressable 
        android_ripple={{color: '#dddddd'}} // andoid riple
        onPress={props.onDeleteItem.bind(this,props.id)}
        style={({pressed}) => pressed && styles.pressItem}// press style  ios / android
        >
            <Text style={styles.goalText}>{props.text}</Text>
        </Pressable>
        </View>
    );
};
export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
      },
      pressItem:{
        backgroundColor: '#dddddd',
      },
      goalText: {
        padding: 8,
        color: 'white',
      }
});