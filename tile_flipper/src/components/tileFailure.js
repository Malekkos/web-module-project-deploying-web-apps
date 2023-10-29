

const TileFailure = () => {
  
  const handleClick = event => {
  //   console.log(event.target.classList)
    event.target.classList = "tileSuccess"
  }

  return (
    <div className="tileWrapper">
      <input onClick={event => handleClick(event)} className="tileFailure" type="button" value=""></input>
    </div>
  )
}

export default TileFailure