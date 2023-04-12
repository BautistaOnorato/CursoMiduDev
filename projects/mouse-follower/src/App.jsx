import React, { useState } from 'react'
import { FollowMouse } from './components/FollowMouse'

export const App = () => {
  const [mounted, setMounted] = useState(true)

  return (
    <main>
      {mounted && <FollowMouse />}
      <button onClick={() => setMounted(!mounted)}>
        Toggle mounted
      </button>
    </main>
  )
}
