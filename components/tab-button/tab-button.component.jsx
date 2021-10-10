import React, { useState } from 'react';
import { StyleSheet, TextInput, View, TouchableWithoutFeedback , Text } from 'react-native';
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

    let color = '';

    if (props.isSelected) {
        color = 'grey';
    }
    else {
        color = 'black'
    }

    return (
        <View style={styles.container}>
            {!showText && <TouchableWithoutFeedback color={color}
                    style={styles.button} onPress={handleTabButtonPress}>
                         <View style={styles.button}>
                            <Text style={styles.text}>{tabName}</Text>
                        </View>
                    </TouchableWithoutFeedback>}
            {showText && <View style={styles.subContainer}>
                <TextInput maxLength={7} 
                            style={styles.textInput} 
                            onChangeText={handleName} 
                            placeholder="champion name" />
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
        fontSize: 23,
        marginRight: 10,
        width: '53%'
    },
    text: {
        fontSize: 23,
    },
    button: {
       fontSize: 20,
       justifyContent: 'center',
       backgroundColor: '#a8adb5',
       padding: 5
    }
});
