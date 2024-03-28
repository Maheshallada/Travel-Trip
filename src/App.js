import './App.css'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import {Component} from 'react'
import DetailsContext from './context/DetailsContext'
import {v4 as uuidv4} from 'uuid'

import Login from './components/Login'
import Home from './components/Home'
import Userdetails from './components/Userdetails'
import Date from './components/Date'
import Guests from './components/Guests'
import Travelassistance from './components/Travelassistance'
import Confirmation from './components/Confirmation'
import Success from './components/Success'
import Mytrips from './components/Mytrips'
import Notfound from './components/Notfound'
import ProtectedRoute from './components/ProtectedRoute'

// Note: Use the lists in your code to pass the test cases
const stepsList = [
  {stepId: 'YOUR_DETAILS', displayText: 'Your Details'},
  {stepId: 'DATE_SELECTION', displayText: 'Date Selection'},
  {stepId: 'GUESTS', displayText: 'Guests'},
  {stepId: 'TRAVEL_ASSISTANCE', displayText: 'Travel Assistance'},
  {stepId: 'CONFIRMATION', displayText: 'Confirmation'},
]

const travelAssistanceList = [
  {value: 'car', displayText: 'Car'},
  {value: 'flight', displayText: 'Flight'},
  {value: 'bus', displayText: 'Bus'},
  {value: 'train', displayText: 'Train'},
]

// Replace your code here
class App extends Component {
  state = {
    userName: '',
    startLoc: '',
    endLoc: '',
    startDate: '',
    endDate: '',
    adultTotal: 1,
    childrenTotal: 0,
    infantTotal: 0,
    guestCount: 0,
    isClickCheckBox: false,
    travelAss: '',
    myTrips: [],
    isUserNext: 'false',
  }

  addItem = ({name}, {startLocation}, {endLocation}) => {
    console.log(name)
    console.log(startLocation)
    this.setState({
      userName: name,
      startLoc: startLocation,
      endLoc: endLocation,
    })
  }
  addDateItem = ({dateInput1, dateInput2}) => {
    console.log(dateInput1)
    console.log(dateInput2)
    this.setState({
      startDate: dateInput1,
      endDate: dateInput2,
    })
  }
  addGuestCount = ({adultCount, childrenCount, infantCount}) => {
    console.log(adultCount + childrenCount + infantCount)
    this.setState(prevState => ({
      guestCount:
        prevState.guestCount + adultCount + childrenCount + infantCount,
      adultTotal: adultCount,
      childrenTotal: childrenCount,
      infantTotal: infantCount,
    }))
  }
  addTravelAss = ({optionValue, isCheck}) => {
    console.log(optionValue)
    this.setState({
      travelAss: optionValue,
      isClickCheckBox: isCheck,
    })
  }
  onclickConfirm = ({data}) => {
    const {myTrips} = this.state
    console.log(myTrips)
    console.log(data)
    data.id = uuidv4()
    const updateList = [...myTrips, data]
    console.log(updateList)
    this.setState({
      myTrips: updateList,
      userName: '',
      startLoc: '',
      endLoc: '',
      startDate: '',
      endDate: '',
      adultTotal: 1,
      childrenTotal: 0,
      infantTotal: 0,
      guestCount: 0,
    })
  }
  deleteTrip = id => {
    console.log(id)
    const {myTrips} = this.state
    const updateList = myTrips.filter(item => item.id !== id)
    this.setState({myTrips: updateList})
  }
  cancelTrip = () => {
    this.setState({
      userName: '',
      startLoc: '',
      endLoc: '',
      startDate: '',
      endDate: '',
      adultTotal: 1,
      childrenTotal: 0,
      infantTotal: 0,
    })
  }
  render() {
    const {
      userName,
      startLoc,
      endLoc,
      startDate,
      endDate,
      adultTotal,
      childrenTotal,
      infantTotal,
      guestCount,
      isClickCheckBox,
      travelAss,
      myTrips,
      isUserNext,
    } = this.state
    return (
      <DetailsContext.Provider
        value={{
          userName,
          startLoc,
          endLoc,
          startDate,
          endDate,
          adultTotal,
          childrenTotal,
          infantTotal,
          guestCount,
          isClickCheckBox,
          travelAss,
          myTrips,
          addItem: this.addItem,
          addDateItem: this.addDateItem,
          addGuestCount: this.addGuestCount,
          addTravelAss: this.addTravelAss,
          onclickConfirm: this.onclickConfirm,
          isUserNext,
          deleteTrip: this.deleteTrip,
          cancelTrip: this.cancelTrip,
        }}
      >
        <BrowserRouter>
          <Switch>
            <Route exact path="/login" component={Login} />
            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute exact path="/userdetails" component={Userdetails} />
            <ProtectedRoute exact path="/date" component={Date} />
            <ProtectedRoute exact path="/guests" component={Guests} />
            <ProtectedRoute
              exact
              path="/travelass"
              component={Travelassistance}
            />
            <ProtectedRoute
              exact
              path="/confirmation"
              component={Confirmation}
            />
            <ProtectedRoute exact path="/success" component={Success} />
            <ProtectedRoute exact path="/mytrips" component={Mytrips} />
            <Route exact path="/not-found" component={Notfound} />
            <Redirect to="not-found" />
          </Switch>
        </BrowserRouter>
      </DetailsContext.Provider>
    )
  }
}
export default App
