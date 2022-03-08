type Operand = number;
type Operator = "+" | "-" | "*" | "÷";

export class TreeNode {
  left: TreeNode | null = null;
  right: TreeNode | null = null;

  constructor(public value: Operand | Operator) {}

  result() {
    return evaluateTree(this);
  }
  toString() {
    return stringify(this);
  }
  isOperandNode() {
    return typeof this.value === "number";
  }
}

function evaluateTree(root: TreeNode | null): number {
  if (root === null) return 0;

  if (root.left === null && root.right === null) {
    if (root.isOperandNode()) {
      return root.value as number;
    }
    throw new Error("Impossible to evaluate a TreeNode holding an operator.");
  }

  const leftResult = evaluateTree(root.left);
  const rightResult = evaluateTree(root.right);

  if (root.value === "+") return leftResult + rightResult;
  if (root.value === "-") return leftResult - rightResult;
  if (root.value === "*") return leftResult * rightResult;
  if (root.value === "÷") return leftResult / rightResult;

  return 0;
}

function stringify(node: TreeNode | null): string {
  if (node === null) return "";

  if (node.left === null && node.right === null) return `${node.value}`;

  const leftResult: string = stringify(node.left);
  const rightResult: string = stringify(node.right);

  if (node.value === "+") return `(${leftResult} + ${rightResult})`;
  if (node.value === "-") return `(${leftResult} - ${rightResult})`;
  if (node.value === "÷") return `(${leftResult} ÷ ${rightResult})`;
  if (node.value === "*") return `(${leftResult} x ${rightResult})`;

  return "";
}
