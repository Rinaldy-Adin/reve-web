import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: 'AIzaSyBUrE5Q_oUVgGF6pPwKab2ulh2c-WauT-s',
    authDomain: 'tggr-photo-tagger.firebaseapp.com',
    projectId: 'tggr-photo-tagger',
    storageBucket: 'tggr-photo-tagger.appspot.com',
    messagingSenderId: '99293583720',
    appId: '1:99293583720:web:a79405ac2d1cc3d1861edd',
};

const initialize = () => {
    initializeApp(firebaseConfig);
};

export { initialize };
