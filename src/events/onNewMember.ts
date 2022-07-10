import { createCanvas, loadImage } from "canvas";
import ClientEvent from "../utils/ClientEvent";
import welcImg from "../utils/funcs/welc.img";
import welcMessage from "../utils/funcs/welc.message";


export default new ClientEvent({
	event: "guildMemberAdd",
	run: async (client, { member, guildId }) => {
		if(guildId === process.env.guildId) {
			welcMessage(client, member);
			let buff = await welcImg(member.user);
			let channel = client.channels.get(process.env.channelwelcome);
			channel.createMessage({
				file: {
					value: buff,
					filename: "welcome.png"
				},
				content: `Bienvenid@ ${member.mention} | No olvides leer las reglas...`
			})
		}
	}
});