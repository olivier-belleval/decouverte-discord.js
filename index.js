const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	if (message.content === '!salut') {
        message.channel.send('coucou! :wave:');
    }
});

client.login('your-token-goes-here');