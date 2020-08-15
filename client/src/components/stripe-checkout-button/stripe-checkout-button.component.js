import React from 'react';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51HEOLxHKAT1aE5rklTbnEwqEvzshYcrcJ9Pxu1uYaUM3wCqxcMuTMew9TsZShNIM1C426IydTU7yh9blVTBVmZks00yAJbrBC7';

  const onToken = (token) => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((res) => {
        alert('Payment Successful.');
      })
      .catch((err) => {
        console.log('payment error: ', JSON.parse(err));
        alert('There was an issue with your payment.');
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Crown Clothing"
      billingAddress
      ShippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is : $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
