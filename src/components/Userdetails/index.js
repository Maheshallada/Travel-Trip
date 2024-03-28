import {Component} from 'react'
import {Link} from 'react-router-dom'
import DetailsContext from '../../context/DetailsContext'
import TripPlanSteps from '../TripPlanSteps'
import {v4 as uuidv4} from 'uuid'
import {FaExclamationCircle} from 'react-icons/fa'
import {useContext} from 'react'

import Header from '../Header'

import './index.css'

class Userdetails extends Component {
  static contextType = DetailsContext

  state = {
    name: '',
    startLocation: '',
    endLocation: '',
    isNameCheck: true,
    isStartLoc: true,
    isEndLoc: true,
  }

  componentDidMount() {
    const {userName, startLoc, endLoc, addItem} = this.context
    this.addItem = addItem
    this.setState({
      name: userName,
      startLocation: startLoc,
      endLocation: endLoc,
    })
  }
  onchangeName = event => {
    this.setState(prevState => ({
      name: event.target.value,
      isNameCheck: true,
    }))
  }
  onchangeStartLocation = event => {
    this.setState(prevState => ({
      startLocation: event.target.value,
      isStartLoc: true,
    }))
  }
  onchangEndLocation = event => {
    this.setState(prevState => ({
      endLocation: event.target.value,
      isEndLoc: true,
    }))
  }
  onclickNext = () => {
    const {name, startLocation, endLocation} = this.state
    this.addItem({name}, {startLocation}, {endLocation})
  }
  displayView = () => {
    const {
      name,
      startLocation,
      endLocation,
      isNameCheck,
      isStartLoc,
      isEndLoc,
    } = this.state

    let errorMsg = 'Enter your name'
    let errorMsg1 = 'Enter your start location'
    let errorMsg2 = 'Enter your end location'

    return (
      <div className="user-deta-con">
        <Header />
        <div className="user-main-con">
          <TripPlanSteps currentStep={1} />
          <div className="user-form-con">
            <div className="user-details-con">
              <h1 className="user-heading">Your Details</h1>
              <p className="user-para">Enter your name and location details</p>
            </div>
            <div className="user-search-con">
              <form onSubmit={this.handleSubmit}>
                <label htmlFor="name" className="user-label-ele">Name</label>
                <br />
                <div
                  className={
                    this.state.isNameCheck
                      ? 'input-parent'
                      : 'input-parent-error'
                  }
                >
                  <input
                    type="text"
                    placeholder="Enter Name"
                    onChange={this.onchangeName}
                    value={name}
                    id="name"
                    onFocus={() => {
                      if (this.state.name === '') {
                        this.setState({isNameCheck: false})
                      }
                    }}
                    className={
                      this.state.isNameCheck
                        ? 'user-details-input'
                        : 'user-details-input-error'
                    }
                  />
                  {!isNameCheck && <FaExclamationCircle className="icon" />}
                </div>
                {!this.state.isNameCheck && <p>{errorMsg}</p>}

                <label htmlFor="startLocation" className="user-label-ele">Start Location</label>
                <br />
                <div
                  className={
                    this.state.isStartLoc
                      ? 'input-parent'
                      : 'input-parent-error'
                  }
                >
                  <input
                    type="text"
                    placeholder="Enter Start Location"
                    value={startLocation}
                    id="startLocation"
                    onChange={this.onchangeStartLocation}
                    onFocus={() => {
                      if (this.state.startLocation === '') {
                        this.setState({isStartLoc: false})
                      }
                    }}
                    className={
                      this.state.isStartLoc
                        ? 'user-details-input'
                        : 'user-details-input-error'
                    }
                  />
                  {!isStartLoc && <FaExclamationCircle className="icon" />}
                </div>
                {!this.state.isStartLoc && <p>{errorMsg1}</p>}
                <label htmlFor="endLocation" className="user-label-ele">End Location</label>
                <br />
                <div
                  className={
                    this.state.isEndLoc ? 'input-parent' : 'input-parent-error'
                  }
                >
                  <input
                    type="text"
                    placeholder="Enter End Location"
                    value={endLocation}
                    id="endLocation"
                    onChange={this.onchangEndLocation}
                    onFocus={() => {
                      if (this.state.endLocation === '') {
                        this.setState({isEndLoc: false})
                      }
                    }}
                    className={
                      this.state.isEndLoc
                        ? 'user-details-input'
                        : 'user-details-input-error'
                    }
                  />
                  {!isEndLoc && <FaExclamationCircle className="icon" />}
                </div>
                {!this.state.isEndLoc && <p>{errorMsg2}</p>}

                {name.length > 0 &&
                startLocation.length > 0 &&
                endLocation.length > 0 ? (
                  <Link to="/date" onClick={this.onclickNext}>
                    <button type="submit" className="user-button">
                      Next
                    </button>
                  </Link>
                ) : (
                  <button className="user-button">Next</button>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }

  render() {
    return <>{this.displayView()}</>
  }
}
export default Userdetails
