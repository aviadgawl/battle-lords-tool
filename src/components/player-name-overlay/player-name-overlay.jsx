import React, { useState } from 'react';
import { Button, Overlay, Icon } from 'react-native-elements';
import { View, Text, StyleSheet, TextInput } from 'react-native';

export default function PlayerNameOverlay(props) {

    const [playerName , setPlayerName] = useState();
    const [visible, setVisible] = useState(true);

    const handlePlayerNameChange = (text) => {
        setPlayerName(text);
    };

    const toggleOverlay = () => {
        setVisible(!visible);
        props.onPlayerNameChange(playerName);
    };

    return (<View>
        <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
            <Text style={styles.textPrimary}>Hello Player</Text>
            <TextInput style={styles.textInput} onChangeText={handlePlayerNameChange} placeholder="Please enter a name" />
            <Button
                icon={
                    <Icon
                        name="play-circle"
                        type="font-awesome"
                        color="white"
                        size={25}
                        iconStyle={{ marginRight: 10 }}
                    />
                }
                title="Start"
                onPress={toggleOverlay}
            />
        </Overlay>
    </View>);
};

const styles = StyleSheet.create({
    button: {
        margin: 10,
    },
    textPrimary: {
        marginVertical: 20,
        textAlign: 'center',
        fontSize: 20,
    },
    textSecondary: {
        marginBottom: 10,
        textAlign: 'center',
        fontSize: 17,
    },
    textInput: {
        fontSize: 17,
        marginBottom: 10,
        textAlign: 'center',
    }
});