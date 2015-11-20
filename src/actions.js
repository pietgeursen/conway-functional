const SET = 'SET'
const STEP = 'STEP'

var actions = {
  set: function (location) {
    return {
      type: SET,
      location
    }
  },
  step: function () {
    return {
      type: STEP
    }
  }
}

module.exports = actions
