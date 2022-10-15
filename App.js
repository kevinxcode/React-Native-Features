import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={{marginBottom: 10}}>
        <Text >another text</Text>
      </View>
    {/* inline css  */}
      <Text style={{margin: 16, borderWidth: 2, borderColor: 'red', padding: 16}}>INLINE STYLE</Text> 
      {/* css in constan */}
      <Text style={styles.dummyText}>Login</Text>
    
      <Button title='Tap Me' />

    </View>
  );
}

const style2 = StyleSheet.create({

})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dummyText:{
    margin: 16,
    borderWidth: 2,
    borderColor: 'blue',
    padding: 16
  }
});
