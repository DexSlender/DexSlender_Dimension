import { InteractionCallbackTypes, MessageFlags } from "detritus-client/lib/constants";
import { InteractionDataComponent } from "detritus-client/lib/structures";
import ClientEvent from "../utils/ClientEvent";
import { Timers } from "detritus-utils";

export default new ClientEvent({
	event: "interactionCreate",
	run: async (_client, { interaction }) => {
		if(interaction.guildId === process.env.guildId) {
			if((interaction.data as InteractionDataComponent)?.customId === "verify") {
				let member = interaction.member;
				interaction.createResponse(InteractionCallbackTypes.CHANNEL_MESSAGE_WITH_SOURCE, {
					content: `<:gg:897469065172500551> **${member.tag}** Verificado!`,
					flags: MessageFlags.EPHEMERAL
				})
				await Timers.sleep(1000)
				let roles = [
					"896053173641424977",
					"896415429835259934",
					"896413873215782912",
					"896047777740648498",
				]
				for await (let id of roles) {
					await member.addRole(id, { reason: "Verify Member." }).catch(
						_ => console.error(`Failed to add role for ${member.tag}, roleId ${id}`)
					)
				};
			}
		}
	}
})