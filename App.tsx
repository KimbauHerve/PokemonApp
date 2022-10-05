/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {type PropsWithChildren, useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  ActivityIndicator, FlatList,
  View,
} from 'react-native';

import ListeMovies from './src/views/ListeMovies';
import Home from './src/views/Home';

const App = () => {
 
  return (
    <ScrollView>
    <View
    style={{padding: 24,}}>
      <Home />
   
  </View>
  </ScrollView>
  );
};

const styles = StyleSheet.create({
 
});

export default App;
