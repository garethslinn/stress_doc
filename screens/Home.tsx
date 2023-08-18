/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import {styles} from '../assets/styles';
// import {ScrollView} from 'react-native-gesture-handler';
import {TEXT} from '../constants';
import {HomeProps} from '../types/screens/Home';
import {BUTTONS} from '../constants';
import {Logo} from '../components/Logo';
import {PrimaryButtonContainer} from '../components/PrimaryButtonContainer';

export default function Home({navigation}: HomeProps) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.bodyHome}>
          <Text style={styles.title1}>{TEXT.appName}</Text>
          <Text style={styles.title4}>{TEXT.screen.home.title}</Text>
          <Logo size="large" />
          <PrimaryButtonContainer buttons={BUTTONS} navigation={navigation} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
