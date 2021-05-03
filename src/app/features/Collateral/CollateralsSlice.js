import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = [

]

const collateralSlice = createSlice({
    name: 'collateral',
    initialState,
    reducers: {
        collateralAdded: {
            reducer(state,action){
                state.push(action.payload)
            },
            prepare(collateralType, estimatedWorth, code) {
                return {
                  payload: {
                    id: nanoid(),
                    collateralType,
                    estimatedWorth
                  }
                }
              }
        }
    }
})

export const { collateralAdded } = collateralSlice.actions 

export default collateralSlice.reducer