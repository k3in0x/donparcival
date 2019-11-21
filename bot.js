const Discord = require('discord.js');

const client = new Discord.Client();

const token = process.env.token;
 
 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.login(token).catch(err => console.log(err));
