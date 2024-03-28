import {Component} from 'react'
import {Link} from 'react-router-dom'
import DetailsContext from '../../context/DetailsContext'
import TripPlanSteps from '../TripPlanSteps'
import Header from '../Header'

import './index.css'

class Guests extends Component {
  static contextType = DetailsContext

  state = {adultCount: 1, childrenCount: 0, infantCount: 0}

  componentDidMount() {
    const {adultTotal, childrenTotal, infantTotal, addGuestCount} = this.context
    this.addGuestCount = addGuestCount
    this.setState({
      adultCount: adultTotal,
      childrenCount: childrenTotal,
      infantCount: infantTotal,
    })
  }

  submitForm = () => {
    const {adultCount, childrenCount, infantCount} = this.state
    this.addGuestCount({adultCount, childrenCount, infantCount})
  }

  onclickAdultDec = () => {
    if (this.state.adultCount > 1) {
      this.setState(prevState => ({adultCount: prevState.adultCount - 1}))
    }
  }

  onclickAdultInc = () => {
    this.setState(prevState => ({adultCount: prevState.adultCount + 1}))
  }

  onclickChildrenDec = () => {
    if (this.state.childrenCount > 0) {
      this.setState(prevState => ({childrenCount: prevState.childrenCount - 1}))
    }
  }

  onclickChildrenInc = () => {
    this.setState(prevState => ({childrenCount: prevState.childrenCount + 1}))
  }

  onclickInfantDec = () => {
    if (this.state.infantCount > 0) {
      this.setState(prevState => ({infantCount: prevState.infantCount - 1}))
    }
  }

  onclickInfantInc = () => {
    this.setState(prevState => ({infantCount: prevState.infantCount + 1}))
  }

  displayView = () => {
    const {adultCount, childrenCount, infantCount} = this.state
    return (
      <div className="guest-con">
        <Header />
        <div className="guest-main-con">
          <TripPlanSteps currentStep={3} />

          <div className="guest-form-con">
            <div className="guest-details-con">
              <h1 className="guest-heading">Guests</h1>
              <p className="guest-para">Select your guests</p>
            </div>
            <div className="guest-search-con">
              <div className="guest-form" onSubmit={this.submitForm}>
                <div className="guest-name-con">
                  <div>
                    <h1 className="heading1">Adults</h1>
                    <p className="guest-para1">Age 13 or above</p>
                  </div>
                  <div className="button-con">
                    <button className="button1" onClick={this.onclickAdultDec}>
                      -
                    </button>
                    <p className="one-number">{adultCount}</p>
                    <button className="button1" onClick={this.onclickAdultInc}>
                      +
                    </button>
                  </div>
                </div>
              </div>
              <hr width="355px;" color="#cbd5e1" />
              <div className="guest-form" onSubmit={this.submitForm}>
                <div className="guest-name-con">
                  <div>
                    <h1 className="heading1">Children</h1>
                    <p className="guest-para1">Age 2 - 12</p>
                  </div>
                  <div className="button-con">
                    <button
                      className="button1"
                      onClick={this.onclickChildrenDec}
                    >
                      -
                    </button>
                    <p className="one-number">{childrenCount}</p>
                    <button
                      className="button1"
                      onClick={this.onclickChildrenInc}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div>
                  <hr width="355px;" color="#cbd5e1" />
                  <div className="guest-form" onSubmit={this.submitForm}>
                    <div className="guest-name-con">
                      <div>
                        <h1 className="heading1">Infants</h1>
                        <p className="guest-para1">Under 2</p>
                      </div>
                      <div className="button-con">
                        <button
                          className="button1"
                          onClick={this.onclickInfantDec}
                        >
                          -
                        </button>
                        <p className="one-number">{infantCount}</p>
                        <button
                          className="button1"
                          onClick={this.onclickInfantInc}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="guest-button-con">
                    <Link to="/date">
                      <button className="guest-button1">Previous</button>
                    </Link>
                    <Link to="/travelass" onClick={this.submitForm}>
                      <button className="guest-button2">Next</button>
                    </Link>
                  </div>
                </div>
              </div>
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

export default Guests
