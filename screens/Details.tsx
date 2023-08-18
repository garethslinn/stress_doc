import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, ScrollView, SafeAreaView} from 'react-native';
import {causes} from '../data/causes';
import {styles} from '../assets/styles';
import Footer from '../components/Footer';
import Header from '../components/Header';
import BackButton from '../components/BackButton';
import {
  ProfileScreenNavigationProp,
  ProfileScreenProps,
} from '../types/screens/Details';

function Details({route}: ProfileScreenProps) {
  const {id} = route.params;
  const parsedId = parseInt(id, 10); // Parsing the id to a number

  const navigation = useNavigation<ProfileScreenNavigationProp>();

  // Update the parameter type to number
  function getObjectById(causeId: number) {
    return causes.find(obj => obj.id === causeId);
  }

  const item = getObjectById(parsedId);

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <BackButton navigation={navigation} />
      <ScrollView style={styles.body}>
        <Text style={styles.title3}>{item?.title}</Text>
        <View style={styles.decriptionWrapper}>
          <Text style={styles.text}>{item?.description}</Text>
        </View>
        <View style={styles.symptomsWrapper}>
          {item?.symptoms.map((symptom, index) => (
            <Text key={index} style={styles.text}>
              &bull; {symptom}
            </Text>
          ))}
        </View>
        <View style={styles.approachWrapper}>
          <Text style={styles.text}>{item?.approach}</Text>
        </View>
      </ScrollView>
      <Footer />
    </SafeAreaView>
  );
}

export default Details;
