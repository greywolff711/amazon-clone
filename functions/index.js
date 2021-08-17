const functions = require("firebase-functions");
const express = require("express");
const cors=require("cors");
const stripe=require("stripe")('sk_test_51JL0QiSE5jdVJ51OSrU5D0YROAmL84Tegvy7BZ2B8nEIhmCxsjWDaxQ9Sjt6xnJX6R1IBGOogBfAjPxuuIToVAmg00RBI21hZP');
//API
//App config
const app=express();
//Middleware
app.use(cors({origin:true}));
app.use(express.json());
//API Routes
app.get('/',(request,response)=>response.status(200).send('hello world'));
app.post("/payments/create", async (request, response) => {
    const total = request.query.total;
    console.log('payment request received ',total);
    const paymentIntent=await stripe.paymentIntents.create({
        amount: total,
        currency:"inr",
    });
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
});
//Listen Command
exports.api=functions.https.onRequest(app);
//http://localhost:5001/challenge-3ee2c/us-central1/api