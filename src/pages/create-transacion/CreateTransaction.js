import React, { useState } from 'react';
import './create-transaction.css';

const initTrans = {
  from: '04c1a5b2e99d166855a46f98fc92045e988b3a2f5b3bfd8fe9ea67e8575f54ead8d83de22813df14d6eaf05c6859a52c7a71101f4875273682f091245f792e5176',
  to: null,
  amount: null,
  timestamp: Date.now()
};

const initError = {
  isError: false,
  errorText: 'warning.'
}

const CreateTransaction = () => {
  const [trans, setTrans] = useState(initTrans);
  const [error, setError] = useState(initError);
  const [btnLoading, setBtnLoading] = useState(false);

  const handleChange = e => {
    setError(initError);
    setTrans({
      ...trans,
      [e.target.id]: e.target.value,
    });
    console.log(trans);
  }

  const handleSubmit = e => {
    e.preventDefault();

    setBtnLoading(true);

    console.log(trans);
    setTrans({
      ...trans,
      timeStamp: Date.now()
    });

    if(!trans.to || !trans.amount) {

      setTimeout(() => {
        setBtnLoading(false);

        setError({
          ...error,
          isError: true,
          errorText: '还有交易信息没有填写完整噢！'
        });
      }, 3000);

      return;
    }

    if(trans.amount < 0) {

      setTimeout(() => {
        setBtnLoading(false);

        setError({
          ...error,
          isError: true,
          errorText: '交易数量必须大于0噢！'
        });

        setTrans({
          ...trans,
          amount: null
        });
      }, 3000);

      return;
    }
    // add the tansaction to the queue -- function
    setBtnLoading(false);

  }

  return (
    <div className="create-transaction">

      { error.isError? (
        <div className="alert alert-danger">
          <div className="container">
            { error.errorText }
          </div>
        </div>
      ) : null }

      <div className="container mt-2">
        <h1>Create Transaction</h1>
        <p className="text-dark">给某人转点钱</p>

        <br />

        <form onSubmit={handleSubmit}>
          <div className="form-group">

            <label htmlFor="from">From</label>
            <input className="form-control" placeholder="04c1a5b2e99d166855a46f98fc92045e988b3a2f5b3bfd8fe9ea67e8575f54ead8d83de22813df14d6eaf05c6859a52c7a71101f4875273682f091245f792e5176" disabled />
            <small className="text-secondary">这是你的钱包地址，你不可以修改它，因为你只能花自己的钱。</small>
            <br />
            <label htmlFor="to" className="mt-3">To</label>
            <input id="to" value={trans.to} onChange={handleChange} className="form-control" />
            <small className="text-secondary">这是你想转钱对象的地址（由公钥产生）当然，也可以随机填写一些字符串。</small>
            <br />
            <label htmlFor="amount" className="mt-3">Amount</label>
            <input id="amount" value={trans.amount} onChange={handleChange} className="form-control" />
            <small className="text-secondary">填入交易数量</small>

          </div>
          <button className="btn btn-primary mt-3">
            { btnLoading? (
              <span className="spinner-grow spinner-grow-sm mr-2"></span>
            ) : null }
            <strong>Sign & create transaction</strong>
          </button>
        </form>
      </div>

    </div>
  );
}

export default CreateTransaction;
