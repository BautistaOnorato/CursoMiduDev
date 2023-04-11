import React from 'react'
import { TwitterCard } from './TwitterCard'

const users = [
  {
    userName: 'midudev',
    name: 'Miguel Ángel Durán',
    isFollowing: true
  },
  {
    userName: 'pheralb',
    name: 'Pablo H.',
    isFollowing: false
  },
  {
    userName: 'PacoHdezs',
    name: 'Paco Hdez',
    isFollowing: true
  },
  {
    userName: 'TMChein',
    name: 'Tomas',
    isFollowing: false
  }
]

export const App = () => {

  return (
    <section className="app">
      <h2>Tal vez te guste</h2>
      {
        users.map(({ userName, name, isFollowing }) => (
          <TwitterCard username={userName} name={name} isFollowing={isFollowing} key={userName}/>
        ))
      }
    </section>
  )
}
