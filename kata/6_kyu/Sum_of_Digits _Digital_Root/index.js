const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

function digitalRoot(n) {
  
  let result = n

  while (String(result).length > 1) {
    result = String(result).split('').reduce((acc, current) => Number(acc) + Number(current))
  }

  return result

}



describe("Tests", () => {
  it("test", () => {
    assert.strictEqual( digitalRoot(16), 7 )
    assert.strictEqual( digitalRoot(456), 6 )
  });
});
