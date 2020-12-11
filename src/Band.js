import React, { Component } from 'react'
import data from './metal.json'
import BandDetail from './BandDetail'

class Band extends Component {
  render () {
    return (
      <div>
        {data.map((item, index) => {
          return <BandDetail music={item} />
        })}
      </div>

    )
  }
}

export default Band

