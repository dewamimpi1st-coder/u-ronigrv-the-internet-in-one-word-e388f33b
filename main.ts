// The Internet in One Word — make.fun bounty entry.
//
// The entry is a single word and nothing else: "Procrastination".
// It captures the whole internet in one beat — the thing the internet
// most reliably is for almost everyone who opens it: the place you go
// to put off whatever you were supposed to be doing. It is funny on
// its own, true of the internet as a whole rather than of any one app
// or site, and surprising next to the obvious answers (connected,
// global, information) while staying instantly readable.
//
// This program is deterministic and uses only the Node standard
// library. It writes exactly that word (no trailing newline, no
// extra text) to entry.txt inside the output directory, which is
// /output by default and can be overridden with MAKEFUN_OUTPUT_DIR
// for local testing. It refuses to run if the word falls outside
// the bounty gate of 1-30 characters, and it reads the file back
// after writing and throws if the content is not exactly the word.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = "Procrastination";
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const OUTPUT_FILE = join(OUTPUT_DIR, "entry.txt");

if (ENTRY.length < 1 || ENTRY.length > 30) {
  throw new Error(
    `Entry word must be 1-30 characters, got ${ENTRY.length}: ${JSON.stringify(ENTRY)}`,
  );
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_FILE, ENTRY, "utf8");

const readBack = readFileSync(OUTPUT_FILE, "utf8");
if (readBack !== ENTRY) {
  throw new Error(
    `Read-back verification failed: expected ${JSON.stringify(ENTRY)}, got ${JSON.stringify(readBack)}`,
  );
}

console.log(`Wrote entry ${JSON.stringify(ENTRY)} (${ENTRY.length} characters) to ${OUTPUT_FILE}`);
