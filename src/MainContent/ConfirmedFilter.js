import React from 'react'
import PropTypes from 'prop-types'

const ConfirmedFilter = props =>
    <div>
      <h2>Invitados</h2>
      <label>
        <input type="checkbox"
               onChange={ props.toggleFiltered }
               checked={ props.isFiltered }
        />{" "}
        Ocultar todos los que aún no han respondido
      </label>
    </div>

ConfirmedFilter.PropTypes = {
    toggleFiltered: PropTypes.func.isRequired,
    isFiltered: PropTypes.bool.isRequired
}

export default ConfirmedFilter
