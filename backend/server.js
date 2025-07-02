const express = require('express');
const app = express();

// Render ले दिने PORT मा bind गर्नुहोस्
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Aditya Ayurvedic Backend is running!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
// Express server with MongoDB Atlas and Nodemailer for email alerts