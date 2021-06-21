const Discord = require(`discord.js`);
const Client = new Discord.Client();
const fs = require(`fs`);
const ytdl = require(`ytdl-core`);
const ytsr = require(`ytsr`);
const lyricsFinder = require(`lyrics-finder`);
const BDD = require(`./BaseDeDonnée.json`);
const queue = new Map();
var prefix = `-`;

Client.on(`ready`, () =>
{

    console.log(`Bot ready !`);

    Client.user.setActivity(`Mon prefix est ${prefix}`, { type: `WATCHING` });

});


Client.on(`message`, async message =>
{

    const serverQueue = queue.get(message.guild.id);

    if(message.author.bot)
    {
        return;
    }

    if(message.channel.type == `dm`)
    {
        return;
    }

    if((message.content == prefix + `help`) || (message.mentions.members.get(`850814788559699998`)))
    {
        let avatarNiroshy = Client.users.cache.get(BDD[`idNiroshy`]).displayAvatarURL({ format: `png`, dynamic: true });
        let avatarMembre = message.author.displayAvatarURL({ format: `png`, dynamic: true });
        let avatarServeur = message.guild.iconURL({ format: `png`, dynamic: true });
        var embed = new Discord.MessageEmbed()
        .setColor(`#00FE00`)
        .setTitle(`**HELP**`)
        .setAuthor(`${message.member.displayName}#${message.author.discriminator}`, avatarMembre)
        .setDescription(`<@${message.author.id}> Voici la liste des commandes:`)
        .addField(`${prefix}ban:`, `permet de bannir un membre\nPour plus d'info: ${prefix}helpban`, true)
        .addField(`${prefix}kick:`, `permet de kick un membre\nPour plus d'info: ${prefix}helpkick`, true)
        .addField(`${prefix}warn:`, `permet d'avertir un membre\nPour plus d'info: ${prefix}helpwarn`, true)
        .addField(`${prefix}unwarn:`, `permet de retirer un avertissement à un membre\nPour plus d'info: ${prefix}helpunwarn`, true)
        .addField(`${prefix}infraction:`, `permet d'afficher les avertissements du membre mentionné\nPour plus d'info: ${prefix}helpinfraction`, true)
        .addField(`${prefix}mute:`, `permet de mute le membre mentionné de façon permanente\nPour plus d'info: ${prefix}helpmute`, true)
        .addField(`${prefix}tempmute:`, `permet de muter le membre mentionné de façon temporaire\nPour plus d'info: ${prefix}helptempmute`, true)
        .addField(`${prefix}unmute`, `permet de démuter le membre mentionné si celui-ci était muté\nPour plus d'info: ${prefix}helpunmute`, true)
        .addField(`${prefix}play`, `permet de jouer une musique\nPour plus d'info: ${prefix}helpplay`, true)
        .addField(`${prefix}search`, `permet de rechercher une musique\nPour plus d'info: ${prefix}helpsearch`, true)
        .addField(`${prefix}stop`, `permet de retirer toutes les musiques\nDiminutif: ${prefix}sp`, true)
        .addField(`${prefix}skip`, `permet de passer à la musique suivante\nDiminutif: ${prefix}sk`, true)
        .addField(`${prefix}pause`, `permet de mettre en pause la musique\nDiminutif: ${prefix}pe`, true)
        .addField(`${prefix}reprendre`, `permet de reprendre la musique en pause\nDiminutif: ${prefix}re`, true)
        .addField(`${prefix}loop`, `permet de rejouer une musique\nPour plus d'info: ${prefix}helploop`, true)
        .addField(`${prefix}queue`, `permet de voir la file d'attente des musiques\nDiminutif: ${prefix}qe`, true)
        .addField(`${prefix}lyrics`, `permet d'avoir les paroles d'une musique\nPour plus d'info: ${prefix}helplyrics`, true)
        .setThumbnail(avatarServeur)
        .setFooter(`WayLectron Bot by Niroshy#0426`, avatarNiroshy)
        .setTimestamp();
        message.channel.send(embed);
    }

    if(message.content.startsWith(prefix + `helpban`))
    {
        let avatarNiroshy = Client.users.cache.get(BDD[`idNiroshy`]).displayAvatarURL({ format: `png`, dynamic: true });
        let avatarMembre = message.author.displayAvatarURL({ format: `png`, dynamic: true });
        let avatarServeur = message.guild.iconURL({ format: `png`, dynamic: true });
        var embed = new Discord.MessageEmbed()
        .setColor(`#00FE00`)
        .setTitle(`**HELP BAN**`)
        .setAuthor(`${message.member.displayName}#${message.author.discriminator}`, avatarMembre)
        .setDescription(`<@${message.author.id}> Voici des informations supplémentaires sur la commande ban:\n${prefix}ban @pseudo [raison]`)
        .setThumbnail(avatarServeur)
        .setFooter(`WayLectron Bot by Niroshy#0426`, avatarNiroshy)
        .setTimestamp();
        message.channel.send(embed);
    }

    if(message.content.startsWith(prefix + `helpkick`))
    {
        let avatarNiroshy = Client.users.cache.get(BDD[`idNiroshy`]).displayAvatarURL({ format: `png`, dynamic: true });
        let avatarMembre = message.author.displayAvatarURL({ format: `png`, dynamic: true });
        let avatarServeur = message.guild.iconURL({ format: `png`, dynamic: true });
        var embed = new Discord.MessageEmbed()
        .setColor(`#00FE00`)
        .setTitle(`**HELP KICK**`)
        .setAuthor(`${message.member.displayName}#${message.author.discriminator}`, avatarMembre)
        .setDescription(`<@${message.author.id}> Voici des informations supplémentaires sur la commande kick:\n${prefix}kick @pseudo [raison]\nDiminutif: ${prefix}kk`)
        .setThumbnail(avatarServeur)
        .setFooter(`WayLectron Bot by Niroshy#0426`, avatarNiroshy)
        .setTimestamp();
        message.channel.send(embed);
    }

    if(message.content.startsWith(prefix + `helpwarn`))
    {
        let avatarNiroshy = Client.users.cache.get(BDD[`idNiroshy`]).displayAvatarURL({ format: `png`, dynamic: true });
        let avatarMembre = message.author.displayAvatarURL({ format: `png`, dynamic: true });
        let avatarServeur = message.guild.iconURL({ format: `png`, dynamic: true });
        var embed = new Discord.MessageEmbed()
        .setColor(`#00FE00`)
        .setTitle(`**HELP WARN**`)
        .setAuthor(`${message.member.displayName}#${message.author.discriminator}`, avatarMembre)
        .setDescription(`<@${message.author.id}> Voici des informations supplémentaires sur la commande warn:\n${prefix}warn @pseudo [raison]\nDiminutif: ${prefix}wn`)
        .setThumbnail(avatarServeur)
        .setFooter(`WayLectron Bot by Niroshy#0426`, avatarNiroshy)
        .setTimestamp();
        message.channel.send(embed);
    }

    if(message.content.startsWith(prefix + `helpunwarn`))
    {
        let avatarNiroshy = Client.users.cache.get(BDD[`idNiroshy`]).displayAvatarURL({ format: `png`, dynamic: true });
        let avatarMembre = message.author.displayAvatarURL({ format: `png`, dynamic: true });
        let avatarServeur = message.guild.iconURL({ format: `png`, dynamic: true });
        var embed = new Discord.MessageEmbed()
        .setColor(`#00FE00`)
        .setTitle(`**HELP UNWARN**`)
        .setAuthor(`${message.member.displayName}#${message.author.discriminator}`, avatarMembre)
        .setDescription(`<@${message.author.id}> Voici des informations supplémentaires sur la commande unwarn:\n${prefix}unwarn @pseudo [raison]\nDiminutif: ${prefix}uwn`)
        .setThumbnail(avatarServeur)
        .setFooter(`WayLectron Bot by Niroshy#0426`, avatarNiroshy)
        .setTimestamp();
        message.channel.send(embed);
    }

    if(message.content.startsWith(prefix + `helpinfraction`))
    {
        let avatarNiroshy = Client.users.cache.get(BDD[`idNiroshy`]).displayAvatarURL({ format: `png`, dynamic: true });
        let avatarMembre = message.author.displayAvatarURL({ format: `png`, dynamic: true });
        let avatarServeur = message.guild.iconURL({ format: `png`, dynamic: true });
        var embed = new Discord.MessageEmbed()
        .setColor(`#00FE00`)
        .setTitle(`**HELP INFRACTION**`)
        .setAuthor(`${message.member.displayName}#${message.author.discriminator}`, avatarMembre)
        .setDescription(`<@${message.author.id}> Voici des informations supplémentaires sur la commande infraction:\n${prefix}infraction @pseudo\nDiminutif: ${prefix}inf`)
        .setThumbnail(avatarServeur)
        .setFooter(`WayLectron Bot by Niroshy#0426`, avatarNiroshy)
        .setTimestamp();
        message.channel.send(embed);
    }

    if(message.content.startsWith(prefix + `helpmute`))
    {
        let avatarNiroshy = Client.users.cache.get(BDD[`idNiroshy`]).displayAvatarURL({ format: `png`, dynamic: true });
        let avatarMembre = message.author.displayAvatarURL({ format: `png`, dynamic: true });
        let avatarServeur = message.guild.iconURL({ format: `png`, dynamic: true });
        var embed = new Discord.MessageEmbed()
        .setColor(`#00FE00`)
        .setTitle(`**HELP MUTE**`)
        .setAuthor(`${message.member.displayName}#${message.author.discriminator}`, avatarMembre)
        .setDescription(`<@${message.author.id}> Voici des informations supplémentaires sur la commande mute:\n${prefix}mute @pseudo [raison]\nDiminutif: ${prefix}me`)
        .setThumbnail(avatarServeur)
        .setFooter(`WayLectron Bot by Niroshy#0426`, avatarNiroshy)
        .setTimestamp();
        message.channel.send(embed);
    }

    if(message.content.startsWith(prefix + `helptempmute`))
    {
        let avatarNiroshy = Client.users.cache.get(BDD[`idNiroshy`]).displayAvatarURL({ format: `png`, dynamic: true });
        let avatarMembre = message.author.displayAvatarURL({ format: `png`, dynamic: true });
        let avatarServeur = message.guild.iconURL({ format: `png`, dynamic: true });
        var embed = new Discord.MessageEmbed()
        .setColor(`#00FE00`)
        .setTitle(`**HELP TEMPMUTE**`)
        .setAuthor(`${message.member.displayName}#${message.author.discriminator}`, avatarMembre)
        .setDescription(`<@${message.author.id}> Voici des informations supplémentaires sur la commande tempmute:\n${prefix}tempmute @pseudo (durée) [raison]\nDiminutif: ${prefix}tme`)
        .setThumbnail(avatarServeur)
        .setFooter(`WayLectron Bot by Niroshy#0426`, avatarNiroshy)
        .setTimestamp();
        message.channel.send(embed);
    }

    if(message.content.startsWith(prefix + `helpunmute`))
    {
        let avatarNiroshy = Client.users.cache.get(BDD[`idNiroshy`]).displayAvatarURL({ format: `png`, dynamic: true });
        let avatarMembre = message.author.displayAvatarURL({ format: `png`, dynamic: true });
        let avatarServeur = message.guild.iconURL({ format: `png`, dynamic: true });
        var embed = new Discord.MessageEmbed()
        .setColor(`#00FE00`)
        .setTitle(`**HELP UNMUTE**`)
        .setAuthor(`${message.member.displayName}#${message.author.discriminator}`, avatarMembre)
        .setDescription(`<@${message.author.id}> Voici des informations supplémentaires sur la commande unmute:\n${prefix}unmute @pseudo [raison]\nDiminutif: ${prefix}ume`)
        .setThumbnail(avatarServeur)
        .setFooter(`WayLectron Bot by Niroshy#0426`, avatarNiroshy)
        .setTimestamp();
        message.channel.send(embed);
    }

    if(message.content.startsWith(prefix + `helpplay`))
    {
        let avatarNiroshy = Client.users.cache.get(BDD[`idNiroshy`]).displayAvatarURL({ format: `png`, dynamic: true });
        let avatarMembre = message.author.displayAvatarURL({ format: `png`, dynamic: true });
        let avatarServeur = message.guild.iconURL({ format: `png`, dynamic: true });
        var embed = new Discord.MessageEmbed()
        .setColor(`#00FE00`)
        .setTitle(`**HELP PLAY**`)
        .setAuthor(`${message.member.displayName}#${message.author.discriminator}`, avatarMembre)
        .setDescription(`<@${message.author.id}> Voici des informations supplémentaires sur la commande play:\n${prefix}play (auteur) [titre]\nDiminutif: ${prefix}py`)
        .setThumbnail(avatarServeur)
        .setFooter(`WayLectron Bot by Niroshy#0426`, avatarNiroshy)
        .setTimestamp();
        message.channel.send(embed);
    }

    if(message.content.startsWith(prefix + `helpsearch`))
    {
        let avatarNiroshy = Client.users.cache.get(BDD[`idNiroshy`]).displayAvatarURL({ format: `png`, dynamic: true });
        let avatarMembre = message.author.displayAvatarURL({ format: `png`, dynamic: true });
        let avatarServeur = message.guild.iconURL({ format: `png`, dynamic: true });
        var embed = new Discord.MessageEmbed()
        .setColor(`#00FE00`)
        .setTitle(`**HELP SEARCH**`)
        .setAuthor(`${message.member.displayName}#${message.author.discriminator}`, avatarMembre)
        .setDescription(`<@${message.author.id}> Voici des informations supplémentaires sur la commande search:\nSi vous n'êtes pas connecté dans un salon vocal alors le bot vous enverras la musique qu'il a trouvé et si au contraire vous voulez qu'il joue la musique alors connectez vous dans un salon vocal et tapez: ${prefix}search (auteur) [titre]\nDiminutif: ${prefix}sh`)
        .setThumbnail(avatarServeur)
        .setFooter(`WayLectron Bot by Niroshy#0426`, avatarNiroshy)
        .setTimestamp();
        message.channel.send(embed);
    }

    if(message.content.startsWith(prefix + `helploop`))
    {
        let avatarNiroshy = Client.users.cache.get(BDD[`idNiroshy`]).displayAvatarURL({ format: `png`, dynamic: true });
        let avatarMembre = message.author.displayAvatarURL({ format: `png`, dynamic: true });
        let avatarServeur = message.guild.iconURL({ format: `png`, dynamic: true });
        var embed = new Discord.MessageEmbed()
        .setColor(`#00FE00`)
        .setTitle(`**HELP LOOP**`)
        .setAuthor(`${message.member.displayName}#${message.author.discriminator}`, avatarMembre)
        .setDescription(`<@${message.author.id}> Voici des informations supplémentaires sur la commande loop:\n${prefix}loop musique/queue/off\nDiminutif: ${prefix}lp`)
        .setThumbnail(avatarServeur)
        .setFooter(`WayLectron Bot by Niroshy#0426`, avatarNiroshy)
        .setTimestamp();
        message.channel.send(embed);
    }

    if(message.content.startsWith(prefix + `helplyrics`))
    {
        let avatarNiroshy = Client.users.cache.get(BDD[`idNiroshy`]).displayAvatarURL({ format: `png`, dynamic: true });
        let avatarMembre = message.author.displayAvatarURL({ format: `png`, dynamic: true });
        let avatarServeur = message.guild.iconURL({ format: `png`, dynamic: true });
        var embed = new Discord.MessageEmbed()
        .setColor(`#00FE00`)
        .setTitle(`**HELP LYRICS**`)
        .setAuthor(`${message.member.displayName}#${message.author.discriminator}`, avatarMembre)
        .setDescription(`<@${message.author.id}> Voici des informations supplémentaires sur la commande lyrics:\nSi vous êtes en train d'écouter une musique et que vous voulez avoir les paroles alors tapez: ${prefix}lyrics\nSi vous voulez rechercher les paroles d'une autre musique alors tapez: ${prefix}lyrics musique\nDiminutif: ${prefix}ls`)
        .setThumbnail(avatarServeur)
        .setFooter(`WayLectron Bot by Niroshy#0426`, avatarNiroshy)
        .setTimestamp();
        message.channel.send(embed);
    }

    if(message.content.startsWith(prefix + `ban`))
    {
        let args = message.content.split(` `);
        let raison = args.splice(2).join(` `);
        let mention = message.mentions.members.first();

        if(!mention)
        {
            return message.channel.send(`<@${message.author.id}> Vous n'avez pas mentionné de membre !`);
        }
        else if(!mention.bannable)
        {
            return message.channel.send(`<@${message.author.id}> La personne que vous avez mentionné (<@${mention.id}>) n'est pas bannissable !`);
        }
        else if(!message.member.hasPermission(`BAN_MEMBERS`))
        {
            return message.channel.send(`<@${message.author.id}> Vous n'avez pas la permission de bannir des membres !`);
        }
        else if(!raison[0])
        {
            return message.channel.send(`<@${message.author.id}> Vous n'avez pas indiqué de raison de ban !`);
        }
        else
        {
            let avatarModerateur = message.author.displayAvatarURL({ format: `png`, dynamic: true });
            let avatarMention = mention.user.displayAvatarURL({ format: `png`, dynamic: true });
            let avatarServeur = message.guild.iconURL({ format: `png`, dynamic: true });
            var embed = new Discord.MessageEmbed()
            .setColor(`#FE0000`)
            .setTitle(`**BAN**`)
            .setAuthor(`${message.member.displayName}#${message.author.discriminator}`, avatarModerateur)
            .setDescription(`<@${mention.id}> a été banni par <@${message.author.id}>\nraison: ${raison}`)
            .setThumbnail(avatarMention)
            .setImage(avatarServeur)
            .setFooter(`WayLectron Bot by Niroshy#0426`, avatarNiroshy)
            .setTimestamp();
            message.channel.send(embed);

            mention.ban();
        }
    }

    if((message.content.startsWith(prefix + `kick`)) || (message.content.startsWith(prefix + `kk`)))
    {
        let args = message.content.split(` `);
        let raison = args.splice(2).join(` `);
        let mention = message.mentions.members.first();

        if(!mention)
        {
            return message.channel.send(`<@${message.author.id}> Vous n'avez pas mentionné de membre !`);
        }
        else if(!mention.kickable)
        {
            return message.channel.send(`<@${message.author.id}> La personne que vous avez mentionné (<@${mention.id}>) ne peut pas être kick !`);
        }
        else if(!message.member.hasPermission(`KICK_MEMBERS`))
        {
            return message.channel.send(`<@${message.author.id}> Vous n'avez pas la permission de kick des membres !`);
        }
        else if(!raison[0])
        {
            return message.channel.send(`<@${message.author.id}> Vous n'avez pas indiqué de raison de kick !`);
        }
        else
        {
            let avatarNiroshy = Client.users.cache.get(BDD[`idNiroshy`]).displayAvatarURL({ format: `png`, dynamic: true });
            let avatarModerateur = message.author.displayAvatarURL({ format: `png`, dynamic: true });
            let avatarMention = mention.user.displayAvatarURL({ format: `png`, dynamic: true });
            let avatarServeur = message.guild.iconURL({ format: `png`, dynamic: true });
            var embed = new Discord.MessageEmbed()
            .setColor(`#FE0000`)
            .setTitle(`**KICK**`)
            .setAuthor(`${message.member.displayName}#${message.author.discriminator}`, avatarModerateur)
            .setDescription(`<@${mention.id}> a été kick par <@${message.author.id}>\nraison: ${raison}`)
            .setThumbnail(avatarMention)
            .setImage(avatarServeur)
            .setFooter(`WayLectron Bot by Niroshy#0426`, avatarNiroshy)
            .setTimestamp();
            message.channel.send(embed);

            mention.kick();
        }
    }

    if((message.content.startsWith(prefix + `warn`)) || (message.content.startsWith(prefix + `wn`)))
    {
        let args = message.content.split(` `);
        let raison = args.splice(2).join(` `);
        let mention = message.mentions.members.first();
        
        if(!mention)
        {
            return message.channel.send(`<@${message.author.id}> Vous n'avez pas mentionné de membre !`);
        }
        else if(!message.member.hasPermission(`MANAGE_MESSAGES`))
        {
            return message.channel.send(`<@${message.author.id}> Vous n'avez pas la permission de gérer les messages !`);
        }
        else if(!raison[0])
        {
            return message.channel.send(`<@${message.author.id}> Vous n'avez pas indiqué de raison de warn !`);
        }
        else if(!BDD[message.guild.id])
        {
            BDD[message.guild.id] = {};
            SaveBDD();
            return message.channel.send(`Je viens de mettre votre serveur dans ma base de donnée ! Veuillez retaper la même commande !`);
        }
        else if(!BDD[message.guild.id][`Warn`])
        {
            BDD[message.guild.id][`Warn`] = {};
            SaveBDD();
            return message.channel.send(`Je viens de crée une rubrique dans ma base de donnée ! Veuillez retaper la commande !`);
        }
        if(!BDD[message.guild.id][`Warn`][mention.id])
        {
            BDD[message.guild.id][`Warn`][mention.id] = 1;
            SaveBDD();

            let avatarNiroshy = Client.users.cache.get(BDD[`idNiroshy`]).displayAvatarURL({ format: `png`, dynamic: true });
            let avatarModerateur = message.author.displayAvatarURL({ format: `png`, dynamic: true });
            let avatarMention = mention.user.displayAvatarURL({ format: `png`, dynamic: true });
            let avatarServeur = message.guild.iconURL({ format: `png`, dynamic: true });
            var embed = new Discord.MessageEmbed()
            .setColor(`#FE0000`)
            .setTitle(`**WARN**`)
            .setAuthor(`${message.member.displayName}#${message.author.discriminator}`, avatarModerateur)
            .setDescription(`<@${mention.id}> a été warn par <@${message.author.id}>\nraison: ${raison}\n<@${mention.id}> a actuellement 1 warn !`)
            .setThumbnail(avatarMention)
            .setImage(avatarServeur)
            .setFooter(`WayLectron Bot by Niroshy#0426`, avatarNiroshy)
            .setTimestamp();
            message.channel.send(embed);
        }
        else
        {
            let avatarNiroshy = Client.users.cache.get(BDD[`idNiroshy`]).displayAvatarURL({ format: `png`, dynamic: true });
            let warnMember = BDD[message.guild.id][`Warn`][mention.id] + 1;
            let avatarModerateur = message.author.displayAvatarURL({ format: `png`, dynamic: true });
            let avatarMention = mention.user.displayAvatarURL({ format: `png`, dynamic: true });
            let avatarServeur = message.guild.iconURL({ format: `png`, dynamic: true });
            var embed = new Discord.MessageEmbed()
            .setColor(`#FE0000`)
            .setTitle(`**WARN**`)
            .setAuthor(`${message.member.displayName}#${message.author.discriminator}`, avatarModerateur)
            .setDescription(`<@${mention.id}> a été warn par <@${message.author.id}>\nraison: ${raison}\n<@${mention.id}> a actuellement ${warnMember} warn !`)
            .setThumbnail(avatarMention)
            .setImage(avatarServeur)
            .setFooter(`WayLectron Bot by Niroshy#0426`, avatarNiroshy)
            .setTimestamp();
            message.channel.send(embed);

            BDD[message.guild.id][`Warn`][mention.id] += 1;
            SaveBDD();

            if(BDD[message.guild.id][`Warn`][mention.id] == 3)
            {
                if(!message.guild.roles.cache.find(role => role.name == `Muted`))
                {
                    message.guild.roles.create(
                    {
                        data:
                        {
                            name: `Muted`,
                            permissions: 0,
                        }
                    });
                }
                let role = message.guild.roles.cache.find(role => role.name == `Muted`).id;
                mention.roles.add(role);
                message.channel.send(`<@${mention.id}> a actuellement 3 warns ! Je viens de le mute pendant 2 heures !`);
                BDD[message.guild.id][`Warn`][mention.id] = 0;
                SaveBDD();

                setTimeout(function()
                {
                    mention.roles.remove(role);
                    message.channel.send(`<@${mention.id}> Peut de nouveau parler !`);
                }, 7200000)
            }
        }
    }

    if((message.content.startsWith(prefix + `unwarn`)) || (message.content.startsWith(prefix + `uwn`)))
    {
        let args = message.content.split(` `);
        let raison = args.splice(2).join(` `);
        let mention = message.mentions.members.first();

        if(!mention)
        {
            return message.channel.send(`<@${message.author.id}> Vous n'avez pas mentionné de membre !`);
        }
        else if(!message.member.hasPermission(`MANAGE_MESSAGES`))
        {
            return message.channel.send(`<@${message.author.id}> Vous n'avez pas la permission de gérer les messages !`);
        }
        else if(!raison[0])
        {
            return message.channel.send(`<@${message.author.id}> Vous n'avez pas indiqué de raison !`);
        }
        else if(!BDD[message.guild.id])
        {
            BDD[message.guild.id] = {};
            SaveBDD();
            return message.channel.send(`J'ai rajouté votre serveur dans ma base de donnée, veuillez retaper la commande !`);
        }
        else if(!BDD[message.guild.id][`Warn`])
        {
            BDD[message.guild.id][`Warn`] = {};
            SaveBDD();
            return message.channel.send(`Je viens de rajouter une rubrique dans ma base de donnée ! Veuillez retaper la commande !`);
        }
        else if(!BDD[message.guild.id][`Warn`][mention.id])
        {
            return message.channel.send(`<@${mention.id}> n'a pas de warn actuellement !`);
        }
        else
        {
            let avatarNiroshy = Client.users.cache.get(BDD[`idNiroshy`]).displayAvatarURL({ format: `png`, dynamic: true });
            let unwarnMember = BDD[message.guild.id][`Warn`][mention.id] - 1;
            let avatarModerateur = message.author.displayAvatarURL({ format: `png`, dynamic: true });
            let avatarMention = mention.user.displayAvatarURL({ format: `png`, dynamic: true });
            let avatarServeur = message.guild.iconURL({ format: `png`, dynamic: true });
            var embed = new Discord.MessageEmbed()
            .setColor(`#00FE00`)
            .setTitle(`**UNWARN**`)
            .setAuthor(`${message.member.displayName}#${message.author.discriminator}`, avatarModerateur)
            .setDescription(`<@${mention.id}> a été unwarn par <@${message.author.id}>\nraison: ${raison}\n<@${mention.id}> a actuellement ${unwarnMember} warn !`)
            .setThumbnail(avatarMention)
            .setImage(avatarServeur)
            .setFooter(`WayLectron Bot by Niroshy#0426`, avatarNiroshy)
            .setTimestamp();
            message.channel.send(embed);

            BDD[message.guild.id][`Warn`][mention.id] -= 1;
            SaveBDD();
        }
    }

    if((message.content.startsWith(prefix + `infraction`)) || (message.content.startsWith(prefix + `inf`)))
    {
        let mention = message.mentions.members.first();

        if(!mention)
        {
            return message.channel.send(`<@${message.author.id}> Vous n'avez pas mentionné de membre !`);
        }
        else if(!message.member.hasPermission(`MANAGE_MESSAGES`))
        {
            return message.channel.send(`<@${message.author.id}> Vous n'avez pas la permission de gérer les messages !`);
        }
        else if(!BDD[message.guild.id])
        {
            BDD[message.guild.id] = {};
            SaveBDD();
            return message.channel.send(`<@${message.author.id}> J'ai rajouté votre serveur dans ma base de donnée ! Veuillez retaper la commande !`);
        }
        else if(!BDD[message.guild.id][`Warn`])
        {
            BDD[message.guild.id][`Warn`] = {};
            SaveBDD();
            return message.channel.send(`<@${message.author.id}> Je viens de rajouté une rubrique dans ma base de donnée ! Veuillez retaper la commande !`);
        }
        else if(!BDD[message.guild.id][`Warn`][mention.id])
        {
            return message.channel.send(`<@${mention.id}> n'a pas de warn actuellement !`);
        }
        else
        {
            let avatarNiroshy = Client.users.cache.get(BDD[`idNiroshy`]).displayAvatarURL({ format: `png`, dynamic: true });
            let warnNumber = BDD[message.guild.id][`Warn`][mention.id]
            let avatarModerateur = message.author.displayAvatarURL({ format: `png`, dynamic: true });
            let avatarMention = mention.user.displayAvatarURL({ format: `png`, dynamic: true });
            let avatarServeur = message.guild.iconURL({ format: `png`, dynamic: true });
            var embed = new Discord.MessageEmbed()
            .setColor(`#FE0000`)
            .setTitle(`**INFRACTION**`)
            .setAuthor(`${message.member.displayName}#${message.author.discriminator}`, avatarModerateur)
            .setDescription(`<@${mention.id}> a actuellement ${warnNumber} warn`)
            .setThumbnail(avatarMention)
            .setImage(avatarServeur)
            .setFooter(`WayLectron Bot by Niroshy#0426`, avatarNiroshy)
            .setTimestamp();
            message.author.send(embed);
        }
    }

    if((message.content.startsWith(prefix + `mute`)) || (message.content.startsWith(prefix + `me`)))
    {
        let args = message.content.split(` `);
        let raison = args.splice(2).join(` `);
        let mention = message.mentions.members.first();

        if(!mention)
        {
            return message.channel.send(`<@${message.author.id}> Vous n'avez pas mentionné de membre !`);
        }
        else if(!message.member.hasPermission(`MANAGE_MESSAGES`))
        {
            return message.channel.send(`<@${message.author.id}> Vous n'avez pas mentionné de membre !`);
        }
        else if(!raison[0])
        {
            return message.channel.send(`<@${message.author.id}> Vous n'avez pas indiqué de raison !`);
        }
        else if(!message.guild.roles.cache.find(role => role.name == `Muted`))
        {
            message.guild.roles.create(
                {
                    data:
                    {
                        name: `Muted`,
                        permissions: 0,
                    }
                }
            );
            return message.channel.send(`<@${message.author.id}> Je viens de crée le rôle Muted mais malheureusement je ne praviens pas à le mettre à <@${mention.id}>, ce problème peut être résolu en retapant la commande !`);
        }
        else
        {
            let avatarNiroshy = Client.users.cache.get(BDD[`idNiroshy`]).displayAvatarURL({ format: `png`, dynamic: true });
            let role = message.guild.roles.cache.find(role => role.name == `Muted`).id;
            let avatarModerateur = message.author.displayAvatarURL({ format: `png`, dynamic: true });
            let avatarMention = mention.user.displayAvatarURL({ format: `png`, dynamic: true });
            let avatarServeur = message.guild.iconURL({ format: `png`, dynamic: true });
            var embed = new Discord.MessageEmbed()
            .setColor(`#FE0000`)
            .setTitle(`**MUTE**`)
            .setAuthor(`${message.member.displayName}#${message.author.discriminator}`, avatarModerateur)
            .setDescription(`<@${mention.id}> a été mute par <@${message.author.id}>\nraison: ${raison}`)
            .setThumbnail(avatarMention)
            .setImage(avatarServeur)
            .setFooter(`WayLectron Bot by Niroshy#0426`, avatarNiroshy)
            .setTimestamp();
            message.channel.send(embed);

            mention.roles.add(role);
        }
    }

    if((message.content.startsWith(prefix + `tempmute`)) || (message.content.startsWith(prefix + `tme`)))
    {
        let args = message.content.split(` `);
        let timing = args[2];
        let durée = timing / 3600;
        let raison = args.splice(3).join(` `);
        let mention = message.mentions.members.first();

        if(!mention)
        {
            return message.channel.send(`<@${message.author.id}> Vous n'avez pas mentionné de membre !`);
        }
        else if(!message.member.hasPermission(`MANAGE_MESSAGES`))
        {
            return message.channel.send(`<@${message.author.id}> Vous n'avez pas la permission de gérer les messages !`);
        }
       else if(!timing)
        {
            return message.channel.send(`<@${message.author.id}> Veuillez indiqué la durée !`);
        }
        else if(isNaN(timing))
        {
            return message.channel.send(`<@${message.author.id}> ${timing} n'est pas un nombre ! Veuillez indiqué la durée !`);
        }
        else if(!raison[0])
        {
            return message.channel.send(`<@${message.author.id}> Vous n'avez pas indiqué de raison !`);
        }
        else if(!message.guild.roles.cache.find(role => role.name == `Muted`))
        {
            message.guild.roles.create(
            {
                data:
                {
                    name: `Muted`,
                    permissions: 0,
                }
            });
            
            return message.channel.send(`<@${message.author.id}> Je viens de crée le rôle Muted mais malheureusement je ne praviens pas à le mettre à <@${mention.id}>, ce problème peut être résolu en retapant la commande !`);
        }
        else
        {
            let avatarNiroshy = Client.users.cache.get(BDD[`idNiroshy`]).displayAvatarURL({ format: `png`, dynamic: true });
            let role = message.guild.roles.cache.find(role => role.name == `Muted`).id;
            let avatarModerateur = message.author.displayAvatarURL({ format: `png`, dynamic: true });
            let avatarMention = mention.user.displayAvatarURL({ format: `png`, dynamic: true });
            let avatarServeur = message.guild.iconURL({ format: `png`, dynamic: true });
            var embed = new Discord.MessageEmbed()
            .setColor(`#FE0000`)
            .setTitle(`**TEMPMUTE**`)
            .setAuthor(`${message.member.displayName}#${message.author.discriminator}`, avatarModerateur)
            .setDescription(`<@${mention.id}> a été tempmute par <@${message.author.id}>\npendant: ${durée} minutes\nraison: ${raison}`)
            .setThumbnail(avatarMention)
            .setImage(avatarServeur)
            .setFooter(`WayLectron Bot by Niroshy#0426`, avatarNiroshy)
            .setTimestamp();
            message.channel.send(embed);

            mention.roles.add(role);

            setTimeout(function()
            {
                mention.roles.remove(role);
                message.channel.send(`<@${mention.id}> Tu peux à nouveau parler !`);
            }, timing);
        }
    }

    if((message.content.startsWith(prefix + `unmute`)) || (message.content.startsWith(prefix + `ume`)))
    {
        let args = message.content.split(` `);
        let raison = args.splice(2).join(` `);
        let mention = message.mentions.members.first();

        if(!mention)
        {
            return message.channel.send(`<@${message.author.id}> Vous n'avez pas mentionné de membre !`);
        }
        else if(!message.member.hasPermission(`MANAGE_MESSAGES`))
        {
            return message.channel.send(`<@${message.author.id}> Vous n'avez pas la permission de gérer les messages !`);
        }
        else if(!raison[0])
        {
            return message.channel.send(`<@${message.author.id}> Vous n'avez pas indiqué de raison !`);
        }
        else if(!mention.roles.cache.find(role => role.name == `Muted`))
        {
            return message.channel.send(`<@${mention.id}> n'est pas mute actuellement !`);
        }
        else
        {
            let avatarNiroshy = Client.users.cache.get(BDD[`idNiroshy`]).displayAvatarURL({ format: `png`, dynamic: true });
            let role = message.guild.roles.cache.find(role => role.name == `Muted`).id;
            let avatarModerateur = message.author.displayAvatarURL({ format: `png`, dynamic: true });
            let avatarMention = mention.user.displayAvatarURL({ format: `png`, dynamic: true });
            let avatarServeur = message.guild.iconURL({ format: `png`, dynamic: true });
            var embed = new Discord.MessageEmbed()
            .setColor(`#00FE00`)
            .setTitle(`**UNMUTE**`)
            .setAuthor(`${message.member.displayName}#${message.author.discriminator}`, avatarModerateur)
            .setDescription(`<@${mention.id}> a été unmute par <@${message.author.id}>\nraison: ${raison}`)
            .setThumbnail(avatarMention)
            .setImage(avatarServeur)
            .setFooter(`WayLectron Bot by Niroshy#0426`, avatarNiroshy)
            .setTimestamp();
            message.channel.send(embed);

            mention.roles.remove(role);
        }
    }

    if((message.content.startsWith(prefix + `play`)) || (message.content.startsWith(prefix + `py`)))
    {
        let args = message.content.split(` `);

        execute(message, serverQueue, args);
    }

    if((message.content.startsWith(prefix + `search`)) || (message.content.startsWith(prefix + `sh`)))
    {

        if(!message.member.voice.channel)
        {
            let args = message.content.split(` `);
            let Query = args.splice(1).join(` `);

            if(!Query)
            {
            return message.channel.send(`<@${message.author.id}> Veuillez indiquer une recherche de musique !`);
            }

            let res = await ytsr(Query).catch(err =>
            {
                return message.channel.send(`Une erreur est survenue au moment de la recherche, plus d'info ici: ${err}`);
            });

            let video = res.items.filter(i => i.type == `video`)[0];

            if(!video)
            {
                return message.channel.send(`Aucun resultat !`);
            }

            let avatarNiroshyID = Client.users.cache.get(BDD[`idNiroshy`]);
            let avatarNiroshy = avatarNiroshyID.displayAvatarURL({ format: `png`, dynamic: true });
            let avatarServer = message.guild.iconURL({ format: `png`, dynamic: true });
            let avatarAuthor = message.author.displayAvatarURL({ format: `png`, dynamic: true });
            var embed = new Discord.MessageEmbed()
            .setColor(`#00F6FE`)
            .setTitle(`**SEARCH**`)
            .setAuthor(message.member.displayName, avatarAuthor)
            .setImage(`${video.bestThumbnail.url}`)
            .setThumbnail(`${avatarServer}`)
            .setDescription(`${video.title}`)
            .addField(`Auteur`, video.author.name, true)
            .addField(`Vues`, video.views, true)
            .addField(`Durée`, video.duration, true)
            .setFooter(`WayLectron Bot by Niroshy#0426`, avatarNiroshy)
            .setTimestamp();
            message.channel.send(embed);

            message.channel.send(`<@${message.author.id}> Si tu veux que je joue cette musique alors connecte toi dans un salon vocal et retape la commande !`);
        }
        else
        {
            let args = message.content.split(` `);

            execute(message, serverQueue, args)
        }
    }

    if((message.content.startsWith(prefix + `stop`)) || (message.content.startsWith(prefix + `sp`)))
    {
        stop(message, serverQueue);

        return message.channel.send(`<@${message.author.id}> Toutes les musiques ont été retirées !`);
    }

    if((message.content.startsWith(prefix + `skip`)) || (message.content.startsWith(prefix + `sk`)))
    {
        skip(message, serverQueue);

        return message.channel.send(`<@${message.author.id}> Prochaine Musique !`);
    }

    if((message.content.startsWith(prefix + `pause`)) || (message.content.startsWith(prefix + `pe`)))
    {
        pause(serverQueue);
        
        return message.channel.send(`<@${message.author.id}> La musique vient d'être mis en pause !`);
    }

    if((message.content.startsWith(prefix + `reprendre`)) || (message.content.startsWith(prefix + `re`)))
    {
        resume(serverQueue);

        return message.channel.send(`<@${message.author.id}> La musique vient de reprendre !`);
    }

    if((message.content.startsWith(prefix + `loop`)) || (message.content.startsWith(prefix + `lp`)))
    {
        let args = message.content.split(` `);
    
        loop(args, serverQueue);
    }

    if((message.content.startsWith(prefix + `queue`)) || (message.content.startsWith(prefix + `qe`)))
    {
        queueMusic(serverQueue);
    }

    if((message.content.startsWith(prefix + `lyrics`)) || (message.content.startsWith(prefix + `ls`)))
    {
        let args = message.content.split(` `);

        if(args[1] == `musique`)
        {
            let Artiste = ``;
            let SongName = ``;
            let Pages = [];
            let CurrentPage = 0;
            const MessageFilter = m => m.author.id === message.author.id;
            const ReactionFilter = (reaction, user) => [`⬅️`, `➡️`].includes(reaction.emoji.name) && (message.author.id === user.id);

            if(args.length = 2)
            {
                message.channel.send(`Veuillez entrer le chanteur de la musique maintenant !`);

                await message.channel.awaitMessages(MessageFilter, { max: 1, time: 15000 }).then(collected =>
                    {
                        Artiste = collected.first().content;

                    }).catch(() =>
                    {
                        Artiste = ``;

                        return message.channel.send(`Le temps est écoulé !`);
                    });

                    message.channel.send(`Veuillez rentrer le titre de la musique maintenant !`);

                    await message.channel.awaitMessages(MessageFilter, { max: 1, time: 15000 }).then(async collected =>
                        {
                            SongName = collected.first().content;
        
                            await finder(Artiste, SongName, message, Pages);
                        }).catch(() =>
                        {
                            Artiste = ``;
                            SongName = ``;
                            return message.channel.send(`Le temps est écoulé !`);
                        });
        
                    const lyricEmbed = await message.channel.send(`Lyric page: ${CurrentPage + 1} / ${Pages.length}`, Pages[CurrentPage]);
                    await lyricEmbed.react(`⬅️`);
                    await lyricEmbed.react(`➡️`);
        
                    const Collector = lyricEmbed.createReactionCollector(ReactionFilter);
        
                    Collector.on(`collect`, (reaction, user) =>
                    {
                        if(reaction.emoji.name === `➡️`)
                        {
                            if(CurrentPage < Pages.length - 1)
                            {
                                CurrentPage += 1;
                                lyricEmbed.edit(`Lyrics page: ${CurrentPage + 1} / ${Pages.length}`, Pages[CurrentPage]);
                                message.reactions.resolve(reaction).users.remove(user);
                            }
                        }
                        else if(reaction.emoji.name === `⬅️`)
                        {
                            if(CurrentPage !== 0)
                            {
                                CurrentPage -= 1;
                                lyricEmbed.edit(`Lyrics page: ${CurrentPage + 1} / ${Pages.length}`, Pages[CurrentPage]);
                                message.reactions.resolve(reaction).users.remove(user);
                            }
                        }
                    });
            }
        }

           if(serverQueue && args.length == 1)
           {
            let Artiste = serverQueue.songs[0].author;
            let SongName = serverQueue.songs[0].title;
            let Pages = [];
            let CurrentPage = 0;
            const ReactionFilter = (reaction, user) => [`⬅️`, `➡️`].includes(reaction.emoji.name) && (message.author.id === user.id);
 
            await finder(Artiste, SongName, message, Pages);
 
            const lyricEmbed = await message.channel.send(`Lyric page: ${CurrentPage + 1} / ${Pages.length}`, Pages[CurrentPage]);
            await lyricEmbed.react(`⬅️`);
            await lyricEmbed.react(`➡️`);
 
            const Collector = lyricEmbed.createReactionCollector(ReactionFilter);
 
            Collector.on(`collect`, (reaction, user) =>
            {
                if(reaction.emoji.name === `➡️`)
                {
                    if(CurrentPage < Pages.length - 1)
                    {
                        CurrentPage += 1;
                        lyricEmbed.edit(`Lyrics page: ${CurrentPage + 1} / ${Pages.length}`, Pages[CurrentPage]);
                        message.reactions.resolve(reaction).users.remove(user);
                    }
                }
                else if(reaction.emoji.name === `⬅️`)
                {
                    if(CurrentPage !== 0)
                    {
                        CurrentPage -= 1;
                        lyricEmbed.edit(`Lyrics page: ${CurrentPage + 1} / ${Pages.length}`, Pages[CurrentPage]);
                        message.reactions.resolve(reaction).users.remove(user);
                    }
                }
            });
           }
           else
           {
               return message.channel.send(`Veuillez mettre uniquement -lyrics ou -ls`);
           }
        }


    async function execute(message, serverQueue, args)
    {
        let vc = message.member.voice.channel;
        let Query = args.splice(1).join(` `);
    
        if(!vc)
        {
            return message.channel.send(`Vous n'êtes pas connecté dans un salon vocal !`);
        }
        else if(!Query)
        {
            return message.channel.send(`Veuillez mettre le titre de la musique !`);
        }
        else
        {
            let res = await ytsr(Query);
            let video = res.items.filter(i => i.type == `video`)[0];
    
            if(!video)
            {
                return message.channel.send(`Pas de résultat !`);
            }
    
            const songInfo = await ytdl.getInfo(video.url);
    
            let song = 
            {
                title: songInfo.videoDetails.title,
                url: songInfo.videoDetails.video_url,
                author: video.author.name,
            }
    
            if(!serverQueue)
            {
                const queueConstructor =
                {
                    txtChannel: message.channel,
                    vChannel: vc,
                    connection: null,
                    songs: [],
                    volume: 10,
                    playing: true,
                }
    
                queue.set(message.guild.id, queueConstructor);
    
                queueConstructor.songs.push(song);
    
                try
                {
                    let connection = await vc.join();
    
                    queueConstructor.connection = connection;
    
                    play(message.guild, queueConstructor.songs[0]);

                    let avatarNiroshy = Client.users.cache.get(BDD[`idNiroshy`]).displayAvatarURL({ format: `png`, dynamic: true });
                    let avatarServer = message.guild.iconURL({ format: `png`, dynamic: true });
                    let avatarAuthor = message.author.displayAvatarURL({ format: `png`, dynamic: true });
                    var embed = new Discord.MessageEmbed()
                    .setColor(`#00F6FE`)
                    .setTitle(`**SEARCH**`)
                    .setAuthor(message.member.displayName, avatarAuthor)
                    .setImage(`${video.bestThumbnail.url}`)
                    .setThumbnail(`${avatarServer}`)
                    .setDescription(`${video.title}`)
                    .addField(`Auteur`, video.author.name, true)
                    .addField(`Vues`, video.views, true)
                    .addField(`Durée`, video.duration, true)
                    .setFooter(`WayLectron Bot by Niroshy#0426`, avatarNiroshy)
                    .setTimestamp();

                    message.channel.send(embed);
                }
                catch(err)
                {
                    console.log(err);
    
                    queue.delete(message.guild.id);
                    return message.channel.send(`Impossible de rejoindre la vocal ! ${err}`);
                }
            }
            else
            {
                serverQueue.songs.push(song);
                return message.channel.send(`La musique a bien été ajoutée ! ${song.url}`);
            }
        }
    }
    
    function play(guild, song)
    {
        const serverQueue = queue.get(guild.id);
    
        if(!song)
        {
            serverQueue.vChannel.leave();
            queue.delete(guild.id);
            return;
        }
    
        const dispatcher = serverQueue.connection
        .play(ytdl(song.url))
        .on(`finish`, () =>
        {
            if(serverQueue.loopmusique)
            {
                play(guild, serverQueue.songs[0]);
            }
            else if(serverQueue.loopqueue)
            {
                serverQueue.songs.push(serverQueue.songs[0]);
                serverQueue.songs.shift();
            }
            else
            {
                serverQueue.songs.shift();
            }
            
            play(guild, serverQueue.songs[0]);
        });
    }
    
    function stop(message, serverQueue)
    {
        if(!message.member.voice.channel)
        {
            return message.channel.send(`Vous n'êtes pas dans un salon vocal !`);
        }
    
        serverQueue.songs = [];
        serverQueue.connection.dispatcher.end();
    }
    
    function skip(message, serverQueue)
    {
        if(!message.member.voice.channel)
        {
            return message.channel.send(`Vous n'êtes pas dans un salon vocal !`);
        }
    
        if(!serverQueue)
        {
            return message.channel.send(`Il n'y a pas de musique !`);
        }
    
        serverQueue.connection.dispatcher.end();
    }
    
    function pause(serverQueue)
    {
        if(!serverQueue)
        {
            return message.channel.send(`Il y a aucune musique en cours !`);
        }
    
        if(!message.member.voice.channel)
        {
            return message.channel.send(`Vous n'êtes pas connecté dans un salon vocal !`);
        }
    
        if(serverQueue.connection.dispatcher.paused)
        {
            return message.channel.send(`La musique est déjà en pause !`);
        }
    
        serverQueue.connection.dispatcher.pause();
    
        message.channel.send(`La musique a bien été mis en pause !`);
    }
    
    function resume(serverQueue)
    {
        if(!serverQueue)
        {
            return message.channel.send(`Il y a aucune musique en cours !`);
        }
    
        if(!message.member.voice.channel)
        {
            return message.channel.send(`Vous n'êtes pas connecté dans un salon vocal !`);
        }
    
        if(serverQueue.connection.dispatcher.resumed)
        {
            return message.channel.send(`La musique est déjà en cours !`);
        }
    
        serverQueue.connection.dispatcher.resume();
    
        message.channel.send(`La musique a bien été repris !`);
    }
    
    function loop(args, serverQueue)
    { 
        if(!args[1])
        {
            return message.channel.send(`<@${message.author.id}> Veuillez spécifier la loop que vous voulez: ${prefix}loop musique/queue/off`);
        }
    
        switch(args[1].toLowerCase())
        {
            case `queue`:
    
            serverQueue.loopqueue = !serverQueue.loopqueue;
            serverQueue.loopmusique = false;
    
            if(serverQueue.loopqueue == true)
            {
                message.channel.send(`La loop queue est activée !`);
            }
            else 
            {
                message.channel.send(`La loop queue est désactivée !`);
            }
    
            break;
    
            case `musique`:
    
            serverQueue.loopmusique = !serverQueue.loopmusique;
            serverQueue.loopqueue = false;
    
            if(serverQueue.loopmusique == true)
            {
                message.channel.send(`La loop musique est activée !`);
            }
            else 
            {
                message.channel.send(`La loop musique est désactivée !`);
            }
    
            break;
    
            case `off`:
    
            serverQueue.loopqueue = false;
            serverQueue.loopmusique = false;
    
            message.channel.send(`Loop désactivée !`);
    
            break;
        }
      }
    
    function queueMusic(serverQueue)
    {
        if(!serverQueue)
        {
            return message.channel.send(`Il y a aucune musique en cours !`);
        }
    
        if(!message.member.voice.channel)
        {
            return message.channel.send(`Vous n'êtes pas connecté dans un salon vocal !`);
        }
    
        let nowPlaying = serverQueue.songs[0];
        let qMsg = `Musique en cours: ${nowPlaying.title}\n-----------------------------------------------------\n`
    
        for(var i = 1; i < serverQueue.songs.length; i++)
        {
            qMsg += `${i}) ${serverQueue.songs[i].title}\n`
        }
        
        let avatarServeur = message.guild.iconURL({ format: `png`, dynamic: true });
        let avatarMembre = message.author.displayAvatarURL({ format: `png`, dynamic: true });
        let avatarNiroshy = Client.users.cache.get(BDD[`idNiroshy`]).displayAvatarURL({ format: `png`, dynamic: true });
        let embed = new Discord.MessageEmbed()
        .setColor(`#00F6FE`)
        .setTitle(`**QUEUE**`)
        .setAuthor(`${message.member.displayName}#${message.author.discriminator}`, avatarMembre)
        .setDescription(qMsg)
        .setThumbnail(avatarServeur)
        .setFooter(`WayLectron Bot by Niroshy#0426`, avatarNiroshy)
        .setTimestamp();
        message.channel.send(embed);
    }
    
    async function finder(Artiste, SongName, message, Pages)
    {
        let FullLyrics = await lyricsFinder(Artiste, SongName) || `Pas trouvé !`;
    
        for(let i = 0; i < FullLyrics.length; i += 2048)
        {
            const lyric = FullLyrics.substring(i, Math.min(FullLyrics.length, i + 2048));

            let avatarServeur = message.guild.iconURL({ format: `png`, dynamic: true });
            let avatarMembre = message.author.displayAvatarURL({ format: `png`, dynamic: true });
            let avatarNiroshy = Client.users.cache.get(BDD[`idNiroshy`]).displayAvatarURL({ format: `png`, dynamic: true });
            const Embed = new Discord.MessageEmbed()
            .setColor(`#00F6FE`)
            .setTitle(`**QUEUE**`)
            .setAuthor(`${message.member.displayName}#${message.author.discriminator}`, avatarMembre)
            .setDescription(lyric)
            .setThumbnail(avatarServeur)
            .setFooter(`WayLectron Bot by Niroshy#0426`, avatarNiroshy)
            .setTimestamp();
            Pages.push(Embed); 
        }
    }

});


function SaveBDD()
    {
        fs.writeFile(`./BaseDeDonnée.json`, JSON.stringify(BDD, null, 4), (err) =>
        {
            if(err)
            {
                console.log(`Problème avec la fonction de la base de données ! ${err}`);
                Client.channels.cache.get(`834410393639059467`).send(`Une erreur est survenue avec la function SaveBDD ${err}`);
            }
        });
    }


Client.login(``);