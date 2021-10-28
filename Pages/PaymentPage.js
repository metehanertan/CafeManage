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
const scale = SCREEN_WIDTH / 320;

function PaymentPage({ navigation }) {
    var tableItems = [];
    var tableNumber = 5;
    var remainingMoney = 0;
    var totalMoney = 0;
    var payedAmount = 0;
    var enteredAmount= 0;
    var paymentMethod;
    var keypad = [1,2,3,4,5,6,7,8,9,'.',0,'<-']

    ///////////////////////////////////////////////////////
    for (let i = 0; i < tableNumber; i++) {
      var item = [];
      item.push(i);
      item.push(i*2);
      tableItems.push(item);
    }
    ///////////////////////////////////////////////////////

    //Calculate 
    tableItems.forEach(item => {
      totalMoney = totalMoney + item[1];
    });
    remainingMoney = totalMoney;


    return (
      <View style={styles.main}>
        <View style={styles.tableInfo}>
          {/* Showing table details */}
          <View style={styles.tableName}>
            {/* Showing table name */}
            <Text style={[styles.tableText,{ marginBottom : 15 }]}>Masa {tableNumber}</Text>
          </View>
          <View style={styles.itemList}>
            {/* Showing table item list */}              
            {tableItems.map((Item) =>
              <TouchableOpacity
              style={styles.itemDetails}
                onPress={() => {
                  enteredAmount = enteredAmount + Item[1];
                }}>
                <Text style={styles.itemText}>{Item[0]}</Text>
                <Text style={styles.itemText}>{Item[1]}</Text>
              </TouchableOpacity>
            )}
          </View>
          <View style={styles.tableTotal}>
            <Text style={styles.itemText}>Toplam Tutar: {totalMoney}</Text>
          </View>
        </View>
        <View style={styles.paymentPart}>
          <View style={styles.remainingPart}>
          < Text style={styles.itemText}>Kalan Tutar: {remainingMoney}</Text>
          </View>
          <View style={styles.payedPart}>
            <Text style={styles.itemText}>Odenmis Tutar: {payedAmount}</Text>
          </View>
          <View style={styles.enteredPart}>
            <Text style={styles.itemText}>Girilen Tutar: {enteredAmount}</Text>
          </View>
          <View style={styles.buttonsPart}>
            <View style={styles.buttons}>
              {keypad.map((key) =>(
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    enteredAmount = enteredAmount*10 + key;
                }}>
                  <Text style={styles.itemText}>{key}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
        <View style={styles.methodPart}>

        </View>
      </View>
    );
  }

export default PaymentPage;

const styles = StyleSheet.create({
  main: {
    flex: 16,
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  tableInfo: {
    flex: 4,
    height: '97%',
    backgroundColor: '#faa',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    flexDirection: "column",
    borderWidth: 2,
  },
  paymentPart: {
    flex: 10,
    height: '97%',
    backgroundColor: '#fta',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    flexDirection: "column",
  },
  methodPart: {
    flex: 2,
    height: '97%',
    backgroundColor: '#baa',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    flexDirection: "column",
    borderWidth: 2,
  },
  tableName: {
    flex: 1,
    width:"100%",
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
  },
  itemList: {
    flex: 9,
    width:"100%",
    alignItems: 'flex-start',
    borderWidth: 2,
  },
  itemDetails: {
    width:"100%",
    justifyContent: 'center',
    borderWidth: 2,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  tableTotal: {
    flex: 1,
    width:"100%",
    backgroundColor: '#fga',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
  },
  itemText: {
    fontSize: normalize(6),
    margin: 5,
  },
  tableText: {
    fontSize: normalize(6)
  },
  remainingPart: {
    flex: 1,
    width:"100%",
    backgroundColor: '#fga',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    margin:5
  },
  payedPart: {
    flex: 1,
    width:"100%",
    backgroundColor: '#fga',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    margin:5
  },
  enteredPart: {
    flex: 1,
    width:"100%",
    backgroundColor: '#fga',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    margin:5
  },
  buttonsPart: {
    flex: 7,
    width:"100%",
    height:"100%",
    backgroundColor: '#fga',
    borderWidth: 2,
  },
  buttons: {
    width: '100%',
    height:"100%",
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 2,
    borderWidth: 2,
    minWidth: '33%',
    minHeight:'24%'
  },
});