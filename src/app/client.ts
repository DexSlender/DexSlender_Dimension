import { Constants, InteractionCommandClient, ShardClient } from "detritus-client";
import { Constants as $Constants } from "detritus-client-socket";

const client = new ShardClient(process.env.token, {
	gateway: {
		intents: $Constants.GATEWAY_INTENTS_ALL,
		identifyProperties: {
			$browser: "Discord Android"
		},
		presence: {
			activity: {
				type: Constants.ActivityTypes.LISTENING,
				name: "bits..."
			}
		}
	}
});

export const commands = new InteractionCommandClient(client);

export default client;