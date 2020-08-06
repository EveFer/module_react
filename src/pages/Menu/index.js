import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// CSS
import './Menu.css'

export default class Menu extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isMenuActive: false
    }
    this.handleToggleMenu = this.handleToggleMenu.bind(this)
    this.handleLogOut = this.handleLogOut.bind(this)
  }

  handleToggleMenu () {
    const { isMenuActive } = this.state
    this.setState({
      isMenuActive: !isMenuActive
    })
  }

  handleLogOut () {
    this.props.logOut()
    this.handleToggleMenu()
  }

  render () {
    const { isUserLoggedIn } = this.props
    const { isMenuActive } = this.state
    const menuClass = isMenuActive ? 'Menu-active' : ''
    return (
      <div>
        <div className={`Menu ${menuClass}`}>
          <h2>Menu</h2>
          <nav>
            <div>
              <ul>
                <li>
                  <Link to='/' onClick={this.handleToggleMenu}>Home</Link>
                </li>
                <li>
                  <Link to='/clock' onClick={this.handleToggleMenu}>Clock</Link>
                </li>
                <li>
                  <Link to='/posts' onClick={this.handleToggleMenu}>Posts</Link>
                </li>
                {
                  isUserLoggedIn ? (
                    <li>
                      <Link to='/notes' onClick={this.handleToggleMenu}>Notas</Link>
                    </li>

                  ) : null
                }
                <li>
                  <Link to='/currency-converter' onClick={this.handleToggleMenu}>Conversion</Link>
                </li>
                <li>
                  <Link to='/credit-card' onClick={this.handleToggleMenu}>Credit Card</Link>
                </li>
                <li>
                  <Link to='/hooks' onClick={this.handleToggleMenu}>Hooks</Link>
                </li>
                {
                  !isUserLoggedIn ? (
                    <li>
                      <Link to='/login' onClick={this.handleToggleMenu}>Iniciar Sesión</Link>
                    </li>
                  ) : (
                    <li>
                      <button onClick={this.handleLogOut}>Cerrar Sesión</button>
                    </li>
                  )
                }
              </ul>
            </div>
          </nav>
        </div>
        <button onClick={this.handleToggleMenu} className='Menu-button'>
              Menu
        </button>
      </div>
    )
  }
}
