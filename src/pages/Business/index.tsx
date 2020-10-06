import React from 'react'
import { Switch, Route } from 'react-router-dom'
import AuthService from '../../services/auth_service'
import Login from './components/login/login'
import styles from './business.module.css'
import Maker from './components/maker/maker'
import ImageUploader from 'services/image_uploader'
import ImageFileInput from './components/image_file_input/image_file_input'

const authService = new AuthService()
const imageUploader = new ImageUploader()

const FileInput = (props: any) => (
  <ImageFileInput {...props} imageUploader={imageUploader} />
)

export default function Business() {
  return (
    <div className={styles.app}>
      <Switch>
        <Route path="/business" exact>
          <Login authService={authService} />
        </Route>
        <Route path="/business/maker">
          <Maker FileInput={FileInput} authService={authService} />
        </Route>
      </Switch>
    </div>
  )
}
