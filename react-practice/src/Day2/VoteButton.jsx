import React from 'react'
import './VoteButton.css';

const VoteButton = (props) => {
  return (
    <div>
      <button className='vote-btn' onClick={() => props.onVote(props.playerName)} >
        Vote {props.playerName}
      </button>
    </div>
  )
}

export default VoteButton
