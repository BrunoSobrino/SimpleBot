const { googleImage } = require('@bochilteam/scraper')
let handler  = async (m, { conn, args, text }) => {
if (!text) return m.reply('*[❗] 𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝙴𝙻 𝚃𝙴𝚇𝚃𝙾 𝚀𝚄𝙴 𝚀𝚄𝙸𝙴𝚁𝙰 𝙱𝚄𝚂𝙲𝙰𝚁*')
const res = await googleImage(text)
let image = await res.getRandom()
let link = image
if (!link) return m.reply('*[❗] 𝚂𝙴𝚁𝚅𝙸𝙳𝙾𝚁 𝙲𝙰𝙸𝙳𝙾, 𝙸𝙽𝚃𝙴𝙽𝚃𝙴 𝙼𝙰𝚂 𝚃𝙰𝚁𝙳𝙴*')
conn.sendFile(m.chat, link, 'gimage', `🔎 *𝚁𝙴𝚂𝚄𝙻𝚃𝙰𝙳𝙾 𝙳𝙴:* ${text}\n🌎 *𝙱𝚄𝙲𝙰𝙳𝙾𝚁:* Google`.trim(), m)}
handler.help = ['gimage <query>', 'image <query>']
handler.tags = ['general']
handler.command = /^(gimage|image|imagen)$/i
module.exports = handler
function pickRandom(arr) {
return arr[Math.floor(Math.random() * arr.length)]}
