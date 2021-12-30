
import './App.css';
import AddNewTransaction from './Components/AddNewTransaction';
import Balance from './Components/Balance';
import Header from './Components/Header';
import IncomeExpenses from './Components/IncomeExpenses';
import {TransactionList} from './Components/TransactionList';
import { GlobalProvider } from './Context/globalState';

function App() {
  return (
    <GlobalProvider>
      <Header/>
      <div className='container'>
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddNewTransaction />
      </div>
    </GlobalProvider>
  );
}


export default App;
