import React, { useState }  from "react"
import Tile from "./tile"

const Tiles = () => {
  // const [numberOfTiles, setNumberOfTiles] = useState(25)
  const numberOfTiles = 25
  const num = Array(numberOfTiles)
  num.fill(1, 0, 25)
  // console.log(num)
  return (
    <div>
      <h3>Tiles</h3>
      {num.map((tile, idx) => {
        // {console.log("ive ran")}
        // {console.log(tile)}
        // idx++
        return (
            <Tile key={idx} />
        )
      })}
    </div>
  )
}

export default Tiles