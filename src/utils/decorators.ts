import { Embed } from "detritus-client/lib/utils";
import { BaseSlashCommand, SlashCommandOptions } from "../commands/basecommand";

/** Only as decorator. */
export function test(target: any) {
	console.log("Tested!")
}


export function onlyOwner<T extends typeof BaseSlashCommand<{}>>(target: T) {
	// @ts-ignore
	return class extends target {
		constructor(options: SlashCommandOptions) {
			super(options);
			let old = this.onBefore ?? undefined
			this.onBefore = async (ctx) => {
				if(!ctx.user.isClientOwner) {
					ctx.editOrRespond({
						embed: new Embed()
							.setTitle("This command is private or only for the owner.")
							.setColor(this.colors.GREEN),
						flags: this.ephemeral
					});
					return false;
				}
				if(old) {
					return old(ctx);
				} else {
					return true;
				}
			};
		}
	}
}