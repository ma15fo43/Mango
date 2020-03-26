import * as Discord from "discord.js";
import * as Logger from "./../utils/Logger";

export default async (Client: Discord.Client, error: Error) => {
	Logger.error(error.message);
};
