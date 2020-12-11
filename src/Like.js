import React, { Component } from 'react'
import './Like.css';

class Like extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }

  render() {
    return (
      <div className="Counter">
        <h1 className="countymccounter">{this.state.count}</h1>
          <div className="Counter-Buttons">
            <button onClick={() => {
              this.setState({ count: this.state.count + 1 })
            }}
            >Like</button>

            <button onClick={() => {
              this.setState({ count: this.state.count - 1 })
            }}
            >Hate</button>
            </div>
      </div>
    )
  }
}


export default Like;