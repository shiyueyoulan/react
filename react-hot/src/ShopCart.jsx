import React, {Component} from 'react'
import WithLogin from './WithLogin'

class ShopCart extends Component {
  render() {
    return(
      <ul>
        <li>手机</li>
        <li>平板</li>
      </ul>
    )
  }
}
ShopCart.displayName = 'ShopCart';
export default ShopCart;