import React, { useState } from 'react';
import BlockCard from '../../components/block-card/BlockCard';
import './home.css';
const { initChain } = require('../../store/store');

const Home = () => {
  const [chain, setChain] = useState(initChain);
  const [blocks, setBlocks] = useState(chain.chain);

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
            <BlockCard block={block} index={index} key={block.hash} />
          );
        }) }
      </div>
      <div onClick={handleWarning}></div>
    </div>
  );
}

export default Home;
