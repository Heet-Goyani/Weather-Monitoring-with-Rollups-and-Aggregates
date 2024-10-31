const mongoose = require("mongoose");

const ConnectDB = async () => {

    try {
        const DB_URL = process.env.DB_url+process.env.DB_name;
        console.log("database URL", DB_URL);
        const connectionInstance = await mongoose.connect(DB_URL);
        console.log(`\n Database Connected  !! DB HOST :  ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("Database Connection Error", error);
        process.exit(1);
    }
}

module.exports = ConnectDB;