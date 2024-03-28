import Header from '../Header'
import TripPlanSteps from '../TripPlanSteps'
import './index.css'

const Success = props => {
  const {history} = props
  const onclickNewTrip = () => {
    history.replace('/userdetails')
  }
  return (
    <div className="success-con">
      <Header />
      <div className="success-form-con">
        <TripPlanSteps currentStep={6} />
        <div className="success-greeting-background">
          <div className="greeting-con">
            <img
              src="https://assets.ccbp.in/frontend/react-js/travel-trip-steps-successfully-completed-img.png"
              className="tick-image"
            />
            <h1 className="heading-success">Awesome!</h1>
            <p className="para-success">Your booking has been confirmed.</p>

            <button className="button-ele" onClick={onclickNewTrip}>
              Book a new trip
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Success
