// Write your code here.
import './index.css'

const CardItem = props => {
  const {cardsListItem} = props
  const {title, description, imgUrl, className} = cardsListItem
  return (
    <li className={`${className} card`}>
      <div className="cardStyle">
        <h1 className="head">{title}</h1>
        <p className="para">{description}</p>

        <img src={imgUrl} alt={title} className="image" />
      </div>
    </li>
  )
}

export default CardItem
