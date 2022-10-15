import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View>
        <TextInput placeholder=' your course goal!'/>
        <Button title='Add Goal' />
      </View>
      <View style={styles.appContent}>
        <Text>List of goals...</Text>
      </View>
     
    </View>
  );
}


const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
  },
  appContent:{
    paddingTop: 20,
  }
});
