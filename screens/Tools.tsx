import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {styles} from '../assets/styles';
import Footer from '../components/Footer';
import Header from '../components/Header';
import {TEXT} from '../constants';
import {Title} from '../components/Title';

function Tools() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.body}>
        <Title title={TEXT.screen.tools} />
        <Text style={styles.title3}>
          To contain useful utilities to aid panic attacks etc
        </Text>
      </View>
      <Footer />
    </SafeAreaView>
  );
}

export default Tools;
