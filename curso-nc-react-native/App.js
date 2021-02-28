import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native'

// Componentes NC
import HelloWorld from './screens/1-basico/HelloWorld.js'
import Menu from './components/menus/menu-basic-01.jsx'
import ViewButton from './screens/1-basico/button/viewButton'
import ViewStyleSheet from './screens/1-basico/styles/style-sheet/style-sheet'


export default function App() {
  return (
    <View style={styles.container}>
      
      <ViewStyleSheet />

      <StatusBar style="auto" />


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
