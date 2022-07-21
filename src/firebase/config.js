import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyD-R3RVuGJM2p3-4IefDW1LyXwmdSL7eXQ',
  authDomain: 'miniblog-e8d1b.firebaseapp.com',
  projectId: 'miniblog-e8d1b',
  storageBucket: 'miniblog-e8d1b.appspot.com',
  messagingSenderId: '995002789140',
  appId: '1:995002789140:web:099961ff49a809e480a601'
}

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

export { db }
