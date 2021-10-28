import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';
import { Button, StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Dimensions, Platform, PixelRatio } from 'react-native';

var {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
} = Dimensions.get('window');

function normalize(size) {
  const newSize = size * scale 
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize))
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
  }
}
const scale = SCREEN_WIDTH / 320;

const MainPage = ({ navigation }) => {
  var ItemList= [];
  var TableList = [];
  var [numberOfTables, changeNumberOfTables] = useState(15);
  var rowNumberPercent = 100/Math.ceil(Math.sqrt(numberOfTables))-1+"%";
  var [numberOfItems, changeNumberOfItems] = useState(5);
  var [selectedTable, changeSelectedTable] = useState("");
  ///////////////////////////////////////////////////////
  for (let i = 0; i < selectedTable; i++) {
    var item = [];
    item.push("Item "+i);
    item.push("Price "+i);
    ItemList.push(item);
  }
  var ItemListLength = ItemList.length;

  for (let i = 0; i < numberOfTables; i++) {
    var masa = [];
    masa.push(i);
    masa.push(i*i);
    TableList.push(masa);
  }
  //////////////////////////////////////////////////////
/*
  var rowNumber = Math.ceil(Math.sqrt(numberOfTables));
  for (let i = 0; i < numberOfTables; i += rowNumber) {
    tables.push(
      <View style={styles.tablesRow}>
        {makeRow(i,rowNumber, numberOfTables)}
      </View>
    );
  }
*/

  return (
    <View style={styles.main}>
      <View style={styles.place}>
        {/* Showing table */}
        <View style={styles.buttons}>
          {TableList.map((Table) =>
            <TouchableOpacity
            style={[styles.button, { backgroundColor: "powderblue", minWidth: rowNumberPercent, minHeight: rowNumberPercent }]}
            onPress={() => changeSelectedTable(Table[0])}
            >
              <View style={[{ margin : 25 }]}>
                <Text style={[styles.tableText,{ marginBottom : 15 }]}>Masa {Table[0]}</Text>
                <Text style={styles.tableText}>Ucret {Table[1]}</Text>
              </View>
            </TouchableOpacity>
          )}
        </View>
      </View>
      <View style={styles.tableInfo}>
        {/* Showing selected table */}
        <View style={styles.tableItems}>
          {/* Showing table details */}
          <View style={styles.tableName}>
            {/* Showing table name */}
            <Text style={[styles.tableText,{ marginBottom : 15 }]}>Masa {selectedTable}</Text>
          </View>
          <View style={styles.itemList}>
            {/* Showing table item list */}              
            {ItemList.map((Item) =>
              <TouchableOpacity
              style={styles.itemDetails}
              >
                <Text style={styles.itemText}>{Item[0]}</Text>
                <Text style={styles.itemText}>{Item[1]}</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
        <View style={styles.tableButtons}>
          {/* Showing buttons */}
          <TouchableOpacity
            style={[styles.button, { backgroundColor: "powderblue" }]}
            onPress={() => navigation.navigate('PaymentPage')}
          >
            <Text style={styles.buttonText}>Odeme yap</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: "powderblue" }]}
          >
            <Text style={styles.buttonText}>Menu</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default MainPage;

const styles = StyleSheet.create({
  main: {
    flexDirection: "row",
    flex : 6
  },
  place: {
    flex: 5,
    backgroundColor: '#ffa',
    margin: 10,
    borderWidth: 2,
  },
  tableInfo: {
    flex: 1,
    backgroundColor: '#faa',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    flexDirection: "column",
    borderWidth: 2,
  },
  tableItems: {
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
  tableButtons: {
    flex: 1,
    height:"95%",
    width:"95%",
    backgroundColor: '#fga',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    marginTop: 0,
    flexDirection: "row",
  },
  buttons: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    borderColor: '#3f4d5b',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 2,
    margin: 5,
    borderRadius: 10,
    borderWidth: 2,
  },
  buttonText: {
    fontSize: normalize(4)
  },
  tableText: {
    fontSize: normalize(6)
  },
  itemText: {
    fontSize: normalize(6),
    margin: 5,
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
});