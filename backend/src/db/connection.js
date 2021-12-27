const mongoose = require('mongoose')
require('dotenv').config()

const connection = async () => {
    await mongoose.connect(process.env.MONGODB_URL)
        .then(() => console.log("Database connected"))
        .catch((error) => console.log("Error: ", error))
}
connection()