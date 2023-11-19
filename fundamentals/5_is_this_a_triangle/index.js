const { assert } = require("chai")

function isTriangle(a,b,c)
{
  if (a + b > c && a + c > b && b + c > a) {
    return true;
  }
  return false;
}


describe("Public tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(isTriangle(1,2,2), true);
    assert.strictEqual(isTriangle(7,2,2), false);
  });
})