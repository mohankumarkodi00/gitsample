import {Link, withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props

    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <nav className="nav-header">
      <div className="nav-content">
        <div className="nav-bar-mobile-logo-container">
          <img
            className="website-logo"
            src="https://res.cloudinary.com/ccbpmohan/image/upload/v1668102201/headtemplate_hrlg8c.jpg"
            alt="website logo"
          />

          <button
            type="button"
            className="nav-mobile-btn"
            onClick={onClickLogout}
          >
            <img
              src="hhttps://res.cloudinary.com/ccbpmohan/image/upload/v1668102201/headtemplate_hrlg8c.jpg"
              alt="nav logout"
              className="nav-bar-img"
            />
          </button>
        </div>

        <div className="nav-bar-large-container">
          <img
            className="website-logo"
            src="https://res.cloudinary.com/ccbpmohan/image/upload/v1668102201/headtemplate_hrlg8c.jpg"
            alt="website logo"
          />
          <ul className="nav-menu">
            <li className="nav-menu-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>

            <li className="nav-menu-item">
              <Link to="/Templates" className="nav-link">
                Templates
              </Link>
            </li>
          </ul>
          <button
            type="button"
            className="logout-desktop-btn"
            onClick={onClickLogout}
          >
            Logout
          </button>
        </div>
      </div>
      <div className="nav-menu-mobile">
        <ul className="nav-menu-list-mobile">
          <li className="nav-menu-item-mobile">
            <Link to="/" className="nav-link">
              <img
                src="https://res.cloudinary.com/ccbpmohan/image/upload/v1668102201/headtemplate_hrlg8c.jpg"
                alt="nav home"
                className="nav-bar-img"
              />
            </Link>
          </li>

          <li className="nav-menu-item-mobile">
            <Link to="/products" className="nav-link">
              <img
                src="https://res.cloudinary.com/ccbpmohan/image/upload/v1668102201/headtemplate_hrlg8c.jpg"
                alt="Templates"
                className="nav-bar-img"
              />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default withRouter(Header)
