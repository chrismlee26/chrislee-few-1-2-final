import React from 'react';

function BandSplit(props) {
  const { band_name, formed, origin, fans, style, split } = props;
  return (
    <div className="Container">
      <h2 className="Band-Title">{band_name}</h2>
        <div className="Band-Info">
          <p><strong>Origin:</strong> {origin} <strong>Fans:</strong> {fans} <strong>Formed:</strong> {formed} </p>
          <p>{style}</p>
          <p><strong> Split in: {split}</strong></p>
        </div>
    </div>
  )
}

export default BandSplit
