import React, {useState, useEffect, useMemo} from 'react';
import {View, Text, TouchableOpacity, Animated} from 'react-native';
import {screenNavigator as styles} from '../assets/styles/screenNavigator';

type ScreenNavigatorProps = {
  screens: string[];
};

export const ScreenNavigator: React.FC<ScreenNavigatorProps> = ({screens}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const fadeInOpacity = useMemo(() => new Animated.Value(0), []);

  useEffect(() => {
    fadeInOpacity.setValue(0); // Reset opacity to 0 before fading in
    Animated.timing(fadeInOpacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [currentIndex, fadeInOpacity]);

  return (
    <View style={styles.container}>
      <Animated.Text style={{...styles.text, opacity: fadeInOpacity}}>
        {screens[currentIndex]}
      </Animated.Text>
      <View style={styles.buttons}>
        <TouchableOpacity
          onPress={() => setCurrentIndex(prev => Math.max(0, prev - 1))}>
          <Text style={styles.button}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            setCurrentIndex(prev => Math.min(screens.length - 1, prev + 1))
          }>
          <Text style={styles.button}>Forward</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.meter}>
        <Text style={styles.meterText}>{`${currentIndex + 1} / ${
          screens.length
        }`}</Text>
      </View>
    </View>
  );
};
