import React from 'react'

export default React.memo(function Header({ heading }: { heading: string }) {
  return (
    <header className="sr-only">
      <h1>{heading}</h1>
    </header>
  )
})
