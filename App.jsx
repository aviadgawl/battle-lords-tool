import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { I18nManager, View, StyleSheet } from 'react-native';

import { enableScreens } from 'react-native-screens'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Player from './src/screens/player/player.screen';
import PlayerNameOverlay from './src/components/player-name-overlay/player-name-overlay';

enableScreens();
const Stack = createNativeStackNavigator();

export default function App() {
  I18nManager.forceRTL(false);
  I18nManager.allowRTL(false);

  const [playerOneName, setPlayerOneName] = useState();

  const handleOnPlayerNameChange = (playerName) => {
    setPlayerOneName(playerName);
  }

  return (
    <View style={styles.mainView}>
      <PlayerNameOverlay onPlayerNameChange={handleOnPlayerNameChange} />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="PlayerOne" options={{ title: playerOneName }} component={Player} />
          <Stack.Screen name="PlayerTwo"
            options={{ title: 'Player Two Name' }}
            component={Player}
            initialParams={{ isReadOnly: true }} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = new StyleSheet.create({
  mainView: {
    height: '100%',
    width: '100%'
  }
});