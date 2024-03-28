import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Header from '../Header'
import './index.css'

const Home = props => {
  const {history} = props
  const onclickNewTrip = () => {
    history.replace('/userdetails')
  }

  return (
    <div>
      <Header />
      <div className="banner">
        <div className="text-con">
          <h1 className="head">Travel. Relax. Memories.</h1>
          <p className="paragra">
            With Travel Trip you can experience new travel and the best tourist
            destinations.
          </p>
          <button className="button" onClick={onclickNewTrip}>
            Book a New Trip
          </button>
        </div>
        <img src="https://res.cloudinary.com/daxcszozh/image/upload/v1709911802/Traveltour/image_5h_hosfnn.png" />
      </div>
    </div>
  )
}
export default Home
