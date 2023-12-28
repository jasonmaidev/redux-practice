import React from 'react'
import { buyCake } from '../redux'
import { connect } from 'react-redux'

function CakeContainer(props) {
  return (
    <div>
      {props.cakeCount >= 0 ?
        <h2>Cake Count: {props.cakeCount}</h2>
        :
        <h2>Cake Sold out! Backorder: {Math.abs(props.cakeCount)}</h2>}
      <button onClick={props.buyCake}>Buy Cake</button>
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
    buyCake: () => dispatch(buyCake())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)