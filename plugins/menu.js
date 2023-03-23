let fs = require('fs')
let handler = async (m, { conn, usedPrefix }) => {
let pp = './Menu2.jpg'
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
let user = global.db.data.users[m.sender]
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let menu = `
╭══〘 ✯✯✯✯✯✯✯✯ 〙═╮
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
║➤ *✨𝗛ola, ${taguser} :D*
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
╰══╡✯✯✯✯✯✯✯✯╞══╯
┏━━━━━━━━━━━━━┓
┃ *< COMANDOS >*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ඬ⃟💫 _a_
┣ ඬ⃟💫 _${usedPrefix}cat_
┣ ඬ⃟💫 _${usedPrefix}dog_
┣ ඬ⃟💫 _${usedPrefix}meme_
┣ ඬ⃟💫 _${usedPrefix}logos_
┣ ඬ⃟💫 _${usedPrefix}runtime_
┣ ඬ⃟💫 _${usedPrefix}infohost_
┣ ඬ⃟💫 _${usedPrefix}on welcome_
┣ ඬ⃟💫 _${usedPrefix}off welcome_
┣ ඬ⃟💫 _${usedPrefix}ig *[url]*_
┣ ඬ⃟💫 _${usedPrefix}mediafire *[url]*_
┣ ඬ⃟💫 _${usedPrefix}tiktok *[url]*_
┣ ඬ⃟💫 _${usedPrefix}sticker *[url]*_
┣ ඬ⃟💫 _${usedPrefix}attp *[texto]*_
┣ ඬ⃟💫 _${usedPrefix}attp2 *[texto]*_
┣ ඬ⃟💫 _${usedPrefix}ttp *[texto]*_
┣ ඬ⃟💫 _${usedPrefix}ttp2 *[texto]*_
┣ ඬ⃟💫 _${usedPrefix}ttp3 *[texto]*_
┣ ඬ⃟💫 _${usedPrefix}ttp4 *[texto]*_
┣ ඬ⃟💫 _${usedPrefix}ttp5 *[texto]*_
┣ ඬ⃟💫 _${usedPrefix}wikipedia *[texto]*_
┣ ඬ⃟💫 _${usedPrefix}google *[texto]*_
┣ ඬ⃟💫 _${usedPrefix}imagen *[texto]*_
┣ ඬ⃟💫 _${usedPrefix}play *[texto]*_
┣ ඬ⃟💫 _${usedPrefix}invocar *[texto]*_
┣ ඬ⃟💫 _${usedPrefix}ytsearch *[texto]*_
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
┣ ඬ⃟💫 _${usedPrefix}banchat_
┣ ඬ⃟💫 _${usedPrefix}unbanchat_
┗━━━━━━━━━━━━━┛`.trim()
conn.sendFile(m.chat, pp, 'lp.jpg', menu, m, false, { contextInfo: { mentionedJid }})
}
handler.help = ['menu', 'help', '?']
handler.tags = ['general']
handler.command = /^(menucompleto|comandos|allmenu|info|speed|estado|menú|menu|help|\?)$/i
handler.fail = null
module.exports = handler
