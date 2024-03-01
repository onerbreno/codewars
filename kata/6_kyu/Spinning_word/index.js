function spinWords(string) {
  const words = string.split(" ");

  const invertedWords = words.map((word) => {
    if (word.length >= 5) {
      return word.split("").reverse().join("");
    }
    return word;
  });

  return invertedWords.join(" ");
}

const Test = require("@codewars/test-compat");

describe("Spinning words", () => {
  it("Sample tests", () => {
    assert.strictEqual(spinWords("Welcome"), "emocleW");
    assert.strictEqual(spinWords("Hey fellow warriors"), "Hey wollef sroirraw");
    assert.strictEqual(spinWords("This is a test"), "This is a test");
    assert.strictEqual(
      spinWords("This is another test"),
      "This is rehtona test"
    );
    assert.strictEqual(
      spinWords("You are almost to the last test"),
      "You are tsomla to the last test"
    );
    assert.strictEqual(
      spinWords("Just kidding there is still one more"),
      "Just gniddik ereht is llits one more"
    );
    assert.strictEqual(
      spinWords("Seriously this is the last one"),
      "ylsuoireS this is the last one"
    );
  });
});
