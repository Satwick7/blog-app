const express = require('express');
const mongoose = require('mongoose');
const app = express();

const mongoURI = process.env('MONGO_URI');

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('database is connected'))
.catch(err => console.error('Error connecting to database:', err));

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine', 'ejs');

// Routes
app.use(require('./routes/index'));
app.use(require('./routes/compose'));
app.use(require('./routes/blog'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
