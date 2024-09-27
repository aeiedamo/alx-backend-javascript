// 0x06-unittests_in_js/tests/0-calcul.test.js
const assert = require("assert");
const calculateNumber = require("./0-calcul");

describe("calculateNumber", () => {
  it("should return the sum of two rounded numbers", () => {
    assert.strictEqual(calculateNumber(1.4, 4.5), 6);
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    assert.strictEqual(calculateNumber(2.5, 2.5), 6);
  });

  it("should handle zero correctly", () => {
    assert.strictEqual(calculateNumber(0, 0), 0);
    assert.strictEqual(calculateNumber(0, 4.5), 5);
    assert.strictEqual(calculateNumber(2.5, 0), 3);
  });
});
