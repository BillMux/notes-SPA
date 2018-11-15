(function(exports) {
  function Expect(subject) {
    this.subject = subject;
  };

  Expect.prototype.toEqual = function(expectation) {
    if (this.subject !== expectation) {
      throw new Error(`FAIL: ${this.subject} does not equal "${expectation}"!`);
    };
  };

  Expect.prototype.toHaveContent = function(expectation) {
    if (!this.subject.includes(expectation)) {
      throw new Error(`FAIL: "${expectation}" not found in ${this.subject}!`);
    };
  };

  Expect.prototype.notToHaveContent = function(expectation) {
    if (this.subject.includes(expectation)) {
      throw new Error(`FAIL: "${expectation}" found in ${this.subject}!`);
    };
  };

  function describe(description, funk) {
    console.log(description);
    funk();
  };

  function it(message, funk) {
    describe(' ' + message, funk)
  };

  exports.Expect = Expect;
  exports.describe = describe;
  exports.it = it;
})(this);
