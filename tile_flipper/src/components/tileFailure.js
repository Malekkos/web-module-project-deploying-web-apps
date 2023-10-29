

const TileFailure = () => {
  
  const handleClick = event => {
    if(event.target.className === "tileFailure") {
      event.target.className = "tileSuccess"
    } else {
      event.target.className = "tileFailure"
    }
  }

  return (
    <div className="tileWrapper">
      <input onClick={event => handleClick(event)} className="tileFailure" type="button" value=""></input>
    </div>
  )
}

export default TileFailure