import React, {useState, useEffect} from 'react';
import Player from './components/Player';
import './style.css'

function AudioPlayerPage() {
  const [songs] = useState([
    {
      title: "Lights",
      artist: "Adept",
      img_src: "/img/adept.jpg",
      src: "/music/adept-lights.mp3"
    },
    {
      title: "Infest",
      artist: "Breakdown of sanity",
      img_src: "/img/bos.jpg",
      src: "/music/Breakdown Of Sanity - Infest.mp3"
    },
    {
      title: "The devil in I",
      artist: "Slipknot",
      img_src: "/img/slipknot.png",
      src: "/music/Slipknot - The Devil In I.mp3"
    },
    {
      title: "Sleeps souciety",
      artist: "While she sleeps",
      img_src: "/img/while_she_sleeps.jpg",
      src: "/music/while-she-sleeps_-_sleeps-society.mp3"
    }

  ])

  const [currentSongIndex, setCurrentSongIndex] = useState(0)
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1)

  useEffect(() => {
    setNextSongIndex(() =>{
      if(currentSongIndex + 1 > songs.length - 1) {
        return 0
      } else {
        return currentSongIndex + 1
      }
    })
  }, [currentSongIndex])

  return(
    <div className='container'>
      <Player 
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />

    </div>
  )

}

export default AudioPlayerPage;