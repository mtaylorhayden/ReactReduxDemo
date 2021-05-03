import { AddBudgetForm } from './app/features/Budget/AddBudgetForm';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import { AddCollateralForm } from './app/features/Collateral/AddCollateralForm'
import AddLoanForm from '../src/app/features/Loans/AddLoanForm'


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Route exact={true} path="/" render={() => (
            <AddBudgetForm />
          )}/>
        </header>
        <Route exact={true} path="/Collateral/AddCollateralForm" component={AddCollateralForm}/>
        <Route exact={true} path="/Loans/AddLoanForm" component={AddLoanForm} />
      </div>
    </Router>
  );
}

export default App;
