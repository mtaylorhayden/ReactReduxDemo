import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { collateralAdded } from '../features/Collateral/CollateralsSlice';
import { Link } from 'react-router-dom';


export const AddCollateralForm = () => {

    const [collateralType, setCollateralType] = useState('');
    const [estimatedWorth, setEstimatedWorth] = useState('');

    const dispatch = useDispatch();

    const onEstimatedWorthChange = (e: React.FormEvent<HTMLInputElement>) => setEstimatedWorth(e.currentTarget.value);
    const onCollateralTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => setCollateralType(e.currentTarget.value);

    const onAddCollateralClick = () => {
        if (collateralType && estimatedWorth){
        dispatch(collateralAdded({collateralType, estimatedWorth}));
            setCollateralType('');
            setEstimatedWorth('');
        }
    }


    return (
        <form>
        <div>
            <h2>Create your budget!</h2>
            <div className="form-group">
            <div className="dropdown">

            <select onChange={onCollateralTypeChange} value={collateralType} className='btn btn-warning'>
                <option className='dropdown-item' value="Business Property">Business Property</option>
                <option className='dropdown-item'  value="Real Estate">Real Estate</option>
                <option className='dropdown-item' value="Inventory Financing">Inventory Financing</option>
            </select>

            </div>
            </div>
            <div className="form-group">
                <label>Estimated Worth</label>
                <input 
                    className="form-control"
                    placeholder="Please enter the estimated worth of your collateral"
                    type="number"
                    id="estimatedWorth"
                    name="estimatedWorth"
                    value={estimatedWorth}
                    onChange={onEstimatedWorthChange}
                />
            </div>
            <Link to={`/Loans/AddLoanForm`}>
                <button onClick={onAddCollateralClick} type="button" className="btn btn-primary">Add Collateral</button>
            </Link>
        </div>
    </form>
    )
}