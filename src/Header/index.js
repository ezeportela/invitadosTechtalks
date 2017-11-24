import React from 'react'
import PropTypes from 'prop-types'

import GuestInputForm from './GuestInputForm'

const Header = props =>
    <header>
      <h1>React</h1>
      <GuestInputForm newGuestSubmitHandler={ props.newGuestSubmitHandler }
                      pendingGuest={ props.pendingGuest }
                      handleNameInput={ props.handleNameInput } />
    </header>

Header.PropTypes = {
    newGuestSubmitHandler: PropTypes.func.isRequired,
    pendingGuest: PropTypes.string.isRequired,
    handleNameInput: PropTypes.func.isRequired,
}

export default Header
