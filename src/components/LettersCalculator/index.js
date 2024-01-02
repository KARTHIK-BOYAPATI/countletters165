import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {searchInput: 0}

  onCount = event => {
    this.setState({searchInput: event.target.value.length})
  }

  render() {
    const {searchInput} = this.state
    return (
      <div className="mainContainer">
        <div>
          <h1 className="heading">
            Calculate the <br /> Letters you <br /> enter
          </h1>
          <div>
            <label className="label" htmlFor="labelEle">
              Enter the phrase
            </label>
          </div>
          <input
            id="labelEle"
            type="text"
            placeholder="Enter the Phrase"
            onChange={this.onCount}
            className="inputEle"
          />
          <div>
            <p className="countContainer">No.of letters: {searchInput}</p>
          </div>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
        />
      </div>
    )
  }
}

export default LettersCalculator
