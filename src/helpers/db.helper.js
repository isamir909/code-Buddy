const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config()

module.exports.connect = () => mongoose.connect(process.env.DB_URL).then(()=>{console.log("MongoDb connected");});
module.exports.disconnect = () => mongoose.disconnect();