/**
[ By @NeKosmic || https://github.com/NeKosmic/ ]
**/
let handler = async (m, { conn, command, text, args }) => {
if (!text) return m.reply(`*[❗𝐈𝐍𝐅𝐎❗] 𝙸𝙽𝚂𝙴𝚁𝚃𝙴 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙼𝙰𝚂 𝙴𝙻 𝙴𝙽𝙻𝙰𝙲𝙴 / 𝙻𝙸𝙽𝙺 𝙳𝙴 𝚄𝙽 𝚅𝙸𝙳𝙴𝙾 𝙳𝙴 𝚈𝙾𝚄𝚃𝚄𝙱𝙴*`)
try {
let name = await conn.getName(m.sender)
let mcarga = m.reply(global.wait)
await mcarga
let ytm3 = encodeURIComponent(text)
let apiytdl = await fetchJson(`https://latam-api.vercel.app/api/ytmp3_2?apikey=nekosmic&q=${ytm3}`)
let thumbapi = await getBuffer(apiytdl.logo) 
conn.sendMessage(m.chat, { audio: { url: apiytdl.descarga }, contextInfo:{"externalAdReply":{"title": `${apiytdl.titulo}`,"body": `${wm} 🔥}`,"previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": thumbapi,"sourceUrl": `${apiytdl.descarga}`}}, mimetype: 'audio/mpeg', fileName: `${apiytdl.titulo}.mp3` }, { quoted: m }).catch(e => {conn.sendButton(m.chat, `*[ ! ] Ocurrio un error inesperado u.u [ ! ]*`, `Toque el boton para usar otra alternativa`, NombreDelBot, ['[ ♻️ REINTENTAR ]', Prefijo+`yta ${text}`], m)})
} catch {
m.reply(`*[❗] 𝙴𝚁𝚁𝙾𝚁 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙳𝙴𝚂𝙲𝙰𝚁𝙶𝙰𝚁 𝙴𝙻 𝙰𝚄𝙳𝙸𝙾*`)
}}
handler.command = /^(getaud|ytmp3.2|yta.2)$/i
export default handler

/*let { youtubedl, youtubedlv2, youtubedlv3 } = require('@bochilteam/scraper')
let fetch = require('node-fetch')
let handler = async (m, { conn, args, isPrems, isOwner }) => {
if (!args[0]) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙸𝙽𝚂𝙴𝚁𝚃𝙴 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙼𝙰𝚂 𝙴𝙻 𝙴𝙽𝙻𝙰𝙲𝙴 / 𝙻𝙸𝙽𝙺 𝙳𝙴 𝚄𝙽 𝚅𝙸𝙳𝙴𝙾 𝙳𝙴 𝚈𝙾𝚄𝚃𝚄𝙱𝙴*'
await m.reply(global.wait)
try {
let q = '128kbps'
let v = args[0]
const yt = await youtubedl(v).catch(async () => await youtubedlv2(v)).catch(async () => await youtubedlv3(v))
const dl_url = await yt.audio[q].download()
const ttl = await yt.title
const size = await yt.audio[q].fileSizeH
await conn.sendFile(m.chat, dl_url, ttl + '.mp3', null, m, false, { mimetype: 'audio/mp4' })
} catch {
await conn.reply(m.chat, '*[❗] 𝙴𝚁𝚁𝙾𝚁 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙳𝙴𝚂𝙲𝙰𝚁𝙶𝙰𝚁 𝙴𝙻 𝙰𝚄𝙳𝙸𝙾*', m)}
}  
handler.command = /^(getaud|ytmp3.2|yta.2)$/i
module.exports = handler*/
