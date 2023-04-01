/* eslint-disable no-undef */
// Write your code here
import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {inputSearch: ''}

  searchDestination = event => {
    this.setState({inputSearch: event.target.value.toLowerCase()})
  }

  render() {
    const {destinationsList} = this.props
    const {inputSearch} = this.state
    const filteredList = destinationsList.filter(eachItem =>
      eachItem.name.toLowerCase().includes(inputSearch),
    )
    console.log(destinationsList)
    console.log(inputSearch)
    return (
      <div className="main-container">
        <div className="container">
          <h1>Destination Search</h1>
          <div className="search-box">
            <input
              type="search"
              placeholder="search.."
              className="input-search"
              onChange={this.searchDestination}
            />
            <img
              className="icon"
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
            />
          </div>
          <ul className="dest-container">
            {filteredList.map(eachItem => (
              <DestinationItem key={eachItem.id} destinationItem={eachItem} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default DestinationSearch
