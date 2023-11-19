const Test = require('@codewars/test-compat');

function divisors(integer) {

  let divisors = [];

  for (let i = 2; i < integer; i++) {
    if (integer % i === 0) {
      divisors.push(i);
    }
  }

  if (divisors.length === 0) {
    return `${integer} is prime`;
  }


  return divisors
};

describe("Tests", () => {
  it("test", () => {
Test.assertDeepEquals(divisors(15), [3, 5]);
Test.assertDeepEquals(divisors(12), [2, 3, 4, 6]);
Test.assertDeepEquals(divisors(13), "13 is prime");
  });
});
