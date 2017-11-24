import React, { Component } from 'react';
import './App.css'

import uuidv1 from 'uuid/v1'
import Header from './Header'
import MainContent from './MainContent'

class App extends Component {
  state = {
      isFiltered: false,
      pendingGuest: '',
      guests: []
  }

  toggleGuestProperty = (property, id) =>
    this.setState({
      guests: this.state.guests.map( (guest, index) => {
        if(guest.id === id) {
          return {
              ...guest,
              [property]: !guest[property]
          }
        }

        return guest
      })
    })

  toggleConfirmation = id =>
      this.toggleGuestProperty('isConfirmed', id)

  toggleEditing = id =>
      this.toggleGuestProperty('isEditing', id)

  removeGuest = id =>
    this.setState({
      guests: this.state.guests.filter(guest => id !== guest.id)
          /*...this.state.guests.slice(0, index),
          ...this.state.guests.slice(index + 1)*/
    })

  toggleFiltered = () =>
      this.setState({ isFiltered: !this.state.isFiltered })

  setName = (name, id) =>
    this.setState({
      guests: this.state.guests.map( (guest, index) => {
        if(guest.id === id) {
          return {
              ...guest,
              name
          }
        }

        return guest
      })
    })

  handleNameInput = event =>
    this.setState({ pendingGuest: event.target.value })

  newGuestSubmitHandler = e => {
    e.preventDefault()

    this.setState({
        guests: [
            {
                id: uuidv1(),
                name: this.state.pendingGuest,
                isConfirmed: false,
                isEditing: false,
            }, ...this.state.guests
        ],
        pendingGuest: ''
    })
  }

  getTotalInvited = () => this.state.guests.length

  getAttendingGuests = () =>
        this.state.guests.reduce((total, guest) =>
            guest.isConfirmed ? total + 1 : total, 0)

  render() {
      const totalInvites = this.getTotalInvited()
      const totalAttending = this.getAttendingGuests()
      const totalUnconfirmed = totalInvites - totalAttending

    return (
      <div className="App">
        <Header newGuestSubmitHandler={ this.newGuestSubmitHandler }
                pendingGuest={ this.state.pendingGuest }
                handleNameInput={ this.handleNameInput } />

        <MainContent
            toggleFiltered={ this.toggleFiltered }
            isFiltered={ this.state.isFiltered }
            totalInvites={ totalInvites }
            totalAttending={ totalAttending }
            totalUnconfirmed={ totalUnconfirmed }
            guests={ this.state.guests }
            toggleConfirmation={ this.toggleConfirmation }
            toggleEditing={ this.toggleEditing }
            setName={ this.setName }
            removeGuest={ this.removeGuest }
            pendingGuest={ this.state.pendingGuest } />
        </div>
    );
  }
}

export default App;
