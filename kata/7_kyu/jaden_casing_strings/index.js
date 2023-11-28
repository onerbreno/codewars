const Test = require('@codewars/test-compat');

String.prototype.toJadenCase = function () {
  // return this.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(" ")

  return this.replace(/(^|\s)[a-z]/g, function(x){ return x.toUpperCase(); });
};

describe("Tests", () => {
  it("test", () => {
var str = "How can mirrors be real if our eyes aren't real";
Test.assertEquals(str.toJadenCase(), "How Can Mirrors Be Real If Our Eyes Aren't Real");

  });
});
