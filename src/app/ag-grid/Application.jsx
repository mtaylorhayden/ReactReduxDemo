import React from 'react';
import { render } from 'react-dom';
import {AgGridColumn, AgGridReact} from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

export const Application = () => {
    const rowData = [
        {loanAmount: 10000, type: 'Auto', APR: '16%', rate: 2.5, rateType: "fixed", length: 60, estimatedMonthlyPayment: 500, collateralWorth: 7000},
        {loanAmount: 250000, type: 'Mortgage', APR: '14%', rate: 1.9, rateType: "Adjustable Rate Mortgage", length: 120, estimatedMonthlyPayment: 600, collateralWorth: 7000},
        {loanAmount: 100000, type: 'Home Equity', APR: '15%', rate: 2.7, rateType: "HELOC", length: 360, estimatedMonthlyPayment: 1500, collateralWorth: 7000}
    ]

    return (
        <div className="ag-theme-alpine" style={{height: 400, width: 600}}>
        <AgGridReact
            rowData={rowData}>
            <AgGridColumn field="loanAmount"></AgGridColumn>
            <AgGridColumn field="type"></AgGridColumn>
            <AgGridColumn field="APR"></AgGridColumn>
            <AgGridColumn field="rate"></AgGridColumn>
            <AgGridColumn field="rateType"></AgGridColumn>
            <AgGridColumn field="length"></AgGridColumn>
            <AgGridColumn field="estimatedMonthlyPayment"></AgGridColumn>
            <AgGridColumn field="collateralWorth"></AgGridColumn>
        </AgGridReact>
    </div>
    )
}

export default Application