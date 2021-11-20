import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlay, faPause, faForward, faBackward } from '@fortawesome/free-solid-svg-icons';

import '../style.css'

function PlayerControls(props) {
  return (
    <div className="c-player--controls">
      <button className="skip-btn" onClick={() => props.SkipSong(false)}>
        <FontAwesomeIcon icon={faBackward} />
      </button>
      <buttton className="play-btn" onClick={() => props.setIsPlaying(!props.isPlaying)}>
        <FontAwesomeIcon icon={props.isPlaying ? faPause : faPlay} />
      </buttton>
      <button className="skip-btn">
         <FontAwesomeIcon icon={faForward} onClick={() => props.SkipSong(false)}/>
      </button>
    </div>
  )
}

export default PlayerControls
