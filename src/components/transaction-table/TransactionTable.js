import React, { useState } from 'react';

const TransactionTable = ({ queue }) => {

  const [time, setTime] = useState('');

  const timeTrans = (timestamp) => {
    let date = new Date(timestamp);
    let year = (date.getYear() + 1900).toString();
    let month = (date.getMonth() + 1).toString();
    let day = (date.getDate()).toString();
    let hour = (date.getHours()).toString();
    let min = (date.getMinutes()).toString();
    let sec = (date.getSeconds()).toString();
    month = month < 10 ? '0' + month : month;
    day = day < 10 ? '0' + day : day;
    hour = hour < 10 ? '0' + hour : hour;
    sec = sec < 10 ? '0' + sec : sec;
    return year + '-' + month + '-' + day + ' ' + hour + ':' + min + ':' + sec;
  }

  return (
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
        { queue.map((trans, index) => {
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
              <td>
                { trans.timestamp }
                <br />
                <small className="text-secondary">{timeTrans(trans.timestamp)}</small>
              </td>
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
  );
}

export default TransactionTable;
