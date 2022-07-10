import { Constants, Interaction, Structures, Utils } from "detritus-client";
import { Embed } from "detritus-client/lib/utils";
import * as $Utils from "../utils";

export interface SlashCommandOptions extends Interaction.InteractionCommandOptions {
    name: string;
    description: string;
}

interface ContextCommandOptions extends Interaction.InteractionCommandOptions {

}

export class BaseInteractionCommand<
    ParsedArgsFinished = Interaction.ParsedArgs
> extends Interaction.InteractionCommand<ParsedArgsFinished> {
    constructor(data: SlashCommandOptions) {
        super({
            ...data,
            guildIds: [process.env.guildId]
        })
    }
    onDmBlocked(context: Interaction.InteractionContext) {
        let command = Utils.Markup.codestring(context.name);
        return this.EphemeralRespond(context, {
            embed: new Embed()
                .setColor(this.colors.RED)
                .setAuthor("Error")
                .setTitle(`No puedes usar ${command} aqui!`),
        });
    }
    onAutoCompleteError(context: Interaction.InteractionAutoCompleteContext, error: any) {
        console.error(this.typeError, error);
    }
    onError(context: Interaction.InteractionContext, args: Interaction.ParsedArgs, error: any) {
        console.error(this.typeError, error);
    }
    onRunError(context: Interaction.InteractionContext, args: ParsedArgsFinished, error: any) {
        console.error(this.typeError, error);
    }
    onPermissionsFail(context: Interaction.InteractionContext, failed: Interaction.FailedPermissions) {
        let command = Utils.Markup.codestring(context.name);
        let fails = "";
        for (let [k, v] of Object.entries(Constants.Permissions))
            if (failed.includes(v)) {
                const perm = Utils.Markup.codestring(k);
                fails += `\n${perm}`;
            }

        return this.EphemeralRespond(context, {
            embed: new Embed()
                .setColor(this.colors.RED)
                .setAuthor("Permissions Error")
                .setTitle(
                    `No tienes los permisos necesarios para ejecutar ${command}`
                )
                .setDescription(`Necesitas: ${fails}`),
        });
    }
    onPermissionsFailClient(context: Interaction.InteractionContext, failed: Interaction.FailedPermissions) {
        let command = Utils.Markup.codestring(context.name);
        let fails = "";
        for (let [k, v] of Object.entries(Constants.Permissions))
            if (failed.includes(v)) {
                const perm = Utils.Markup.codestring(k);
                fails += `\n${perm}`;
            }

        return this.EphemeralRespond(context, {
            embed: new Embed()
                .setColor(this.colors.RED)
                .setAuthor("Permissions Bot Error")
                .setTitle(
                    `No tengo los permisos necesarios para ejecutar ${command}`
                )
                .setDescription(`Necesito: ${fails}`),
        });
    }
	typeError = "Command";
    flags = Constants.MessageFlags;
    ephemeral = Constants.MessageFlags.EPHEMERAL;
    colors = $Utils.EmbedColors;
    images = $Utils.Images;
    responds = Constants.InteractionCallbackTypes;
    btnstyles = Constants.MessageComponentButtonStyles;
    EphemeralRespond(
        context: Interaction.InteractionContext,
        data: string | Structures.InteractionEditOrRespond
    ) {
        if (typeof data == "string") {
            return context.editOrRespond({
                content: data,
                flags: this.ephemeral,
            });
        } else {
            return context.editOrRespond({
                ...data,
                flags: this.ephemeral,
            });
        }
    }
}

export class BaseCommandOption<
    ParsedArgsFinished = Interaction.ParsedArgs
> extends Interaction.InteractionCommandOption<ParsedArgsFinished> {
    type = Constants.ApplicationCommandOptionTypes.SUB_COMMAND;
}

export class BaseCommandOptionGroup<
    ParsedArgsFinished = Interaction.ParsedArgs
> extends Interaction.InteractionCommandOption<ParsedArgsFinished> {
    type = Constants.ApplicationCommandOptionTypes.SUB_COMMAND_GROUP;
}

export class BaseSlashCommand<
    ParsedArgsFinished = Interaction.ParsedArgs
> extends BaseInteractionCommand<ParsedArgsFinished> {
    typeError = "Slash Command";
    type = Constants.ApplicationCommandTypes.CHAT_INPUT;
}

export interface ContextMenuMessageArgs {
    message: Structures.Message;
}

export class BaseContextMenuMessageCommand extends BaseInteractionCommand<ContextMenuMessageArgs> {
    typeError = "Message Context Menu";
    type = Constants.ApplicationCommandTypes.MESSAGE;
}

export interface ContextMenuUserArgs {
    member?: Structures.Member;
    user: Structures.User;
}

export class BaseContextMenuUserCommand extends BaseInteractionCommand<ContextMenuUserArgs> {
    typeError = "User Context Menu";
    type = Constants.ApplicationCommandTypes.USER;
}
