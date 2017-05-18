const log = require('./log.js');

var splitMessage = function(message) {
	return message.split(' ');
};

var createChannel = function(msg, splitted) {
	var author = msg.author.username + '#' + msg.author.id;

	log(`Trying to create channel for \'${author}\'`);
	if (typeof splitted[2] === 'string' && splitted[2] !== '') {
		log(`creating channel \'${splitted[2]}\' for ${author}`);
		if (msg.guild !== null) {
			log('The need for another Mr. Meeseeks is here and I will summon one to help me with \'createchannel\'.');
			msg.reply('Another Mr. Meeseeks is necessary to perform this task \'' + splitted[2] + '\'');
			var promise = msg.guild.createChannel(splitted[2], 'text');
			promise.then(function() {
				log('successfully created your channel \'' + splitted[2] + '\'');
				msg.reply('successfully created your channel \'' + splitted[2] + '\'');
			}, function(err) {
				log(err);
				msg.reply('unable to create your channel \'' + splitted[2] + '\'\r\nPlease contact the admin.');
			});
		}
	}
};
var help = function(msg, splitted) {
	var author = msg.author.username + '#' + msg.author.id;
	var help = 'HI! I\'M MR MEESEEKS! LOOK AT ME!\nI will try to help you.\n' +
		'Commands:\n' +
		'\tcreatechannel {channelname}:\n\t\tWill create a channel with the given name.\n' +
		'\tpurpose:\n\t\tWill tell you your purpose.\n' +
		'\nMeeseeks don\'t usually have to exist for this long. It\'s gettin\' weeeiiird...\n';

	log('help by \'' + author + '\'');
	msg.reply(help);
};

var purpose = function(msg, splitted) {
	var author = msg.author.username + '#' + msg.author.id;

	log('\'' + author + '\' is seeking for his/her purpose');
	msg.reply('Mr Sanchez: "You pass butter."\n' + msg.author.username + ': "Oh my god."\nMr Sanchez: "Yeah, welcome to the club, pal."');
};

module.exports = {
	Command: function(msg) {
		var splitted = splitMessage(msg.content);

		if (splitted[1] === 'help') {
			help(msg, splitted);
		}
		else if (splitted[1] === 'createchannel') {
			createChannel(msg, splitted);
		}
		else if (splitted[1] === 'purpose') {
			purpose(msg, splitted);
		}
	}
};

