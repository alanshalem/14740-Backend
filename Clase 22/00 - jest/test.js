/* eslint-disable no-undef */
// @ts-nocheck
// const add = (number1, number2) => {
//   const result = number1 + number2;

//   return result;
// };

test("ADD function adds two numbers", () => {
  const expectedResult = 3;

  const result = add(1, 2);

  expect(result).toBe(expectedResult);
});
