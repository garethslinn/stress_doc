import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

interface Slide {
  id: number;
  text: string;
  duration?: number;
}

interface SlideshowProps {
  slides: Slide[];
  title: string;
}

const DEFAULT_DURATION = 5 as const;

const Slideshow: React.FC<SlideshowProps> = ({ slides, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      fadeIn();
    });
  };

  useEffect(() => {
    const slideDuration =
      (slides[currentIndex]?.duration || DEFAULT_DURATION) * 1000;
    fadeIn();
    const timer = setTimeout(fadeOut, slideDuration - 500); // Subtracting the fade out duration so it starts fading out 0.5s before the next slide

    return () => clearTimeout(timer);
  }, [currentIndex, slides]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Animated.Text style={[styles.slideText, { opacity: fadeAnim }]}>
        {slides[currentIndex]?.text}
      </Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  slideText: {
    fontSize: 32,
    color: 'white',
    textAlign: 'center',
  },
});

export default Slideshow;
