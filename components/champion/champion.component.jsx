import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Stat from '../stat/stat.component';

export default function Champion() {

  return (
    <View style={styles.container}>
      <Stat startValue={0} title="STR:"></Stat>
      <Stat startValue={0} title="DEX:"></Stat>
      <Stat startValue={0} title="INT:"></Stat>
      <Stat startValue={0} title="HP:"></Stat>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%",
  },
  stat: {
    flexDirection: "row",
  }
});
