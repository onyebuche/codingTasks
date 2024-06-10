// Bank balance display script

import React from 'react';

function BankBalanceDisplay({ balance }) {
  return (
    <div>
      {/* Display current bank balance */}
      <h2>Bank Balance: £{balance.toFixed(2)}</h2>
    </div>
  );
}

export default BankBalanceDisplay;
