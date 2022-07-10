import { ShardClient, Collections } from "detritus-client";
import { BaseCollection, EventSubscription } from "detritus-utils";
import { readdirSync } from "fs";
import { join } from "path";
import ClientEvent from "../ClientEvent";
import { ClientEvents } from "../constants";

async function importFile(path: string) {
    return (await import(path))?.default;
}

let listeners = new BaseCollection<string, EventSubscription>();

export async function on(client: ShardClient): Promise<number> {
    let quantity: number = 0;
    for await (const f of readdirSync(join(__dirname, "../../events"))) {
        const event: ClientEvent<keyof ClientEvents> = 
			await importFile(`../../events/${f}`);
        if (event.event) {
            try {
                quantity++
                let listener = client[event.type](event.event, event.run.bind(null, client));
                if(event.type == "subscribe") {
                    listeners.set(join(__dirname, `../../events/${f}`), listener as EventSubscription);
                }
            } catch (e) {
                quantity--
                event.onError(client, e);
            }
        }
    }
    return quantity;
}

export async function reload(client: ShardClient) {
    for (let [key, listener] of listeners.entries()) {
        delete require.cache[key];
        listener.remove();
    }
    return on(client);
}
