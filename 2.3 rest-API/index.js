import express from "express";
// const express = require('express')
import { createCustomer, getAllCustomer, getCustomer } from "./model.js";

const app = express();
app.use(express.json()); 

// CREATE CUSTOMER
app.post("/customer", (req, res) => {
    const {name, email, balance} = req.body;

    if (!name || !email || !balance) {
        throw new Error("uncompleted data input");
    }

    const detail = { name, email, balance };
    createCustomer(detail);

    res.status(200).json({ message: "create customer succesfully" }, detail)
    try {
        
    } catch (error) {
        res.status(500).json({ message: "server error", error: error });
    }
})

app.post("/transfer", (req, res) => {
    try {
        const {sourceAccount, destinationAccount, amount} = req.body;

        if(!sourceAccount || !destinationAccount || !amount) {
            throw new Error("uncompleted data input");
        }

        const detail = {sourceAccount, destinationAccount, amount};

        transfer(detail);

        res.status(200).json({message : "transfer succesfully"}, detail)
    } catch (error) {
        res.status(500).json({message : "server error", error : error});
    }
})

// get data customer
app.get("/customer", (req, res) => {
    const customer = getAllCustomer();
    res.status(200).json(customer);
})


// listen express
const port = 3000;
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})