const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { response } = require("express");
const stripe = require("stripe")(
  "sk_test_51JGyhASHXKeYu05XJ6htqpxBnTmX3veVvabB3dhk1i6QjbzCVtdm3RDRDFQMScl8GQjikte14nPZF4FGmfg8ap7Z00lqrYAf0U"
);

// - API

// - app config
const app = express();

//- Middleware
app.use(cors({ origin: true }));
app.use(express.json());

//- api routes
app.get("/", (request, response) => response.status(200).send("Hello world"));
//- listen command

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment Request Received !! for this amount", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, //subunits
    currency: "inr",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

exports.api = functions.https.onRequest(app);

//http://localhost:5001/challenge-1db10/us-central1/api
