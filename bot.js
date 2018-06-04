const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const { RichEmbed } = require('discord.js');
const fs = require("fs");


client.on("ready", () => {
    console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
    client.user.setActivity(`/help | www.eyzalts.us`);
});

client.on("guildCreate", guild => {
    console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
    client.user.setActivity(`/help | www.eyzalts.us`);
});

client.on("guildDelete", guild => {
    console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
    client.user.setActivity(`/help | www.eyzalts.us`);
});

function altmc() {
    var rand = ['dookmeyer@gmail.com:King4848',
        'johannesschumann2@gmail.com:Johannes1',
        'jalynwalsh29@gmail.com:Jalyn2006',
        'vic2marre@gmail.com:cherub99',
        'francois.potgieter4111@gmail.com:781226Tallyho',
        'jolabaca@gmail.com:2001leon',
        'andy.cheng618@gmail.com:a1n2d3y45',
        'zacharytovar2013@gmail.com:football12',
        'louis-9@live.fr:loulouvivi'];

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
