require("./helpers.js");

const { checkAge } = require("../index.js");
describe("index.js", function () {
  describe("checkAge()", function () {
    it("allows entry if age is 18 or above", function () {
      expect(checkAge(20)).to.equal("Access granted.");
    });

    it("denies entry if age is below 18", function () {
      expect(checkAge(16)).to.equal("Access denied.");
    });
  });
});
