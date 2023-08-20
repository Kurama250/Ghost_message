/*
Create by Kurama
Github : https://github.com/Kurama250
*/

const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');

if (!fs.existsSync('./data.json')) {
    fs.writeFileSync('./data.json', JSON.stringify({}, null, 4));
}

let deletedMessagesData = require('./data.json');

client.once('ready', () => {
    console.log(`Bot started as ${client.user.tag}`);
});

client.on('messageDelete', async deletedMessage => {
    if (deletedMessage.author.bot) return;

    const channel = deletedMessage.channel;
    
    if (!deletedMessagesData[channel.id]) {
        deletedMessagesData[channel.id] = [];
    }

    deletedMessagesData[channel.id].push({
        author: deletedMessage.author.username,
        content: deletedMessage.content
    });

    fs.writeFileSync('./data.json', JSON.stringify(deletedMessagesData, null, 4));
});

client.on('message', async message => {
    if (message.content === '.ghost' && message.guild && config.ghostServers.includes(message.guild.id) && deletedMessagesData[message.channel.id]) {
        const lastDeletedMessage = deletedMessagesData[message.channel.id].pop();
        if (lastDeletedMessage) {
            const embed = new Discord.MessageEmbed()
                .setColor(getRandomColor())
                .setTitle('Last Deleted Message')
                .setDescription(`Message from ${lastDeletedMessage.author}: ${lastDeletedMessage.content}`);

            message.channel.send(embed);
        } else {
            message.channel.send("No ghost message found.");
        }
    }
});

client.login(config.token);

function getRandomColor() {
    const colors = ['#FF5733', '#33FF77', '#3399FF', '#FF33CC', '#FFFF33', '#33FFFF'];
    return colors[Math.floor(Math.random() * colors.length)];
}