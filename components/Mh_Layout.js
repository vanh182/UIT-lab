import React from "react";
import { StyleSheet, View } from "react-native";

const Mh_Layout = () => {
  return (
    <View style={styles.container}>
      <View style={styles.v1}></View>
      <View style={styles.v2}>
        <View style={styles.v22} />
        <View style={styles.v21}>
          <View style={styles.v22} />
          <View style={styles.v22} />
        </View>
      </View>
      <View style={styles.v3} />
      <View style={styles.v1} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
    padding: 5,
    justifyContent: "flex-start",
    alignItems: "stretch",
    backgroundColor: "#ffff",
    margin: 20,
    borderWidth: 3,
    borderColor: "#b3e6cc",
  },

  v1: {
    flex: 0.1,
    backgroundColor: "#ff9966",
    margin: 5,
  },

  v2: {
    flex: 0.5,
    flexDirection: "row",
    backgroundColor: "#ff9966",
    borderColor: "#b3e6cc",
    borderWidth: 3,
  },

  v21: {
    flex: 0.5,
    borderLeftWidth: 3,
    borderColor: "#b3e6cc",
  },

  v22: {
    flex: 0.5,
    backgroundColor: "#ff9966",
    borderWidth: 6,
    borderColor: "#ffff",
  },

  v3: {
    flex: 0.3,
    backgroundColor: "#ff9966",
    borderWidth: 5,
    borderColor: "#ffff",
  },
});

export default Mh_Layout;
