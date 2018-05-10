import _ from 'lodash';
document.getElementById('input').onkeyup = _.debounce(function() {
  document.getElementById('debounced').innerHTML = 'Debounced message!';
}, 500);
