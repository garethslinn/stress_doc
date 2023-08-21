import React, {useState} from 'react';
import {
  TouchableOpacity,
  FlatList,
  RefreshControl,
  Text,
  View,
  SafeAreaView,
} from 'react-native';
import {Title} from '../components/Title';

import {causes} from '../data/causes';
import Footer from '../components/Footer';
import Header from '../components/Header';
import {styles} from '../assets/styles';
import {TEXT} from '../constants';
import {IssuesProps} from '../types/screens/Issues';

function Issues({navigation}: IssuesProps): JSX.Element {
  const [items] = useState(causes); // Initialise items with causes data
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    // Logic to update the items on refresh goes here
    setRefreshing(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.body}>
        <Title title={TEXT.screen.issues} />
        <FlatList
          testID="IssueFlatList"
          keyExtractor={(_item, index) => index.toString()}
          data={items} // Use items here
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.item}
              onPress={() => navigation.navigate('Details', {id: item.id})}>
              <Text style={styles.itemText}>{item.title}</Text>
            </TouchableOpacity> // Closing tag added here
          )}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              colors={['#555']} // update this color
            />
          }
        />
      </View>
      <Footer />
    </SafeAreaView>
  );
}

export default Issues;