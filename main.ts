import { mkdirSync, writeFileSync, chmodSync } from "node:fs";

// One short text, written to slow the reader down: a dusk tide,
// starlight older than any road, and time enough for both.
const text =
  "The tide comes in at dusk and smooths the sand, and somewhere far above, starlight that left its home before there were roads is only now arriving. Nothing here is in a hurry. The sea has all night, and the stars have longer still.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
chmodSync("/output/entry.txt", 0o644);
