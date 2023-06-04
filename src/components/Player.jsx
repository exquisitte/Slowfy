import React, { useState, useEffect } from 'react';
import { Howl, Howler } from 'howler';
import Play from '../public/Play.png';
import Pause from '../public/Pause.png';
import Photo from '../public/Photo.png';
import Skip_right from '../public/Skip to Start-1.png';
import Skip_left from '../public/Skip to Start.png';
import Shuffle from '../public/Shuffle.png';
import Repeat from '../public/Repeat.png';
import Voice from '../public/Voice.png';
import Star from '../public/Star 2.png'

const Player = ({ src }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [buttonImage, setButtonImage] = useState(Play);
  const [currentTime, setCurrentTime] = useState(0);
  const sound = new Howl({ src: [src] });

  const togglePlay = () => {
    if (isPlaying) {
      sound.pause();
      setButtonImage(Play);
    } else {
      sound.play();
      setButtonImage(Pause);
    }
    setIsPlaying(!isPlaying);
  };

  const handleSeekChange = (event) => {
    const seekTime = parseFloat(event.target.value);
    setCurrentTime(seekTime);
    sound.seek(seekTime);
  };

  useEffect(() => {
    const updateCurrentTime = () => {
      setCurrentTime(sound.seek());
    };

    sound.on('play', updateCurrentTime);

    return () => {
      sound.off('play', updateCurrentTime);
    };
  }, [sound]);

  return (
    <div className="Player">
    <div className='Opis'>
      <img src={Photo} />
      <h1>METAMORPHOSIS 3 - Sped up</h1>
      <p>INTERWORLD, zxcursed, Sadfriendd</p>
      <img className='Star' src={Star} />
    </div>
      <button style={{ background: 'transparent', border: 'none', padding: '0' }}>
        <img src={Shuffle} />
      </button>
      <button style={{ background: 'transparent', border: 'none', padding: '0' }}>
        <img src={Repeat} />
      </button>
      <button style={{ background: 'transparent', border: 'none', padding: '0' }}>
        <img src={Skip_right} />
        <button onClick={togglePlay} style={{ background: 'transparent', border: 'none', padding: '0' }}>
        <img src={buttonImage} alt={isPlaying ? 'Pause' : 'Play'} />
      </button>
      </button>
      <button style={{ background: 'transparent', border: 'none', padding: '0' }}>
        <img src={Skip_left} />
      </button>
      <button style={{ background: 'transparent', border: 'none', padding: '0' }}>
        <img src={Voice} />
      </button> 
      
      <div class="slider">
        <h1>1:03</h1>
        <input type="range" min="0" max="100" value="0" class="slider-input" />
  <div class="slider-track"></div>
  <div class="slider-thumb"></div>
  <h2>2:05</h2>
  </div>
  <div class="slider1">
        <input type="range" min="0" max="100" value="0" class="slider-input" />
  <div class="slider-track"></div>
  <div class="slider-thumb"></div>
  </div>
    </div>
  );
};

export default Player;