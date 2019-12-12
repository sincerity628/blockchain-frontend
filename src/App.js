import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Setting from './pages/setting/Setting';
import CreateTransaction from './pages/create-transacion/CreateTransaction';
import WalletDetail from './pages/wallet-detail/WalletDetail';
import NavBar from './components/navbar/NavBar';
import TransactionQueue from './pages/transaction-queue/TransactionQueue';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/setting" component={Setting} />
        <Route path="/create" component={CreateTransaction}/>
        <Route path="/wallet/:key" component={WalletDetail} />
        <Route path="/trans-queue" component={TransactionQueue} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
