import React from 'react'

const DetailsContext = React.createContext({
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
  addItem: () => {},
  addDateItem: () => {},
  addGuestCount: () => {},
  addTravelAss: () => {},
  onclickConfirm: () => {},
  myTrips: [],
  isUserNext: 'false',
  deleteTrip: () => {},
  caneclTrip: () => {},
})

export default DetailsContext
