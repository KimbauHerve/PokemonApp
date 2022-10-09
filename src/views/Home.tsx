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
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { listPoke } from '../data/PokemonList';
import { Pockemon } from '../models/Pokemon';
import Head from './Head';
import Pokemons from './Pokemons';



const Home = () => {

  // const name = 'Pickach';
  // const level = 15;
  // const isMale = true;

  const sta: any = StatusBar.currentHeight;

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
      // console.log(maxPoke);
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

    <SafeAreaView style={styles.container}>
      <View style={styles.hd}>
        <StatusBar backgroundColor="#61dafb" />
        <View style={{ alignSelf: 'flex-start', paddingLeft: 24 }}>
          <Icon name='bars' size={30} color="#fff" />
        </View>
        <Text style={styles.tstyle}> Hervé Kimbau </Text>
      </View>
      <View style={{ alignSelf: 'center' }}>
        <Text>Valeur est :  {counterPoke}</Text>

        {viewPoke()}
      </View>



      <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingBottom: 50 }}>

        <TouchableOpacity onPress={() => onPrev()} style={styles.btnchange}>
          <Icon name="arrow-left" size={30} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onNext()} style={styles.btnchange}>
          <Icon name="arrow-right" size={30} color="#fff" />
        </TouchableOpacity>
      </View>



    </SafeAreaView>

  );


};



const PockemanInfo = ({ name, level, isMale, src, onClickPokemon, onModifyLevel, onModifyName }: Pockemon) => {


  return (
    <>
      <TouchableOpacity onPress={() => onClickPokemon(name, level)} style={{ alignItems: 'center', borderColor: '#61dafd', padding: 20, borderRadius: 10, borderWidth: 1 }}>
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
          <Text style={styles.txtLevel}>
            <Icon name='edit' size={15} />
            level
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onModifyName()} style={styles.btnLevel}>
          <Text style={styles.txtLevel}>
            <Icon name='edit' size={15} />
            name
          </Text>
        </TouchableOpacity>
        <Text style={styles.info}></Text>


      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    height: "100%",
  },
  hd: {
    height: 100,
    backgroundColor: "#61dafb",
    elevation: 8,
    borderBottomLeftRadius: 30,
    borderBottomEndRadius: 30,

    justifyContent: 'center',
    alignItems: 'center',

  },
  tstyle: {
    color: '#fff',
    fontSize: 30,
  },
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
  btnchange: {
    backgroundColor: '#61dafd',
    shadowColor: 'rgb(0,0,0, 5)',
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 1,
    elevation: 7,
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 10
  }
});

export default Home;