let fetch = require('node-fetch')
let handler  = async (m, { conn, text }) => {
try {
let res = await fetch('https://api.thecatapi.com/v1/images/search')
let img = await res.json()
let caption = `*©𝑆𝑖𝑚𝑝𝑙𝑒𝐵𝑜𝑡*`.trim()
conn.sendFile(m.chat, img[0].url, 'error.jpg', caption, m)
} catch {
throw '*[❗] 𝙴𝚁𝚁𝙾𝚁*'
}}
handler.help = ['cat']
handler.tags = ['general']
handler.command = /^cat$/i
handler.fail = null
module.exports = handler
