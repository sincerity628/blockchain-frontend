import React, { useState } from 'react';
import BlockCard from '../../components/block-card/BlockCard';
import TransactionTable from '../../components/transaction-table/TransactionTable';
import './home.css';
const { initChain } = require('../../store/store');

const Home = () => {
  const [chain, setChain] = useState(initChain);
  const [blocks, setBlocks] = useState(chain.chain);
  const [transaction, setTransaction] = useState(blocks[0].transaction);
  const [clickedIndex, setClickedIndex] = useState(0);

  const handleClick = (index) => {
    setClickedIndex(index);
    setTransaction(blocks[index].transaction);
  }

  const handleWarning = () => {
    setChain(initChain);
    setBlocks(chain.chain);
  };

  return (
    <div className="home container mt-2">
      <h1>Blocks on chain</h1>
      <p className="text-dark">每张卡片代表了区块链上的一个区块，点击对应的区块查看其包含的相应交易信息。</p>

      <div className="container px-0 card-container">
        { blocks.map((block, index) => {
          return (
            <div onClick={() => { handleClick(index) }}
              key={block.hash}
              className={index === clickedIndex? 'click-card clicked-card' : 'click-card'}
            >
              <BlockCard block={block} index={index} />
            </div>
          );
        }) }
      </div>
      <div className="container mt-3 transactions">
        <h1>Transactions inside block{clickedIndex + 1}</h1>
        { transaction.length? (
          <TransactionTable queue={transaction} />
        ) : (
          <p>此区块不含交易信息噢！</p>
        ) }

      </div>
      <div onClick={handleWarning}></div>
    </div>
  );
}

export default Home;
