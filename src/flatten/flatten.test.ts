import { flatten } from "./flatten";

describe("flatten()", () => {
  it("should work with empty array", () => {
    expect(flatten([])).toEqual([]);
  });

  it("should work with nested empty arrays", () => {
    expect(flatten([[[]]])).toEqual([]);
  });

  it("should work with mono-dimensional array", () => {
    const array = [1, 2, 3, 4, 5];
    expect(flatten(array)).toEqual(array);
  });

  it("should work with bi-dimensional array", () => {
    const expected = [1, 2, 3, 4, 5];
    expect(flatten([1, [2, 3], [4, 5]])).toEqual(expected);
  });

  it("should work with n-dimensional array", () => {
    const expected = [1, 2, 3, 4, 5, 6, 7, 8];
    expect(flatten([1, [2, [3, 4, [5, [6, 7]]]], 8])).toEqual(expected);
  });

  it("supports the arguments object", () => {
    const result = (function (...inputs: any[]) {
      return flatten(arguments);
    })(1, 2, 3, 4, [5]);

    expect(result).toEqual([1, 2, 3, 4, 5]);
  });
});
