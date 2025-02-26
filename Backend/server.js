const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const noteroutes = require('./routes/noteroutes');
const authroutes = require('./routes/authroutes');
const connectDB = require('./config/db');
const { logRequests, errorHandler, isAuthenticated } = require('./middlewares/auth'); 

// load environment variables
require('dotenv').config();
console.log(process.env.MONGODB_URI); 

// Initialize the app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(logRequests);
app.use(errorHandler);

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/notes',isAuthenticated, noteroutes);
app.use('/api/auth', authroutes);  

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
