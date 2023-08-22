import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, SafeAreaView } from 'react-native';
import { Audio, InterruptionModeIOS } from 'expo-av';
import * as FileSystem from 'expo-file-system';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { audioPlayerStyles as styles } from '../assets/styles';
import { API, AUDIO } from '../constants';

interface MP3File {
  name: string;
  path: string;
  downloaded: boolean;
}

const AudioPlayer: React.FC = () => {
  const [mp3Files, setMP3Files] = useState<MP3File[]>([
    { name: 'testAudio1', path: API.url + AUDIO.testAudio, downloaded: false },
    { name: 'testAudio2', path: API.url + AUDIO.testAudio2, downloaded: false },
    { name: 'testAudio3', path: API.url + AUDIO.testAudio3, downloaded: false },
    { name: 'testAudio4', path: API.url + AUDIO.testAudio4, downloaded: false },
  ]);

  const [selectedPlayer, setSelectedPlayer] = useState<Audio.Sound | null>(null);
  const [isSoundFinish, setIsSoundFinish] = useState(false);

  useEffect(() => {
    const checkDownloads = async () => {
      const updatedMp3Files = await Promise.all(
        mp3Files.map(async (file) => {
          const localPath = FileSystem.documentDirectory + file.name + '.mp3';
          const exists = await FileSystem.getInfoAsync(localPath);
          if (exists.exists) {
            return { ...file, downloaded: true, path: localPath };
          }
          return file;
        })
      );

      setMP3Files(updatedMp3Files);
    };

    checkDownloads();
  }, []);

  useEffect(() => {
    if (selectedPlayer) {
      selectedPlayer.setOnPlaybackStatusUpdate((status) => {
        if (status.isLoaded && status.didJustFinish) {
          stopSound();
        }
      });
    }
  }, [selectedPlayer]);

  async function playSound(fileName: string, path: string) {
    try {
      await Audio.setAudioModeAsync({
        interruptionModeIOS: InterruptionModeIOS.DuckOthers,
        playsInSilentModeIOS: true,
        staysActiveInBackground: false,
        allowsRecordingIOS: false,
      });

      if (selectedPlayer) {
        await selectedPlayer.unloadAsync();
      }

      const sound = new Audio.Sound();

      console.log('Attempting to load audio from path:', path);

      await sound.loadAsync({ uri: path });

      console.log('Playing Sound');
      await sound.playAsync();

      console.log('Audio loaded successfully. Now playing...');

      setSelectedPlayer(sound);

      sound.setOnPlaybackStatusUpdate((status) => {
        if (status.isLoaded && status.didJustFinish) {
          setIsSoundFinish(true);
        }
      });

      await sound.playAsync();
    } catch (error) {
      console.error('Error playing sound:', error);
    }
  }

  const stopSound = useCallback(async () => {
    if (selectedPlayer) {
      await selectedPlayer.stopAsync();
      await selectedPlayer.unloadAsync();
      setSelectedPlayer(null);
    }
    setIsSoundFinish(false);
  }, [selectedPlayer]);

  const checkRemoteFileExists = async (url: string): Promise<boolean> => {
    try {
      const response = await fetch(url, { method: 'HEAD' });
      return response.status === 200; // Check if the response status is OK (file exists)
    } catch (error) {
      console.error('Error checking file existence:', error);
      return false;
    }
  };

  const downloadSound = async (url: string, index: number) => {
    const remoteFileExists = await checkRemoteFileExists(url);

    if (!remoteFileExists) {
      console.log('File does not exist remotely.');
      // Handle the case where the file doesn't exist remotely (e.g., show a message)
      return;
    }

    const destPath = FileSystem.documentDirectory + mp3Files[index].name + '.mp3';
    try {
      await FileSystem.downloadAsync(url, destPath);
      setMP3Files((prev) => {
        const newMp3Files = [...prev];
        newMp3Files[index].downloaded = true;
        newMp3Files[index].path = destPath;
        return newMp3Files;
      });
    } catch (error) {
      console.error('Error downloading file:', error);

      // Handle the error, e.g., show an error message to the user
      // You can use 'error.message' to get the error message string
      // and take appropriate action based on the error type
    }
  };

  const deleteSound = async (path: string, index: number) => {
    try {
      await FileSystem.deleteAsync(path);
      setMP3Files((prev) => {
        const newMp3Files = [...prev];
        newMp3Files[index].downloaded = false;
        newMp3Files[index].path = API.url + AUDIO[`testAudio${index + 1}`]; // Update the path to the remote file
        return newMp3Files;
      });
    } catch (error) {
      console.error('Error deleting file:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.body}>
        <Text>Available MP3 Files:</Text>
        <FlatList
          data={mp3Files}
          keyExtractor={(item) => item.path}
          renderItem={({ item, index }) => (
            <View style={styles.row}>
              <Text style={styles.fileName}>{item.name}</Text>
              {item.downloaded ? (
                <>
                  <TouchableOpacity onPress={() => playSound(item.name, item.path)} style={styles.button}>
                    <Text>Play</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => deleteSound(item.path, index)} style={styles.button}>
                    <Text>Delete</Text>
                  </TouchableOpacity>
                </>
              ) : (
                <TouchableOpacity onPress={() => downloadSound(item.path, index)} style={styles.button}>
                  <Text>Download</Text>
                </TouchableOpacity>
              )}
            </View>
          )}
        />
        <TouchableOpacity onPress={stopSound} style={styles.button}>
          <Text>Stop Playing</Text>
        </TouchableOpacity>
      </View>
      <Footer />
    </SafeAreaView>
  );
};

export default AudioPlayer;
