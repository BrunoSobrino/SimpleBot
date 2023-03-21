let fetch = require('node-fetch')
let handler = async (m, { text, usedPrefix, command }) => {
if (!text) throw `*[❗] 𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝚄𝙽 𝚃𝙴𝚇𝚃𝙾 𝙿𝙰𝚁𝙰 𝙷𝙰𝙱𝙻𝙰𝚁 𝙲𝙾𝙽 𝚂𝙸𝙼𝚂𝙸𝙼𝙸 𝙾 𝙴𝙻 𝙱𝙾𝚃*\n\n*𝙴𝙹𝙴𝙼𝙿𝙻𝙾: ${usedPrefix + command} Hola bot*`  
try {
let ressimi = await fetch(`https://api.simsimi.net/v2/?text=${encodeURIComponent(text)}&lc=es`)
let data = await ressimi.json();                                                             
if (data.success == 'No s\u00e9 lo qu\u00e9 est\u00e1s diciendo. Por favor ense\u00f1ame.') return m.reply(`${lol}`) /* EL TEXTO "lol" NO ESTA DEFINIDO PARA DAR ERROR Y USAR LA OTRA API */
await m.reply(data.success)
} catch {
/* SI DA ERROR USARA ESTA OTRA OPCION DE API DE IA QUE RECUERDA EL NOMBRE DE LA PERSONA */
if (text.includes('Hola')) text = text.replace('Hola', 'Hello')
if (text.includes('hola')) text = text.replace('hola', 'hello')
if (text.includes('HOLA')) text = text.replace('HOLA', 'HELLO')    
let reis = await fetch("https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=en&dt=t&q=" + textodem)
let resu = await reis.json()  
let nama = m.pushName || '1'
let api = await fetch("http://api.brainshop.ai/get?bid=153868&key=rcKonOgrUFmn5usX&uid=" + nama + "&msg=" + resu[0][0][0])
let res = await api.json()
let reis2 = await fetch("https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=es&dt=t&q=" + res.cnt)
let resu2 = await reis2.json()
await m.reply(resu2[0][0][0])
}}
handler.help = ['simsimi']
handler.tags = ['general']
handler.command = ['bot', 'simi', 'simsimi'] 
module.exports = handler
