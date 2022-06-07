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
┣ ඬ⃟💫 _${usedPrefix}google *[texto]*_
┣ ඬ⃟💫 _${usedPrefix}imagen *[texto]*_
┣ ඬ⃟💫 _${usedPrefix}play *[texto]*_
┣ ඬ⃟💫 _${usedPrefix}play2 *[texto]*_
┣ ඬ⃟💫 _${usedPrefix}ytmp3 *[url]*_
┣ ඬ⃟💫 _${usedPrefix}ytmp4 *[url]*_
┣ ඬ⃟💫 _${usedPrefix}tts *[lenguaje] [texto]*_
┣ ඬ⃟💫 _${usedPrefix}toimg *[sticker]*_
┣ ඬ⃟💫 _${usedPrefix}sticker *[imagen]*_
┣ ඬ⃟💫 _${usedPrefix}tourl *[imagen]*_
┣ ඬ⃟💫 _${usedPrefix}tourl *[video]*_
┣ ඬ⃟💫 _${usedPrefix}tourl *[audio]*_
┣ ඬ⃟💫 _${usedPrefix}fat *[nota de voz]*_
┣ ඬ⃟💫 _${usedPrefix}bass *[nota de voz]*_
┣ ඬ⃟💫 _${usedPrefix}blown *[nota de voz]*_
┣ ඬ⃟💫 _${usedPrefix}deep *[nota de voz]*_
┣ ඬ⃟💫 _${usedPrefix}fast *[nota de voz]*_
┣ ඬ⃟💫 _${usedPrefix}robot *[nota de voz]*_
┣ ඬ⃟💫 _${usedPrefix}slow *[nota de voz]*_
┣ ඬ⃟💫 _${usedPrefix}tupai *[nota de voz]*_
┣ ඬ⃟💫 _${usedPrefix}vibra *[nota de voz]*_
┣ ඬ⃟💫 _${usedPrefix}nightcore *[nota de voz]*_
┣ ඬ⃟💫 _${usedPrefix}earrape *[nota de voz]*_
┣ ඬ⃟💫 _${usedPrefix}reverse *[nota de voz]*_
┣ ඬ⃟💫 _${usedPrefix}smooth *[nota de voz]*_
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┃ *< OWNER >*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ඬ⃟💫 _${usedPrefix}update_
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
displayText: '𝙶𝙸𝚃𝙷𝚄𝙱',
url: 'https://github.com/BrunoSobrino/SimpleBot'
}},
{
urlButton: {
displayText: '𝙲𝚁𝙴𝙰𝙳𝙾𝚁',
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
handler.command = /^(menucompleto|comandos|allmenu|info|speed|estado|menú|menu|help|\?)$/i
handler.fail = null
module.exports = handler
