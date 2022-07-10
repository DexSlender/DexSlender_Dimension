import ClientEvent from "../utils/ClientEvent";
import byeImg from "../utils/funcs/bye.img";


export default new ClientEvent({
	event: "guildMemberRemove",
	run: async (client, { member, guildId }) => {
		if(guildId === process.env.guildId) {
			let buff = await byeImg(member.user);
			let channel = client.channels.get(process.env.channelbye);
			channel.createMessage({
				file: {
					value: buff,
					filename: "bye.png"
				},
			})
		}
	}
});