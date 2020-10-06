import { authService } from '../myFirebase'
import firebase from 'firebase'

class AuthService {
  login(providerName: 'Google' | 'Github') {
    const privider = `${providerName}AuthProvider` as
      | 'GoogleAuthProvider'
      | 'GithubAuthProvider'
    const authProvider = new firebase.auth[privider]()
    return authService.signInWithPopup(authProvider)
  }

  logout() {
    authService.signOut()
  }

  onAuthChange(onUserChange: any) {
    firebase.auth().onAuthStateChanged(user => {
      onUserChange(user)
    })
  }
}

export default AuthService
