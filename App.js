import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View>
      <View>
        <TextInput placeholder=' your course goal!'/>
        <Button title='Add Goal' />
      </View>
      <View></View>
      <View></View>
    </View>
  );
}


const styles = StyleSheet.create({
 
});
