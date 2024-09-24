import { suite, test } from "mocha";
import assert from "node:assert";
import { noop, asyncNoop } from "./index.js";

suite("noop", function () {
	test("should do absolutely nothing", function () {
		assert(typeof noop === "function");
		assert.strictEqual(noop(), undefined);
	});
});

suite("asyncNoop", function () {
	test("should do absolutely nothing", async function () {
		assert(typeof asyncNoop === "function");
		assert.strictEqual(await asyncNoop(), undefined);
	});
});
