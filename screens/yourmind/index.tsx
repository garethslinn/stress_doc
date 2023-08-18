import React from 'react';
import {TouchableOpacity, Text, ScrollView, SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {MindDetailsScreenNavigationProp} from '../../types/screens/mind'; // Adjust the import path
import {styles} from '../../assets/styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {TEXT} from '../../constants';
import {Title} from '../../components/Title';

type ContentItem = {
  title: string;
  component: 'MindParts' | 'Worrying';
};

function MindContents() {
  const navigation = useNavigation<MindDetailsScreenNavigationProp>();

  const contentList: ContentItem[] = [
    {title: 'Consciousness', component: 'MindParts'},
    {title: 'Worrying', component: 'Worrying'},
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView style={styles.body}>
        <Title title={TEXT.screen.mind} />
        {contentList.map((content, index) => (
          <TouchableOpacity
            key={index}
            style={styles.item}
            onPress={() =>
              navigation.navigate('MindDetails', {component: content.component})
            }>
            <Text style={styles.itemText}>{content.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <Footer />
    </SafeAreaView>
  );
}

export default MindContents;
