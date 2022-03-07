type Operand = number;
type Operator = "+" | "-" | "*" | "÷";

export class TreeNode {
  left: TreeNode | null = null;
  right: TreeNode | null = null;

  constructor(public value: Operand | Operator) {}

  result() {}
  toString() {}
}
