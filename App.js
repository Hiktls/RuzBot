// https://giphy.com/gifs/kiss-man-boy-11JwraRupZNJSg
// Name: Ruz's Bot
// Format: user1 and user2 stop fighting!
// User profile: https://i1.sndcdn.com/artworks-000607023112-jm999j-t500x500.jpg
const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return;
  if (interaction.commandName === "ping") {
    await interaction.reply("Pong!");
  }
});
client.on("message", (msg) => {
  const args = msg.content.slice("$".length).trim().split(" ");
  const command = args.shift().toLowerCase();
  if (msg.guild == null) {
    if (command == "stop") {
      const messageEmbed = new Discord.MessageEmbed();
      messageEmbed.setImage(
        "https://media.giphy.com/media/11JwraRupZNJSg/giphy.gif"
      );
      console.log(args[1] + " " + args[2]);
      const user1 = client.guilds.cache
        .get("859503099239596042")
        .members.cache.get(args[1]).user.id;
      const user2 = client.guilds.cache
        .get("859503099239596042")
        .member(args[2]).user.id;
      messageEmbed.addField(
        "Stop",
        `**<@${user1}> and <@${user2}> stop fighting!**`
      );
      messageEmbed.setColor("#ff00bb");
      client.channels.cache.get(args[0]).send(messageEmbed);
    }
  }
});

client.login(config.bot);
