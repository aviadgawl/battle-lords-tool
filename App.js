import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

import Stat from './components/stat/stat.component';
import Champion from './components/champion/champion.component';
import Tabs from './components/tabs/tabs.component';

export default function App() {

  const [tabOneStyle, setTabOneStyle] = useState(styles.show);
  const [tabTwoStyle, setTabTwoStyle] = useState(styles.hide);
  const [tabThreeStyle, setTabThreeStyle] = useState(styles.hide);
  const [tabCount, setTabCount] = useState(1);

  const onSelectTab = (tabNumber) => {
    switch (tabNumber) {
      case 1:
        setTabOneStyle(styles.show);
        setTabTwoStyle(styles.hide);
        setTabThreeStyle(styles.hide);
        break;
      case 2:
        setTabOneStyle(styles.hide);
        setTabTwoStyle(styles.show);
        setTabThreeStyle(styles.hide);
        break;
      case 3:
        setTabOneStyle(styles.hide);
        setTabTwoStyle(styles.hide);
        setTabThreeStyle(styles.show);
        break;
      default:
        setTabOneStyle(styles.show);
        setTabTwoStyle(styles.hide);
        setTabThreeStyle(styles.hide);
        break;
    }
  }

  const countTabChange = (tabCount) => {
    setTabCount(tabCount);
  }

  return (
    <View style={styles.viewContainer}>
      <View style={styles.championsTabs}>
        <Tabs onSelectChange={onSelectTab} onTabsCountChange={countTabChange}></Tabs>
      </View>

      <View style={styles.championStats}>
        <View style={tabOneStyle}>
          <Champion></Champion>
        </View>

        {tabCount >= 2 && <View style={tabTwoStyle}>
          <Champion></Champion>
        </View>}

        {tabCount >= 3 && <View style={tabThreeStyle}>
          <Champion></Champion>
        </View>}

      </View>

      <View style={styles.castleStats}>
        <Stat startValue={20}></Stat>
      </View>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    alignItems: 'center',
    flexDirection: "column",
    padding: 5,
  },
  championsTabs: {
    borderWidth: 1,
    marginTop: 100,
    width: '100%',
    height: 50,
    padding: 5,
  },
  championStats: {
    borderWidth: 1,
    width: '100%',
    height: '70%',
  },
  stats: {
    width: '100%',
    height: '100%'
  },
  castleStats: {
    borderWidth: 1,
    width: '100%',
    height: '10%',
  },
  show: {
    opacity: 1, height: '100%', width: '100%'
  },
  hide: {
    opacity: 0, height: 0
  }
});
