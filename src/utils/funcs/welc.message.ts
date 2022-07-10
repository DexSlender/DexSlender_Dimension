import { ShardClient } from "detritus-client";
import { Member } from "detritus-client/lib/structures";

export default (client: ShardClient,member: Member) => {
	let list = [
		`Parece que **${member.user.username}** ha decidido unirse al server :D, Saludenlo!`, 
		`Que bien, ha llegado **${member.user.username}** :0`, 
		`Woow **${member.user.username}** se unió al server!`, 
		`Den todos la bienvenida a **${member.user.username}**!`, 
		`Gracias por unirte **${member.user.username}** espero que disfrutes tu estadia :D!`, 
		`Epic **${member.user.username}** se ha unido al server...`, 
		`Holaaa **${member.user.username}** bienvenid@ a este server!`,
		`Ojooo **${member.user.username}** se unió a este server!`
	]
	let finalMessage = list[Math.floor(Math.random() * list.length)];
	client.rest.executeWebhook(process.env.webhookId, process.env.webhookToken, {
		content: "<:arrow_right:897235812826116176> "+finalMessage,
		allowedMentions: {
			users: [member.id]
		}
	});
}