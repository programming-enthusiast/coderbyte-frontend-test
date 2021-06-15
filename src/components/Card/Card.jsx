import React from 'react'
import Button from '../Button/Button'
import ReactTwitchEmbedVideo from 'react-twitch-embed-video'

function Card({questionId, question}) {

  return (
    <div className="card">
      <div className="card__video">
      <ReactTwitchEmbedVideo width="100%" height="100%" channel="younestalksfootball" />
      </div>
      <div className="card__header">
        <div className="card__question-number">
          {'Question ' + questionId}
        </div>
        <div className="card__question">
          {question}
        </div>
      </div>
      <div className="card__body">
        <Button title="Chestahedron"></Button>
        <Button title="Chestahedron"></Button>
        <Button title="Chestahedron"></Button>
        <Button title="Chestahedron"></Button>
      </div>
    </div>
  )
}

export default Card