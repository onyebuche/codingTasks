// The components for the Bank App
// Importing the components including react and the App CSS

import React, { useState } from 'react';
import './BankApp.css'; // Import CSS file
import DepositWithdrawForm from './BankComponents_js/DepositWithdrawForm';
import InterestChargeButtons from './BankComponents_js/InterestChargeButtons';
import BankBalanceDisplay from './BankComponents_js/BankBalanceDisplay';

function App() {
  // State for current bank balance
  const [balance, setBalance] = useState(0);

  // Handler for deposit action
  const handleDeposit = (amount) => {
    setBalance(balance + amount);
  };

  // Handler for withdraw action
  const handleWithdraw = (amount) => {
    if (balance >= amount) {
      setBalance(balance - amount);
    } else {
      alert("Insufficient funds!");
    }
  };

  // Handler for adding interest
  const handleInterest = (rate) => {
    const interestAmount = balance * (rate / 100);
    setBalance(balance + interestAmount);
  };

  // Handler for charging fees
  const handleChargeFees = (fee) => {
    const feeAmount = typeof fee === 'number' ? fee : balance * (fee / 100);
    setBalance(balance - feeAmount);
  };

  return (
    <div className="App">
      <h1>Banking App</h1>
      <BankBalanceDisplay balance={balance} />
      <DepositWithdrawForm onDeposit={handleDeposit} onWithdraw={handleWithdraw} />
      <InterestChargeButtons onInterest={handleInterest} onChargeFees={handleChargeFees} />
    </div>
  );
}

export default App;
