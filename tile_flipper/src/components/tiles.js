import React, { useState }  from "react"
import TileSuccess from "./tileSuccess"
import TileFailure from "./tileFailure"
import tilesData from "../dataForTiles"
// import "../App.css"

const Tiles = () => {
  
  const [tiles, setTiles] = useState(tilesData)

  return (
    <div className="tilesWrapper">
      {tiles.map((tile, idx) => {
        console.log("tile", tile, "id", idx)
        
        return (
            <TileSuccess className="tile" key={idx} />
        )
      })}
    </div>
  )
}

export default Tiles