// Deposit and withdrawal script

import React, { useState } from 'react';

function DepositWithdrawForm({ onDeposit, onWithdraw }) {
  // State for input amount
  const [amount, setAmount] = useState('');

  // Handler for deposit action
  const handleDeposit = () => {
    if (amount !== '') {
      onDeposit(parseFloat(amount));
      setAmount('');
    }
  };

  // Handler for withdraw action
  const handleWithdraw = () => {
    if (amount !== '') {
      onWithdraw(parseFloat(amount));
      setAmount('');
    }
  };

  return (
    <div>
      {/* Input field for amount */}
      <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
      {/* Button for deposit action */}
      <button onClick={handleDeposit}>Deposit</button>
      {/* Button for withdraw action */}
      <button onClick={handleWithdraw}>Withdraw</button>
    </div>
  );
}

export default DepositWithdrawForm;
