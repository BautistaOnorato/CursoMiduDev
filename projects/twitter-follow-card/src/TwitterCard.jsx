import React, { useState } from 'react'

export const TwitterCard = ({ username, name, isFollowing }) => {

  const [seguido, setSeguido] = useState(isFollowing)
  const text = !seguido ? "Seguir" : "Siguiendo"
  const btnClass = seguido ? "btn-follow following" : "btn-follow" 

  const handleClick = () => {
    setSeguido(!seguido);
  }

  return (
    <article className="twitter-card">
      <header className="artcile-header">
        <img src={`https://unavatar.io/${username}`} alt="" />
        <div className="info">
          <strong>{name}</strong>
          <p>{`@${username}`}</p>
        </div>
      </header>
      <aside>
        <button className={btnClass} onClick={handleClick}>
          <span className="btn-text">{text}</span>
          <span className="btn-stop-following">Dejar de seguir</span>
        </button>
      </aside>
    </article>
  )
}
