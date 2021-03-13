import React, { useState } from "react";
import { Text, StyleSheet, View, CheckBox } from "react-native";


const PressDone = () => {
  const [isSelected, setSelection] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
        <Text style={styles.label}></Text>
      </View>
      {/* <Text>{isSelected ? "👍" : "👎"}</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    right:1,
  },
  checkboxContainer: {
    right:1,
  },
  checkbox: {
    right:1,
  },
  label: {
    right:1,
  },
});

export default PressDone;