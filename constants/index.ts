export const TEXT = {
  appName: 'Stress Doc',
  screen: {
    mind: 'About Your Mind',
    audio: 'Audio',
    issues: 'Issues',
    strategies: 'Strategies',
    tools: 'Tools',
    settings: 'Settings',
    home: {
      title: 'How can I assist you?',
    },
  },
  components: {
    backButton: 'Go Back',
  },
};

export const API = {
  url: 'https://github.com/garethslinn/testAudio/blob/main/',
};

export const AUDIO = {
  testAudio: 'testAudio.mp3',
  testAudio2: 'testAudio2.mp3',
  testAudio3: 'testAudio3.mp3',
};

export const ICONS = {
  Home: require('../assets/home.png'),
  MindContents: require('../assets/brain.png'),
  Issues: require('../assets/issues.png'),
  Strategies: require('../assets/strategies.png'),
  Tools: require('../assets/tools.png'),
  Settings: require('../assets/settings.png'),
};

export const BUTTONS = [
  {
    title: TEXT.screen.mind,
    screen: 'MindContents',
  },
  {
    title: TEXT.screen.audio,
    screen: 'Audio',
  },
  {
    title: TEXT.screen.issues,
    screen: 'Issues',
  },
  {
    title: TEXT.screen.strategies,
    screen: 'Strategies',
  },
  {
    title: TEXT.screen.tools,
    screen: 'Tools',
  },
  {
    title: TEXT.screen.settings,
    screen: 'Settings',
  },
];
