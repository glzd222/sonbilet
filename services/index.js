const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bodyParser = require("body-parser");
const cors = require("cors");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(cors());

const DB_URL =
  "mongodb+srv://elmeddin:elis123@cluster0.upfiv5k.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const username = "elmeddin";
const userpassword = "elis123";

const ProductSchema = new Schema({
  imageUrl: { type: String, require: true },
  title: { type: String, require: true },
  price: { type: Number, require: true },
});

const ProductsModel = mongoose.model("products", ProductSchema);

app.get("/api/products", async (req, res) => {
  try {
    const products = await ProductsModel.find({});

    if (products.length > 0) {
      res.status(200).send({
        data: products,
      });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.get("/api/products/:id", async (req, res) => {
  const { id } = req.params;

  try {
   const getidproducts = await ProductsModel.findById(id)

   res.send({
    data:getidproducts
   })
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.delete("/api/products/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const getdeletedproducts = await ProductsModel.findByIdAndDelete(id);

    res.status(200).send({
      message: "deleted succesfully",
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});
app.post("/api/products", async (req, res) => {
  try {
    const newproduct = new ProductsModel({...req.body });
    await newproduct.save();

    res.status(201).send({ message: "created succesfull ", data: newproduct });
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
});

mongoose.connect(DB_URL).then(() => {
  console.log("Connected!");
  app.listen(port, () => {
    console.log(`Link: http://localhost:${port}`);
  });
});
