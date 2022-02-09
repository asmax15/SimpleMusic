module.exports = {
    name: 'resume',
    aliases: ['rs'],
    utilisation: '{prefix}resume',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue) return message.channel.send(`No music currently playing ${message.author}... try again? Operation failed!`);

        const success = queue.setPaused(false);

        return message.channel.send(success ? `Current music ${queue.current.title} resumed Operation successfull` : `Something went wrong ${message.author}... try again? Operation failed!`);
    },
};