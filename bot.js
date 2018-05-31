const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
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
    var rand = ['atman3353@gmail.com:antho3349',
        'reesphillips@hotmail.com:bluetooth87',
        'lausen13@live.dk:lausen99',
        'clesyshyn@aol.com:fr33runner',
        'peachu7@gmail.com:shaymin17',
        'taeganvanheerden@gmail.com:Taegan123',
        'kristina_georgsson@yahoo.se:Vinter15',
        'dodo.prinz21@gmail.com:Dorian1234',
        'sanchezmiguel003@gmail.com:cabala123'];

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
            .setTitle("Info")
            .setDescription("Support by joining to: https://discord.gg/QDkPV92")
            .addField("Minecraft", "/generate")
            .addField("Uplay", "/ugenerate")
            .addField("Emails", "Soon!")
            .setFooter(`Made by skullymax`);
        return message.channel.send({ embed });
    }

    if (command === "ugenerate") {
        message.channel.send("**Check your dm**")
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

    if (command === "generate") {
        message.channel.send("**Check your dm**")
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
