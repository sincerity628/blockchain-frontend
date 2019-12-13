import React from 'react';
import './transaction-queue.css';
const { transQueue, mineTheTransactionQueue } = require('../../store/store');

const TransactionQueue = () => {

  const handleClick = () => {
    console.log(transQueue[0].from);
    mineTheTransactionQueue(transQueue[0].from);
    console.log('mine success.');

  }

  return (
    <div className="transaction-queue container mt-2">
      <h1>Transaction Queue</h1>
      <p className="text-dark">这个队列存放的交易记录将会出现在下一个区块中，若要封装此区块，需要开始挖矿过程。</p>
      <br />
      { transQueue.length? (
        <div>
        <div className="card queue-card">
          <table className="table">
            <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">From</th>
              <th scope="col">To</th>
              <th scope="col">Amount</th>
              <th scope="col">Timestamp</th>
              <th scope="col">Valid?</th>
            </tr>
            </thead>
            <tbody>
              { transQueue.map((trans, index) => {
                return(
                  <tr key={trans.timestamp}>
                    <th scope="col">{ index }</th>
                    <td className="from-to">
                      { trans.from === null? (
                        <div>
                          null
                          <br />
                          <small className="text-secondary">(system)</small>
                        </div>
                      ) : (
                        <div>
                          { trans.from.substring(0, 14) }
                          { trans.from.length > 14? '...' : null }
                          <br />
                          { trans.from.substring(0, 14) === '04c1a5b2e99d16'? (
                            <small className="text-secondary">(这是你！)</small>
                          ) : null }
                        </div>
                      ) }
                    </td>
                    <td className="from-to">
                      { trans.to.substring(0,14) }
                      { trans.to.length > 14? '...' : null }
                      <br />
                      { trans.to.substring(0, 14) === '04c1a5b2e99d16'? (
                        <small className="text-secondary">(这是你！)</small>
                      ) : null }
                    </td>
                    <td>{ trans.amount }</td>
                    <td>{ trans.timestamp }</td>
                    { trans.isValid()? (
                      <td>✓</td>
                    ) : (
                      <td>✗</td>
                    ) }
                  </tr>
                );
              }) }
            </tbody>
          </table>
        </div>
        <button className="btn btn-primary mt-4" onClick={handleClick}>
          <strong>Start mining</strong>
        </button>
        </div>
        ) : (
        <div className="alert alert-warning queue-alert">
          <p className="text-dark">现在还没有交易记录噢！</p>
        </div>
        ) }
    </div>
  );
}

export default TransactionQueue;
