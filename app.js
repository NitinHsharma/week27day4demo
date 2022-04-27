const express = require('express');
const data = require('./data.js');

const app = express();
app.use(express.json());

app.get('/books', async (req, res) => {
    return res.send(data);
});

app.get('/book', async (req, res) => {

    const { id } = req.query;
    
    const book = data.filter(book => book.id == id);
    return res.send(book);
});


app.listen(process.env.PORT || 3000, function() {
    console.log('server is running');
})