function Card({item, id, handleCLick}){

  const itemClass = item.stat ? " active " + item.stat : ""

  return (
    <div className={'card' + itemClass} onClick={() => handleCLick(id)}>
      <img src={item.img} alt="img" className='img' />
    </div>
  )
}

export default Card