import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Icon } from 'react-native-elements';

import Stat from '../stat/stat.component';

export default function Champion() {

  return (
    <View style={styles.container}>
      <View style={styles.stat}>
        <Icon style={styles.stat} name='hand-rock-o' type='font-awesome' size={40} />
        <Stat startValue={0} title="STR:"></Stat>
      </View>
      <View style={styles.stat}>
        <Icon style={styles.stat} name='bolt' type='font-awesome' size={40} />
        <Stat startValue={0} title="DEX:"></Stat>
      </View>
      <View style={styles.stat}>
        <Icon style={styles.stat} name='leanpub' type='font-awesome' size={40} />
        <Stat startValue={0} title="INT:"></Stat>
      </View>
      <View style={styles.stat}>
        <Icon style={styles.stat} name='heart' type='font-awesome' size={40} />
        <Stat startValue={0} title="HP:"></Stat>
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
  }
});
