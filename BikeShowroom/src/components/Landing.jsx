import React from 'react'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import "../css/Landing.css"

const AutoplaySlider = withAutoplay(AwesomeSlider);
export default function Landing() {

  return (

    <AutoplaySlider
    play={true}
    cancelOnInteraction={false}// should stop playing on user interaction
    interval={2000}>
    <div id='Bike1'></div>
    <div id='Bike2'></div>
    <div id='Bike3'></div>
    <div id='Bike4'></div>
  </AutoplaySlider>

  )
}
