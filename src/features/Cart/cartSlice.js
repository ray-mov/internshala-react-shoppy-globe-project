import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItems: [],
  totalQuantity: 0,
  totalPrice: 0
}


const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addTocart: (state, action) => {
      const itemExist = state.cartItems.find(item => item.id === action.payload.id)
      state.totalQuantity++
      if (itemExist) {
        itemExist.quantity++
      } else {
        state.cartItems.push(action.payload)
      }
      state.totalPrice += action.payload.price

    },
    deleteItem: (state, action) => {
      const itemExist = state.cartItems.find(item => item.id === action.payload)
      state.totalQuantity -= itemExist.quantity
      state.totalPrice = state.totalPrice - (itemExist.quantity * itemExist.price).toFixed(2)
      if (!state.cartItems.length) {
        state.totalPrice = 0
      }
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload)

    },
    increaseItemQuantity: (state, action) => {
      console.log(action.payload);

      const existingItem = state.cartItems.find(item => item.id === action.payload)
      if (existingItem) {
        existingItem.quantity++
        state.cartItems = state.cartItems.filter(item => item.id !== action.payload)
        state.cartItems.push(existingItem)
      }
      state.totalQuantity++
      state.totalPrice += existingItem.price
    },
    decreaseItemQuantity: (state, action) => {
      const existingItem = state.cartItems.find(item => item.id === action.payload)
      if (existingItem.quantity === 1) {
        return
      }
      if (existingItem) {
        existingItem.quantity--
        state.cartItems = state.cartItems.filter(item => item.id !== action.payload)
        state.cartItems.push(existingItem)
      }
      state.totalQuantity--
      state.totalPrice -= existingItem.price
    },
    clearCart: (state) => {
      state.cartItems = [],
        state.totalQuantity = 0,
        state.totalPrice = 0
    }
  }
})

export const { addTocart, deleteItem, increaseItemQuantity, decreaseItemQuantity, clearCart } = cartSlice.actions

export default cartSlice.reducer