// 0x06-unittests_in_js/2-calcul_chai.test.js
import { expect } from "chai";
import calculateNumber from "./2-calcul_chai.js";

describe("calculateNumber", () => {
  describe("SUM", () => {
    it("should return the sum of two rounded numbers", () => {
      expect(calculateNumber("SUM", 1.4, 4.5)).to.equal(6);
      expect(calculateNumber("SUM", 1.2, 3.7)).to.equal(5);
      expect(calculateNumber("SUM", 2.5, 2.5)).to.equal(6);
    });
  });

  describe("SUBTRACT", () => {
    it("should return the difference of two rounded numbers", () => {
      expect(calculateNumber("SUBTRACT", 1.4, 4.5)).to.equal(-4);
      expect(calculateNumber("SUBTRACT", 1.2, 3.7)).to.equal(-3);
      expect(calculateNumber("SUBTRACT", 2.5, 2.5)).to.equal(0);
    });
  });

  describe("DIVIDE", () => {
    it("should return the division of two rounded numbers", () => {
      expect(calculateNumber("DIVIDE", 1.4, 4.5)).to.equal(0.2);
      expect(calculateNumber("DIVIDE", 2.5, 2.5)).to.equal(1);
    });

    it('should return "Error" when dividing by zero', () => {
      expect(calculateNumber("DIVIDE", 1.4, 0)).to.equal("Error");
      expect(calculateNumber("DIVIDE", 1.4, 0.4)).to.equal("Error");
    });
  });

  describe("Invalid type", () => {
    it("should throw an error for invalid type", () => {
      expect(() => calculateNumber("INVALID", 1.4, 4.5)).to.throw(
        "Invalid type"
      );
    });
  });
});

