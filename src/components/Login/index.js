import {Component} from 'react'
import './index.css'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

class Login extends Component {
  state = {
    username: '',
    password: '',
    isIconClick: false,
    showErrorMsg: false,
    errorMsg: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30, path: '/'})
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    console.log(errorMsg)
    this.setState({
      showErrorMsg: true,
      errorMsg: 'Incorrect Username or password',
    })
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }
  onclickPassword = () => {
    this.setState(prevState => ({isIconClick: true}))
  }
  onclickPassword1 = () => {
    this.setState(prevState => ({isIconClick: false}))
  }
  render() {
    const {username, password, showErrorMsg, errorMsg, isIconClick} = this.state
    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">Travel Trip</h1>
          <form className="login-form-con" onSubmit={this.submitForm}>
            <label htmlFor="username" className="username-label">
              Username
            </label>
            <input
              type="text"
              className="input-ele"
              id="username"
              placeholder="Username"
              value={username}
              onChange={this.onChangeUsername}
            />
            <label htmlFor="password" className="username-label">
              Password
            </label>
            <div className="password-con">
              <input
                type={isIconClick ? 'text' : 'password'}
                className="password-input-con"
                id="password"
                placeholder="Password"
                value={password}
                onChange={this.onChangePassword}
              />
              {isIconClick ? (
                <button
                  type="button"
                  className="icon-button"
                  onClick={this.onclickPassword1}
                >
                  <img
                    src="https://res.cloudinary.com/daxcszozh/image/upload/v1711448842/boix/not%20found/eye/closedeye/eye-slasheyeclosed_bozxbx.png"
                    className="icon"
                  />
                </button>
              ) : (
                <button
                  type="button"
                  className="icon-button"
                  onClick={this.onclickPassword}
                >
                  <img
                    src="https://res.cloudinary.com/daxcszozh/image/upload/v1711446933/boix/not%20found/eye/eyeeye_cp33tw.png"
                    className="icon"
                  />
                </button>
              )}
            </div>
            <button type="submit" className="login-button">
              Login
            </button>
            {showErrorMsg && <p className="error-msg">*{errorMsg}</p>}
          </form>
        </div>
      </div>
    )
  }
}
export default Login
