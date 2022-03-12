import React from 'react';
import { StyleSheet, View } from 'react-native';

import Stat from '../stat/stat.component';

export default function Champion(props) {

  return (
    <View style={styles.container}>
        <Stat isReadOnly={props.isReadOnly} icon="str" startValue={0} title="STR:"></Stat>
        <Stat isReadOnly={props.isReadOnly} icon="dex" startValue={0} title="DEX:"></Stat>
        <Stat isReadOnly={props.isReadOnly} icon="int" startValue={0} title="INT:"></Stat>
        <Stat isReadOnly={props.isReadOnly} icon="hp" startValue={0} title="HP:"></Stat>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    marginBottom: 10,
    width: '100%',
  },
});
