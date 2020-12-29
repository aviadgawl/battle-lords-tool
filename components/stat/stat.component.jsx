import React, { useState } from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';

export default function Stat(props) {

  const [statValue, setStatValue] = useState(props.startValue);

  incrment = () => {
    setStatValue(statValue + 1);
  }

  decrament = () => {
    if (statValue > 0) {
      setStatValue(statValue - 1);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.title}</Text>
      <Button color='#9da1a1' style={styles.btn} onPress={decrament} title="Sub(-)"></Button>
      <Text style={styles.text}>{statValue}</Text>
      <Button color='#9da1a1' style={styles.btn} onPress={incrment} title="Inc(+)"></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%",
  },
  text: {
    fontSize: 40,
    padding: 15,
  },
  btn: {
    width: 100,
  }
});
