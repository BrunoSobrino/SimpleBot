let handler = async (m, { conn }) => {
m.reply(`
*Hola! Buscas la mejor alternativa a Heroku, termux, replit, etc. de manera gratuita? 

*- Esta es tu mejor opción para tener tu Bot o algun proyecto activo 24/7*

*Incluso mejor que otros servicios como los antes mencionados, ¿Muy lento tu nokia y necesitas tener activado tu bot 24/7?*

*Entra a este grupo y pide mayor información, con gusto te ayudamos a ejecutar tu Bot en el Host y olvidate de lag y falta de memoria.*

*[_Pagina principal_]*

- acidicnodes.com

*[_Grupo Oficial_]*

- https://chat.whatsapp.com/F0fU7LSlBBcBm6ny5fVSuT
`)
}
handler.command = /^(infohost)$/i
module.exports = handler
