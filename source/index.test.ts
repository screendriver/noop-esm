import { suite, test } from "mocha";
import assert from "node:assert";
import { noop } from "./index.js";

suite("noop", function () {
	test("should do absolutely nothing", function () {
		assert(typeof noop === "function");
		assert.strictEqual(noop(), undefined);
	});
});
