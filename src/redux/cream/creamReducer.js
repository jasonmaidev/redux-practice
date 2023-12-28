import { BUY_CREAM } from "./creamActionTypes"

const initialState = {
  creamCount: 20
}

const creamReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CREAM: return {
      ...state,
      creamCount: state.creamCount - 1
    }
    default: return state
  }
}

export default creamReducer