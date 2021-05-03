import { createSlice, nanoid } from '@reduxjs/toolkit'

// define a default state
// add collateral to this 
const initialState = [
    {    id: nanoid(),
        loanId: 70,
        type: 'Auto',
        amount: '10000',
        rate: '2.5',
        rateType: 'Fixed',
        accepted: 0
    },
    {   id: nanoid(),
        loanId: 80,
        type: 'Mortgage',
        amount: '375000',
        rate: '2.2',
        rateType: 'Adjustable Rate Mortgage',
        accepted: 0
    },
    {    id: nanoid(),
        loanId: 75,
        type: 'Home Equity',
        amount: '64000',
        rate: '3.1',
        rateType: 'HELOC',
        accepted: 0
    }
]

const loansSlice = createSlice({
    name: 'loans',
    initialState,
    reducers: {
        loanAccepted(state, action){
            const loans = state.map(loan => {
                if (loan.id === action.payload.id) {
                    loan.accepted = action.payload.accepted
                }
            });
        }
    }
})

export const { loanAccepted } = loansSlice.actions 

export default loansSlice.reducer