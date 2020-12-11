import React from 'react';
import './BandDetail.css'

function BandDetail(props) {
  const { band_name, formed, origin, fans } = props;
  return (
    <div className="Container">
      <h2 className="Band-Title">{band_name}</h2>
        <div className="Band-Info">
          <p><strong>Origin:</strong> {origin} <strong>Fans:</strong> {fans} <strong>Formed:</strong> {formed}</p>
        </div>
    </div>
  )
}

export default BandDetail
