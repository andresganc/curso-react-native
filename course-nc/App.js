import { StatusBar } from 'expo-status-bar';
import React, { Fragment } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import NavTab from './navigations/nav-tab'


export default function App() {
  return (
    <Fragment>
      <NavTab />
    </Fragment>
  );
}

const styles = StyleSheet.create({
  
});
