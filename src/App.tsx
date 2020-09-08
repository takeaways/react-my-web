import React from 'react'
import { Header, NavBar, Main, Footer } from './Components/Layout'
import MainRouter from './Routes'

function App() {
  return (
    <>
      <Header />
      <NavBar />
      {/* <SideBar /> */}
      <Main>
        <MainRouter />
      </Main>
      <Footer />
    </>
  )
}

export default App
