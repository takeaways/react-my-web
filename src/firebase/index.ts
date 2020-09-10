import * as firebase from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyAGngx8yvBcNcIc-hgBkMTU0NMnvPsfirc',
  authDomain: 'react-my-web.firebaseapp.com',
  databaseURL: 'https://react-my-web.firebaseio.com',
  projectId: 'react-my-web',
  storageBucket: 'react-my-web.appspot.com',
  messagingSenderId: '826491004530',
  appId: '1:826491004530:web:99bb6c098fcaea046904eb',
}

export default firebase.initializeApp(firebaseConfig)

//initial firebase
