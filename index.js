const express = require('express');

const app = express();
const port = 3000;

// Define a route
app.get('/', (req, res) => {
res.send('ECS Deployment in AWS with CI/CD Demo !');
});

app.get('/health', (req, res) => {
   res.status(200).send('ECS Demo is healthy');
});

// Start the server
app.listen(port, () => {
console.log(`Server is listening at http://localhost:${port}`);
});
