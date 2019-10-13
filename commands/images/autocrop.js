const { Command } = require('discord-akairo');
const jimp = require('jimp');
const os = require('os');

class autocropCommand extends Command {
	constructor() {
		super('autocrop', {
			aliases: ['autocrop', 'crop'],
			category: 'images',
			args: [
				{
					id: 'link',
					type: 'string',
				}
			],
			description: {
				content: 'autocrop image border of the same color',
				usage: '[link to image]',
				examples: ['']
			}
		});
	}

	async exec(message, args) {
		let output = `${os.tmpdir()}/cropped${message.id}.jpg`;


		let Attachment = (message.attachments).array();
		let url = args.link;
		// Get attachment link
		if (Attachment[0] && !args.link) {
			url = Attachment[0].url;
		}

		let loadingmsg = await message.channel.send('Processing <a:loadingmin:527579785212329984>');


		jimp.read({
			url: url
		})
			.then(image => {
				return image
					.autocrop()
					.write(output);
			})
			.then(() => {
				loadingmsg.delete();
				return message.channel.send({files: [output]});
			});



	}
}

module.exports = autocropCommand;