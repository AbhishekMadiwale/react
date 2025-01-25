import {sum} from "../sum";

test("sum function will give us addition of 2 numbers", () => {
  const result = sum(3, 4);

// Below line is Assertion
  expect(result).toBe(7);
});
