import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {useRoute, useNavigation, RouteProp} from '@react-navigation/native';
import {MindParts, Worrying} from './components'; // Adjust the import path
import BackButton from '../../components/BackButton';
import {
  RootStackParamList,
  MindDetailsScreenNavigationProp,
} from '../../types/screens/mind'; // Adjust the import path
import {styles} from '../../assets/styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function MindDetails() {
  const route = useRoute<RouteProp<RootStackParamList, 'MindDetails'>>();
  const {component} = route.params;

  const navigation = useNavigation<MindDetailsScreenNavigationProp>();

  const componentsMap = {
    MindParts,
    Worrying,
  };

  const ContentComponent = componentsMap[component];

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <BackButton navigation={navigation} />
      <View style={styles.body}>
        {ContentComponent && <ContentComponent />}
      </View>
      <Footer />
    </SafeAreaView>
  );
}

export default MindDetails;
