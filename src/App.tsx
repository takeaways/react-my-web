import React from 'react'
import { Header, NavBar, Main, Footer } from './Components/Layout'
import MainRouter from './Routes'

function App() {
  return (
    <>
      <Header></Header>
      <NavBar></NavBar>
      <Main></Main>
      <Footer></Footer>
      <nav>nav</nav>

      <main>
        <MainRouter />
      </main>
      <footer>footer</footer>
    </>
  )
}

export default App
