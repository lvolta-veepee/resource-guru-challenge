import { TreeNode } from "./tree";

describe.only("Tree", () => {
  describe("TreeNode", () => {
    it("should be able to hold left and right nodes", () => {
      const left = new TreeNode(3);
      const right = new TreeNode(5);
      const root = new TreeNode("-");

      root.left = left;
      root.right = right;

      expect(root.left).toEqual(left);
      expect(root.right).toEqual(right);
    });
  });

  describe("TreeNode.result()", () => {
    it("should be able to compute a single (+) operation", () => {
      const fivePlusThree = new TreeNode("+");
      fivePlusThree.left = new TreeNode(5);
      fivePlusThree.right = new TreeNode(3);
      expect(fivePlusThree.result()).toBe(8);
    });

    it("should be able to compute a single (-) operation", () => {
      const fiveMinusThree = new TreeNode("-");
      fiveMinusThree.left = new TreeNode(5);
      fiveMinusThree.right = new TreeNode(3);
      expect(fiveMinusThree.result()).toBe(2);
    });

    it("should be able to compute a single (*) operation", () => {
      const fiveTimesThree = new TreeNode("*");
      fiveTimesThree.left = new TreeNode(5);
      fiveTimesThree.right = new TreeNode(3);
      expect(fiveTimesThree.result()).toBe(15);
    });

    it("should be able to compute a single (÷) operation", () => {
      const nineDividedByThree = new TreeNode("÷");
      nineDividedByThree.left = new TreeNode(9);
      nineDividedByThree.right = new TreeNode(3);
      expect(nineDividedByThree.result()).toBe(3);
    });

    it("should be able to compute multiple operations", () => {
      const threeMinusTwo = new TreeNode("-");
      threeMinusTwo.left = new TreeNode(3);
      threeMinusTwo.right = new TreeNode(2);

      const oneTimesFive = new TreeNode("*");
      oneTimesFive.left = threeMinusTwo;
      oneTimesFive.right = new TreeNode(5);

      const sevenPlusFive = new TreeNode("+");
      sevenPlusFive.left = new TreeNode(7);
      sevenPlusFive.right = oneTimesFive;

      const twelveDividedBySix = new TreeNode("÷");
      twelveDividedBySix.left = sevenPlusFive;
      twelveDividedBySix.right = new TreeNode(6);
      expect(twelveDividedBySix.result()).toBe(2);
    });
  });

  describe.skip("TreeNode.toString()", () => {
    it("should be able stringify a simple (+) operation", () => {
      const fivePlusThree = new TreeNode("+");
      fivePlusThree.left = new TreeNode(5);
      fivePlusThree.right = new TreeNode(3);
      expect(fivePlusThree.toString()).toBe("(5 + 3)");
    });

    it("should be able stringify a simple (-) operation", () => {
      const fiveMinusThree = new TreeNode("-");
      fiveMinusThree.left = new TreeNode(5);
      fiveMinusThree.right = new TreeNode(3);
      expect(fiveMinusThree.toString()).toBe("(5 - 3)");
    });

    it("should be able stringify a simple (*) operation", () => {
      const fiveTimesThree = new TreeNode("-");
      fiveTimesThree.left = new TreeNode(5);
      fiveTimesThree.right = new TreeNode(3);
      expect(fiveTimesThree.toString()).toBe("(5 * 3)");
    });

    it("should be able to stringify a single (÷) operation", () => {
      const nineDividedByThree = new TreeNode("÷");
      nineDividedByThree.left = new TreeNode(9);
      nineDividedByThree.right = new TreeNode(3);
      expect(nineDividedByThree.result()).toBe("(9 ÷ 3)");
    });
  });
});
