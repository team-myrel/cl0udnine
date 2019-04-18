import React from 'react'

import { Navbar } from './components'
import { Splash } from './components'
import Routes from './routes'

const App = () => {
  return (
    <div>
      <Navbar />
      <Splash />
      <Routes />
    </div>
  )
}

export default App
