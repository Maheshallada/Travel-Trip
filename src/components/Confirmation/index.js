import {Component} from 'react'
import {Link} from 'react-router-dom'

import DetailsContext from '../../context/DetailsContext'
import TripPlanSteps from '../TripPlanSteps'

import Header from '../Header'

import './index.css'

import {v4 as uuidv4} from 'uuid'

const Confirmation = () => (
  <DetailsContext.Consumer>
    {value => {
      const {
        userName,
        startLoc,
        endLoc,
        startDate,
        endDate,
        guestCount,
        travelAss,
        onclickConfirm,
        cancelTrip,
      } = value
      const data = {
        userName: userName,
        startLoc: startLoc,
        endLoc: endLoc,
        startDate: startDate,
        endDate: endDate,
        guestCount: guestCount,
        travelAss: travelAss,
      }
      const onclickConf = () => {
        onclickConfirm({data})
      }
      const onclickCancel = () => {
        cancelTrip()
      }
      return (
        <div className="confirm-con">
          <Header />
          <div className="confirm-main-con">
            <TripPlanSteps currentStep={5} />
            <div className="confirm-form-con">
              <div className="confirm-details-con">
                <h1 className="confirm-heading">Confirmation</h1>
                <p className="confirm-para">Confirm Your Details</p>
              </div>
              <div className="confirm-search-con">
                <div className="confirm-details-list">
                  <div className="confirm-details-output">
                    <h1 className="confirm-details-head ">Name: </h1>
                  </div>
                  <h1 className="confirm-details-final">{userName}</h1>
                </div>
                <div className="confirm-details-list">
                  <div className="confirm-details-output">
                    <h1 className="confirm-details-head">Start Location: </h1>
                  </div>
                  <h1 className="confirm-details-final">{startLoc}</h1>
                </div>
                <div className="confirm-details-list">
                  <div className="confirm-details-output">
                    <h1 className="confirm-details-head">End Location: </h1>
                  </div>
                  <h1 className="confirm-details-final">{endLoc}</h1>
                </div>
                <div className="confirm-details-list">
                  <div className="confirm-details-output">
                    <h1 className="confirm-details-head">Start Date: </h1>
                  </div>
                  <h1 className="confirm-details-final">{startDate}</h1>
                </div>
                <div className="confirm-details-list">
                  <div className="confirm-details-output">
                    <h1 className="confirm-details-head"> End Date: </h1>
                  </div>
                  <h1 className="confirm-details-final">{endDate}</h1>
                </div>
                <div className="confirm-details-list">
                  <div className="confirm-details-output">
                    <h1 className="confirm-details-head"> Guests: </h1>
                  </div>
                  <h1 className="confirm-details-final">{guestCount}</h1>
                </div>
                <div className="confirm-details-list">
                  <div className="confirm-details-output">
                    <h1 className="confirm-details-head">Travel Assistance:</h1>
                  </div>
                  <h1 className="confirm-details-final">{travelAss}</h1>
                </div>
                <div className="confirm-button-con">
                  <Link to="/userdetails" onClick={onclickCancel}>
                    <button className="confirm-button1">Cancel</button>
                  </Link>
                  <Link to="/success" onClick={onclickConf}>
                    <button className="confirm-button2">Confirm</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }}
  </DetailsContext.Consumer>
)

export default Confirmation
