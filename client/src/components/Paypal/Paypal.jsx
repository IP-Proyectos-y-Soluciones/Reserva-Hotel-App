import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { useNavigate } from 'react-router-dom';

const PayPalButton = window.paypal.Buttons.driver('react', { React, ReactDOM });

export default function PaypalPayment() {
  const [price, setPrice] = useState(0);
  const [opcion, setOpcion] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    setPrice(10.0);
  }, []);

  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            currency_code: 'USD',
            value: price,
          },
        },
      ],
      description: 'Habitacion Kebabs',
    });
  };

  const onApprove = (data, actions) => {
    return actions.order.capture(handlePay());
  };

  function handlePay() {
    console.log('el pago ha sido exitoso');
    navigate('/success');
  }
  const handleChange = (e) => {
    setPrice(e.target.value);
  };
  const handleCambio = (e) => {
    setOpcion(e.target.value);
  };

  return (
    <center>
      <div>
        <PayPalButton
          createOrder={(data, actions) => createOrder(data, actions)}
          onApprove={(data, actions) => onApprove(data, actions)}
        />
      </div>
    </center>
  );
}
