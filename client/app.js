import express from 'express';
import path from 'path';
const app = express();

// Set EJS as the view engine

// Serve static files
app.use(express.static('public'));
app.set('view engine', 'ejs');


// Define routes
app.get('/', (req, res) => {
    res.render('index.ejs');
});
// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Client server is running on port ${PORT}`);
});
