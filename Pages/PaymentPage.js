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

function PaymentPage({ navigation }) {
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

export default PaymentPage;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
    tableInfo: {
    flex: 2,
    backgroundColor: '#faa',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    flexDirection: "column",
    borderWidth: 2,
  },
  paymentPart: {
    flex: 10,
    height:"95%",
    width:"95%",
    backgroundColor: '#fta',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    borderWidth: 2,
    flexDirection: "column",
  },
  methodPart: {
    flex: 2,
    backgroundColor: '#faa',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    flexDirection: "column",
    borderWidth: 2,
  },

});