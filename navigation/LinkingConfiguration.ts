import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Main: {
            screens: {
              MainScreen: 'main',
            },
          },
          CheckInHistory: {
            screens: {
              CheckInHistoryScreen: 'checkInHistory',
            },
          },
          DeviceRegistration: {
            screens: {
              DeviceRegistrationScreen: 'deviceRegistration',
            },
          },
          ShowMap: {
            screens: {
              ShowMapScreen: 'showMap',
            },
          },
          Help: {
            screens: {
              HelpScreen: 'help',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
