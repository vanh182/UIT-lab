import { StyleSheet, Text, TextInput, View } from "react-native";

const calculator = () => {
  return (
    <View style={styles.container}>
      <View style={styles.kq}>
        <TextInput style={styles.textkq}>1,337</TextInput>
      </View>
      <View style={styles.viewNumber}>
        <View style={styles.viewNumber_child}>
          <Text style={styles.text}>7</Text>
        </View>
        <View style={styles.viewNumber_child}>
          <Text style={styles.text}>8</Text>
        </View>
        <View style={styles.viewNumber_child}>
          <Text style={styles.text}>9</Text>
        </View>
        <View style={styles.viewOperator}>
          <Text style={styles.textOperator}>÷</Text>
        </View>
      </View>
      <View style={styles.viewNumber}>
        <View style={styles.viewNumber_child}>
          <Text style={styles.text}>4</Text>
        </View>
        <View style={styles.viewNumber_child}>
          <Text style={styles.text}>5</Text>
        </View>
        <View style={styles.viewNumber_child}>
          <Text style={styles.text}>6</Text>
        </View>
        <View style={styles.viewOperator}>
          <Text style={styles.textOperator}>×</Text>
        </View>
      </View>
      <View style={styles.viewNumber}>
        <View style={styles.viewNumber_child}>
          <Text style={styles.text}>1</Text>
        </View>
        <View style={styles.viewNumber_child}>
          <Text style={styles.text}>2</Text>
        </View>
        <View style={styles.viewNumber_child}>
          <Text style={styles.text}>3</Text>
        </View>
        <View style={styles.viewOperator}>
          <Text style={styles.textOperator}>-</Text>
        </View>
      </View>
      <View style={styles.viewNumber}>
        <View style={styles.view0}>
          <Text style={styles.text}>0</Text>
        </View>
        <View style={styles.viewOperator}>
          <Text style={styles.textOperator}>+</Text>
        </View>
      </View>
      <View style={styles.viewNumber}>
        <View style={styles.viewC}>
          <Text style={styles.textOperator}>C</Text>
        </View>
        <View style={styles.viewOperator}>
          <Text style={styles.textOperator}>=</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  kq: {
    flex: 1.5,
    backgroundColor: "black",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  textkq: {
    color: "white",
    fontSize: 45,
  },
  text: {
    color: "black",
    fontSize: 40,
    flex: 1,
    textAlign: "center",
    textAlignVertical: "center",
  },
  textOperator: {
    color: "white",
    fontSize: 40,
    alignItems: "center",
    flex: 2,
    textAlign: "center",
    textAlignVertical: "center",
  },
  viewOperator: {
    flex: 1,
    backgroundColor: "orange",
    borderColor: "grey",
    borderWidth: 1,
  },
  viewC: {
    flex: 0.32,
    backgroundColor: "grey",
    borderColor: "grey",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  viewNumber: {
    flexDirection: "row",
    flex: 1,
    borderColor: "grey",
  },
  view0: {
    flexDirection: "row",
    flex: 3,
    borderColor: "grey",
  },
  viewNumber_child: {
    flex: 1,
    backgroundColor: "white",
    borderColor: "grey",
    borderWidth: 1,
  },
});
export default calculator;
