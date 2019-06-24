import React, {Component} from 'react'
import WithLogin from './WithLogin'

class LoginStatus extends Component {
  render() {
    return(
      <button>已经登录</button>
    )
  }
}
LoginStatus.displayName = 'LoginStatus'
export default LoginStatus;