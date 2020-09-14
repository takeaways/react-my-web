import React from 'react'
import HomePresenter from './TVPresenter'

function TVContainer() {
  const [state, setState] = React.useState({
    topRated: [],
    popular: [],
    airingToday: [],
    error: null,
    loading: true,
  })
  const { topRated, popular, airingToday, error, loading } = state
  React.useEffect(() => {}, [])
  return (
    <HomePresenter
      topRated={topRated}
      popular={popular}
      airingToday={airingToday}
      error={error}
      loading={loading}
    />
  )
}

export default TVContainer
