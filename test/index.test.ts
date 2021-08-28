const duplicateCharCountTest = require("../src/index");

test("truthy test", () => {
  expect(duplicateCharCountTest("hello world")).toBeTruthy();
});

test("empty string test", () => {
  expect(duplicateCharCountTest()).toBeUndefined();
});

test("string containing duplicate characters", () => {
  expect(duplicateCharCountTest("hello world")).toEqual({ l: 3, o: 2 });
});

test("string that doesn't contain duplicate characters", () => {
  expect(duplicateCharCountTest("string")).toEqual({});
});

test("calling function with number", () => {
  expect(duplicateCharCountTest(7898797)).toEqual({});
});

test("calling function with string with special characters", () => {
  expect(duplicateCharCountTest("abc&pqr&")).toEqual({ "&": 2 });
});
