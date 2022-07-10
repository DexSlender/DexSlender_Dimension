import { registerFont } from "canvas";
import { ShardClient } from "detritus-client";
import { Listr } from "listr2";
import { connect, connection, ConnectionStates } from "mongoose";
import { join } from "path";
import * as events from "../utils/handlers/events";
import client, { commands } from "./client";

const COMMANDS_PATH: string = "commands";

interface ctx {
	value: string;
	client: ShardClient;
}

const tasks = new Listr<ctx>(
	[
		{
			title: "Load events.",
			task: async (ctx, task) => {
				task.output = "Loading...";
				let loaded = await events.on(client);
				task.title = `Loaded ${loaded} events.`
			},
		},
		{
			title: "Connect to Gateway.",
			task: async (ctx, task) => {
				task.output = "Connecting...";
				await client.run({ wait: true });
				task.title = `Ready as ${client.user.tag}.`;
			},
		},
		{
			title: "Load Interaction Commands.",
			task: async (ctx, task) => {
				task.output = "Reading files...";
				await commands.addMultipleIn(COMMANDS_PATH);
				task.output = "Starting InteractionCommandClient...";
				await commands.run();
				task.title = `Loaded ${commands.commands.size} interaction commands.`
			},
		},
		{
			title: "Connect to MongoDB.",
			task: async (ctx, task) => {
				task.output = "Connecting...";
				await connect(process.env.mongoUri)
				task.title = `Connected [Status: ${ConnectionStates[connection.readyState].toUpperCase()}]`
			},
			exitOnError: false,
		}
	],
	{
		exitOnError: true,
		rendererOptions: {
			showTimer: true,
		},
	}
)

export default tasks;