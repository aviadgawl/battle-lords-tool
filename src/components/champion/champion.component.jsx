import React from 'react';
import { StyleSheet, View } from 'react-native';

import Stat from '../stat/stat.component';

export default function Champion() {

  return (
    <View style={styles.container}>
      <View style={styles.stat}>
        <Stat icon="str" startValue={0} title="STR:"></Stat>
      </View>
      <View style={[styles.stat, styles.dex]}>
        <Stat icon="dex" startValue={0} title="DEX:"></Stat>
      </View>
      <View style={[styles.stat, styles.int]}>
        <Stat icon="int" startValue={0} title="INT:"></Stat>
      </View>
      <View style={[styles.stat, styles.hp]}>
        <Stat icon="hp" startValue={0} title="HP:"></Stat>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: 10,
    marginBottom: 10,
  },
  stat: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 10,
  },
  dex: {
    marginStart: 23,
  },
  int: {
    marginEnd: 3,
  },
  hp: {
    marginStart: 20,
  },
});
