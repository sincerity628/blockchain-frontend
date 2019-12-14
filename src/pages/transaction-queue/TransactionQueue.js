import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import TransactionTable from '../../components/transaction-table/TransactionTable';
import './transaction-queue.css';
const { initChain } = require('../../store/store');

const initSuccess = {
  isSuccess: false,
  successText: '挖矿成功！'
};

const initMining = {
  isMining: false,
  miningText: '努力挖矿中...'
}

const TransactionQueue = () => {
  const history = useHistory();
  const [chain, setChain] = useState(initChain);
  const [queue, setQueue] = useState(chain.transactionQueue);
  const [btnLoading, setBtnLoading] = useState(false);
  const [mining, setMining] = useState(initMining);
  const [success, setSuccess] = useState(initSuccess);

  const handleClick = () => {
    setBtnLoading(true);
    setMining({
      ...mining,
      isMining: true
    });

    chain.mineTheTransactionQueue(queue[0].from);

    setBtnLoading(false);
    setMining(initMining);
    setSuccess({
      ...success,
      isSuccess: true
    });

    setTimeout(() => {
      history.push('/');
      setSuccess(initSuccess);

    }, 2000);
  };

  const handleWarning = () => {
    setChain(initChain);
    setQueue(chain.transactionQueue);
  };

  return (
  <div>
    { mining.isMining? (
      <div className="alert alert-primary queue-alert">
        <div className="container">
          { mining.miningText }
        </div>
      </div>
    ) : null }
    { success.isSuccess? (
      <div className="alert alert-success queue-alert">
        <div className="container">
          { success.successText }
        </div>
      </div>
    ) : null }

    <div className="transaction-queue container mt-2">
      <h1>Transaction Queue</h1>
      <p className="text-dark">这个队列存放的交易记录将会出现在下一个区块中，若要封装此区块，需要开始挖矿过程。</p>
      <br />
      { queue.length? (
        <div>
        <div className="card queue-card">
          <TransactionTable queue={queue} />
        </div>
        <button className="btn btn-primary mt-4" onClick={handleClick}>
          { btnLoading? (
            <span className="spinner-grow spinner-grow-sm mr-2"></span>
          ) : null }
          <strong>Start mining</strong>
        </button>
        </div>
        ) : (
        <div className="alert alert-warning no-alert">
          <p className="text-dark">现在还没有交易记录噢！</p>
        </div>
        ) }
      </div>
      <div onClick={handleWarning}></div>
    </div>
  );
}

export default TransactionQueue;
