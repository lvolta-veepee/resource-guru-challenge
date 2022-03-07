type NestedArray<T> = Array<T> | Array<NestedArray<T>>;

export const flatten = (array: NestedArray<any> | IArguments): Array<any> => {
  return Array.from(array).reduce(
    (accumulator: NestedArray<any>, element: any) => {
      if (Array.isArray(element)) {
        return accumulator.concat(flatten(element));
      } else {
        return [...accumulator, element];
      }
    },
    []
  );
};
