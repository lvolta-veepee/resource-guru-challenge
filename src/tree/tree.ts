type Operand = number;
type Operator = "+" | "-" | "*" | "÷";

export class TreeNode {
  left: TreeNode | null = null;
  right: TreeNode | null = null;

  constructor(public value: Operand | Operator) {}

  result() {
    return evaluateTree(this);
  }
  toString() {}
}

export function evaluateTree(root: TreeNode | null): number {
  if (root === null) return 0;

  if (root.left === null && root.right === null) {
    return root.value as number; // safe type casting as TreeNode is a leaf node holding a number
  }

  const leftResult = evaluateTree(root.left);
  const rightResult = evaluateTree(root.right);

  if (root.value === "+") return leftResult + rightResult;
  if (root.value === "-") return leftResult - rightResult;
  if (root.value === "*") return leftResult * rightResult;
  if (root.value === "÷") return leftResult / rightResult;

  return 0;
}
