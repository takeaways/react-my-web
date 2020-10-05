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

  logout() {
    myFirebase.auth().signOut()
  }

  onAuthChange(onUserChange: any) {
    firebase.auth().onAuthStateChanged(user => {
      onUserChange(user)
    })
  }
}

export default AuthService
