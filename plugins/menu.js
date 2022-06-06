const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let fs = require('fs')
let path = require('path')
let { MessageType } = require('@adiwajshing/baileys')
let PhoneNumber = require('awesome-phonenumber')
let levelling = require('../lib/levelling')
let handler = async (m, { conn, usedPrefix }) => {
let user = global.db.data.users[m.sender]
let pp = './Menu2.jpg'
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
try {
} catch (e) {
} finally {
let { name, limit, exp, banned, lastclaim, registered, regTime, age, level } = global.db.data.users[m.sender]
let { min, xp, max } = levelling.xpRange(level, global.multiplier)
let username = conn.getName(who)
let menu = `
╭══〘 ✯✯✯✯✯✯✯✯ 〙═╮
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
║➤ *✨𝗛ola, ${username}!!*
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
╰══╡✯✯✯✯✯✯✯✯╞══╯
┏━━━━━━━━━━━━━┓
┃ *< COMANDOS >*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ඬ⃟💫 _a_
┣ ඬ⃟💫 _${usedPrefix}cat_
┣ ඬ⃟💫 _${usedPrefix}dog_
┣ ඬ⃟💫 _${usedPrefix}logos_
┣ ඬ⃟💫 _${usedPrefix}runtime_
┣ ඬ⃟💫 _${usedPrefix}tiktok *link / url*_
┣ ඬ⃟💫 _${usedPrefix}sticker *link / url*_
┣ ඬ⃟💫 _${usedPrefix}tts *lenguaje texto*_
┣ ඬ⃟💫 _${usedPrefix}attp *texto*_
┣ ඬ⃟💫 _${usedPrefix}imagen *texto*_
┣ ඬ⃟💫 _${usedPrefix}ytmp3 *link / url*_
┣ ඬ⃟💫 _${usedPrefix}ytmp4 *link / url*_
┣ ඬ⃟💫 _${usedPrefix}toimg *responde a un sticker*_
┣ ඬ⃟💫 _${usedPrefix}sticker *responde a una imagen*_
┣ ඬ⃟💫 _${usedPrefix}play *nombre de la canción*_
┣ ඬ⃟💫 _${usedPrefix}play2 *nombre de la canción*_
┣ ඬ⃟💫 _${usedPrefix}earrape *responde a una nv*_
┣ ඬ⃟💫 _${usedPrefix}smooth *responde a una nv*_
┣ ඬ⃟💫 _${usedPrefix}fat *responde a una nota nv*_
┣ ඬ⃟💫 _${usedPrefix}nightcore *responde a una nv*_
┣ ඬ⃟💫 _${usedPrefix}reverse *responde a una nv*_
┣ ඬ⃟💫 _${usedPrefix}bass *responde a una nv*_
┣ ඬ⃟💫 _${usedPrefix}blown *responde a una nv*_
┣ ඬ⃟💫 _${usedPrefix}deep *responde a una nv*_
┣ ඬ⃟💫 _${usedPrefix}fast *responde a una nv*_
┣ ඬ⃟💫 _${usedPrefix}robot *responde a una nv*_
┣ ඬ⃟💫 _${usedPrefix}slow *responde a una nv*_
┣ ඬ⃟💫 _${usedPrefix}tupai *responde a una nv*_
┣ ඬ⃟💫 _${usedPrefix}vibra *responde a una nv*_
┗━━━━━━━━━━━━━┛
`.trim()
let mentionedJid = [who]
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
hydratedContentText: menu,
locationMessage: { 
jpegThumbnail: fs.readFileSync('./Menu2.jpg') },
hydratedFooterText: 'SIMPLE - BOT',
hydratedButtons: [{
urlButton: {
displayText: 'GITHUB',
url: 'https://github.com/BrunoSobrino'
}},
{
urlButton: {
displayText: 'CREADOR',
url: 'https://wa.me/5219992095479'    
}},
{
quickReplyButton: {
displayText: null,
id: null,
}},
{
quickReplyButton: {
displayText: null,
id: null,
}},
{
quickReplyButton: {
displayText: null,
id: null,
}}]}}
}), { userJid: m.sender, quoted: m });
return await conn.relayMessage(
m.chat,
template.message,
{ messageId: template.key.id })    
    
}}
handler.help = ['menu', 'help', '?']
handler.tags = ['general']
handler.command = /^(info|speed|estado|menú|menu|help|\?)$/i
handler.fail = null
module.exports = handler
