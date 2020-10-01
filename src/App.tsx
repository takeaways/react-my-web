import React from 'react'
import { Header, NavBar, Main, Footer } from './components/layout'
import MainRouter from './routes'
import Youtube from './services/youtube'
export const YoutubeServiceContext = React.createContext<Youtube | undefined>(
  undefined,
)
const youtube = new Youtube(process.env.REACT_APP_API_KEY!)
function App() {
  return (
    <YoutubeServiceContext.Provider value={youtube}>
      <Header />
      <NavBar />
      <Main>
        <MainRouter />
      </Main>
      <Footer />
    </YoutubeServiceContext.Provider>
  )
}

export default App
