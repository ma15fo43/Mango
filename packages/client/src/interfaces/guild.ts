export interface Guild {
	id: string;
	name: string;
	icon: string;
	features: [];
	commands: [];
	members: [];
	channels: [];
	bans: [];
	roles: [];
	stageInstances: [];
	invites: [];
	deleted: boolean;
	shardId: number;
	splash: string;
	banner: string;
	description: string;
	verificationLevel: string;
	vanityURLCode: string;
	nsfwLevel: string;
	discoverySplash: string;
	memberCount: number;
	large: boolean;
	applicationId: string;
	afkTimeout: number;
	afkChannelId: string;
	systemChannelId: string;
	premiumTier: string;
	premiumSubscriptionCount: number;
	explicitContentFilter: string;
	mfaLevel: string;
	joinedTimestamp: number;
	defaultMessageNotifications: string;
	systemChannelFlags: number;
	maximumMembers: number;
	maximumPresences: number;
	approximateMemberCount: number;
	approximatePresenceCount: number;
	vanityURLUses: number;
	rulesChannelId: string;
	publicUpdatesChannelId: string;
	preferredLocale: string;
	ownerId: string;
	emojis: [];
	stickers: [];
	createdTimestamp: number;
	nameAcronym: string;
	iconURL: string;
	splashURL: string;
	discoverySplashURL: string;
	bannerURL: string;
}
