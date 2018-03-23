import _ from 'lodash';
const DOMNodeCollection = require('./dom_node_collection');

document.addEventListener("DOMContentLoaded", function(event) {
  // alert("The document is ready");
  Window.prototype.$l = function(selector) {
    if(typeof selector === 'string') {
      return new DOMNodeCollection(Array.from(document.querySelectorAll(selector)));
    } else if (selector instanceof NodeList) {
      return new DOMNodeCollection(Array.from(selector));
    }
  };

  Window.prototype.$l.extendMe = function(mainObj, ...otherObjs) {
    for(let i = 0; i < otherObjs.length; i++) {
      for(let key in otherObjs[i]) {
        mainObj[key] = otherObjs[i][key];
      }
    }
    return mainObj;
  };

  Window.prototype.$l.ajax = function(option) {

  };

  let uls = window.$l('ul');
  let myLis = document.querySelectorAll('li');
  let lis = window.$l(myLis);

  function alerted() {
    alert("CLICKED");
  }

  lis.on("click", alerted);
  // lis.off("click");

  const objA = {a: 'a', b: 'a', c: 'a'};
  const objB = {b: 'b', c: 'b'};
  const objC = {c: 'c'};
  console.log(window.$l.extendMe(objA, objB, objC));
});
