const { Command } = require('discord-akairo');

class donateCommand extends Command {
	constructor() {
		super('donate', {
			aliases: ['donate'],
			category: 'utility',
			description: {
				content: 'Send donate link for the bot and support server',
				usage: '',
				examples: ['']
			}
		});
	}

	async exec(message) {
		return message.channel.send('If you want to donate you can do it with paypal at https://www.paypal.me/supositware, https://donatebot.io/checkout/487640086859743232?buyer=267065637183029248 or if you prefer on patreon! https://www.patreon.com/user?u=15330358&utm_medium=social&utm_source=twitter&utm_campaign=creatorshare');
	}
}

module.exports = donateCommand;