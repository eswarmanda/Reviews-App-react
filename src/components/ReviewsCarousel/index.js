import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {
    count: 0,
  }

  increment = () => {
    const {reviewsList} = this.props
    const listLength = reviewsList.length - 1
    console.log(listLength)
    const {count} = this.state
    const res =
      count === listLength
        ? this.setState({count: listLength})
        : this.setState(prevState => ({count: prevState.count + 1}))
    console.log(res)
  }

  decrement = () => {
    const {count} = this.state
    const res =
      count === 0
        ? this.setState({count: 0})
        : this.setState(prevState => ({count: prevState.count - 1}))
    console.log(res)
  }

  render() {
    const {count} = this.state
    const {reviewsList} = this.props

    return (
      <div className="main-cont">
        <div>
          <h1 className="heading">Reviews</h1>
        </div>
        <div className="courosel">
          <button
            className="btn"
            type="button"
            data-testid="leftArrow"
            onClick={this.decrement}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>

          <div className="user">
            <img
              className="user-img"
              src={reviewsList[count].imgUrl}
              alt={reviewsList[count].username}
            />
            <p className="username">{reviewsList[count].username}</p>
            <p>{reviewsList[count].companyName}</p>
            <p className="description">{reviewsList[count].description}</p>
          </div>
          <button
            className="btn"
            type="button"
            data-testid="rightArrow"
            onClick={this.increment}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png "
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
