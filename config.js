const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=qMtzGC6L#SRS61HNgzmA6Rcl_8uURWt9geswTfCcuUKRWhvlYeSw",
MONGODB: process.env.MONGODB || "mongodb+srv://hanifkamran020:<db_password>@cluster0.bw4yw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",//enter mongo db url
};
