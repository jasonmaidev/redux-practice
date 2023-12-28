import { BUY_CAKE } from "./cakeActionTypes"

const initialState = {
  cakeCount: 10
}

const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE: return {
      ...state,
      cakeCount: state.cakeCount - action.payload
    }
    default: return state
  }
}

export default cakeReducer