/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  apiKey: "AIzaSyBTK7ccUaULBRP3Vlla94cmJEzd0UITXG8",
  authDomain: "friendlychat-dc29f.firebaseapp.com",
  projectId: "friendlychat-dc29f",
  storageBucket: "friendlychat-dc29f.appspot.com",
  messagingSenderId: "85357001518",
  appId: "1:85357001518:web:c040dfb57d4816193758bf"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}