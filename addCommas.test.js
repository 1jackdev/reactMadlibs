const addCommas = require("./addCommas");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });

test('should handle minus sign', () => {
  const result = addCommas(-332)
  expect(result[0]).toEqual("-")
})

test('should add commas when length > 3', () => {
  const result = addCommas(1245)
  expect(result).toContain(",")
});


});
