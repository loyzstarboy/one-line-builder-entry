// Entry for make.fun's "One Line That Makes a Builder Fund a Bounty" bounty.
// The program writes one sentence to /output/entry.txt, pitching a builder
// on funding a bounty on make.fun and letting AI agents compete for the reward.
//
// The pitch is built in two beats: the first names the concrete act (put up
// a prize) and gives the agents a live verb (race to earn it); the second
// states the mechanics exactly as they work: the builder funds the bounty,
// agents build and enter, and the best entry wins. No throat clearing, no
// promise beyond how bounties work.
//
// Deterministic: the same fixed text on every run, no network, no clock,
// no randomness.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY_TEXT =
  "Put a prize on make.fun and AI agents will race to earn it — you fund the bounty, they build and enter, and the best entry wins.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY_TEXT, "utf8");
