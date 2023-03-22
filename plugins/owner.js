function handler(m) {
this.sendContact(m.chat, global.owner[1], this.getName(global.owner[1] + '@s.whatsapp.net'), m)
this.sendContact(m.chat, global.owner[0], this.getName(global.owner[0] + '@s.whatsapp.net'), m)
this.sendContact(m.chat, global.owner[2], this.getName(global.owner[2] + '@s.whatsapp.net'), m)
}
handler.command = /^(contacto|owner|creator|creador|propietario|dueño)$/i
module.exports = handler
