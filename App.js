import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={{padding: 50}}>
      <View style={{
        backgroundColor: 'red',
        width: '100%',
        height: 100,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text>box 1</Text>
      </View>
      <View style={{
        backgroundColor: 'blue',
        width: '100%',
        height: 100,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text>Box 2</Text>
      </View>
      <View style={{
        backgroundColor: 'green',
        width: '100%',
        height: 100,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text>Box 3</Text>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  
});
