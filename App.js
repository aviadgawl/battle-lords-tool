import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Stat from './components/stat/stat.component';
import Champion from './components/champion/champion.component';
import Tabs from './components/tabs/tabs.component';

export default function App() {
  const [championTabs, setChampionTabs] = useState(1);
  const [selectedChampionTab, setSelectedChampionTab] = useState(1);

  const [buildingTabs, setBuldingTabs] = useState(1);
  const [selectedBuildingTab, setSelectedBuildingTab] = useState(1);

  const renderChampions = () => {
    let champions = [];

    for (let i = 0; i < championTabs; i++) {
      champions.push(<View key={i} style={selectedChampionTab === (i + 1) ? styles.show : styles.hide}>
        <Champion />
      </View>);
    }

    return champions;
  }

  const renderBuldings = () => {
    let champions = [];

    for (let i = 0; i < buildingTabs; i++) {
      champions.push(<View key={i} style={selectedBuildingTab === (i + 1) ? styles.show : styles.hide}>
        <Stat icon="hp" title="HP:" startValue={27}></Stat>
      </View>);
    }

    return champions;
  }

  return (
    <View style={styles.viewContainer}>
      <View style={styles.championsTabs}>
        <Tabs onSelectChange={(tabSelected) => { setSelectedChampionTab(tabSelected) }}
          onTabsCountChange={(tabsCount) => { setChampionTabs(tabsCount) }}
          placeholder="Champion">
        </Tabs>
      </View>

      <View style={styles.championStats}>
        {renderChampions()}
      </View>

      <View style={styles.championsTabs}>
        <Tabs onSelectChange={(tabSelected) => { setSelectedBuildingTab(tabSelected) }}
          onTabsCountChange={(tabsCount) => { setBuldingTabs(tabsCount) }}
          placeholder="Bulding"></Tabs>
      </View>

      <View style={styles.castleStats}>
        {renderBuldings()}
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    alignItems: 'center',
    flexDirection: "column",
    padding: 5,
    justifyContent: 'flex-end'
  },
  championsTabs: {
    borderWidth: 1,
    width: '100%',
    height: '10%',
    padding: 5,
  },
  championStats: {
    borderWidth: 1,
    width: '100%',
    height: '50%',
  },
  castleStats: {
    borderWidth: 1,
    width: '100%',
    height: '10%',
  },
  hide: { height: '0%', opacity: 0 },
  show: { height: '100%', opacity: 1 }
});
