let fetch = require('node-fetch')
const { servers, ytv } = require('../lib/y2mate')
let handler = async(m, { conn, args, isPrems, isOwner }) => {
if (!args || !args[0]) return m.reply('*[❗𝐈𝐍𝐅𝐎❗] 𝙸𝙽𝚂𝙴𝚁𝚃𝙴 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙼𝙰𝚂 𝙴𝙻 𝙴𝙽𝙻𝙰𝙲𝙴 / 𝙻𝙸𝙽𝙺 𝙳𝙴 𝚄𝙽 𝚅𝙸𝙳𝙴𝙾 𝙳𝙴 𝚈𝙾𝚄𝚃𝚄𝙱𝙴*')
let chat = global.db.data.chats[m.chat]
let server = (args[1] || servers[0]).toLowerCase()
let { dl_link, thumb, title, filesize, filesizeF } = await ytv(args[0], servers.includes(server) ? server : servers[0])
let _thumb = {}
try { _thumb = { thumbnail: await (await fetch(thumb)).buffer() } } catch (e) {}
conn.sendFile(m.chat, dl_link, title + '.mp4', `
*📌 𝚃𝙸𝚃𝚄𝙻𝙾:* ${title}
*📁 𝙿𝙴𝚂𝙾:* ${filesizeF}
`.trim(), m, false, {
..._thumb,
asDocument: chat.useDocument
})}
handler.help = ['mp4', 'v', ''].map(v => 'yt' + v + ` <url> [server: ${servers.join(', ')}]`)
handler.tags = ['general']
handler.command = /^yt(v|mp4)?$/i
module.exports = handler
