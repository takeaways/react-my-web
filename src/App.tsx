import React from 'react'
import { Header, NavBar, Main, Footer } from './components/layout'
import MainRouter from './routes'
import Youtube from './services/youtube'
export const YoutubeContext = React.createContext<Youtube | undefined>(
  undefined,
)
const youtube = new Youtube(process.env.REACT_APP_API_KEY!)
function App() {
  return (
    <YoutubeContext.Provider value={youtube}>
      <Header />
      <NavBar />
      <Main>
        <MainRouter />
      </Main>
      <Footer />
    </YoutubeContext.Provider>
  )
}

export default App
