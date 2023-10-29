import React, { useState }  from "react"
import TileSuccess from "./tileSuccess"
import TileFailure from "./tileFailure"
import tilesData from "../dataForTiles"

const Tiles = () => {
  const [tiles, setTiles] = useState(tilesData)
  return (
    <div className="tilesWrapper">
      {tiles.map((tile, idx) => {
        if (tile.tile === "orange") {
        return (
            <TileSuccess tiles={tiles} key={idx} />
        )
      }
        if(tile.tile === "red") {
          return (
            <TileFailure tiles={tiles} key={idx} />
          )
        }
      })}
    </div>
  )
}

export default Tiles