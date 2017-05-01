const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config/database');

// Connect to database
mongoose.connect(config.database);

// On connection
mongoose.connection.on('connected',()=>{
    console.log('Connected to database'+config.database);
});

// On error
mongoose.connection.on('error',(err) => {
    console.log('Database error: '+err);
});

const app = express();

const estudantes = require('./routes/estudantes');
const notas = require('./routes/notas');

const PORT = process.env.PORT || 3000;

// cors
app.use(cors());

// static folder
app.use(express.static(path.join(__dirname,'public')));

// Body parser MW
app.use(bodyParser.json());

app.use('/api',estudantes);
app.use('/api',notas);

// app.use('/',(req,res) => {
//     res.send('It works!');
// })

app.listen(PORT, () => {
    console.log("Server started on port "+PORT);
});
