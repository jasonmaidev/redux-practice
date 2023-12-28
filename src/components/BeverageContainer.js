import React from 'react'
import { buyBeverage } from '../redux'
import { connect } from 'react-redux'

function BeverageContainer(props) {
  return (
    <div>
      {props.beverageCount >= 0 ?
        <h2>Beverage Count: {props.beverageCount}</h2>
        :
        <h2>Beverage Sold out! Backorder: {Math.abs(props.beverageCount)}</h2>}
      <button onClick={props.buyBeverage}>Buy Beverage</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    beverageCount: state.beverage.beverageCount
  }
}

const mapDispatchToProps = dispatch => {
  return {
    buyBeverage: () => dispatch(buyBeverage())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BeverageContainer)