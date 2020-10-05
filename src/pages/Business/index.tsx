import React from 'react'
import { Switch, Route } from 'react-router-dom'
import AuthService from '../../services/auth_service'
import Login from './components/login/login'
import styles from './business.module.css'
import Maker from './components/maker/maker'

const authService = new AuthService()
export default function Business() {
  return (
    <div className={styles.app}>
      <Switch>
        <Route path="/business" exact>
          <Login authService={authService} />
        </Route>
        <Route path="/business/maker">
          <Maker authService={authService} />
        </Route>
      </Switch>
    </div>
  )
}
