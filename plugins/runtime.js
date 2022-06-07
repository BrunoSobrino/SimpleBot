let handler = async (m, { conn }) => {
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
m.reply(`
*┌─〔 ＡＣＴＩＶＯ 〕*
*├ 𝚃𝙸𝙴𝙼𝙿𝙾 𝙰𝙲𝚃𝙸𝚅𝙾: ${uptime}*
*└───────────────*
`.trim())}
handler.help = ['runtime']
handler.tags = ['info']
handler.command = /^(uptime|runtime)$/i
module.exports = handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
