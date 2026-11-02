import type { CollectionEntry } from "astro:content";

export type Log = CollectionEntry<"logs">;

export const sortedLogs = (logs: Log[]) =>
  logs.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());

export const getAdjacentLogs = (logs: Log[], current: Log) => {
  const ordered = sortedLogs(logs);
  const index = ordered.findIndex((log) => log.id === current.id);

  return {
    newer: index > 0 ? ordered[index - 1] : undefined,
    older: index >= 0 && index < ordered.length - 1 ? ordered[index + 1] : undefined,
  };
};

export const logSlug = (log: Log) => log.id.replace(/\/index$/, "");

export const logHref = (log: Log) => `/blog/logs/${logSlug(log)}/`;
