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

    const handleTabButtonLongPress = () => {
        setShowText(true);
        props.onEdit(true);
    }

    return (
        <View style={styles.container}>
            
            {!showText && <View style={{minWidth: 50 , height: '100%'}}>
            <TouchableOpacity style={{
                justifyContent: 'center',
                backgroundColor: props.isSelected ? 'lightgrey' : 'grey',
                padding: 5,
                height: '100%'
            }} onLongPress={handleTabButtonLongPress} onPress={handleTabButtonPress}>
                <Text style={styles.text}>{tabName}</Text>
            </TouchableOpacity></View>}
            
            {showText && <View style={styles.subContainer}>
                <TextInput maxLength={6}
                    style={styles.textInput}
                    onChangeText={handleName}
                    placeholder={props.placeholder} />
                <Icon name='check-square' 
                    size={60}
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
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    subContainer: {
        flexDirection: 'row',
        width: 170,
    },
    textInput: {
        fontSize: 25,
        marginRight: 5,
        width: 115,
    },
    text: {
        fontSize: 25,
    },
});
