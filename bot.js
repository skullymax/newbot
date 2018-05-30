const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const { caseNumber } = require('./util/caseNumber.js');
const { RichEmbed } = require('discord.js');

client.on("ready", () => {
    console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
    client.user.setActivity(`Serving ${client.guilds.size} servers`);
});

client.on("guildCreate", guild => {
    console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
    client.user.setActivity(`Serving ${client.guilds.size} servers`);
});

client.on("guildDelete", guild => {
    console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
    client.user.setActivity(`Serving ${client.guilds.size} servers`);
});

function altmc() {
    var rand = ['johnathon.a.goss@gmail.com:salamary2',
        'zovereem@hotmail.com:Chase1991',
        'carolinewalsh@optimum.net:tweaker1',
        'ricechrisp.treats@gmail.com:Kenshin589128',
        'mrs.botello@hotmail.com:botello5',
        'ben.fischler@gmail.com:fresh1o55',
        'nrkohen@hotmail.com:michigan1',
        'takashihh1@gmail.com:bowling827',
        'bo328@yahoo.com:hannah46'];

    return rand[Math.floor(Math.random() * rand.length)];
}

client.on("message", async message => {

    if (message.author.bot) return;

    if (message.content.indexOf(config.prefix) !== 0) return;

    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();


    if (command === "help") {
        const embed = new RichEmbed()
            .setColor(0xFFA230)
            .setTimestamp()
            .setTitle("Info")
            .setDescription("Support by joining to: https://discord.gg/QDkPV92")
            .addField("Minecraft", "/generate")
            .addField("Uplay", "Soon!")
            .addField("Emails", "Soon!")
            .setFooter(`Made by skullymax`);
        return message.channel.send({ embed });
    }

    if (command === "generate") {
        message.channel.send("Check your dm")
        const embed = new RichEmbed()
            .setColor(0x5C0E60)
            .setTimestamp()
            .setTitle("Info")
            .setDescription("Support by joining to: https://discord.gg/QDkPV92")
            .addField("Minecraft:", (altmc()), true)
            .setFooter(`Made by skullymax`);
        return message.author.send({ embed });
    }
});

client.login(config.token);
