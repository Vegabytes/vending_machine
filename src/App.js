import './App.css';
import Vendingmachine from './components/VendingMachine';
import Soda from './components/Soda';
import Chips from './components/Chips';
import Sardines from './components/Sardines';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path={"/"} render={() => <Vendingmachine />} />
        <Route path={"/chips"} render={() => <Chips />} />
        <Route path={"/sardines"} render={() => <Sardines />} />
        <Route path={"/soda"} render={() => <Soda />} />
      </Switch>
    </div>
  );
}

export default App;
