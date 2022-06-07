let { MessageType } = require('@adiwajshing/baileys')
let yts = require('yt-search')
let fs = require('fs')
const { servers, yta, ytv } = require('../lib/y2mate')
let handler = async(m, { conn, command, text, isPrems, isOwner, DevMode }) => {
conn.play = conn.play ? conn.play : {}
if (!text) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙽𝙾𝙼𝙱𝚁𝙴 𝙳𝙴 𝙻𝙰 𝙲𝙰𝙽𝙲𝙸𝙾𝙽 𝙵𝙰𝙻𝚃𝙰𝙽𝚃𝙴, 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙼𝙰𝚂 𝙴𝙻 𝙽𝙾𝙼𝙱𝚁𝙴/𝚃𝙸𝚃𝚄𝙻𝙾 𝙳𝙴 𝚄𝙽𝙰 𝙲𝙰𝙽𝙲𝙸𝙾𝙽*\n\n*—◉ 𝙴𝙹𝙴𝙼𝙿𝙻𝙾:*\n*#play Good Feeling - Flo Rida*'
try {
let results = await yts(text)
let vid = results.all.find(video => video.seconds < 3600)
if (!vid) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙻𝙾 𝚂𝙸𝙴𝙽𝚃𝙾, 𝙽𝙾 𝙿𝚄𝙳𝙴 𝙴𝙽𝙲𝙾𝙽𝚃𝚁𝙰𝚁 𝙴𝙻 𝙰𝚄𝙳𝙸𝙾/𝚅𝙸𝙳𝙴𝙾, 𝙸𝙽𝚃𝙴𝙽𝚃𝙴 𝙲𝙾𝙽 𝙾𝚃𝚁𝙾 𝙽𝙾𝙼𝙱𝚁𝙴/𝚃𝙸𝚃𝚄𝙻𝙾*'
let { dl_link, thumb, title, filesize, filesizeF } = await (/2$/.test(command) ? ytv : yta)(vid.url, 'id4')
conn.sendFile(m.chat, thumb, 'error.jpg', `
📌 *𝚃𝙸𝚃𝚄𝙻𝙾:* ${title}
*📁 𝙿𝙴𝚂𝙾:* ${filesizeF}
*🔗 𝚄𝚁𝙻:* ${vid.url}
*📥 𝙳𝙴𝚂𝙲𝙰𝚁𝙶𝙰𝚁:* ${dl_link}
`.trim(), m, false, { 
contextInfo: { externalAdReply: {
title: 'ʀᴇᴘʀᴏᴅᴜᴄᴛᴏʀ ᴅᴇ ʏᴏᴜᴛᴜʙᴇ',
body: '©𝑆𝑖𝑚𝑝𝑙𝑒𝐵𝑜𝑡', 
sourceUrl: `https://github.com/BrunoSobrino/SimpleBot`, 
thumbnail: fs.readFileSync('./Menu2.jpg') }}})
conn.sendFile(m.chat, dl_link, title + '.mp' + (3 + /2$/.test(command)), `
*📌 𝚃𝙸𝚃𝚄𝙻𝙾:* ${title}
*📁 𝙿𝙴𝚂𝙾:* ${filesizeF}
*🔗 𝚄𝚁𝙻:* ${vid.url}
`.trim(), m)
} catch (e) {
console.log(e)
m.reply('*[❗] 𝙴𝚁𝚁𝙾𝚁*')
}}
handler.help = ['play', 'play2'].map(v => v + ' <pencarian>')
handler.tags = ['general']
handler.command = /^play2?$/i
module.exports = handler
