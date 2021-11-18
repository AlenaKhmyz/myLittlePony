import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlay, faPause, faForward, faBackward } from '@fortawesome/free-solid-svg-icons';
import '../style.css'

function PlayerControls() {
  return (
    <div className="c-player--controls">
      <button className="skip-btn">
        <FontAwesomeIcon icon={faBackward} />
      </button>
      <buttton className="play-btn">
        <FontAwesomeIcon icon={faPlay} />
      </buttton>
      <button className="skip-btn">
         <FontAwesomeIcon icon={faForward} />
      </button>
    </div>
  )
}

export default PlayerControls
