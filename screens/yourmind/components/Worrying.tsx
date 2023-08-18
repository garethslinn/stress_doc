import React from 'react';
import {View, ScrollView, Text} from 'react-native';
import {mindDocStyles as styles} from '../../../assets/styles';

function Worrying() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>
          Worrying is a natural human response to uncertainty and potential
          threats. It involves thoughts, images, and emotions of a negative
          nature in which mental unease or apprehension is prominent. This
          article will outline what worrying is, how it manifests, its causes
          and effects, and provide practical ways to manage it.
        </Text>

        <View style={styles.section}>
          <Text style={styles.subtitle}>Understanding Worrying:</Text>
          <Text style={styles.text}>
            - Normal Worrying: A common reaction to stressors and usually
            resolves once the situation has passed. - Chronic Worrying:
            Persistent and uncontrollable worrying about different aspects of
            life. It can interfere with daily living and may be a sign of an
            underlying anxiety disorder.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.subtitle}>How It Manifests:</Text>
          <Text style={styles.text}>
            - Mentally: Repeated thoughts or mental images about potential
            negative outcomes, difficulties in concentrating, indecisiveness. -
            Physically: Symptoms like headaches, muscle tension, sleep
            disturbances, or gastrointestinal problems.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.subtitle}>Causes of Worrying:</Text>
          <Text style={styles.text}>
            - Personal Factors: Genetics, personality type, personal
            experiences. - Environmental Factors: Stressful life events,
            societal pressures, family upbringing. - Psychological Factors:
            Underlying mental health disorders, poor coping skills.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.subtitle}>Effects of Worrying:</Text>
          <Text style={styles.text}>
            - Physical Health Issues: Such as heart problems, digestive issues,
            and weakened immune system. - Mental Health Problems: Including
            anxiety disorders, depression, and even burnout.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.subtitle}>
            Practical Ways to Manage Worrying:
          </Text>
          <Text style={styles.text}>
            - Identify the Triggers. - Develop Coping Strategies. - Set
            Realistic Goals and Expectations. - Professional Help. - Avoid
            Unnecessary Stressors. - Medication (in severe cases).
          </Text>
        </View>

        <Text style={styles.subtitle}>Conclusion</Text>
        <Text style={styles.summary}>
          Worrying is a complex emotional response that can be both normal and
          pathological. Recognizing when worrying is becoming problematic and
          taking proactive steps to manage it can prevent negative effects on
          overall well-being. This requires a combination of self-awareness,
          practical coping strategies, and professional help if needed. By
          addressing worrying in a systematic way, individuals can lead a more
          peaceful and productive life.
        </Text>
      </ScrollView>
    </View>
  );
}

export default Worrying;
