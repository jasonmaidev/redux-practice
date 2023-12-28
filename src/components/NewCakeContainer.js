import React, { useState } from 'react'
import { buyCake } from '../redux'
import { connect } from 'react-redux'

function NewCakeContainer(props) {
  const [number, setNumber] = useState(1)
  return (
    <div>
      {props.cakeCount >= 0 ?
        <h2>Cake Count: {props.cakeCount}</h2>
        :
        <h2>Cake Sold out! Backorder: {Math.abs(props.cakeCount)}</h2>}
      <input type="text" value={number} onChange={e => setNumber(e.target.value)} />
      <button onClick={() => props.buyCake(number)}>Buy {number} {number > 1 ? 'Cakes' : 'Cake'}</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    cakeCount: state.cake.cakeCount
  }
}

const mapDispatchToProps = dispatch => {
  return {
    buyCake: (number) => dispatch(buyCake(number))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer)