import './App.css'
import Table from './components/table/Table';

function App() {
  const netIncomes = [{brand: "McDonalds", income: 1291283}, {brand: "Burger King", income: 1927361}, {brand: "KFC", income: 1098463}];
  const totalIncome = netIncomes.reduce((accumulator, current) => accumulator + current.income, 0);
  const averageIncome = totalIncome / netIncomes.length;

  return (
    <div>
      <Table data = {netIncomes}/>
      <p><b>Average Net Income:</b> $ {averageIncome.toFixed(2)}</p>
    </div>
  );
}

export default App;