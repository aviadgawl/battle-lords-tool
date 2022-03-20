import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Stat from '../../components/stat/stat.component';
import Champion from '../../components/champion/champion.component';
import Tabs from '../../components/tabs/tabs.component';

export default function PlayerPage({ navigation, route }) {

    const [playerData, setPlayerData] = useState({
        name: route?.params?.name,
        champions: [],
        buidlings: [
            {
                name: 'Tower',
                hp: 27
            }
        ]
    });

    const [selectedChampionTab, setSelectedChampionTab] = useState(0);

    const [selectedBuildingTab, setSelectedBuildingTab] = useState(1);

    let pageX = 0;

    const handleLeftSwipe = () => {
        navigation.navigate('PlayerOne');
    }

    const handleRightSwipe = () => {
        navigation.navigate('PlayerTwo', { isReadOnly: true });
    }

    return (
        <View style={styles.viewContainer}
            onTouchStart={(e) => { pageX = e.nativeEvent.pageX }}
            onTouchEnd={(e) => {
                if ((pageX - e.nativeEvent.pageX) > 100) handleRightSwipe();
                else if ((e.nativeEvent.pageX - pageX) > 100) handleLeftSwipe();
            }}>

            <View style={styles.championsTabs}>
                <Tabs isReadOnly={route?.params?.isReadOnly}
                    selecetedTab={selectedChampionTab}
                    tabs={playerData.champions.length}
                    onSelectChange={(tabSelected) => { setSelectedChampionTab(tabSelected) }}
                    onTabsCountChange={(championTabsCount) => { setChampionTabs(championTabsCount) }}
                    placeholder="Champion">
                </Tabs>
            </View>

            <View style={styles.championStats}>
                {playerData.champions.map((champion, i) => <View key={champion.name}
                    style={selectedChampionTab === (i + 1) ? styles.show : styles.hide}>
                    <Champion isReadOnly={route?.params?.isReadOnly} />
                </View>)}
            </View>

            <View style={styles.championsTabs}>
                <Tabs isReadOnly={route?.params?.isReadOnly}
                    selecetedTab={selectedChampionTab}
                    tabs={playerData.buidlings.length}
                    onSelectChange={(tabSelected) => { setSelectedBuildingTab(tabSelected) }}
                    onTabsCountChange={(buildingTabsCount) => { setBuldingTabs(buildingTabsCount) }}
                    placeholder="Building"></Tabs>
            </View>

            <View style={styles.castleStats}>
                {playerData.buidlings.map((building, i) => <View key={building.name}
                    style={selectedBuildingTab === (i + 1) ? styles.show : styles.hide}>
                    <Stat isReadOnly={route?.params?.isReadOnly} icon="hp"
                        title="HP:" startValue={27}></Stat>
                </View>)}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    viewContainer: {
        alignItems: 'center',
        flexDirection: "column",
        padding: 5,
        justifyContent: 'flex-end',
        height: '100%',
        width: '100%',
    },
    championsTabs: {
        flex: 1,
        borderWidth: 1,
        width: '100%',
        padding: 5,
    },
    championStats: {
        flex: 4,
        borderWidth: 1,
        width: '100%',
        height: '50%',
    },
    castleStats: {
        flex: 1,
        borderWidth: 1,
        width: '100%',
    },
    hide: { height: '0%', opacity: 0 },
    show: { height: '100%', opacity: 1 }
});
