let handler = async (m, { conn }) => {
m.reply(`
En desarrollo 
`)
}
handler.command = /^(infohost)$/i
module.exports = handler
