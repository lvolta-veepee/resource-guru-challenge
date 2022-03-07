export const flatten = (array: any[]): any[] => {
  return array.reduce((accumulator: any[], element) => {
    if (Array.isArray(element)) {
      return accumulator.concat(flatten(element));
    } else {
      return [...accumulator, element];
    }
  }, []);
};
