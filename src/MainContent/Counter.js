import React from 'react'
import PropTypes from 'prop-types'

const Counter = props =>
    <table className="counter">
      <tbody>
        <tr>
          <td>Confirmados:</td>
          <td>{ props.totalAttending }</td>
        </tr>
        <tr>
          <td>Sin Confirmar:</td>
          <td>{ props.totalUnconfirmed }</td>
        </tr>
        <tr>
          <td>Total:</td>
          <td>{ props.totalInvites }</td>
        </tr>
      </tbody>
    </table>

Counter.PropTypes = {
    totalAttending: PropTypes.number,
    totalUnconfirmed: PropTypes.number,
    totalInvites: PropTypes.number,
}

export default Counter
