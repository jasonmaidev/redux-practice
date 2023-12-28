import { BUY_BEVERAGE } from "./beverageActionTypes"

export const buyBeverage = (number = 1) => {
  return {
    type: BUY_BEVERAGE,
    payload: number
  }
}