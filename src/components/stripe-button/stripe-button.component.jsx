import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publisableKey = 'pk_test_Cf5581EiCLlORKs1hhKK0WzC';

    const onToken = token =>{
        console.log(token);
        alert ('Payment Sucess')
    }

    return (
        <StripeCheckout
            label = 'Pay Now'
            name = 'Crown Clothing Ltd'
            billingAddress
            shippingAddress
            image = 'https://svgshare.com/i/CUz.svg'
            description = {`Your total is $${price}`}
            amount = {priceForStripe}
            panelLabel = 'Pay Now'
            token = {onToken}
            stripeKey={publisableKey}
        />
    );
};

export default StripeCheckoutButton;