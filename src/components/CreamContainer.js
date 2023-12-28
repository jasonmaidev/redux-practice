import React from 'react'
import { buyCream } from '../redux'
import { connect } from 'react-redux'

function CreamContainer(props) {
  return (
    <div>
      {props.creamCount >= 0 ?
        <h2>Cream Count: {props.creamCount}</h2>
        :
        <h2>Cream Sold out! Backorder: {Math.abs(props.creamCount)}</h2>}
      <button onClick={props.buyCream}>Buy Cream</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    creamCount: state.cream.creamCount
  }
}

const mapDispatchToProps = dispatch => {
  return {
    buyCream: () => dispatch(buyCream())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreamContainer)