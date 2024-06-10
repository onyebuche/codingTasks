// Interest Charge script

import React, { useState } from 'react';

function InterestChargeButtons({ onInterest, onChargeFees }) {
  // State for interest rate and bank fees
  const [rate, setRate] = useState('');
  const [fee, setFee] = useState('');

  // Handler for adding interest
  const handleInterest = () => {
    if (rate !== '') {
      onInterest(parseFloat(rate));
      setRate('');
    }
  };

  // Handler for charging fees
  const handleChargeFees = () => {
    if (fee !== '') {
      onChargeFees(parseFloat(fee));
      setFee('');
    }
  };

  return (
    <div>
      {/* Input field for interest rate */}
      <input type="number" value={rate} placeholder="Interest Rate" onChange={(e) => setRate(e.target.value)} />
      {/* Button for adding interest */}
      <button onClick={handleInterest}>Add Interest</button>
      {/* Input field for bank fees */}
      <input type="number" value={fee} placeholder="Bank Fees" onChange={(e) => setFee(e.target.value)} />
      {/* Button for charging fees */}
      <button onClick={handleChargeFees}>Charge Fees</button>
    </div>
  );
}

export default InterestChargeButtons;
