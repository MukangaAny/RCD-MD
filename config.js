//#ENJOY
/**
**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "Sri lanka .";
global.mongodb = process.env.MONGODB_URI || "mongodb://mongo:bREwFKCVLDvzfqqsqVNXloIYCiiLBbuR@monorail.proxy.rlwy.net:38244";
global.allowJids = process.env.ALLOW_JID || "94789958225@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://rcdnew:DUjQ85jkrvaF5HmsoyjBgyoSYhpsHIjN@dpg-cqamj22ju9rs739asi6g-a.oregon-postgres.render.com/rcd";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "srilank/ampara";
global.github = process.env.GITHUB || "https://github.com/DEXTER-BOTS/RCD-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "94789958225";
global.sudo = process.env.SUDO || "94789958225,94757660788,94770730717,94785274495,94753574803";
global.owner = process.env.OWNER_NUMBER || "263 78 539 6010";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "true";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "";
global.scan = "";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUdqZWt6NWU3UHNSUXlYcTV2YldNVXRwY0Zjd1hUTVZ3aFpLcUp6Vllsbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZElaYkhXSE5mWjJqNkxDdXhnNmhIb3lHWktzTkxjbDdZeE5Sd1IwZDN5TT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPQlVUZmF5RHA5RHdzS3MxbTA3bUlibnhMRDdmZ0NHMENtNW9NNnU2QjNFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0Qlg0bVBRaFhWNUtuZFNIVENtS09OcXJ2cThmWmVvV0hTNmswZk1YY21NPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitERDdLaCs2OE9nd21vMXcrbXAxbHpyVTUxNGcxSzBjZWxQU09GK1ZYMTQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InE5NVdkbVNkemdKWXdPZVlGekFBUHpaUDZ2N1ZYd0VEcVcvR09IS3JaR009In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUpqeHFvWWs0YnVLTnozMU5sajhsRkFTY1piVEJqMjd1STdLb2ZnZkFrdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidkxFd1dVTHVuV3RtZERxV0JWRFNXYnBQM3FNMXNIYXlUallsb2lraEZ5Zz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im05U3NnT3dYTXJuYmI3WkI1czM0UlZ0V21Bc3R2cXVzU0FycWZMSGtpNXVZYzRVVUZmQ0JkWkpIaFdGdXVvNFErMC93NEpreEpIc1dHcnRCQW05akN3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTkwLCJhZHZTZWNyZXRLZXkiOiJDcHdHRHQ3SkwrWUJhZ2FCM3h2VnpNOWJEV1o4V01Cem8yZW1Icy9EVmpBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJza2dxdVI2MlRxMkViVHNaUFZkNW13IiwicGhvbmVJZCI6ImMwMGJjNWRhLTg1ZmEtNDQ0OS1iODQzLWNlMWZjN2VlZTY3MyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJYNS9KeFJXN3A1cTFtcW4ybzZTT0UrbVV1aDQ9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEFlMVoxbVBNZHpFOTErTVluWW90K0lBTUFrPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjIyREw4NUI0IiwibWUiOnsiaWQiOiIyNjM3ODUzOTYwMTA6MzhAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiREogREVMQk9ZIEFOSUVZIE1JWFRBUEVTIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMS1Vsc3dFRU51THJyVUdHQW9nQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJjSk9VNUh1WFVFeThFODRVSzBrTXFrRUsxdnIyZ25DNXdTVlpNUmhGTG1BPSIsImFjY291bnRTaWduYXR1cmUiOiJzMXpZb3I0NW5Gei9zeTQvTklOTk1hZWE1THZsY3hyaGc0UGtneGx5UlZwdm8zdk00NWN3OGpUWkZqMmVCQ1R6WklnZUZZT0luclBzZWQybWFrNzFEZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiOVl2cjY3TjlKclVscDZodWJQcVVXQnlQZWVGYS9wNnZFVld6a3phdXJ0R1FmTGF6VXZPRXgxNU1ybCtJdmo4SUFiRTFLMkhkczJqMU5PUktsL2RYQ3c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNjM3ODUzOTYwMTA6MzhAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWENUbE9SN2wxQk12QlBPRkN0SkRLcEJDdGI2OW9Kd3VjRWxXVEVZUlM1ZyJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMjUxNjk2OCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFBRUwifQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "Dj Delboy Aniey ",
  author: process.env.PACK_AUTHER || "𝐑𝐂𝐃",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐑𝐂𝐃 𝐌𝐃",
  ownername: process.env.OWNER_NAME || "DJ DELBOY ANIEY MIXTAPES",
  errorChat: process.env.ERROR_CHAT || "94789958225",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
