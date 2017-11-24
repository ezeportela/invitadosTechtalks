import React from 'react'
import PropTypes from 'prop-types'

import GuestName from './GuestName.js'

const Guest = props =>
  <li>
    <GuestName isEditing={ props.isEditing }
               setName={ props.handleNameEdits }>
        { props.name }
    </GuestName>
    <label>
      <input
        type="checkbox"
        checked={ props.isConfirmed }
        onChange={ props.handleConfirmation } /> Confirmar
    </label>
    <button onClick={ props.handleEditing }>
      { props.isEditing ? 'guardar' : 'editar' }
    </button>
    <button onClick={ props.handleRemoveGuest }>eliminar</button>
  </li>

Guest.propTypes = {
  name: PropTypes.string.isRequired,
  isConfirmed: PropTypes.bool.isRequired,
  isEditing: PropTypes.bool.isRequired,
  handleConfirmation: PropTypes.func.isRequired,
  handleEditing: PropTypes.func.isRequired,
  handleNameEdits: PropTypes.func.isRequired,
  handleRemoveGuest: PropTypes.func.isRequired
}

export default Guest
