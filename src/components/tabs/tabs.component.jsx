import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import TabButton from '../tab-button/tab-button.component';
import { Icon } from 'react-native-elements';

export default function Tabs(props) {

    const [isEditingTab, setIsEditingTab] = useState(true);

    const addTab = () => {
        setIsEditingTab(true);
        props.onTabsCountChange(props.tabs + 1);
    }

    const removeTab = () => {
        props.onTabsCountChange(props.tabs - 1);
    }

    const handleTabEdit = (isEditing) => {
        setIsEditingTab(isEditing);
    }

    const handleTabButtonClick = (index) => {
        props.onSelectChange(index);
    }

    const renderAddBtn = (key) => {
        return <View key={key}>
            <Icon
                name='plus-square' size={60}
                type='font-awesome'
                onPress={addTab} />
        </View>
    }

    const renderRemoveBtn = (key) => {
        return <View key={key} style={{ marginLeft: 10 }}>
            <Icon name='minus-square' size={60} type='font-awesome' onPress={removeTab} />
        </View>
    }

    const renderTabs = () => {
        let tabs = [];

        for (let index = 1; index <= props.tabs; index++) {

            tabs.push(<TabButton isReadOnly={props.isReadOnly} placeholder={props.placeholder}
                onEdit={handleTabEdit}
                isSelected={index === props.selecetedTab}
                key={index}
                index={index}
                onClick={handleTabButtonClick}>
            </TabButton>);
        }

        if (!isEditingTab) {
            if (props.tabs < 3 && !props.isReadOnly) tabs.push(renderAddBtn(3));
            if (props.tabs > 0 && !props.isReadOnly) tabs.push(renderRemoveBtn(4));
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
        alignItems: 'center',
    }
});
