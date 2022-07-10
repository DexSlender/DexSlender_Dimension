import { InteractionContext } from "detritus-client/lib/interaction";
import { ComponentActionRow, Embed } from "detritus-client/lib/utils";
import { onlyOwner } from "../utils";
import { BaseSlashCommand } from "./basecommand";

@onlyOwner
export default class extends BaseSlashCommand<args> {
    constructor() {
        super({
            name: "exec",
            description: "Create|Execute dev custom action. (only bot owner)",
            options: [
                {
                    name: "key",
                    description: "The key of the action",
                    required: true,
                }
            ]
        })
    }
    public async run(context: InteractionContext, args: args) {
        switch(args.key) {
            case "reload": {
                try {
                    await context.interactionCommandClient.resetCommands();
                } catch (error) {
                    return context.editOrRespond({
                        flags: this.ephemeral,
                        embed: new Embed()
							.setTitle("Error "+error.message)
							.setColor(this.colors.GREEN),
                    });
                }
                return context.editOrRespond({
                    flags: this.ephemeral,
                    embed: new Embed()
							.setTitle("Reloaded")
							.setColor(this.colors.GREEN),
                });
            };
            case "btn":
            case "verify":
            case "button": {
                await context.respond(this.responds.DEFERRED_CHANNEL_MESSAGE_WITH_SOURCE, { flags: this.ephemeral });
                const row = new ComponentActionRow();
                row.createButton()
                    .setCustomId("verify")
                    .setStyle(this.btnstyles.SUCCESS)
                    .setEmoji("<:diamond_legendary:942488597637001226>")
                    .setLabel("Verify");
                await context.channel.createMessage({
                    embed: new Embed()
                        .setColor(this.colors.GREEN)
                        .setAuthor("Verify")
                        .setDescription("Press the button for verify!\nPresiona el boton para verificarte!"),
                    components: [row]
                });
                return context.editOrRespond({
                    flags: this.ephemeral,
                    embed: new Embed()
                        .setTitle("Ok")
                        .setColor(this.colors.GREEN)
                })
            };
            default: {
                return context.editOrRespond({
                    flags: this.ephemeral,
                    content: "Unknown action"
                })
            }
        }
    }
}

interface args {
    key: string;
}