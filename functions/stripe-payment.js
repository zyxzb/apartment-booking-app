// domain/.netlify/functions/create-payment-intent
require('dotenv').config();

const stripe = require('stripe')(process.env.REACT_APP_SECRET_KEY);

exports.handler = async function (event, context) {
  console.log(event);
  if (event.body) {
    const { total_amount } = JSON.parse(event.body);
    console.log(total_amount);

    const calculateOrderAmount = () => {
      let newAmount = +(total_amount + '00');
      console.log(newAmount);
      return newAmount;
    };

    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: calculateOrderAmount(),
        currency: 'pln',
      });
      return {
        statusCode: 200,
        body: JSON.stringify({
          clientSecret: paymentIntent.client_secret,
        }),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({
          msg: error.message,
        }),
      };
    }
  }

  return {
    statusCode: 200,
    body: 'Create Payment Intent',
  };
};
