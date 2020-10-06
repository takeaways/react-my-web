import React from 'react'
import HomePresenter from './HomePresenter'

function HomeContainer() {
  const [state] = React.useState({
    nowPlaying: [],
    upcoming: [],
    popular: [],
    error: null,
    loading: true,
  })

  const { nowPlaying, upcoming, popular, error, loading } = state

  return (
    <HomePresenter
      nowPlaying={nowPlaying}
      upcoming={upcoming}
      popular={popular}
      error={error}
      loading={loading}
    />
  )
}

export default HomeContainer
