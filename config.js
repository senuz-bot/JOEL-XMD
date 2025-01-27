const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "v2AjTJiJ#zPtOqZIKNkP8YxIULGCT2NO4HcxV-tSOXn0DNbtebdE",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || " ",
MODE: process.env.MODE || "public",
AUTO_VOICE: process.env.AUTO_VOICE || "",
AUTO_STICKER: process.env.AUTO_STICKER || "",
AUTO_REPLY: process.env.AUTO_REPLY || "true",
OWNER_IMG: process.env.OWNER_IMG || "https://files.catbox.moe/5a2euh.jpg",
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/sgld88.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "*powerd by zenzu*",
ANTI_LINK: process.env.ANTI_LINK || "true",
ANTI_BAD: process.env.ANTI_BAD || "true",
PREFIX: process.env.PREFIX || ".",
FAKE_RECORDING: process.env.FAKE_RECORDING || "false",
AUTO_REACT: process.env.AUTO_REACT || "",
OWNER_REACT: process.env.OWNER_REACT || "false",
BOT_NAME: process.env.BOT_NAME || "zenzu👽",
STATUS_REPLY: process.env.STATUS_REPLY || "",
OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39", // omdbapi.com
};
