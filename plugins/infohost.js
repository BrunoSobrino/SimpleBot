let handler = async (m, { conn }) => {
m.reply(`
*Hola! Buscas la mejor alternativa a Heroku, termux, replit, etc. de manera gratuita?*

*- Esta es tu mejor opción para tener tu Bot o algun proyecto activo 24/7*

*Incluso mejor que otros servicios como los antes mencionados, ¿Muy lento tu nokia y necesitas tener activado tu bot 24/7?*

*[_Pagina principal_]*

- boxmineworld.com`)
}
handler.command = /^(infohost)$/i
module.exports = handler
