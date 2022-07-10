import { ShardClient } from "detritus-client";
import { EventSubscription } from "detritus-utils";
import { ClientEvents } from "./constants";

export type Listeners = keyof ClientEvents;
export type ListenerType = "on" | "subscribe" | "once";
export type RunFunction<Key extends Listeners> = (client: ShardClient, payload: ClientEvents[Key]) => Promise<void> | void;
export type ErrorFunction = (client: ShardClient, error: any) => Promise<void> | void;

interface EventOptions<Key extends Listeners> {
	event: Key;
	type?: ListenerType;
	run: RunFunction<Key>;
	onError?: ErrorFunction;
}

export default class ClientEvent<Key extends Listeners> {
	constructor(options: EventOptions<Key>){
		this.event = options.event;
		this.type = options.type ?? "subscribe";
		this.run = options.run;
		this.onError = options.onError ?? null;
	}

	public event: Key;
	public type: ListenerType;
	public run: RunFunction<Key>;
	public onError: ErrorFunction;
}