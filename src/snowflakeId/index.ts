import { TwitterSnowflake } from "@sapphire/snowflake";

export const genId = () => {
  return TwitterSnowflake.generate().toString();
};
