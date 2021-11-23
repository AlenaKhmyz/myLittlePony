import React, {useState, useEffect} from 'react';
import Player from './components/Player';
import './style.css'
import adept from './img/adept.jpg'
import lights from './music/adept-lights.mp3'
import bos from './img/bos.jpg'
import infest from './music/Breakdown Of Sanity - Infest.mp3'
import slipknot from './img/slipknot.png'
import devil from './music/Slipknot - The Devil In I.mp3'
import whileSheSleeps from './img/while_she_sleeps.jpg'
import  sleepsSociety from './music/while-she-sleeps_-_sleeps-society.mp3'


function AudioPlayerPage() {
  const [songs] = useState([
    {
      title: "Lights",
      artist: "Adept",
      img_src: adept,
      src: lights
    },
    {
      title: "Infest",
      artist: "Breakdown of sanity",
      img_src: bos,
      src: infest
    },
    {
      title: "The devil in I",
      artist: "Slipknot",
      img_src: slipknot,
      src: devil
    },
    {
      title: "Sleeps souciety",
      artist: "While she sleeps",
      img_src: whileSheSleeps,
      src: sleepsSociety
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