import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';

const App = () => {
    const [code, changeCode] = useState();
    return (
      <View style={styles.main}>
      <View style={styles.code}>
        <Text>Code:</Text>
        <TextInput
          style={styles.input}
          onChangeText={changeCode}
          value={code}
          placeholder="Enter your login code"
          keyboardType="numeric"
        />
        <Button title='Login'/>
      </View>
      </View>
    );
  }
  
  export default App;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  code: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
