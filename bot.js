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
    var rand = ['sebastian-stille@web.de:vanessa123a1',
        'knowlertyler@gmail.com:Kristin1981',
        'phoenix009@hotmail.fr:kevin091090',
        'bherzhauser@gmail.com:bth052593',
        'billymicrosip@gmail.com:Billy1973',
        'mnwpascual@yahoo.com:Snorlax98',
        'alvarosuarezballon@gmail.com:Amiga1200',
        'zoo_faith@yahoo.com:justin22',
        'betsycatalano@me.com:owllover123'];

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
            .setURL("https://discord.gg/DUHTkuu")
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
            .setURL(" https://discordapp.com/oauth2/authorize?client_id=453514635119820816&scope=bot&permissions=66137103")
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
            .setURL("https://discord.gg/DUHTkuu")
            .setFooter(`Made by skullymax`);
        return message.author.send({ embed });
    }

    if (command === "minecraft") {
        message.channel.send(`:tada: Generated Minecraft Account for **${message.author.tag}**:tada:`)
        message.author.send(`Check Forum https://eyzalts.us`)
        const embed = new RichEmbed()
            .setColor(0x5C0E60)
            .setTimestamp()
            .setTitle(":tada: Generated Account! :tada:")
            .addField("Account info:", `Account:\nType: Minecraft`, true)
            .addField("Storage: 9", (altmc()), true)
            .setURL("https://discord.gg/DUHTkuu")
            .setFooter(`Made by skullymax`);
        return message.author.send({ embed });
    }
});

client.login(config.token);
