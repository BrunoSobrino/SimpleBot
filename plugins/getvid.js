let { youtubedl, youtubedlv2 } = require('@bochilteam/scraper')
let fs = require('fs')
let handler = async (m, { conn, args, isPrems, isOwner }) => {
let qu = args[1] || '360'
let q = qu + 'p'
let v = args[0]
let _thumb = {}
catch (e) { }
const yt = await youtubedl(v).catch(async () => await  youtubedlv2(v))
try { _thumb = { jpegThumbnail: await (await fetch(yt.thumbnail)).buffer() } }
const dl_url = await yt.video[q].download()
const ttl = await yt.title
const size = await yt.video[q].fileSizeH
await m.reply(`▢ Tɪᴛᴛʟᴇ: ${ttl}\n▢  Sɪᴢᴇ: ${size}\n\n▢ Ｌｏａｄｉｎｇ. . .`)
await conn.sendMessage(m.chat, { [/^(?:-|--)doc$/i.test(args[1]) || null ? 'document' : 'video']: { url: dl_url }, fileName: `${ttl}.mp4`, mimetype: 'video/mp4', ..._thumb }, { quoted: m })}
handler.command = /^(getvid)$/i
module.exports = handler
