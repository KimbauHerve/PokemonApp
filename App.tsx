/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { type PropsWithChildren, useState, useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  ActivityIndicator, FlatList,
  View,
  TouchableOpacity,
} from 'react-native';

import ListeMovies from './src/views/ListeMovies';
import Home from './src/views/Home';
import Head from './src/views/Head';

const App = () => {

  return (

    <View>
      <Head />
      
        <Home />
     


    </View>

  );
};

const styles = StyleSheet.create({
  btnAdd: {
    backgroundColor: 'red',
    padding: 10,
    position: 'absolute',
    bottom: -150,
    right: 20,
    borderRadius: 100
  }
});

export default App;
