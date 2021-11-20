import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';

export default function Stat(props) {

  const [statValue, setStatValue] = useState(props.startValue);

  const incrment = () => {
    if (statValue < 100) setStatValue(statValue + 1);
  }

  const decrament = () => {
    if (statValue > 0) setStatValue(statValue - 1);
  }

  const constGetIconName = () => {
    switch (props.icon) {
      case 'hp':
        return 'heart';
      case 'dex':
        return 'bolt';
      case 'str':
        return 'hand-rock-o'
      case 'int':
        return 'leanpub'
      default:
        return '';
    }
  }

  return (
    <View style={styles.container}>
      <Icon name={constGetIconName()} type='font-awesome' size={40} />
      <Text style={styles.text}>{props.title}</Text>
      <Icon
        name='minus-square'
        type='font-awesome'
        size={60}
        onPress={decrament}
      />
      <Text style={styles.text}>{statValue}</Text>
      <Icon
        name='plus-square'
        type='font-awesome'
        size={60}
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
  },
  stat: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 10,
  }
});
