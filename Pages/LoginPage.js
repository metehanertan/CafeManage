import * as React from 'react';
import { useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Dimensions, Platform, PixelRatio } from 'react-native';

var {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
} = Dimensions.get('window');

export function normalize(size) {
  const newSize = size * scale 
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize))
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
  }
}

// based on iphone 5s's scale
const scale = SCREEN_WIDTH / 320;

function LoginPage({ navigation }) {
    const [code, changeCode] = useState();
    return (
      <View style={styles.main}>
      <View style={styles.code}>
        <Text style={styles.CodeText}>Code:</Text>
        <TextInput
          style={styles.input}
          onChangeText={changeCode}
          value={code}
          placeholder="Enter your login code"
          fontSize = {normalize(10)}
          keyboardType="numeric"
        />
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "powderblue" }]}
          onPress={() => navigation.navigate('MainPage')}
        >
          <Text style={styles.ButtonText}>Giris yap</Text>
        </TouchableOpacity>
      </View>
      </View>
    );
  }

export default LoginPage;

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
    height:"10%",
    width:"150%",
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: normalize(11),
  },
  CodeText: {
    fontSize: normalize(20)
  },
  ButtonText: {
    fontSize: normalize(11)
  },
  button: {
    height:"14%",
    width:"90%",
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'wrap',
    borderWidth: 2,
    borderRadius: 10,
  },
});