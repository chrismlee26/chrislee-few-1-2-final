import React from 'react';
import BandDetail from './BandDetail';
import data from './metal.json';

function Band() {
  const bands = data.map(( { band_name, formed, origin, fans }, i) => {
    return (
      <BandDetail 
        id={i}
        key={band_name}
        band_name={band_name}
        formed={formed}
        origin={origin}
        fans={fans}
      />
    )
  })
    return (
      <div>
        { bands }
      </div>
    )
}

export default Band;

