import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import TabButton from '../tab-button/tab-button.component';

export default function Tabs(props) {

    const [tabsCount, setTabsCount] = useState(1);
    const [selectedTab, setSelectedTab] = useState(1);
    const [isEditingTab, setIsEditingTab] = useState(true);

    const addTab = () => {
        setTabsCount(tabsCount + 1);
        setIsEditingTab(true);
    }

    const removeTab = () => {
        setTabsCount(tabsCount - 1);
    }

    const handleTabEdit = (isEditing) => {
        setIsEditingTab(isEditing);
    }

    const handleTabButtonClick = (index) => {
        setSelectedTab(index);
    }

    let tabs = [];

    for (let index = 1; index <= tabsCount; index++) {

        tabs.push(<TabButton onEdit={handleTabEdit} isSelected={index === selectedTab}
            key={index} index={index} onClick={handleTabButtonClick}></TabButton>);
    }

    if (!isEditingTab) {
        if (tabsCount === 1) {
            tabs.push(
                <View key={4} style={styles.btn}>
                    <Button key={4} onPress={addTab} title="add"></Button>
                </View>
            );
        } else if (tabsCount === 2) {
            tabs.push(
                <View key={4} style={styles.btn}>
                    <Button key={4} onPress={addTab} title="add"></Button>
                </View>
            );
            tabs.push(
                <Button key={5} onPress={removeTab} title="remove"></Button>
            );
        } else if (tabsCount === 3) {
            tabs.push(
                <Button key={5} onPress={removeTab} title="remove"></Button>
            );
        }
    }
    return <View style={styles.container}>
        {tabs}
    </View>;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
    },
    btn: {
        marginRight: 10,
    },
});
