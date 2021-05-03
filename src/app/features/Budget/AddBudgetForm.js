import { useState } from 'react'
import { budgetAdded } from './BudgetsSlice'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

export const AddBudgetForm = () => {
    const [carPayment, setCarPayment] = useState('')
    const [housePayment, setHousePayment] = useState('')
    const [bills, setBills] = useState('')
    const [studentLoans, setStudentLoans] = useState('')
    const [monthlyPay, setMonthlyPay] = useState('')
    const [savings, setSavings] = useState('')
    const [leftOver, setLeftOver] = useState('')

    const dispatch = useDispatch()

    const onCarPaymentChange = e => setCarPayment(e.target.value)
    const onHousePaymentChange = e => setHousePayment(e.target.value)
    const onBillPaymentChange = e => setBills(e.target.value)
    const onStudentLoanPaymentChange = e => setStudentLoans(e.target.value)
    const onMonthlyPayChange = e => setMonthlyPay(e.target.value)
    const onSavingsChange = e => setSavings(e.target.value)

    const onSavePostClicked = () => {

        if (carPayment && housePayment && bills && studentLoans && monthlyPay && savings){
            dispatch(budgetAdded(carPayment, housePayment, bills, studentLoans, monthlyPay, savings, leftOver))
            setCarPayment('')
            setHousePayment('')
            setBills('')
            setStudentLoans('')
            setMonthlyPay('')
            setSavings('')
        }
    }

    return (
    <form>
        <div>
            <h2>Create your budget!</h2>
            <div className="form-group">
                <label>Car Payment</label>
                <input 
                    className="form-control"
                    placeholder="Please enter your car payment"
                    type="number"
                    id="carPayment"
                    name="carPayment"
                    value={carPayment}
                    onChange={onCarPaymentChange}
                    />
            </div>
            <div className="form-group">
                <label>House Payment</label>
                <input 
                    className="form-control"
                    placeholder="Please enter your house payment"
                    type="number"
                    id="housePayment"
                    name="housePayment"
                    value={housePayment}
                    onChange={onHousePaymentChange}
                />
            </div>
            <div className="form-group">
                <label>Bills</label>
                <input 
                    className="form-control"
                    placeholder="Please enter the total of all your other bills"
                    type="number"
                    id="bills"
                    name="bills"
                    value={bills}
                    onChange={onBillPaymentChange}
                />
            </div>
            <div className="form-group">
                <label>Student Loans</label>
                <input 
                    className="form-control"
                    placeholder="Please enter your student loans"
                    type="number"
                    id="studentLoans"
                    name="studentLoans"
                    value={studentLoans}
                    onChange={onStudentLoanPaymentChange}
                />
            </div>
            <div className="form-group">
                <label>Monthly Pay</label>
                <input 
                    className="form-control"
                    placeholder="Please enter the amount you get paid monthly"
                    type="number"
                    id="monthlyPay"
                    name="monthlyPay"
                    value={monthlyPay}
                    onChange={onMonthlyPayChange}
                />
            </div>
            <div className="form-group">
                <label>Savings</label>
                <input 
                    className="form-control"
                    placeholder="Please enter your savings"
                    type="number"
                    id="studentLoans"
                    name="studentLoans"
                    value={savings}
                    onChange={onSavingsChange}
                />
            </div>
                <Link to={`/Collateral/AddCollateralForm`}>
                    <button onClick={onSavePostClicked} type="button" className="btn btn-primary">Create Budget</button>
                </Link>
        </div>
    </form>
    )
}