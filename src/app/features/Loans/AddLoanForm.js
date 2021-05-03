import React from 'react'
import { connect } from "react-redux";
import { loanAccepted } from "./loansSlice"

class AddLoanForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            loan: {},
            isLoanTypeSelected: false
        }

        this.handleClick = this.handleClick.bind(this)
    }
    
    
    handleClick(loan) {
        if(loan){
            this.setState({
                loan: loan,
                isLoanTypeSelected: true
            })
        }
    }

    acceptLoan = (e) => {
        this.props.loanAccepted({accepted: 1, id: this.state.loan.id});
    }

    render() {
        const buttonStyles = {
            margin: "2.5%",
            width: "10%"
        }
        return (
            <div>
                <h2>Choose which loan type you'd like to recieve</h2>
                <div id='loanButtons'>
                    {this.props.loans.map((loan) => 
                    
                        <button style={buttonStyles} className="btn btn-primary" onClick={() => this.handleClick(loan)}>{loan.type}</button>
                    )}
                    <div>
                        {
                            this.state.isLoanTypeSelected ?

                        <div>
                            <div className="form-group">
                                <h5 className="">{this.state.loan.type}</h5>
                            </div>
                            <div className="form-group">
                                <label className="col-sm-2 col-form-label">Loan Amount</label>
                                <input className="form-control col-sm-2" defaultValue={0} value={this.state.loan.amount} readOnly/>
                            </div>
                            <div className="form-group">
                                <label className="col-sm-2 col-form-label">Loan Rate</label>
                                <input className="form-control col-sm-2" defaultValue={0} value={this.state.loan.rate} readOnly/>
                            </div>
                            <div className="form-group">
                                    <label className="col-sm-2 col-form-label">Rate Type</label>
                                    <input className="form-control col-sm-2" defaultValue={0} value={this.state.loan.rateType} readOnly/>
                            </div>
                                <button onClick={this.acceptLoan} className="btn btn-primary">Accept Loan</button>
                        </div>

                        : <p>Please select a loan type</p>
                        }

                    {/* <LoanDisplay loan={this.state.loan} /> */}
                        {/* {this.state.showLoan ? <LoanDisplay loan={this.state.loan}/> : "null"} */}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loans: state.loans,
        budgets: state.budgets,
        collateral: state.collateral    
    }
}

const mapDispatchToProps = () => {
    return {
        loanAccepted
    }
}

export default connect(mapStateToProps, mapDispatchToProps())(AddLoanForm)