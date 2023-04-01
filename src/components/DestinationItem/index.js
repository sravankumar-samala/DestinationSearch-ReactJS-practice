// Write your code here
import {Component} from 'react'
import './index.css'

class DestinationItem extends Component {
  render() {
    const {destinationItem} = this.props
    const {name, imgUrl} = destinationItem
    console.log(name, imgUrl)

    return (
      <li className="dest-item">
        <img src={imgUrl} className="image" alt={name} />
        <p>{name}</p>
      </li>
    )
  }
}
export default DestinationItem
