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
┣ ඬ⃟💫 _${usedPrefix}tiktok *[url]*_
┣ ඬ⃟💫 _${usedPrefix}sticker *[url]*_
┣ ඬ⃟💫 _${usedPrefix}attp *[texto]*_
┣ ඬ⃟💫 _${usedPrefix}imagen *[texto]*_
┣ ඬ⃟💫 _${usedPrefix}play *[texto]*_
┣ ඬ⃟💫 _${usedPrefix}play2 *[texto]*_
┣ ඬ⃟💫 _${usedPrefix}ytmp3 *[url]*_
┣ ඬ⃟💫 _${usedPrefix}ytmp4 *[url]*_
┣ ඬ⃟💫 _${usedPrefix}tts *[lenguaje] [texto]*_
┣ ඬ⃟💫 _${usedPrefix}toimg *[responder a sticker]*_
┣ ඬ⃟💫 _${usedPrefix}sticker *[responder a imagen]*_
┣ ඬ⃟💫 _${usedPrefix}fat *[responder a nv]*_
┣ ඬ⃟💫 _${usedPrefix}bass *[responder a nv]*_
┣ ඬ⃟💫 _${usedPrefix}blown *[responder a nv]*_
┣ ඬ⃟💫 _${usedPrefix}deep *[responder a nv]*_
┣ ඬ⃟💫 _${usedPrefix}fast *[responder a nv]*_
┣ ඬ⃟💫 _${usedPrefix}robot *[responder a nv]*_
┣ ඬ⃟💫 _${usedPrefix}slow *[responder a nv]*_
┣ ඬ⃟💫 _${usedPrefix}tupai *[responder a nv]*_
┣ ඬ⃟💫 _${usedPrefix}vibra *[responder a nv]*_
┣ ඬ⃟💫 _${usedPrefix}nightcore *[responder a nv]*_
┣ ඬ⃟💫 _${usedPrefix}earrape *[responder a nv]*_
┣ ඬ⃟💫 _${usedPrefix}reverse *[responder a nv]*_
┣ ඬ⃟💫 _${usedPrefix}smooth *[responder a nv]*_
┗━━━━━━━━━━━━━┛
`.trim()
let mentionedJid = [who]
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
hydratedContentText: menu,
locationMessage: { 
jpegThumbnail: fs.readFileSync('./Menu2.jpg') },
hydratedFooterText: '©𝑆𝑖𝑚𝑝𝑙𝑒𝐵𝑜𝑡',
hydratedButtons: [{
urlButton: {
displayText: 'ＧＩＴＨＵＢ',
url: 'https://github.com/BrunoSobrino'
}},
{
urlButton: {
displayText: 'ＣＲＥＡＤＯＲ',
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
