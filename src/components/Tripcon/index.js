import './index.css'
import DetailsContext from '../../context/DetailsContext'

const Tripcon = props => {
  const {item, onclickCancel} = props
  const onclickItem = () => {
    onclickCancel(item.id)
  }
  return (
    <div className="trip-cont">
      <div className="trip-con-det">
        <h1 className="trip-con-head">{item.endLoc}</h1>
        <div>
          <p className="normal-para">Date</p>
          <p className="trip-con-date">
            {item.startDate} to {item.endDate}
          </p>
        </div>
        <button className="my-trip-button" onClick={onclickItem}>
          cancel
        </button>
      </div>
    </div>
  )
}

export default Tripcon
