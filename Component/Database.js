//Import Firebase
import firebase from 'react-native-firebase';

//pluk values from your GoogleService-Info.plist you created on the firebase console
const iosConfig = {
    clientId:
        '68005676605-23v14pcqmsauu2datp50q0rta7i6ook8.apps.googleusercontent.com',
    appId: '1:68005676605:ios:144d45cac0a023aba48c54',
    apiKey: 'AIzaSyAIEdB7goN8QEVo8QJT17rEGrIFK3PHhQg',
    databaseURL: 'https://take-one-show.firebaseio.com',
    storageBucket: 'take-one-show.appspot.com',
    messagingSenderId: '68005676605',
    projectId: 'take-one-show',
    //enable persistence by adding the below flag
    persistence: true,
};

//pluk values from your Google-Service.json you created on the firebase console
const androidConfig = {
    clientId:
        '68005676605-odkplr1dk6i6gs3ncr4oroullmgvpf95.apps.googleusercontent.com',
    appId: '1:68005676605:android:7df815ef660fdf99a48c54',
    apiKey: 'AIzaSyCy8MQLXVeBoabFh0LDWy8zsAr27WvqtUs',
    databaseURL: 'https://take-one-show.firebaseio.com',
    storageBucket: 'take-one-show.appspot.com',
    messagingSenderId: '68005676605',
    projectId: 'take-one-show',
    //enable persistence by adding the below flag
    persistence: true,
};

//Call Firebase
const TakeOneShowApp = firebase.initializeApp(
    //use platform specific firebase config
    Platform.OS === 'ios' ? iosConfig : androidConfig,
    // name of this app
    'TakeOneShow',
);
const rootRef = firebase.database().ref();

export { rootRef };
