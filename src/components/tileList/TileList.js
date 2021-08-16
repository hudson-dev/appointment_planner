import React from "react";
import { Tile } from '../tile/Tile.js';

export const TileList = ({tiles}) => {
  return (
    <div>
      {
        tiles.map(({tile, index}) => {
          return <Tile
            tile={tile}
            key={index}
          />
        })
      }
    </div>
  );
};
