import React, { Component } from 'react'
import Band from './Band'

class BandDetail extends Component {
  render () {
    const {music} = this.props
    return (
      <div>
        <p>{music.band_name}</p>
        <p>Formed: {music.formed}</p>
        <p>{music.origin}</p>
        <p>Fans: {music.fans}</p>   
      </div>
    )
  }
}

export default BandDetail
