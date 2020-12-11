import React from 'react'
import data from './metal.json'

function MetalMeta() {
  return (
    <div>
      <p>Metal Bands 🤘</p>
      <p>Bands: {JSON.parse(JSON.stringify(data)).length} </p>
    </div>
  )
}

export default MetalMeta
