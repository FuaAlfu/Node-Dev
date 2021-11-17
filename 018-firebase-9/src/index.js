const dotenv = require('dotenv').config();
dotenv.config();

import {initializeApp} from 'firebase/app'

const firebaseConfig = {
    apiKey: API_KEY,
        authDomain: AUTH_DOMAIN,
        projectId: PROJECT_ID,
        storageBucket: STORAGE_BUCKET,
        messagingSenderId: MESSAGING_SENDER_ID,
        appId: APP_ID
  };

  initializeApp(firebaseConfig)