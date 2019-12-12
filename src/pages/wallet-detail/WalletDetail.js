import React from 'react';

const WalletDetail = (props) => {
  const walletKey = props.match.params.key;
  return (
    <div className="wallet-detail">
      <h3>Wallet Detail -- {walletKey}</h3>
    </div>
  );
}

export default WalletDetail;
