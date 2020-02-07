const express = require('express');
const mongoose = require('mongoose');
const cors = require ('cors');

const app = express();
const PORT = process.env.PORT || 6660;
const URL_MONGO = "mongodb+srv://vero:cintaroja123@cluster0-0xmbl.mongodb.net/test?retryWrites=true&w=majority";

const movies = require('./controllers/movies.js');

app.use(express.json());
app.use (cors());
app.use('/movies', movies);

mongoose.connect(URL_MONGO,{ useNewUrlParser: true, useUnifiedTopology: true }, (error) => {
    if(!error){
        console.log('Connected to MongoDB');
    } else {
        console.log(error);
    }
});

app.listen(PORT, () => {
    console.log(`Server initialized on PORT ${PORT}`);
});




