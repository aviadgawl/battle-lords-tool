import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

import Stat from './components/stat/stat.component';
import Champion from './components/champion/champion.component';
import Tabs from './components/tabs/tabs.component';

export default function App() {

  const [currentTab, setCurrentTab] = useState(1);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.championsTabs}>
          <Tabs onSelectChange={(tabNumber) => { setCurrentTab(tabNumber) }}></Tabs>
        </View>

        <View style={styles.championStats}>
          {(currentTab === 1) && <Champion></Champion>}
          {(currentTab === 2) && <Champion></Champion>}
          {(currentTab === 3) && <Champion></Champion>}
        </View>

        <View style={styles.castleStats}>
          <Stat startValue={20}></Stat>
        </View>

        <StatusBar style='auto' />
      </ScrollView>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  championsTabs: {
    flex: 0.4,
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    borderWidth: 1,
    marginTop: 70,
    padding: 5,
  },
  championStats: {
    flex: 6,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    borderWidth: 1,
    padding: 5,
  },
  castleStats: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%',
    padding: 5,
    borderWidth: 1,
  },
});
