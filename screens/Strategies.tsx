import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {styles} from '../assets/styles';
import Footer from '../components/Footer';
import Header from '../components/Header';
import {TEXT} from '../constants';
import {Title} from '../components/Title';

function Strategies() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.body}>
        <Title title={TEXT.screen.strategies} />
        <Text style={styles.title3}>
          A list of proven exercises to help deal with specific and general
          stres related issues
        </Text>
      </View>
      <Footer />
    </SafeAreaView>
  );
}

export default Strategies;
