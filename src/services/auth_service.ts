import myFirebase from '../myFirebase'
import firebase from 'firebase'

class AuthService {
  login(providerName: 'Google' | 'Github') {
    const privider = `${providerName}AuthProvider` as
      | 'GoogleAuthProvider'
      | 'GithubAuthProvider'
    const authProvider = new firebase.auth[privider]()
    return myFirebase.auth().signInWithPopup(authProvider)
  }
}

export default AuthService
