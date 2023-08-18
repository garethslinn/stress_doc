import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {styles} from '../assets/styles';
import Footer from '../components/Footer';
import Header from '../components/Header';
import {TEXT} from '../constants';
import {Title} from '../components/Title';

function Settings() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.body}>
        <Title title={TEXT.screen.settings} />
        <Text style={styles.title3}>
          To do... need to apply some accessibility features etc
        </Text>
      </View>
      <Footer />
    </SafeAreaView>
  );
}

export default Settings;
