const customMatchers = {
  toBeCalculator: function() {
    return {
      compare: function(actual) {
        const result = {
          pass: actual instanceof Calculator,
          message: ''
        }

        if (result.pass) {
          // TODO
          result.message = 'Expectd' + actual + " not to be instance of Calculator";
        } else {
          result.message = 'Expectd' + actual + " to be instance of Calculator";
        }

        return result;
      }
    }
  }
}