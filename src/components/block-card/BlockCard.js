import React from 'react';
import './block-card.css';

const BlockCard = ({ block, index }) => {
  return (
    <div className="block-card card">
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <h5 className="card-title">Block{index + 1}
            { block.prevHash === '0'? (
                <small className="origin-title">(origin block)</small>
            ) : null}
          </h5>

        </li>
        <li className="list-group-item">
          <h6>Hash</h6>
          <small style={{color: "#" + block.hash.substring(1, 7)}}>
            { block.hash.substring(0, 37) + "..." }
          </small>
          <h6 className="mt-2">Hash of previous block</h6>
          <small style={{color: "#" + block.prevHash.substring(1, 7)}} className="pb-2">
            { block.prevHash === '0'? ('0') : (block.prevHash.substring(0, 37) + "...") }
          </small>
        </li>

        <li className="list-group-item">
          <h6>Random</h6>
          <small className="text-muted">{ block.random }</small>
        </li>

        <li className="list-group-item">
          <h6>Timestamp</h6>
          <small className="text-muted">{ block.timestamp }</small>
        </li>

      </ul>
    </div>
  );
}

export default BlockCard;
