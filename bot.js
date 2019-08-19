const Discord = require('discord.js');
const bot = new Discord.Client();
bot.login(process.env.BOT_TOKEN).catch(err => { return })

bot.on('ready', async (ready) => {
	console.log(bot.user.tag + " activated")
})
let go = 'FgxxwOImmssIIWjx1_99-ps';
bot.on('message', async (message) => {
	if(message.channel.id === '612972590629257237') {
		if(message.content === go) {
			message.channel.send(go).then(() => message.delete(500)).catch(err => { return })
		} else {
			return
		}
	}
})
