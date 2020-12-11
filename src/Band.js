import React from 'react';
import BandDetail from './BandDetail';
import data from './metal.json';
import './Band.css';

function Band() {
  const bands = data.map(( { band_name, formed, origin, fans, style }, i) => {
    return (
      <BandDetail 
        id={i}
        key={band_name}
        band_name={band_name}
        formed={formed}
        origin={origin}
        fans={fans}
        style={style}
      />
    )
  })
    return (
      <div className="band-style">
        { bands }
      </div>
    )
}

export default Band;

