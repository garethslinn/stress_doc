import {StackNavigationProp} from '@react-navigation/stack';

export type RouteParams = {
  component: 'MindParts' | 'Worrying';
};

export type RootStackParamList = {
  MindDetails: RouteParams; // Define this according to your actual route params
  // other routes
};

export type MindDetailsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'MindDetails'
>;
