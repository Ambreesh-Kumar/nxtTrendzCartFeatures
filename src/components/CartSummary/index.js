// Write your code here
import './index.css'

const CartSummary = props => {
  const {priceDetailList} = props
  let totalCost = 0
  priceDetailList.map(eachItem => {
    totalCost += eachItem.price * eachItem.quantity
    return eachItem.price * eachItem.quantity
  })

  const totalCartItems = priceDetailList.length

  return (
    <div className="cart_summary_container">
      <h1 className="total_price_heading">
        Order Total: <span className="total_cost">Rs {totalCost}/-</span>
      </h1>
      <p className="item_count">{totalCartItems} Items in cart</p>
      <button type="button" className="checkout_button">
        Checkout
      </button>
    </div>
  )
}

export default CartSummary
