import {Component} from 'react'
import {Link} from 'react-router-dom'
import DetailsContext from '../../context/DetailsContext'
import TripPlanSteps from '../TripPlanSteps'
import Header from '../Header'

import './index.css'

class Travelassitance extends Component {
  static contextType = DetailsContext

  state = {optionValue: 'Car', isCheck: false}

  onchangeOption = event => {
    this.setState({optionValue: event.target.value})
  }
  onchangeCheckBox = () => {
    this.setState(prevState => ({isCheck: !prevState.isCheck}))
  }
  displayButton = () => {
    return (
      <div className="travel-button-con">
        <Link to="/guests">
          <button className="travel-button1">Previous</button>
        </Link>
        <button className="travel-button2">Next</button>
      </div>
    )
  }
  displayForm = () => {
    const {optionValue} = this.state

    return (
      <DetailsContext.Consumer>
        {value => {
          const {addTravelAss} = value
          const submitForm = () => {
            addTravelAss({optionValue})
          }
          return (
            <>
              <label className="travel-select-label">Travel Assistance</label>
              <select
                onChange={this.onchangeOption}
                className="travel-select-con"
              >
                <option className="option-ele">Car</option>
                <option className="option-ele">Bus</option>
                <option className="option-ele">Flight</option>
                <option className="option-ele">Train</option>
              </select>
              <div className="travel-button-con">
                <Link to="/guests">
                  <button className="travel-button1">Previous</button>
                </Link>
                <Link to="/confirmation" onClick={submitForm}>
                  <button className="travel-button2">Next</button>
                </Link>
              </div>
            </>
          )
        }}
      </DetailsContext.Consumer>
    )
  }
  render() {
    const {isCheck} = this.state
    return (
      <div className="travel-con">
        <Header />
        <div className="travel-main-con">
          <TripPlanSteps currentStep={4} />
          <div className="travel-form-con">
            <div className="travel-details-con">
              <h1 className="travel-heading">Travel Assistance</h1>
              <p className="travel-para">Select Your Travel Assistance</p>
            </div>
            <div className="travel-search-con">
              <div className="travel-checkbox">
                <input type="checkbox" onChange={this.onchangeCheckBox} />
                <label className="travel-checkbox-label">
                  Travel Assistance
                </label>
              </div>
              {isCheck ? this.displayForm() : this.displayButton()}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Travelassitance
