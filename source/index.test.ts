import test from "node:test";
import assert from "node:assert";
import { noop, asyncNoop } from "./index.ts";

test("noop should do absolutely nothing", function () {
	assert(typeof noop === "function");
	assert.strictEqual(noop(), undefined);
});

test("asyncNoop should do absolutely nothing", async function () {
	assert(typeof asyncNoop === "function");
	assert.strictEqual(await asyncNoop(), undefined);
});
