import { InteractionContext, ParsedArgs } from "detritus-client/lib/interaction";
import { Embed } from "detritus-client/lib/utils";
import { connection } from "mongoose";
import { BaseSlashCommand } from "./basecommand";

export default class extends BaseSlashCommand {
	constructor() {
		super({
			name: "ping",
			description: "Obtener la latencia del bot."
		})
	}
	async run(context: InteractionContext, args: ParsedArgs) {
		await context.createResponse(this.responds.DEFERRED_CHANNEL_MESSAGE_WITH_SOURCE);
		const ping = await context.client.ping();
		const db_ping = await new Promise((s, r) => {
			try {
				const now = Date.now();
				connection.db.admin().ping((err, res) => {
					if(err || !res) return r(err || new Error("DB Ping Error"));
					s(Date.now() - now);
				})
			} catch (e) {
				r(e);
			}
		});

		return context.editOrRespond({
			embed: new Embed()
				.setColor(this.colors.GREEN)
				.setDescription(`Discord Gateway: \`${ping.gateway}\`\nDiscord Rest API: \`${ping.rest}\`\nMongoDB Ping: \`${db_ping}\``)
				.setTitle("Ping!")
		});
	}
}