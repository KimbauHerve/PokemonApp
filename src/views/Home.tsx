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
  Button,
  Alert,
  TouchableOpacity,
} from 'react-native';
import { listPoke } from '../data/PokemonList';
import { Pockemon } from '../models/Pokemon';
import Head from './Head';
import Pokemons from './Pokemons';



const Home = () => {

  // const name = 'Pickach';
  // const level = 15;
  // const isMale = true;

  const [counterPoke, setcounterPoke] = useState(0);
  const [level, setlevel] = useState(listPoke)

  const viewPoke = () => {
    return (
      <PockemanInfo id={listPoke[counterPoke].id} name={listPoke[counterPoke].name}
        level={listPoke[counterPoke].level} isMale={listPoke[counterPoke].isMale}
        src={listPoke[counterPoke].src} onClickPokemon={getPokemon} onModifyLevel={modifyLevel}
        onModifyName={modifyName} />
    )
  }

  const onNext = () => {
    let maxPoke = listPoke.length;

    if (counterPoke < maxPoke - 1) {
      setcounterPoke(counterPoke + 1);
      console.log(maxPoke);
    } else {
      setcounterPoke(0);
      Alert.alert("tt");
    }
  }

  const onPrev = () => {
    if (counterPoke > 0) {
      setcounterPoke(counterPoke - 1);
    } else {
      setcounterPoke(0);
      Alert.alert('Nombre negatif');
    }
  }

  const getPokemon = (namePokemon: string, levelPokemon: number) => {
    Alert.alert('My name is ' + namePokemon + ' and level : ' + levelPokemon);
  }

  const modifyLevel = () => {
    let newListPoke = [...listPoke];
    newListPoke[counterPoke].level = listPoke[counterPoke].level + 5;
    setlevel(newListPoke);
  }

  const modifyName = () => {
    let newListPoke = [...listPoke];
    newListPoke[counterPoke].name = listPoke[counterPoke].name + ' updated';
    setlevel(newListPoke);
    viewPoke;
  }

  return (

    <ScrollView style={{ padding: 24, }}>

      <Text>Valeur est :  {counterPoke}</Text>
      
      <Text style={styles.info}></Text>

      {viewPoke()}
      <Text style={styles.info}></Text>
      <Button title='Next' onPress={() => onNext()} />
      <Text style={styles.info}></Text>
      <Button title='Prev' onPress={() => onPrev()} />
    </ScrollView>

  );


};



const PockemanInfo = ({ name, level, isMale, src, onClickPokemon, onModifyLevel, onModifyName }: Pockemon) => {


  return (
    <>
      <TouchableOpacity onPress={() => onClickPokemon(name, level)} style={{alignItems:'center', borderColor:'#feda61', padding:20, borderRadius:10, borderWidth:1}}>
        <Text style={{ fontSize: 25, fontWeight: '700' }}>{name}</Text>
        <Image source={src} style={styles.pokeImage} />
        <Text>Name of Pockeman is : {name};</Text>
        <Text>The level's Pockeman is : {level};</Text>
        {
          isMale ? <Text>The pockeman is a male</Text> : <Text>The pockeman is female</Text>
        }
      </TouchableOpacity>
      <View style={styles.modify}>
        <Text style={styles.info}></Text>
        <TouchableOpacity onPress={() => onModifyLevel()} style={styles.btnLevel}>
          <Text style={styles.txtLevel}>Modifier level</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onModifyName()} style={styles.btnLevel}>
          <Text style={styles.txtLevel}>Modifier name</Text>
        </TouchableOpacity>
        <Text style={styles.info}></Text>


      </View>
    </>
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
  },
  modify: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    marginTop: 10,

  },

  btnLevel: {
    backgroundColor: '#61dafd',
    padding: 11,
    borderRadius: 30
  },
  txtLevel: {
    color: '#fff',
    fontSize: 15,
  },
  
});

export default Home;