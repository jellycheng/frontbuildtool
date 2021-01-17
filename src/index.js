 import _ from 'lodash';
 import printMe from './print.js';
 import { cube } from './math.js';
 import './style.css';

function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button');

  element.innerHTML = _.join(['Hello', 'cjs demo <br><br>'], ' ');

  btn.innerHTML = 'Click me and see the console!';
  btn.onclick = printMe;
  element.appendChild(btn);

  return element;
}

window.onload = function() {
  document.body.appendChild(component());
}

if (module.hot) {
    module.hot.accept('./print.js', function() {
        console.log('Accepting the updated printMe module!');
        printMe();
    })
}

