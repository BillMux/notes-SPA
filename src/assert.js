(function(exports) {
  function Expect(subject) {
    this.subject = subject;
  };

  Expect.prototype.toEqual = function(expectation) {
    if (this.subject !== expectation) {
      throw new Error(`❌FAIL: "${this.subject}" does not equal "${expectation}"!`,);
    } else {
      console.log(`✅%cHOORAY! "${this.subject}" is equal to "${expectation}", test passed!`, 'color: green');
    };
  };

  Expect.prototype.toHaveContent = function(expectation) {
    if (!this.subject.includes(expectation)) {
      throw new Error(`FAIL: "${expectation}" not found in "${this.subject}"!`);
    } else {
      console.log(`%cHOORAY! "${this.subject}" has content: "${expectation}", test passed!`, 'color: green')
    };
  };

  Expect.prototype.notToHaveContent = function(expectation) {
    if (this.subject.includes(expectation)) {
      throw new Error(`FAIL: "${expectation}" found in "${this.subject}"!`);
    } else {
      console.log(`%cHOORAY! "${this.subject}" does not have content: "${expectation}", test passed!`, 'color: green')
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
