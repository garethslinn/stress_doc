import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { audioPlayerStyles as styles } from '../assets/styles';
import * as FileSystem from 'expo-file-system';
import { Audio } from 'expo-av';
import { API, AUDIO } from '../constants';

interface MP3File {
  name: string;
  path: string;
  downloaded: boolean;
}

const AudioComponent: React.FC = () => {
  const [mp3Files, setMP3Files] = useState<MP3File[]>([
    {name: 'testAudio1', path: API.url + AUDIO.testAudio, downloaded: false},
    {name: 'testAudio2', path: API.url + AUDIO.testAudio2, downloaded: false},
    {name: 'testAudio3', path: API.url + AUDIO.testAudio3, downloaded: false},
  ]);
  const [soundObject, setSoundObject] = useState<Audio.Sound | null>(null);

  const playSound = async (path: string) => {
    const sound = new Audio.Sound();
    try {
      await sound.loadAsync({ uri: path });
      setSoundObject(sound);
      await sound.playAsync();
    } catch (error) {
      console.error('Error loading sound:', error);
    }
  };

  const stopSound = useCallback(async () => {
    if (soundObject) {
      await soundObject.stopAsync();
      await soundObject.unloadAsync();
      setSoundObject(null);
    }
  }, [soundObject]);

  const deleteSound = async (path: string, index: number) => {
    try {
      await FileSystem.deleteAsync(path);
      // Update your mp3Files state as needed
    } catch (error) {
      console.error('Error deleting file:', error);
    }
  };

  const downloadSound = async (url: string, index: number) => {
    const destPath = `${FileSystem.documentDirectory}${mp3Files[index].name}.mp3`;

    FileSystem.downloadAsync(url, destPath)
      .then(() => {
        // Update your mp3Files state as needed
      })
      .catch(error => {
        console.error('Error downloading file:', error);
      });
  };

  useEffect(() => {
    return () => {
      stopSound(); // Unload the sound object when component unmounts
    };
  }, [stopSound]);

  return (
    <View style={styles.container}>
      {/* Render your UI components */}
    </View>
  );
};

export default AudioComponent;

