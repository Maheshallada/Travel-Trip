import DetailsContext from '../../context/DetailsContext'

import Header from '../Header'
import Tripcon from '../Tripcon'

import './index.css'

const Mytrips = props => {
  const {history} = props
  const onclickNewTrip = () => {
    history.replace('/userdetails')
  }
  return (
    <DetailsContext.Consumer>
      {value => {
        const {myTrips, deleteTrip} = value
        const onclickCancel = id => {
          deleteTrip(id)
        }
        console.log(myTrips)
        return (
          <div className="my-trip-con">
            <Header />
            {myTrips.length > 0 ? (
              <div>
                <h1 className="my-trip-heading">My Trips</h1>
                <ul>
                  {myTrips.map(item => (
                    <Tripcon
                      item={item}
                      key={item.id}
                      onclickCancel={onclickCancel}
                    />
                  ))}
                </ul>
              </div>
            ) : (
              <div>
                <div className="not-found-con">
                  <img
                    src="https://res.cloudinary.com/daxcszozh/image/upload/v1711444082/boix/Vectorbox_1_gzasf6.png"
                    className="image-box"
                  />
                  <h1 className="not-found-head">No upcoming trips.</h1>
                  <p className="not-found-para">
                    When you book a trip, you will see your trip details here.
                  </p>
                </div>
                <button
                  className="not-found-button-ele"
                  onClick={onclickNewTrip}
                >
                  Book a new trip
                </button>
              </div>
            )}
          </div>
        )
      }}
    </DetailsContext.Consumer>
  )
}
export default Mytrips
