import React from 'react'
import data from './metal.json'

function MetalMeta() {
  return (
    <div>
      <h3>Metal Bands 🤘</h3>
      <h3>Total Bands: {JSON.parse(JSON.stringify(data)).length} </h3>
    </div>
  )
}

export default MetalMeta
