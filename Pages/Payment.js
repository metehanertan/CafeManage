const TableDetails  = ({ navigation, route, tableNumber }) => {
    return (
      <View>
        <Text>
          Masa {tableNumber}
        </Text>
        <View style={[styles.container, {
          flexDirection: "row"
        }]}>
          <View style={[flex=5, backgroundColor='#ffa']}>
  
          </View>
          <View  style={[flex=1, backgroundColor='#faa']}>
          
          </View>
        </View>
      </View>
    );
  };