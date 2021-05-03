import { configureStore } from '@reduxjs/toolkit'
import budgetsReducer from './features/Budget/BudgetsSlice'
import collateralReducer from './features/Collateral/CollateralsSlice'
import loansReducer from './features/Loans/loansSlice'

export default configureStore({
  reducer: {
    budgets: budgetsReducer,
    collateral: collateralReducer,
    loans: loansReducer
  }
})
