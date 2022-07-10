import ClientEvent from "../utils/ClientEvent";

export default new ClientEvent({
	event: "gatewayReady",
	type: "once",
	run: (client, payload) => {
		
	}
})