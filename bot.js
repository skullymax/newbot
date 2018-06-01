const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const { RichEmbed } = require('discord.js');
const fs = require("fs");


client.on("ready", () => {
    console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
    client.user.setActivity(`/help | New forum!`);
});

client.on("guildCreate", guild => {
    console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
    client.user.setActivity(`/help | New forum!`);
});

client.on("guildDelete", guild => {
    console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
    client.user.setActivity(`/help | New forum!`);
});

function altmc() {
    var rand = ['scootinbildo@gmail.com:wanderson18',
        '96svtjsb@gmail.com:jsbaem0823',
        'steve_moss@hotmail.com:stephen70401',
        'poulainstephane@yahoo.fr:fifille1',
        'amyxx25@yahoo.com:iloveyou2',
        'ebhunter@comcast.net:2Blessed',
        'charlesking4766@gmail.com:salisbury',
        'mnieckula@yahoo.com:graalfox87',
        'anders99@live.no:Pusenmin99'];

    return rand[Math.floor(Math.random() * rand.length)];
}

function altuplay() {
    var rand = ['billy-bourne2011@hotmail.com:cooldude123',
        'salgadomja@gmail.com:88demayo',
        'jdp3bengalz85@gmail.com:baseball23',
        'matts4242@gmail.com:wingspan91',
        'apdshanrra50@gmail.com:Pavel2002',
        'r.peckham@hotmail.co.uk:bongo1996'];

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
            .setTitle(":tada: BOT INFO! :tada:")
            .setURL("https://discord.gg/QDkPV92")
            .addField("Minecraft", "/minecraft")
            .addField("Uplay", "/uplay")
            .addField("Invite bot", "/invite")
            .addField("Emails", "Soon!")
            .addField("Online on", `${client.guilds.size}`)
            .setFooter(`Made by skullymax`);
        return message.channel.send({ embed });
    }

    if (command === "invite") {
        const embed = new RichEmbed()
            .setColor(0xFFA230)
            .setTitle(":tada: CLICK HERE! :tada:")
            .setURL("https://discordapp.com/oauth2/authorize?client_id=451127834895843348&scope=bot&permissions=8")
        return message.channel.send({ embed });
    }

    if (command === "uplay") {
        message.channel.send(`:tada: Generated Uplay Account for **${message.author.tag}**:tada:`)
        const embed = new RichEmbed()
            .setColor(0x5C0E60)
            .setTimestamp()
            .setTitle(":tada: Generated Account! :tada:")
            .addField("Account info:", `Account:\nType: Uplay`, true)
            .addField("Storage: 6", (altuplay()), true)
            .setURL("https://discord.gg/QDkPV92")
            .setFooter(`Made by skullymax`);
        return message.author.send({ embed });
    }

    if (command === "minecraft") {
        message.channel.send(`:tada: Generated Minecraft Account for **${message.author.tag}**:tada:`)
        message.author.send(`Try new forum with cracking tutorial! http://eyzalts.us/alts/index.php`)
        const embed = new RichEmbed()
            .setColor(0x5C0E60)
            .setTimestamp()
            .setTitle(":tada: Generated Account! :tada:")
            .addField("Account info:", `Account:\nType: Minecraft`, true)
            .addField("Storage: 9", (altmc()), true)
            .setURL("https://discord.gg/QDkPV92")
            .setFooter(`Made by skullymax`);
        return message.author.send({ embed });
    }
});

client.login(config.token);
