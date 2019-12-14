import React, { useState } from 'react';
import TransactionTable from '../../components/transaction-table/TransactionTable';
import './wallet-detail.css';
const { initChain } = require('../../store/store');


const WalletDetail = (props) => {
  const walletID = props.match.params.key;

  const [chain, setChain] = useState(initChain);
  const [trans, setTrans] = useState(chain.getTrans(walletID));

  const handleWarning = () => {
    setChain(initChain);
    setTrans(chain.getTrans(walletID));
  }

  return (
    <div className="wallet-detail container mt-2" key={walletID}>
      <h1>Wallet details</h1>

      <h4>Address: </h4>
      <div>{ walletID }</div>

      <h4 className="mt-3">Balence: </h4>
      <div>{ chain.getBalence(walletID) }</div>

      <h1 className="mt-5">Transactions</h1>
      <TransactionTable queue={trans} />

      <div onClick={handleWarning}></div>
    </div>
  );
}

export default WalletDetail;
