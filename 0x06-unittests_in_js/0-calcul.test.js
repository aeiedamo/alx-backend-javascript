// tests/0-calcul.test.js
const assert = require("assert");
const calculateNumber = require("../0x06-unittests_in_js/0-calcul");

describe("calculateNumber", () => {
  it("should return the sum of two numbers", () => {
    assert.strictEqual(calculateNumber(1, 4), 5);
    assert.strictEqual(calculateNumber(1.2, 3.7), 4.9);
    assert.strictEqual(calculateNumber(2.5, 2.5), 5);
  });

  it("should handle negative numbers correctly", () => {
    assert.strictEqual(calculateNumber(-1, -4), -5);
    assert.strictEqual(calculateNumber(-1.2, -3.7), -4.9);
    assert.strictEqual(calculateNumber(-2.5, -2.5), -5);
  });

  it("should handle mixed positive and negative numbers", () => {
    assert.strictEqual(calculateNumber(1, -4), -3);
    assert.strictEqual(calculateNumber(-1.2, 3.7), 2.5);
    assert.strictEqual(calculateNumber(2.5, -2.5), 0);
  });

  it("should handle zero correctly", () => {
    assert.strictEqual(calculateNumber(0, 0), 0);
    assert.strictEqual(calculateNumber(0, 4.5), 4.5);
    assert.strictEqual(calculateNumber(2.5, 0), 2.5);
  });
});

