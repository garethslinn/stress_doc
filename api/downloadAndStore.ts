import RNFS from 'react-native-fs';
import axios from 'axios';
// import {API, AUDIO} from '../constants';

export const downloadAndStoreMP3 = async (url: string, filename: string) => {
  try {
    // Specify the path
    const path = `${RNFS.DocumentDirectoryPath}/${filename}.mp3`;

    // Download the file
    const {data} = await axios.get(url, {
      responseType: 'arraybuffer', // Important to receive the file as an ArrayBuffer
    });

    // Write the file to the path
    await RNFS.writeFile(path, data, 'base64');

    console.log(`File downloaded and saved at ${path}`);
  } catch (error) {
    console.error('Error downloading the file:', error);
  }
};

// Example usage

// const url = API.url;
// const fileName = AUDIO.testAudio;

//downloadAndStoreMP3(url, fileName);
