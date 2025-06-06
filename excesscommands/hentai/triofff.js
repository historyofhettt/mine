const { EmbedBuilder } = require('discord.js');
const { gifs } = require('mediacord');

module.exports = {
    name: 'triofff',
    description: 'Fetches a random trio of 3 females gif.',
    async execute(message, args) {
        if (!message.channel.nsfw) {
            return message.reply('This command can only be used in NSFW channels.');
        }

        try {
            const gifUrl = await gifs.nsfw.triofff();

            const embed = new EmbedBuilder()
                .setTitle('Trio of 3 Females Gif')
                .setImage(gifUrl)
                .setColor('#ff69b4');

            message.reply({ embeds: [embed] });

        } catch (error) {
            console.error(error);
            message.reply('Something went wrong while fetching the gif. Please try again later.');
        }
    },
};
