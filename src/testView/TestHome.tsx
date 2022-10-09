import React, { Component } from 'react';
import { Platform, StatusBar, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
//import Icon from 'react-native-vector-icons/Ionicons';




const TestHome = () => {
  const sta: any = StatusBar.currentHeight;
  return (
    <SafeAreaView style={[styles.container, {
      paddingTop:
        Platform.OS === "android" ? sta * 1.5 : 0,
    }]}>
      <View style={{ backgroundColor: "red", justifyContent: 'space-around', }} >
        <View style={{ alignSelf: 'center' }}>
          <Text>Premier view</Text>
        </View>
        <View style={{ flexDirection: 'row', backgroundColor: '#a1defd', alignItems: 'center', justifyContent: 'space-around' }}>
          <View>
            <Text>Premier view 1 </Text>
          </View>
          <View>
            <Text>Premier view 2</Text>
          </View>
          <View>
            <Text>Premier view 3</Text>
          </View>
        </View>
      </View>
      <View style={{ backgroundColor: "darkorange", justifyContent: 'center', alignItems: 'center' }} >
        <Text>Deuxieme view</Text>
      </View>
      <View style={{ backgroundColor: "green", alignItems: 'center', padding: 30 }} >

        <Icon name="user" size={20} color="#fff" />
        <Text>3 view</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    height: "100%",
  },
});

export default TestHome;