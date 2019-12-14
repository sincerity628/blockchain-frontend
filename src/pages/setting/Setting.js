import React, { useState, useEffect } from 'react';
const { initChain } = require('../../store/store');

const Setting = () => {
  const [success, setSuccess] = useState(false);
  const [chain, setChain] = useState(initChain);
  const [difficulty, setDifficulty] = useState(chain.difficulty);
  const [award, setAward] = useState(chain.miningAward);
  const [setting, setSetting] = useState({
    difficulty: difficulty,
    award: award
  });

  useEffect(() => {

    setChain(initChain);
    setDifficulty(chain.difficulty);
    setAward(chain.miningAward);

  }, [difficulty, award]);

  const handleChange = (e) => {
    setSetting({
      ...setting,
      [e.target.id]: Number(e.target.value)
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    chain.setChain(setting.difficulty, setting.award);

    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
    }, 2000);
  }

  return (
    <div className="setting">
      {success? (
        <div className="alert alert-success">
          <div className="container">设置成功</div>
        </div>
      ) : null}
      <div className=" container mt-2">
        <h1>Setting</h1>
        <p className="text-dark">设置</p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="difficulty">Difficulty</label>
            <div className="input-group">
              <input id="difficulty" value={setting.difficulty} onChange={handleChange} className="form-control" type="number" />
              <div className="input-group-append">
                <button className="btn btn-outline-secondary">确定</button>
              </div>
            </div>

            <br />

            <label htmlFor="award" className="mt-3">Award</label>
            <div className="input-group">
              <input id="award" value={setting.award} className="form-control" onChange={handleChange} type="number" />
              <div className="input-group-append">
                <button className="btn btn-outline-secondary">确定</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Setting;
