declare global {
	namespace NodeJS {
		interface ProcessEnv {
			token: string;
			mongoUri: string;
			guildId: string;
			webhook: string;
			webhookId: string;
			webhookToken: string;
			channelwelcome: string;
			channelbye: string;
		}
	}
}

export {};