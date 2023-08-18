import React from 'react';
import {View, ScrollView, Text} from 'react-native';
import {mindDocStyles as styles} from '../../../assets/styles';

function BrainWaves() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>
          Brainwaves are electrical impulses in the brain, categorized into
          different frequencies that are associated with various mental states.
          They play a crucial role in everyday functioning, sleep, meditation,
          and stress management. This article delves into the four main
          brainwave states – alpha, beta, delta, and theta – and their relevance
          to psychology and stress management.
        </Text>

        <View style={styles.section}>
          <Text style={styles.subtitle}>
            Alpha Waves (8-13 Hz): Relaxation and Creativity
          </Text>
          <Text style={styles.text}>
            Alpha waves facilitate relaxation techniques, reducing anxiety, and
            promoting a sense of well-being. Creativity flourishes in the alpha
            state, where the mind can explore new ideas without judgment.
            Meditation practices often target the alpha state to enhance
            mindfulness and presence.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.subtitle}>
            Beta Waves (13-30 Hz): Alertness and Concentration
          </Text>
          <Text style={styles.text}>
            Beta state is essential for logical thinking, analysis, and active
            concentration. Prolonged exposure to high beta waves can lead to
            stress, anxiety, and restlessness. Beta waves are vital for
            attention, learning, and information processing.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.subtitle}>
            Delta Waves (0.5-4 Hz): Deep Sleep and Healing
          </Text>
          <Text style={styles.text}>
            Delta state aids in physical recovery and the healing process.
            Achieving delta waves through deep sleep can balance emotions and
            promote mental wellness. Regular access to delta sleep can reduce
            chronic stress and related health issues.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.subtitle}>
            Theta Waves (4-8 Hz): Intuition and Deep Relaxation
          </Text>
          <Text style={styles.text}>
            Theta state fosters profound relaxation and healing meditation. It's
            often in the theta state that intuition, insight, and spontaneous
            problem-solving occur. Therapies using theta waves can assist in
            releasing trapped emotions and healing trauma.
          </Text>
        </View>

        <Text style={styles.subtitle}>Conclusion</Text>
        <Text style={styles.summary}>
          Understanding and utilizing these brainwave states offer powerful
          tools for stress management and overall psychological well-being.
          Techniques like mindfulness, biofeedback, and meditation can guide the
          brain into desired states, fostering relaxation, creativity, or
          concentration as needed. In an era of increased stress and mental
          health challenges, the exploration of brainwave states opens new paths
          to wellness. By consciously guiding our minds through alpha, beta,
          delta, and theta states, we can cultivate mental resilience and lead
          more balanced, fulfilling lives.
        </Text>
      </ScrollView>
    </View>
  );
}

export default BrainWaves;
