import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { I18nManager, View, StyleSheet } from 'react-native';

import { enableScreens } from 'react-native-screens'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Player from './src/screens/player/player.screen';

enableScreens()
const Stack = createNativeStackNavigator();

export default function App() {
  I18nManager.forceRTL(false);
  I18nManager.allowRTL(false);

  return (
    <View style={styles.mainView}
      >
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Player One" component={Player} />
          <Stack.Screen name="Player Two" component={Player} />
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