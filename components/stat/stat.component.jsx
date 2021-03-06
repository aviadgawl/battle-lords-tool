import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';

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
      <Icon
        name='minus-square'
        type='font-awesome'
        size={50}
        onPress={decrament}
      />
      <Text style={styles.text}>{statValue}</Text>
      <Icon
        name='plus-square'
        type='font-awesome'
        size={50}
        onPress={incrment}
      />
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
