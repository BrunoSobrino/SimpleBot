let { youtubedl, youtubedlv2 } = require('@bochilteam/scraper')
let handler = async (m, { conn, args, isPrems, isOwner }) => {
let q = '128kbps'
let v = args[0]
const yt = await youtubedl(v).catch(async () => await  youtubedlv2(v))
const dl_url = await yt.audio[q].download()
const ttl = await yt.title
const size = await yt.audio[q].fileSizeH
await m.reply(`▢ Tɪᴛᴛʟᴇ: ${ttl}\n▢  Sɪᴢᴇ: ${size}\n\n▢ Ｌｏａｄｉｎｇ. . .`)
await conn.sendFile(m.chat, dl_url, ttl + '.mp3', null, m, null, { asDocument: false })}
handler.command = /^(getaud|ytmp3.2|yta.2)$/i
module.exports = handler
