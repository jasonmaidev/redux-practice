import { BUY_BEVERAGE } from "./beverageActionTypes"

const initialState = {
  beverageCount: 10
}

const beverageReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_BEVERAGE: return {
      ...state,
      beverageCount: state.beverageCount - action.payload
    }
    default: return state
  }
}

export default beverageReducer