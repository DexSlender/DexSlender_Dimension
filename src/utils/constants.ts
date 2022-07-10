import { GatewayClientEvents as Events } from "detritus-client";

export enum EmbedColors {
    GREEN = 0x00ff00,
    PURPLE = 0x6002ee,
    RED = 0xff0000,
    YELLOW = 0xffec00,
    CYAN = 0x00deff,
    BLACK = 0x000000,
    WHITE = 0xffffff
}

export enum Images {
    /** Gif */
    Loading = "https://i.gifer.com/7HXn.gif",
    Check = "https://amazonassociat.com/upload/icon/checked.gif",
} 

export interface ClientEvents {
    activityJoinInvite: Events.ActivityJoinInvite;
    activityJoinRequest: Events.ActivityJoinRequest;
    activityStart: Events.ActivityStart;
    applicationCommandCreate: Events.ApplicationCommandCreate;
    applicationCommandDelete: Events.ApplicationCommandDelete;
    applicationCommandUpdate: Events.ApplicationCommandUpdate;
    braintreePopupBridgeCallback: Events.BraintreePopupBridgeCallback;
    callCreate: Events.CallCreate;
    callDelete: Events.CallDelete;
    callUpdate: Events.CallUpdate;
    channelCreate: Events.ChannelCreate;
    channelDelete: Events.ChannelDelete;
    channelUpdate: Events.ChannelUpdate;
    channelPinsAck: Events.ChannelPinsAck;
    channelPinsUpdate: Events.ChannelPinsUpdate;
    channelRecipientAdd: Events.ChannelRecipientAdd;
    channelRecipientRemove: Events.ChannelRecipientRemove;
    entitlementCreate: Events.EntitlementCreate;
    entitlementDelete: Events.EntitlementDelete;
    entitlementUpdate: Events.EntitlementUpdate;
    friendSuggestionCreate: Events.FriendSuggestionCreate;
    friendSuggestionDelete: Events.FriendSuggestionDelete;
    gatewayReady: Events.GatewayReady;
    gatewayResumed: Events.GatewayResumed;
    giftCodeUpdate: Events.GiftCodeUpdate;
    guildBanAdd: Events.GuildBanAdd;
    guildBanRemove: Events.GuildBanRemove;
    guildCreate: Events.GuildCreate;
    guildDelete: Events.GuildDelete;
    guildEmojisUpdate: Events.GuildEmojisUpdate;
    guildIntegrationsUpdate: Events.GuildIntegrationsUpdate;
    guildMemberAdd: Events.GuildMemberAdd;
    guildMemberListUpdate: Events.GuildMemberListUpdate;
    guildMemberRemove: Events.GuildMemberRemove;
    guildMemberUpdate: Events.GuildMemberUpdate;
    guildMembersChunk: Events.GuildMembersChunk;
    guildReady: Events.GuildReady;
    guildRoleCreate: Events.GuildRoleCreate;
    guildRoleDelete: Events.GuildRoleDelete;
    guildRoleUpdate: Events.GuildRoleUpdate;
    guildStickersUpdate: Events.GuildStickersUpdate;
    guildUpdate: Events.GuildUpdate;
    interactionCreate: Events.InteractionCreate;
    inviteCreate: Events.InviteCreate;
    inviteDelete: Events.InviteDelete;
    libraryApplicationUpdate: Events.LibraryApplicationUpdate;
    lobbyCreate: Events.LobbyCreate;
    lobbyDelete: Events.LobbyDelete;
    lobbyUpdate: Events.LobbyUpdate;
    lobbyMemberConnect: Events.LobbyMemberConnect;
    lobbyMemberDisconnect: Events.LobbyMemberDisconnect;
    lobbyMemberUpdate: Events.LobbyMemberUpdate;
    lobbyMessage: Events.LobbyMessage;
    lobbyVoiceServerUpdate: Events.LobbyVoiceServerUpdate;
    lobbyVoiceStateUpdate: Events.LobbyVoiceStateUpdate;
    messageAck: Events.MessageAck;
    messageCreate: Events.MessageCreate;
    messageDelete: Events.MessageDelete;
    messageDeleteBulk: Events.MessageDeleteBulk;
    messageReactionAdd: Events.MessageReactionAdd;
    messageReactionRemove: Events.MessageReactionRemove;
    messageReactionRemoveAll: Events.MessageReactionRemoveAll;
    messageReactionRemoveEmoji: Events.MessageReactionRemoveEmoji;
    messageUpdate: Events.MessageUpdate;
    presencesReplace: Events.PresencesReplace;
    presenceUpdate: Events.PresenceUpdate;
    recentMentionDelete: Events.RecentMentionDelete;
    relationshipAdd: Events.RelationshipAdd;
    relationshipRemove: Events.RelationshipRemove;
    sessionsReplace: Events.SessionsReplace;
    stageInstanceCreate: Events.StageInstanceCreate;
    stageInstanceDelete: Events.StageInstanceDelete;
    stageInstanceUpdate: Events.StageInstanceUpdate;
    streamCreate: Events.StreamCreate;
    streamDelete: Events.StreamDelete;
    streamServerUpdate: Events.StreamServerUpdate;
    streamUpdate: Events.StreamUpdate;
    threadCreate: Events.ThreadCreate;
    threadDelete: Events.ThreadDelete;
    threadListSync: Events.ThreadListSync;
    threadMemberUpdate: Events.ThreadMemberUpdate;
    threadMembersUpdate: Events.ThreadMemberUpdate;
    threadUpdate: Events.ThreadUpdate;
    typingStart: Events.TypingStart;
    typingStop: Events.TypingStop;
    userAchievementUpdate: Events.UserAchievementUpdate;
    userConnectionsUpdate: Events.UserConnectionsUpdate;
    userFeedSettingsUpdate: Events.UserFeedSettingsUpdate;
    userGuildSettingsUpdate: Events.UserGuildSettingsUpdate;
    userNoteUpdate: Events.UserNoteUpdate;
    userPaymentSourcesUpdate: Events.UserPaymentSourcesUpdate;
    userPaymentsUpdate: Events.UserPaymentsUpdate;
    userRequiredActionUpdate: Events.UserRequiredActionUpdate;
    userUpdate: Events.UserUpdate;
    usersUpdate: Events.UsersUpdate;
    voiceServerUpdate: Events.VoiceServerUpdate;
    voiceStateUpdate: Events.VoiceStateUpdate;
    webhooksUpdate: Events.WebhooksUpdate;
    raw: Events.Raw;
    restRequest: Events.RestRequest;
    restResponse: Events.RestRequest;
    unknown: Events.Unknown;
    warn: Events.Warn;
    killed: Events.Killed;
}