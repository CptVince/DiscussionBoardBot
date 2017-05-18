const Discord = require('discord.js');
const client = new Discord.Client();
// Fist just used in debug mode, further will be introduced as config in the future.
const configuration = require('./config.debug.js');
const log = require('./log.js');
const Command = require('./command.js');

/*
 * Quotes are taken from http://www.rickandmortytime.com/wiki/Quotes
 */

client.on('ready', () => {
	log('I JUST WANNA DIE! - Mr Meeseeks');
	log(`Loggin in as ${client.user.username}!`);
});

client.on('message', msg => {
	if (msg.author.bot) {
		return;
	}

	if (/^meeseeks .*/gi.test(msg.content)) {
		log(`Message received \'${msg.content}\' by \'${msg.author.username}#${msg.author.id}\'`);
		msg.reply('Oohhh can do.');
		var command = Command.Command(msg);
	}
});

client.login(configuration.discordToken);

