it("should find the most popular", function() {
  expect(mostFrequentLetter("abbaaac")).toEqual("a");
  expect(mostFrequentLetter("vroom")).toEqual("o");
});

it("should handle ties correctly", function() {
  expect(mostFrequentLetter("cabba")).toEqual("b");
  expect(mostFrequentLetter("caabb")).toEqual("a");
});
