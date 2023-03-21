let handler = async (m, { conn }) => {
m.reply(`*Hola! Buscas la mejor alternativa a Heroku, termux, replit, etc. de manera gratuita o de paga?*

*- Esta es tu mejor opción para tener tu Bot, pagina web, servidor de minecraft o algun otro proyecto activo 24/7*

*Incluso mejor que otros servicios como los antes mencionados, ¿Muy lento tu nokia y necesitas tener activado tu bot 24/7?*

*[_Pagina principal_]*

- boxmineworld.com

*[_BoxMine Dash_]*

- dash.boxmineworld.com

*[_BoxMine Panel_]*

- panel.boxmineworld.com`)
}
handler.command = /^(infohost)$/i
module.exports = handler
