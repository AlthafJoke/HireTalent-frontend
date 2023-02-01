// This is your test secret API key.
const stripe = "sk_test_51MWeTHSDtmD6FFkxokKLXWn02ZnSK25ztrqp1OIf13N6MgCq1pZLCImSx7GTrZH4YXVPFlb5ydwgqZH9qYAypUJo00sFDhJT4c";

// const calculateOrderAmount = (items) => {
//   // Replace this constant with a calculation of the order's amount
//   // Calculate the order total on the server to prevent
//   // people from directly manipulating the amount on the client
//   return 1400;
// };

export default async function handler(req, res) {
  const { items } = req.body;

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 199,
    currency: "eur",
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
};