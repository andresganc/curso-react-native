import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Components
import ViewReactNative from './screens/1-basic/components-basic-react-native/ViewReactNative'
import TextReactNative from './screens/1-basic/components-basic-react-native/TextReactNative';
import StyleSheetReactNative from './screens/1-basic/components-basic-react-native/StyleSheetReactNative'
import ImageReactNative from './screens/1-basic/components-basic-react-native/ImageReactNative'
import ButtonReactNative from './screens/1-basic/components-basic-react-native/ButtonReactNative'
import TouchableOpacity from './screens/1-basic/components-basic-react-native/TouchableOpacityReactNative'
import IconsFontAwesome from './screens/1-basic/IconsFontAwesome'

export default function App() {
  return (
    <View style={styles.container}>


      <ViewReactNative />
      <ImageReactNative />
      <TextReactNative />
      <ButtonReactNative />
      <TouchableOpacity />
      <StyleSheetReactNative />
      <IconsFontAwesome />
      

      <Text>Open up App.js to start working on your app!</Text>
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
