import {Component} from 'react'

import Header from '../Header'

import './index.css'

class Templates extends Component {
  state = {
    dateInput: '',
  }

  onChangeDateInput = event => {
    this.setState({dateInput: event.target.value})
  }

  render() {
    const {dateInput} = this.state

    return (
      <div>
        <Header />
        <div className="align-items">
          <div>
            <input
              className="email-input"
              type="text"
              placeholder="Email Address"
            />

            <button type="button" className="button1">
              Send
            </button>
          </div>
          <form className="form" onSubmit={this.onAddAppointment}>
            <input
              type="date"
              id="date"
              value={dateInput}
              onChange={this.onChangeDateInput}
              className="input"
            />
          </form>
        </div>

        <div className="wishes-container">
          <div className="card-container">
            <h1 className="wish-color">Birthday Wishes</h1>
            <img
              src="https://res.cloudinary.com/ccbpmohan/image/upload/v1668106283/b_day_dkquei.jpg"
              alt="bdaywishes"
              className="wishes-img"
            />
            <button type="button" className="button">
              Edit card
            </button>
          </div>
          <div className="card-container">
            <h1 className="wish-color">Wedding Wishes</h1>
            <img
              src="https://res.cloudinary.com/ccbpmohan/image/upload/v1668131999/weeding-2_unfmxa.jpg"
              alt="weddingwishes"
              className="wishes-img"
            />
            <button type="button" className="button">
              Edit card
            </button>
          </div>
          <div className="card-container">
            <h1 className="wish-color">Festival Wishes</h1>
            <img
              src="https://res.cloudinary.com/ccbpmohan/image/upload/v1668107519/festival-card_wt2pzo.jpg"
              alt="festivalwishes"
              className="wishes-img"
            />
            <button type="button" className="button">
              Edit card
            </button>
          </div>

          <div className="card-container">
            <h1 className="wish-color">New Years Wishes</h1>

            <img
              src="https://res.cloudinary.com/ccbpmohan/image/upload/v1668107750/new_yesr_wishes_js3ob9.png"
              alt="newyearwishes"
              className="wishes-img"
            />
            <button type="button" className="button">
              Edit card
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Templates
