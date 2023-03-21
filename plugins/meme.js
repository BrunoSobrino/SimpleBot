let hispamemes  = require("hispamemes ")
let handler = async (m, {command, conn}) => {
const url = await hispamemes.meme() 
conn.sendButtonImg(m.chat, url, `_${command}_`.trim(), author, '🔄 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴 🔄', `/${command}`, m)}
handler.command = /^(meme)$/i
module.exports = handler
