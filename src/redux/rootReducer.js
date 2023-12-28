import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import creamReducer from "./cream/creamReducer";
import beverageReducer from "./beverage/beverageReducer";
import userReducer from "./user/userReducer"

const rootReducer = combineReducers({
  cake: cakeReducer,
  cream: creamReducer,
  beverage: beverageReducer,
  users: userReducer
})

export default rootReducer