import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/native';

export type RootStackParamList = {
  Details: {id: string};
};

export type ProfileScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Details'
>;

export type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;

export type ProfileScreenProps = {
  route: ProfileScreenRouteProp;
};
