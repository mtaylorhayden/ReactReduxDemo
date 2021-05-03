import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = [
    {
        bills: "50",
carPayment: "50",
housePayment: "05",
id: "Ud6-ee7VoUkHSBBAjLSY_",
leftOver: 4995,
monthlyPay: "5050",
savings: "555",
studentLoans: "50"
    }
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
        budgetUpdated(state, action){
            const {id, carPayment, housePayment, bills, studentLoans, monthlyPay, savings, leftOver} = action.payload
            const existingBudget = state.find(budget => budget.id === id)
            if(existingBudget){
                existingBudget.carPayment = carPayment
            }
        }
    }
})

export const { budgetAdded, budgetUpdated } = budgetsSlice.actions

export default budgetsSlice.reducer