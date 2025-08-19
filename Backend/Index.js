const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_DB;

const app = express();


// Connect to MongoDB first
mongoose.connect(uri)
  .then(() => {
    console.log("===================");
    console.log("MongoDB Connected ✅");
   

    // Start server only after DB connection
    app.listen(PORT, () => {
    
      console.log("----App Started----");
    
      console.log("===================");
    });
  })
  .catch((err) => {
    console.error("MongoDB Connection Error ❌", err);
  });
