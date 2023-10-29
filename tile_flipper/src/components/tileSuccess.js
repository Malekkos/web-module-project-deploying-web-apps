import React from "react"

const TileSuccess = () => {
  
  const handleClick = event => {
    if(event.target.className === "tileFailure") {
      event.target.className = "tileSuccess"
    } else {
      event.target.className = "tileFailure"
    }
  }

  return (
    <div className="tileWrapper">
      <input onClick={event => handleClick(event)} className="tileSuccess" type="button" value=""></input>
    </div>
  )
}

export default TileSuccess