import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = [
]


const budgetsSlice = createSlice({
    name: 'budgets',
    initialState,
    reducers: {
        budgetAdded: {
            reducer(state, action){
                console.log(action);
                state.push(action.payload)
            },
        prepare(carPayment, housePayment, bills, studentLoans, monthlyPay, savings, leftOver){
            return {
                payload: {
                    id: nanoid(),
                    carPayment,
                    housePayment,
                    bills,
                    studentLoans,
                    monthlyPay,
                    savings,
                    //Reducer functions should only depend on their state and action arguments, 
                    //and should only calculate and return a new state value based on those arguments.
                    leftOver: Number(monthlyPay) - (Number(carPayment) + Number(housePayment))
                }}
            }
        },
    }
})

export const { budgetAdded, budgetUpdated } = budgetsSlice.actions

export default budgetsSlice.reducer