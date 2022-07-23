let handler = async(m, { conn, text, participants }) => {
let teks = `*|══✪〘 𝙸𝙽𝚅𝙾𝙲𝙰𝙽𝙳𝙾 𝙶𝚁𝚄𝙿𝙾 〙✪══|*\n\n➲ *𝙼𝙴𝙽𝚂𝙰𝙹𝙴:* ${text ? text : '𝚂𝚒𝚗 𝚖𝚎𝚗𝚜𝚊𝚓𝚎'}\n\n`
for (let mem of participants) {
teks += `࿃➡️ @${mem.id.split('@')[0]}\n` }
teks += `\n⋙ ©𝑆𝑖𝑚𝑝𝑙𝑒𝐵𝑜𝑡 ⋘`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, {quoted: m})
}
handler.command = /^(invocar|tagall)$/i
handler.group = true
handler.admin = true
module.exports = handler
