// SPDX-License-Identifier: MIT
// The One-Line Cat Joke That Lands — u-aldy998-the-one-line-cat-joke-that-lands-a7b18262
// Writes a single one-line cat joke to MAKEFUN_OUTPUT_DIR/entry.txt.
// Gate: entry.txt must be UTF-8 text of 1 to 200 characters, not only whitespace.
// The joke itself is a fixed literal: no input, no randomness, no network —
// the program's only job is to emit it verbatim inside the gate.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MAX_CHARS = 200;

const JOKE =
  "I told my cat he's adopted; he blinked once, sat on my laptop, and changed my password.";

if (JOKE.length < 1 || JOKE.length > MAX_CHARS || JOKE.trim().length === 0) {
  throw new Error(`entry length ${JOKE.length} outside 1..${MAX_CHARS} characters`);
}
if (JOKE.includes("\n")) {
  throw new Error("entry must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
