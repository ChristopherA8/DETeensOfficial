const Discord9090 = require('discord.js');
module.exports = {
    name: "ticket",
    execute(msg) {
        const channel = msg.client.channels.cache.find(channel => channel.id === `789723440276963378`);
        var ticket = msg.content.substr(7);

        if (ticket == "") {
            msg.channel.send(`**Error:** Invalid ticket!`);
        } else {
            msg.delete();
            const trimmedTicket = ticket.trim();
            //embed start
            const exampleEmbed = new Discord9090.MessageEmbed()
            .setAuthor(`You've got Mail!`, `https://chr1s.dev/assets/mailbox.png`)
            .setColor('#00FF86')
            .setTitle('New Ticket -')
            .setFooter('')
            .setDescription(`"${trimmedTicket}"\n\n**From -** ${msg.author}`)
            channel.send(exampleEmbed);
            //embed end

            msg.channel.send(`Your message was sent! `);

        }

    },
};

//hell, omg