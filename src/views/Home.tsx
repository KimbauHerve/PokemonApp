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
  Image,
} from 'react-native';
import { Pockemon } from '../models/Pokemon';



const Home = () => {

  const name = 'Pickach';
  const level = 15;
  const isMale = true;


  return (

    <View >
      <PockemanInfo id={25} name={name} level={level} isMale={isMale} src={require('../assets/images/25.png')} />
      <Text style={styles.info}></Text>
      <PockemanInfo id={30} name={'Calochet'} level={12} isMale={false} src={require('../assets/images/30.png')} />

    </View>
  );


};



const PockemanInfo = ({ name, level, isMale, src }: Pockemon) => {

  return (
    <View>
      <Text style={{ fontSize: 25, fontWeight: '700' }}>HOME VIEW</Text>
      <Text>Name of Pockeman is : {name};</Text>
      <Text>The level's Pockeman is : {level};</Text>
      {
        isMale ? <Text>The pockeman is a male</Text> : <Text>The pockeman is female</Text>
      }
      <Image source={src} style={styles.pokeImage} />
    </View>
  )
}

const styles = StyleSheet.create({

  pokeImage: {
    width: 100,
    height: 100,
    resizeMode: 'stretch',
  },
  info: {
    margin: 1,
  }
});

export default Home;