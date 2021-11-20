import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import TabButton from '../tab-button/tab-button.component';
import { Icon } from 'react-native-elements';

export default function Tabs(props) {

    const [tabsCount, setTabsCount] = useState(1);
    const [selectedTab, setSelectedTab] = useState(1);
    const [isEditingTab, setIsEditingTab] = useState(true);

    const addTab = () => {
        setTabsCount(tabsCount + 1);
        setIsEditingTab(true);
        props.onTabsCountChange(tabsCount + 1);
    }

    const removeTab = () => {
        setTabsCount(tabsCount - 1);
        props.onTabsCountChange(tabsCount - 1);
    }

    const handleTabEdit = (isEditing) => {
        setIsEditingTab(isEditing);
    }

    const handleTabButtonClick = (index) => {
        setSelectedTab(index);
        props.onSelectChange(index);
    }

    const renderAddBtn = (key) => {
        return <View key={key}><Icon name='plus-square' size={60}
            type='font-awesome'
            onPress={addTab} /></View>
    }

    const renderRemoveBtn = (key) => {
        return <View key={key} style={{ marginLeft: 10 }}>
                <Icon name='minus-square' size={60} type='font-awesome' onPress={removeTab} />
            </View>
    }

    const renderTabs = () => {
        let tabs = [];

        for (let index = 1; index <= tabsCount; index++) {
    
            tabs.push(<TabButton placeholder={props.placeholder} onEdit={handleTabEdit} isSelected={index === selectedTab}
                key={index} index={index} onClick={handleTabButtonClick}></TabButton>);
        }
    
        if (!isEditingTab) {
            if (tabsCount < 3) tabs.push(renderAddBtn(3));
            if (tabsCount > 0) tabs.push(renderRemoveBtn(4));
        }

        return tabs;
    }

    return <View style={styles.container}>
        {renderTabs()}
    </View>;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
    }
});
