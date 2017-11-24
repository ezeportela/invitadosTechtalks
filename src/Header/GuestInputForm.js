import React from 'react'
import PropTypes from 'prop-types'

const GuestInputForm = props =>
  <form onSubmit={ props.newGuestSubmitHandler }>
      <input type="text"
         value={ props.pendingGuest }
         placeholder="Invitar a Alguien"
         onChange={ props.handleNameInput }/>
      <button type="submit"
          name="submit"
          value="submit">Invitar</button>
  </form>

GuestInputForm.PropTypes = {
    newGuestSubmitHandler: PropTypes.func.isRequired,
    pendingGuest: PropTypes.string.isRequired,
    handleNameInput: PropTypes.func.isRequired,
}

export default GuestInputForm
