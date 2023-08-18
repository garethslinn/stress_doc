import React from 'react';
import {View, ScrollView, Text} from 'react-native';
import {mindDocStyles as styles} from '../../../assets/styles';

function MindParts() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>
          The mind can be thought of as being organized into different levels,
          although it's important to note that these categories are more
          conceptual rather than distinct, separate parts of the brain. The
          three levels often described are:
        </Text>

        <View style={styles.section}>
          <Text style={styles.subtitle}>
            1. Conscious Mind (Waking Conscious):
          </Text>
          <Text style={styles.text}>
            - What it Does: This part of the mind is involved in our immediate
            awareness. It contains everything you are actively thinking and
            aware of at any given moment. This includes your current sensations,
            perceptions, memories, thoughts, and feelings that you can readily
            evoke and to which you can direct your attention.
          </Text>
          <Text style={styles.text}>
            - How it Works: The conscious mind operates through voluntary
            control and choice. It helps you make decisions, think critically,
            and engage with your environment in a mindful way. This is where
            active problem-solving and planning happen. It's like the "tip of
            the iceberg" because much of the mind's activity remains hidden in
            the subconscious and unconscious levels.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.subtitle}>
            2. Subconscious Mind (or Preconscious):
          </Text>
          <Text style={styles.text}>
            - What it Does: The subconscious mind stores memories, beliefs,
            previous experiences, and behaviors that you are not actively
            thinking about but can bring into conscious awareness.
          </Text>
          <Text style={styles.text}>
            - How it Works: Think of the subconscious as a vast library of all
            the information you have ever learned and experienced. You're not
            actively aware of all this information at once, but you can retrieve
            it when needed. The subconscious mind greatly influences your
            behaviors and emotions, often in ways you may not be aware of. For
            example, a subconscious fear may lead to conscious anxiety in
            certain situations.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.subtitle}>3. Unconscious Mind:</Text>
          <Text style={styles.text}>
            - What it Does: The unconscious mind is the repository for thoughts,
            memories, and desires that are well below the surface of conscious
            awareness. It also governs automatic processes such as heart rate,
            breathing, and digestion.
          </Text>
          <Text style={styles.text}>
            - How it Works: The unconscious mind operates without our conscious
            control or awareness. It influences behaviors and emotions at a
            level we cannot readily access. Sigmund Freud likened it to the bulk
            of the iceberg beneath the water's surface, hidden and powerful. The
            unconscious mind can also be thought of as managing all the
            involuntary functions of the body, like the heartbeat, hormone
            release, and cell function. It's a highly complex system that is
            still not fully understood.
          </Text>
        </View>

        <Text style={styles.subtitle}>Summary</Text>
        <Text style={styles.summary}>
          The conscious mind involves our active, present awareness and thought
          processes. The subconscious acts as a bridge, storing memories and
          experiences that can be brought into consciousness. Finally, the
          unconscious mind is involved in both deep-seated psychological
          processes and the regulation of basic bodily functions. Together,
          these three levels interact to create our overall mental life and
          bodily function.
        </Text>
      </ScrollView>
    </View>
  );
}

export default MindParts;
