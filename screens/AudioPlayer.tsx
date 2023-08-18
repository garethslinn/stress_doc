import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';
import * as FileSystem from 'expo-file-system';

interface MP3File {
  name: string;
  path: string;
  downloaded: boolean;
}

const API = {
  url: 'YOUR_API_URL_HERE',
};

const AUDIO = {
  testAudio: '/path/to/testAudio1.mp3',
  testAudio2: '/path/to/testAudio2.mp3',
  testAudio3: '/path/to/testAudio3.mp3',
};

const AudioPlayer: React.FC = () => {
  const [mp3Files, setMP3Files] = useState<MP3File[]>([
    { name: 'testAudio1', path: API.url + AUDIO.testAudio, downloaded: false },
    { name: 'testAudio2', path: API.url + AUDIO.testAudio2, downloaded: false },
    { name: 'testAudio3', path: API.url + AUDIO.testAudio3, downloaded: false },
  ]);
  const [selectedPlayer, setSelectedPlayer] = useState<Audio.Sound | null>(null);

  const playSound = async (path: string) => {
    const { sound } = await Audio.Sound.createAsync({ uri: path });
    setSelectedPlayer(sound);
    await sound.playAsync();
  };

  const stopSound = useCallback(() => {
    selectedPlayer?.stopAsync();
    setSelectedPlayer(null);
  }, [selectedPlayer]);

  const deleteSound = async (path: string, index: number) => {
    try {
      await FileSystem.deleteAsync(path);
      setMP3Files((prev) => {
        const newMp3Files = [...prev];
        newMp3Files[index].downloaded = false;
        newMp3Files[index].path = API.url + (index === 0 ? AUDIO.testAudio : index === 1 ? AUDIO.testAudio2 : AUDIO.testAudio3);
        return newMp3Files;
      });
    } catch (error) {
      console.error('Error deleting file:', error);
    }
  };

  const downloadSound = async (url: string, index: number) => {
    const destPath = FileSystem.documentDirectory + mp3Files[index].name + '.mp3';
    await FileSystem.downloadAsync(url, destPath);
    setMP3Files((prev) => {
      const newMp3Files = [...prev];
      newMp3Files[index].downloaded = true;
      newMp3Files[index].path = destPath;
      return newMp3Files;
    });
  };

  useEffect(() => {
    return () => {
      stopSound();
    };
  }, [stopSound]);

  return (
    <View style={styles.container}>
      <Text>Available MP3 Files:</Text>
      <FlatList
        data={mp3Files}
        keyExtractor={item => item.path}
        renderItem={({ item, index }) => (
          <View style={styles.row}>
            <Text style={styles.fileName}>{item.name}</Text>
            {item.downloaded ? (
              <>
                <TouchableOpacity
                  onPress={() => playSound(item.path)}
                  style={styles.playButton}>
                  <Text>Play</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => deleteSound(item.path, index)}
                  style={styles.deleteButton}>
                  <Text>Delete</Text>
                </TouchableOpacity>
              </>
            ) : (
              <TouchableOpacity
                onPress={() => downloadSound(item.path, index)}
                style={styles.downloadButton}>
                <Text>Download</Text>
              </TouchableOpacity>
            )}
          </View>
        )}
      />
      <TouchableOpacity onPress={stopSound} style={styles.stopButton}>
        <Text>Stop Playing</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  fileName: {
    flex: 1,
  },
  playButton: {
    padding: 10,
    backgroundColor: 'green',
    marginRight: 10,
  },
  deleteButton: {
    padding: 10,
    backgroundColor: 'red',
    marginRight: 10,
  },
  downloadButton: {
    padding: 10,
    backgroundColor: 'blue',
  },
  stopButton: {
    padding: 10,
    backgroundColor: 'gray',
    marginTop: 20,
  },
});

export default AudioPlayer;
