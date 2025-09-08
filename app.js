const express = require('express');
const app = express();
const tourRouter = require('./routes/tourRouter');
const userRouter = require('./routes/userRouter');
const morgan = require('morgan');


app.use(morgan('tiny'));

// Middleware to parse JSON
app.use(express.json());

// Use the carRouter for all /cars routes
app.use('/tours', tourRouter);

// Use the userRouter for all /users routes
app.use('/users', userRouter);

const port = 4000;
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
