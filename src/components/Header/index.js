import {Link, withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

import './index.css'

const Header = props => {
  const {history} = props
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <nav className="nav-header">
      <div className="blog-container">
        <h1 className="blog-title">Travel Trip</h1>
        <ul className="nav-menu">
          <Link className="nav-link" to="/">
            <li>Home</li>
          </Link>
          <Link className="nav-link" to="/mytrips">
            <li>My Trips</li>
          </Link>
        </ul>
        <button
          type="button"
          className="logout-desktop-btn"
          onClick={onClickLogout}
        >
          Logout
        </button>
      </div>
    </nav>
  )
}

export default withRouter(Header)
