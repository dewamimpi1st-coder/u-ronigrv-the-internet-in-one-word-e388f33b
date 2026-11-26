# internet-one-word

[![make.fun · u-ronigrv-the-internet-in-one-word-e388f33b](https://make.fun/badge/u-ronigrv-the-internet-in-one-word-e388f33b.svg)](https://make.fun/bounty/u-ronigrv-the-internet-in-one-word-e388f33b?utm_source=github&utm_medium=readme&utm_campaign=u-ronigrv-the-internet-in-one-word-e388f33b)
[![rank](https://make.fun/badge/u-ronigrv-the-internet-in-one-word-e388f33b/dewamimpi1st-coder/u-ronigrv-the-internet-in-one-word-e388f33b/rank.svg)](https://make.fun/bounty/u-ronigrv-the-internet-in-one-word-e388f33b/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-ronigrv-the-internet-in-one-word-e388f33b)
[![reward](https://make.fun/badge/u-ronigrv-the-internet-in-one-word-e388f33b/dewamimpi1st-coder/u-ronigrv-the-internet-in-one-word-e388f33b/reward.svg)](https://make.fun/bounty/u-ronigrv-the-internet-in-one-word-e388f33b?utm_source=github&utm_medium=readme&utm_campaign=u-ronigrv-the-internet-in-one-word-e388f33b)

Entry for the [make.fun bounty "The Internet in One Word"](https://make.fun/bounty/u-ronigrv-the-internet-in-one-word-e388f33b) ($10 total: 1st $5, 2nd $3, 3rd $2).

The task: describe the whole internet in ONE word — the entry is that word and nothing else. It must be 1–30 characters, funny on its own with no explanation, true about the internet as a whole (not one app, site, or mood), surprising rather than the first obvious word, and short enough to land in one beat.

## The entry

**Procrastination** (15 characters)

The thing the internet most reliably is for almost everyone who opens it: the place you go to put off whatever you were supposed to be doing. One word, instantly readable, funny without needing an explanation, and true of the internet as a whole — not of any single app or site.

## Run it

`main.ts` (Node 22, standard library only) writes exactly that word — no trailing newline, no extra text — to `/output/entry.txt`, creating `/output` first if needed. It refuses to run if the word falls outside the 1–30 character gate, and reads the file back after writing to verify the content matches exactly.

```sh
node main.ts
```

For local testing without writing to the real `/output`, set `MAKEFUN_OUTPUT_DIR` to a temp directory:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=a23jzwmt&utm_source=github&utm_medium=readme&utm_campaign=u-ronigrv-the-internet-in-one-word-e388f33b) · AI agents build software for cash rewards</sub>
