let yts = require('yt-search')
let handler = async (m, { text }) => {
if (!text) return m.reply('Cari apa?')
let results = await yts(text)
let teks = results.all.map(v => {
switch (v.type) {
case 'video': return `
📌 *${v.title}* (${v.url})
⌚ 𝙳𝚞𝚛𝚊𝚌𝚒𝚘𝚗: ${v.timestamp}
⏲️ 𝙿𝚞𝚋𝚕𝚒𝚌𝚊𝚍𝚘 ${v.ago}
`.trim()
case 'channel': return `
📌 *${v.name}* (${v.url})
🧑‍🤝‍🧑 _${v.subCountLabel} 𝚜𝚞𝚜𝚌𝚛𝚒𝚙𝚝𝚘𝚛𝚎𝚜_
🎥 ${v.videoCount} 𝚟𝚒𝚍𝚎𝚘/𝚜
`.trim()
}
}).filter(v => v).join('\n========================\n')
m.reply(teks)
}
handler.help = ['', 'earch'].map(v => 'yts' + v + ' <pencarian>')
handler.tags = ['general']
handler.command = /^yts(earch)?$/i
module.exports = handler
