import React, { useState } from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity, Text } from 'react-native';
import { Icon } from 'react-native-elements';

export default function TabButton(props) {

    const [tabName, setTabName] = useState("tab");
    const [showText, setShowText] = useState(true);

    const handleName = (text) => {
        setTabName(text)
    }

    const handleTabButtonPress = () => {
        props.onClick(props.index);
    }

    const handleSaveButtonPress = () => {
        setShowText(false);
        props.onEdit(false);
    }

    return (
        <View style={styles.container}>
            {!showText && <TouchableOpacity style={{
                justifyContent: 'center',
                backgroundColor: props.isSelected ? 'lightgrey' : 'grey',
                padding: 5
            }} onPress={handleTabButtonPress}>
                <View style={styles.text}>
                    <Text style={styles.text}>{tabName}</Text>
                </View>
            </TouchableOpacity>}
            {showText && <View style={styles.subContainer}>
                <TextInput maxLength={6}
                    style={styles.textInput}
                    onChangeText={handleName}
                    placeholder={props.placeholder} />
                <Icon name='check-square' size={60}
                    type='font-awesome'
                    onPress={handleSaveButtonPress} />
            </View>}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginRight: 10,
    },
    subContainer: {
        flexDirection: 'row',
    },
    textInput: {
        fontSize: 25,
        marginRight: 10,
        width: '53%'
    },
    text: {
        fontSize: 25,
    }
});
