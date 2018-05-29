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
    var rand = ['thorsten.schoofs@gmail.com:SchuuF79',
        'amysaruwatari@gmail.com:Dolphins2004',
        'certifiednrg@gmail.com:imtheoneyouwant',
        'Jonatandeparade@gmail.com:Pluche1*',
        'harry.barlow@hotmail.co.uk:Beatrice09',
        'vincent64bit@gmail.com:Spankydog1'];

    return rand[Math.floor(Math.random() * rand.length)];
}

client.on("message", async message => {

    if (message.author.bot) return;

    if (message.content.indexOf(config.prefix) !== 0) return;

    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if (command === "ban") {
        let reason = args.slice(1).join(' ');
        let user = message.mentions.users.first();
        let modlog = client.channels.find('name', 'mod-log');
        if (!modlog) return message.reply('I cannot find a mod-log channel');
        if (reason.length < 1) return message.reply('You must supply a reason for the ban.');
        if (message.mentions.users.size < 1) return message.reply('You must mention someone to ban them.').catch(console.error);

        if (!message.guild.member(user).bannable) return message.reply('I cannot ban that member');
        message.guild.ban(user, 2);

        const embed = new Discord.RichEmbed()
            .setColor(0xCC0000)
            .setTimestamp()
            .setDescription(`**Action:** Ban\n**Target:** ${user.tag}\n**Moderator:** ${message.author.tag}\n**Reason:** ${reason}`);
        return client.channels.get(modlog.id).send({ embed });
    };

    if (command === "generate") {
        const embed = new RichEmbed()
            .setColor(0x00AE86)
            .setTimestamp()
            .setTitle("Info")
            .setDescription(`Support by joining to: https://discord.gg/QDkPV92`)
            .addField("Minecraft", (altmc()), true)
            .setFooter(`Made by skullymax`);
        return message.author.send({ embed });
    }

    if (command === "clear") {
        const messagecount = parseInt(args.join(' '));
        message.channel.fetchMessages({
            limit: messagecount
        }).then(messages => message.channel.bulkDelete(messages));
    }
});

client.login(config.token);
