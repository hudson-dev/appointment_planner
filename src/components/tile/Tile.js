import React, { useEffect } from 'react';

export const Tile = ({tile}) => {

  return (
    <div className="tile-container">
      {
        Object.keys(tile).map((property, index) => {
          if (index == 0) {
            return <p key={index} className="tile-title">{tile[property]}  </p>
          } else {
            return <p key={index} className="tile">{tile[property]}</p>;
          }
        })
      }
    </div>
  );
};
