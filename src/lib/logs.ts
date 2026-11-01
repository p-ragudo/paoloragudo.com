import type { CollectionEntry } from "astro:content";

export type Log = CollectionEntry<"logs">;

export const sortedLogs = (logs: Log[]) =>
  logs.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());

export const logSlug = (log: Log) => log.id.replace(/\/index$/, "");

export const logHref = (log: Log) => `/blog/logs/${logSlug(log)}/`;