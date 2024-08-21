// const express = require('express');
// const app = express();
// const port = 5000;

// app.get('/api', (req, res) => {
//   res.json({ message: 'Hello from the back-end!' });
// });

// app.listen(port, () => {
//   console.log(`Server running on http://localhost:${port}`);
// });





//app.js
// const http = require('http')
// const port = 8080

// // Create a server object:
// const server = http.createServer(function (req, res) {

//     // Write a response to the client
//     res.write('Hello World')

//     // End the response 
//     res.end()
// })

// // Set up our server so it will listen on the port
// server.listen(port, function (error) {

//     // Checking any error occur while listening on port
//     if (error) {
//         console.log('Something went wrong', error);
//     }
//     // Else sent message of listening
//     else {
//                 console.log('Server is listening on port' + port);
//             }
//         })

const express = require('express');
const cors = require('cors');  // Import the cors middleware
const app = express();
const port = 5000;


app.use(cors());

// Route for the root path
app.get('/', (req, res) => {
  res.send('Welcome to the backend!');
});

// Existing route for /api
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the back-end!' });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
