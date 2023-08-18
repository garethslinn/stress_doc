import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamList} from './types';

import Issues from './screens/Issues';
import Home from './screens/Home';
import Audio from './screens/AudioPlayer';
import Details from './screens/Details';
import Strategies from './screens/Strategies';
import Tools from './screens/Tools';
import Settings from './screens/Settings';
import MindContents from './screens/yourmind/index';
import MindParts from './screens/yourmind/components/MindParts';
import Worrying from './screens/yourmind/components/Worrying';
import MindDetails from './screens/yourmind/MindDetails';

const Stack = createStackNavigator<RootStackParamList>();

function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Audio"
            component={Audio}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Issues"
            component={Issues}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="MindContents"
            component={MindContents}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Details"
            component={Details}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Strategies"
            component={Strategies}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Tools"
            component={Tools}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Settings"
            component={Settings}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="MindParts"
            component={MindParts}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Worrying"
            component={Worrying}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="MindDetails"
            component={MindDetails}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
