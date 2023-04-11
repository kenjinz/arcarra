import { Button } from '@mui/material';
import React from 'react';
import './PaymentMethod.scss';
export function PaymentMethod() {
  return (
    <>
      <div className="paymentTitle font-bold mt-10">Choose a way to pay</div>
      <div className="paymentMethod">
        <Button style={{ border: '2px solid #262626' }}>Cash</Button>
        <Button style={{ marginLeft: '20px', background: '#EDF2F7' }}>
          Credit card
        </Button>
        <Button style={{ marginTop: '20px', background: '#EDF2F7' }}>
          eWallet/ <br />
          Virtual bank
        </Button>
      </div>
    </>
  );
}
