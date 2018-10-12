const commando = require('discord.js-commando');
const bot = new commando.Client();


bot.on('message', function(message){    
    if(message.content == '^^join DPS')
    {
        message.channel.send('Added ' + message.author + ' to DPS role');
        let memberRole = message.member.guild.roles.find("name", "DPS");
        message.member.addRole(memberRole);
    }
});

bot.on('message', function(message){    
    if(message.content == '^^join dps')
    {
        message.channel.send('Added ' + message.author + ' to DPS role');
        let memberRole = message.member.guild.roles.find("name", "DPS");
        message.member.addRole(memberRole);
    }
});

bot.on('message', function(message){    
    if(message.content == '^^join Flex')
    {
        message.channel.send('Added ' + message.author + ' to Flex role');
        let memberRole = message.member.guild.roles.find("name", "Flex");
        message.member.addRole(memberRole);
    }
});


bot.on('message', function(message){    
    if(message.content == '^^join flex')
    {
        message.channel.send('Added ' + message.author + ' to Flex role');
        let memberRole = message.member.guild.roles.find("name", "Flex");
        message.member.addRole(memberRole);
    }
});

bot.on('message', function(message){    
    if(message.content == '^^join Support')
    {
        message.channel.send('Added ' + message.author + ' to Support role');
        let memberRole = message.member.guild.roles.find("name", "Support");
        message.member.addRole(memberRole);
    }
});

bot.on('message', function(message){    
    if(message.content == '^^join support')
    {
        message.channel.send('Added ' + message.author + ' to Support role');
        let memberRole = message.member.guild.roles.find("name", "Support");
        message.member.addRole(memberRole);
    }
});

bot.on('message', function(message){    
    if(message.content == '^^join Tank')
    {
        message.channel.send('Added ' + message.author + ' to Tank role');
        let memberRole = message.member.guild.roles.find("name", "Tank");
        message.member.addRole(memberRole);
    }
});

bot.on('message', function(message){    
    if(message.content == '^^join tank')
    {
        message.channel.send('Added ' + message.author + ' to Tank role');
        let memberRole = message.member.guild.roles.find("name", "Tank");
        message.member.addRole(memberRole);
    }
});



bot.on('ready',function(){
    console.log("Ready");
})

bot.login(process.env.token);
