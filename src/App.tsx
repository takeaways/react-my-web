import React from 'react'
import { Header, NavBar, Main, Footer } from './components/layout'
import MainRouter from './routes'

function App() {
  return (
    <>
      <Header />
      <NavBar />
      <Main>
        <MainRouter />
      </Main>
      <Footer />
    </>
  )
}

export default App
