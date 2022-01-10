const express = require('express')
const cors = require('cors');
const userRoutes = require('./routes/users.route');
const serviceRoutes = require('./routes/services.route');
const appointmentRoutes = require('./routes/appointments.route');
require('dotenv').config()
require('./db/connection');

const port = process.env.PORT
const app = express()
app.use(cors());
app.use(express.json())
app.use('/api', userRoutes);
app.use('/api', serviceRoutes);
app.use('/api', appointmentRoutes);

app.get('/', (req, res) => {
    res.send("Home")
})

app.listen(port, () => console.log("Server on port",port));