import SoundPlayer from 'react-native-sound-player';

try {
  // play the file tone.mp3
  SoundPlayer.playSoundFile('testAudio', 'mp3');
  // or play from url
  // SoundPlayer.playUrl('https://example.com/music.mp3');
} catch (e) {
  console.log('cannot play the sound file', e);
}

// import React, {useState, useEffect, useCallback} from 'react';
// import {View, Text, TouchableOpacity, FlatList} from 'react-native';
// import {audioPlayerStyles as styles} from '../assets/styles';
// import RNFS from 'react-native-fs';
// import Sound from 'react-native-sound';

// interface MP3File {
//   name: string;
//   path: string;
// }

// const MP3Player: React.FC = () => {
//   const [mp3Files, setMP3Files] = useState<MP3File[]>([]);
//   const [selectedSound, setSelectedSound] = useState<Sound | null>(null);

//   // List MP3 files
//   const listMP3Files = async () => {
//     try {
//       const files = await RNFS.readDir(RNFS.DocumentDirectoryPath);
//       const mp3s = files.filter(file =>
//         file.name.endsWith('.mp3'),
//       ) as unknown as MP3File[];
//       setMP3Files(mp3s);
//     } catch (error) {
//       console.error('Error reading directory:', error);
//     }
//   };

//   // Play selected MP3
//   const playSound = (path: string) => {
//     if (selectedSound) {
//       selectedSound.release();
//     }

//     const sound = new Sound(path, '', error => {
//       if (error) {
//         console.error('Failed to load sound', error);
//       } else {
//         setSelectedSound(sound);
//         sound.play();
//       }
//     });
//   };

//   // Stop playing
//   const stopSound = useCallback(() => {
//     if (selectedSound) {
//       selectedSound.stop();
//       setSelectedSound(null);
//     }
//   }, [selectedSound]);

//   // Delete selected MP3
//   const deleteSound = async (path: string) => {
//     try {
//       await RNFS.unlink(path);
//       listMP3Files(); // Refresh the list
//     } catch (error) {
//       console.error('Error deleting file:', error);
//     }
//   };

//   useEffect(() => {
//     listMP3Files();

//     return () => {
//       stopSound(); // Stop playing sound when component unmounts
//     };
//   }, [stopSound]);

//   return (
//     <View>
//       <Text>Available MP3 Files:</Text>
//       <FlatList
//         data={mp3Files}
//         keyExtractor={item => item.path}
//         renderItem={({item}) => (
//           <View style={styles.row}>
//             <TouchableOpacity
//               onPress={() => playSound(item.path)}
//               style={styles.playButton}>
//               <Text>{item.name}</Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//               onPress={() => deleteSound(item.path)}
//               style={styles.deleteButton}>
//               <Text>Delete</Text>
//             </TouchableOpacity>
//           </View>
//         )}
//       />
//       <TouchableOpacity onPress={stopSound} style={styles.stopButton}>
//         <Text>Stop Playing</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default MP3Player;
