import React from 'react'
import PropTypes from 'prop-types'

import ConfirmedFilter from './ConfirmedFilter'
import GuestList from './GuestList'
import Counter from './Counter'

const MainContent = props =>
    <div className="main">
      <ConfirmedFilter toggleFiltered={ props.toggleFiltered }
                       isFiltered={ props.isFiltered } />

      <Counter
        totalInvites={ props.totalInvites }
        totalAttending={ props.totalAttending }
        totalUnconfirmed={ props.totalUnconfirmed } />

      <GuestList
        guests={ props.guests }
        isFiltered={ props.isFiltered }
        toggleConfirmation={ props.toggleConfirmation }
        toggleEditing={ props.toggleEditing }
        setName={ props.setName }
        removeGuest={ props.removeGuest }
        pendingGuest={ props.pendingGuest } />
    </div>

MainContent.PropTypes = {
    toggleFiltered: PropTypes.func.isRequired,
    isFiltered: PropTypes.bool.isRequired,
    totalInvites: PropTypes.number,
    totalAttending: PropTypes.number,
    totalUnconfirmed: PropTypes.number,
    guests: PropTypes.array.isRequired,
    toggleConfirmation: PropTypes.func.isRequired,
    toggleEditing: PropTypes.func.isRequired,
    setName: PropTypes.func.isRequired,
    removeGuest: PropTypes.func.isRequired,
    pendingGuest: PropTypes.func.isRequired
}

export default MainContent
