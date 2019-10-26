const { Command } = require('discord-akairo');
const donator = require('../../models').donator;

class donatorCommand extends Command {
	constructor() {
		super('donator', {
			aliases: ['donator'],
			category: 'utility',
			description: {
				content: 'All the people who donated for this bot <3',
				usage: '',
				examples: ['']
			}
		});
	}

	async exec(message) {
		const Donator = await donator.findAll({order: ['id']});

		let donatorMessage = 'Thanks to:\n';

		for (let i = 0; i < Donator.length; i++) {
			donatorMessage += `${this.client.users.get(Donator[i].get('userID')).username}#${this.client.users.get(Donator[i].get('userID')).discriminator} (${Donator[i].get('userID')}) ${Donator[i].get('comment')}\n`;
		}

		return message.channel.send(donatorMessage);
	}
}

module.exports = donatorCommand;