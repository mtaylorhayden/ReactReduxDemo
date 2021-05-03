import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = [
{  collateralType: "Real Estate",
estimatedWorth: "2000",
id: "4aL7XtEpJfs8u9a4jSRVt"}
    // {   id: nanoid(),
    //     collateralType: '',
    //     estimatedWorth: ''
    // }
]

const collateralSlice = createSlice({
    name: 'collateral',
    initialState,
    reducers: {
        //todo change this name to ADDED
        collateralUpdated: {
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

export const { collateralUpdated } = collateralSlice.actions 

export default collateralSlice.reducer